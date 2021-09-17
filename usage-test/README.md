Tests usage of icon typings and file structure in scenarios closer to actual usage.

## Verify type rollup files

`yarn build` runs typescript and verifies that the generated type rollup files (from `generateRollup.js`) for the fake local version of `@fluentui/react-icons` work properly, including for deep imports.

_(note, "rollup" above is being used as a general term, not referring to the bundler called Rollup)_

## Bundling tests

`yarn bundle` demos different bundlers (Webpack and Rollup) and settings. Output of these is under `dist`.

### One icon per file

`dist/<bundler>-individual.js` (and `.min.js`) is generated from `src/index.ts`, which references the fake `@fluentui/react-icons` that has a separate file for every icon. In this case, _ONLY the icons referenced are included._

### Multiple icons per file

`dist/<bundler>-combined.js` (and `min.js`) is generated from `src/combined.ts`, which references the fake `@fluentui/react-icons-combined` that has all variants of each icon exported from a single file.

In this version, _(initially) all exports from the referenced icon file were included_ even though only two exports are used.

After more investigation and making some isolated test cases in `src/treeShakingDemo.tsx` (which are also included in the `-combined` bundles), it turns out the problem is that `wrapIcon()` is being called as a side effect in the export, which means that the bundlers/minifier won't drop it.

Workaround is to add `/*#__PURE__*/` before the two function calls in each icon export. This is a [Terser feature](https://terser.org/docs/api-reference.html#annotations) for marking a function call as side effect-free, and is [explained in more detail here](https://webpack.js.org/guides/tree-shaking/#mark-a-function-call-as-side-effect-free) (this link is to webpack docs but applies to anything using Terser).

**After adding `/*#__PURE__*/` annotations, unused icons are removed as expected.**
