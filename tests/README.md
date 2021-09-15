Experimenting with a bunch of module structures to see if they make much difference in final output size. The samples use a small subset of the icon files to run faster.

Size data is output to `sizes.txt`. Differences appear minimal. Major limitation is it only checks raw sizes not gzip. (Note that sample 9 appears smaller because it doesn't have the full subset of icons.)

TS files are under `samples` and output is under `lib`.

As of 9/14/21 sample 3 is closest to the real package structure.

| Sample                               | Icon location     | Icon file export type            | Index export type                         |
| ------------------------------------ | ----------------- | -------------------------------- | ----------------------------------------- |
| `1-components-named-star`            | `src/components/` | named const                      | `export * from ...`                       |
| `2-components-named-name`            | `src/components/` | named const                      | `export { IconName } from ...`            |
| `3-components-default-named-current` | `src/components/` | default const (internally named) | `export { default as IconName } from ...` |
| `4-components-default-const`         | `src/components/` | default const                    | `export { default as IconName } from ...` |
| `5-root-named-star`                  | `src/`            | named const                      | `export * from ...`                       |
| `6-root-named-name`                  | `src/`            | named const                      | `export { IconName } from ...`            |
| `7-root-default-named`               | `src/`            | default const (internally named) | `export { default as IconName } from ...` |
| `8-root-default-const`               | `src/`            | default const                    | `export { default as IconName } from ...` |
| `9-components-combined`              | `src/components/` | multiple named consts            | `export * from ...`                       |
