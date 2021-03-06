"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessibility20Filled = void 0;
const React = require("react");
const wrapIcon_1 = require("./utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M10 2a2.25 2.25 0 100 4.5A2.25 2.25 0 0010 2zM4.85 4.83a1.44 1.44 0 00-1.02 2.69L7 8.74v2.4l-1.72 4.73a1.53 1.53 0 002.88 1.06l1.52-4.04c.1-.3.54-.3.65 0l1.51 4.01a1.53 1.53 0 002.87-1.06L13 11.13v-2.4l3.14-1.19a1.44 1.44 0 00-1-2.69l-1.95.72a.5.5 0 00-.27.23 3.3 3.3 0 01-5.85-.01.5.5 0 00-.27-.24l-1.95-.72z", fill: primaryFill }));
};
exports.Accessibility20Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'Accessibility20Filled');
