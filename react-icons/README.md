This is a fake package mirroring the current structure of `@fluentui/react-icons` (as of 9/14/21) but with fewer files for faster testing.

Note that the `"sideEffects": false` setting in `package.json` is ESSENTIAL to tell webpack that any imports/exports from this package which aren't directly used can be removed (tree-shaken) from the final bundle. Otherwise it would always bundle all the icons.
