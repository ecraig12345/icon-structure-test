"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M12 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm8.34 4.52a2.01 2.01 0 00-2.6-1.26l-1.61.6a.75.75 0 00-.42.38 4.09 4.09 0 01-7.39.01.75.75 0 00-.41-.38l-1.63-.6A2 2 0 004.81 9L8 10.31v3.15l-1.97 5.71A1.96 1.96 0 009.7 20.5l1.85-4.96a.48.48 0 01.9 0l1.88 5.01a1.94 1.94 0 003.65-1.31L16 13.45V10.3l3.2-1.3a2.01 2.01 0 001.14-2.5z", fill: primaryFill }));
};
exports.default = wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'Accessibility24Filled');
