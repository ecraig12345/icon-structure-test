Experiments related to `@fluentui/react-icons`. Build output is checked in to the repo for easier viewing.

To update the full set of scenarios this repo demos, run `yarn` then `yarn test`.

## Folders

### `react-icons/`

Fake version of react-icons. `generateRollup.js` (run and validate with `yarn test`) generates the rollup file with paths and builds the test package `usage-test` to ensure it works.

### `react-icons-combined/`

As above but with multiple icons combined in a single file.

### `usage-test/`

Imports from the fake version of `@fluentui/react-icons` (and `@fluentui/react-icons-combined`) to see if the typing rollup files worked properly.

Also has demos of webpack and rollup output for different scenarios under `dist`. To update only these demos use `yarn bundle`.

### `tests/`

Experimenting with a bunch of module structures to see if they make much difference in final output size (limitation: currently only checking raw sizes not gzip)
