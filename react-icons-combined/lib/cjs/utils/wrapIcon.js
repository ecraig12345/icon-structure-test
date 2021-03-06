"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const css_1 = require("./css");
const wrapIcon = (icon, displayName) => {
    const Component = (_a) => {
        var { primaryFill = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["primaryFill"]);
        const { className } = props;
        const containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
            ? {
                role: 'img',
            }
            : {
                ['aria-hidden']: true,
            };
        return (React.createElement("span", Object.assign({}, props, containerProps, { className: css_1.css('root-span', className) }), React.cloneElement(icon, {
            className: 'svg',
            fill: primaryFill,
        })));
    };
    Component.displayName = displayName;
    return Component;
};
exports.default = wrapIcon;
