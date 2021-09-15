This is a fake package containing a subset of the icons from `@fluentui/react-icons` but with all the variants of each icon combined into a single file.

Note that the `"sideEffects": false` setting in `package.json` is ESSENTIAL to tell webpack that any imports/exports from this package which aren't directly used can be removed (tree-shaken) from the final bundle. Otherwise it would always bundle all the icons.
