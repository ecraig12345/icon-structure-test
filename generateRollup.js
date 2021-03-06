// @ts-check
const path = require('path');
// https://github.com/jprichardson/node-fs-extra/blob/master/docs
const fs = require('fs-extra');
// https://www.npmjs.com/package/glob
const glob = require('glob');

// NOTE: esm comes first to increase chances of it being suggested first in auto-imports
const outTypes = ['esm', 'cjs'];

makePackageAndRollup('react-icons', '3-components-default-named-current');
makePackageAndRollup('react-icons-combined', '9-components-combined');

function makePackageAndRollup(packageName, sampleToCopy) {
  const outDir = path.join(__dirname, packageName, 'lib');

  // copy test output to fake react-icons package
  // (skip this step in real version since output will already be present)
  fs.rmdirSync(outDir, { recursive: true });
  for (const outType of outTypes) {
    fs.copySync(path.join(__dirname, `tests/lib/${outType}/${sampleToCopy}`), path.join(outDir, outType));
  }

  const rootInPackage = `@fluentui/${packageName}/lib`;
  // make a top-level module declaration
  const modules = [
    `declare module '@fluentui/${packageName}' {
    export * from '${rootInPackage}/esm/index';
  }`,
  ];

  // make a module declaration for each .d.ts file (and delete the original)
  for (const outType of outTypes) {
    // This gives a list of relative paths like 'esm/components/Accessibility16Filled.d.ts'
    const files = glob.sync(`${outType}/**/*.d.ts`, { cwd: outDir });
    console.log(files);

    files.forEach((dtsPath) => {
      const fullPath = path.join(outDir, dtsPath);
      let dtsContents = fs.readFileSync(fullPath, 'utf8').replace(/\r\n/g, '\n');
      fs.removeSync(fullPath); // delete original

      // 'esm/components/Accessibility16Filled' or 'esm/lib/index'
      const modulePath = path.posix.normalize(dtsPath).replace('.d.ts', '');
      const pathParts = modulePath.split('/');
      // no relative paths are allowed within module declarations in .d.ts, so make them absolute
      // (this could in theory be done more generically with path utilities)
      dtsContents = dtsContents
        // replace ../ with absolute path (assuming there can only be one ../ segment per path)
        .replace(/(?<=['"])\.\.\//g, `${rootInPackage}/${outType}/`)
        // replace ./ with absolute path (same assumption)
        .replace(/(?<=['"'])\.\//g, `${rootInPackage}/${pathParts.slice(0, -1).join('/')}/`)
        // remove "declare"
        .replace(/\bdeclare /gm, '');

      modules.push(`declare module '${rootInPackage}/${modulePath}' {\n${dtsContents}}`);
    });
  }

  fs.writeFileSync(path.join(outDir, 'index.d.ts'), modules.join('\n'));
}
