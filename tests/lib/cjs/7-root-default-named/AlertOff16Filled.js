"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("./utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M10.8 11.5l3.35 3.35a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3.9 4.62A4.48 4.48 0 003.5 6.5v1.9l-.96 2.41a.5.5 0 00.46.69h7.8z", fill: primaryFill }),
        React.createElement("path", { d: "M13.4 11.29l.01-.01a.5.5 0 00.05-.47l-.96-2.4V6.5a4.5 4.5 0 00-7.36-3.48l8.27 8.27z", fill: primaryFill }),
        React.createElement("path", { d: "M6.06 12.5a2 2 0 003.88 0H6.06z", fill: primaryFill }));
};
const AlertOff16Filled = /*#__PURE__*/ wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'AlertOff16Filled');
exports.default = AlertOff16Filled;
