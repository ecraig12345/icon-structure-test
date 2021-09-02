Experiments related to `@fluentui/react-icons`.

The most interesting thing right now is `yarn test` to generate a rollup file under `react-icons/lib/index.d.ts`.

## `react-icons/`

Fake version of react-icons. `generateRollup.js` (run and validate with `yarn test`) generates the rollup file with paths and builds the test package `import-test` to ensure it works.

## `import-test/`

Imports from the fake version of react-icons to see if it works.

## `tests/`

Experimenting with a bunch of module structures to see if they make much difference in final output size (limitation: currently only checking raw sizes not gzip)
