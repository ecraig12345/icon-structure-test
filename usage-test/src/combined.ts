// with the way the paths are declared, this must be referenced once for the paths to work
/// <reference types="@fluentui/react-icons-combined" />
import { Alert24Regular } from '@fluentui/react-icons-combined/lib/esm/components/Alert';
import { importantThing, importantFunc } from './treeShakingDemo';

console.log(Alert24Regular);
console.log(importantThing);
console.log(importantFunc());
