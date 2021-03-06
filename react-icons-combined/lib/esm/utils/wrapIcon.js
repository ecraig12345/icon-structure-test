import { __rest } from "tslib";
import * as React from 'react';
import { css } from './css';
const wrapIcon = (icon, displayName) => {
    const Component = (_a) => {
        var { primaryFill = 'currentColor' } = _a, props = __rest(_a, ["primaryFill"]);
        const { className } = props;
        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
            ? {
                role: 'img',
            }
            : {
                ['aria-hidden']: true,
            };
        return (React.createElement("span", Object.assign({}, props, containerProps, { className: css('root-span', className) }), React.cloneElement(icon, {
            className: 'svg',
            fill: primaryFill,
        })));
    };
    Component.displayName = displayName;
    return Component;
};
export default wrapIcon;
