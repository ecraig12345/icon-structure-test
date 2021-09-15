import * as React from 'react';

const wrapIcon = (icon: JSX.Element, displayName?: string) => {
  const Component: React.FC<
    React.HTMLAttributes<HTMLSpanElement> & {
      primaryFill?: string;
      className?: string;
    }
  > = ({ primaryFill = 'currentColor', ...props }) => {
    return (
      <span {...props} className="root-span">
        {React.cloneElement(icon, { className: 'svg', fill: primaryFill })}
      </span>
    );
  };
  Component.displayName = displayName;
  return Component;
};

// these are referenced in ./combined.ts and obviously should be in the output
export const importantThing = 'this is used and WILL be in the minified output';
export const importantFunc = () => console.log('this is also used and WILL be in the minified output');

// these are NOT referenced in ./combined.ts, so rollup always drops them,
// and webpack drops them in production (minified) mode
export const thingThatIsNotUsed = 'this is not used and will NOT be in the minified output';
export const funcThatIsNotUsed = () => console.log('this is also not used and will NOT be in the minified output');

// these are NOT referenced in ./combined.ts but will be included even in the minified output due to side effects
const doStuff = (stuff: string) => console.log(stuff);
export const itsATrap = doStuff('this WILL be in the minified output due to possible side effect');
export const itsABigTrap = wrapIcon(<svg></svg>, 'Fake icon side effect which WILL BE BUNDLED');
