Tests usage of icon typings and file structure in scenarios closer to actual usage.

## Verify type rollup files

`yarn build` runs typescript and verifies that the generated type rollup files (from `generateRollup.js`) for the fake local version of `@fluentui/react-icons` work properly, including for deep imports.

_(note, "rollup" above is being used as a general term, not referring to the bundler called Rollup)_

## Bundling tests

`yarn bundle` demos different bundlers and settings. Output of these is under `dist`.

`dist/<bundler>-individual.js` (and `.min.js`) is generated from `src/index.ts`, which references the fake `@fluentui/react-icons` that has a separate file for every icon. In this case, **ONLY the icons referenced are included.**

`dist/<bundler>-combined.js` (and `min.js`) is generated from `src/combined.ts`, which references the fake `@fluentui/react-icons-combined` that has all variants of each icon exported from a single file. In this version, at least with the default minimizer options, **all exports from the referenced icon file are included** even though only two exports are used.

After more investigation and making some isolated test cases in `src/treeShakingDemo.tsx` (which are also included in the `-combined` bundles), I think the problem is that `wrapIcon()` is being called as a side effect in the export, which means that the bundlers/minifier won't drop it.
