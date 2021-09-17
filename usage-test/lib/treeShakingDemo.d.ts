import * as React from 'react';
export declare const importantThing = "this is used and WILL be in the minified output";
export declare const importantFunc: () => void;
export declare const thingThatIsNotUsed = "this is not used and will NOT be in the minified output";
export declare const funcThatIsNotUsed: () => void;
export declare const itsATrap: void;
export declare const itsABigTrap: React.FC<React.HTMLAttributes<HTMLSpanElement> & {
    primaryFill?: string | undefined;
    className?: string | undefined;
}>;
export declare const notATrap: React.FC<React.HTMLAttributes<HTMLSpanElement> & {
    primaryFill?: string | undefined;
    className?: string | undefined;
}>;
