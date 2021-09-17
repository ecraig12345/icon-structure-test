"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSubtractCircle24Filled = void 0;
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M13.75 14.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM12 22a10 10 0 100-20 10 10 0 000 20zm6.52-15.46A8.5 8.5 0 016.55 18.51L18.51 6.55zM6 8.75c0-.41.34-.75.75-.75H8V6.75a.75.75 0 011.5 0V8h1.25a.75.75 0 010 1.5H9.5v1.25a.75.75 0 01-1.5 0V9.5H6.75A.75.75 0 016 8.75z", fill: primaryFill }));
};
exports.AddSubtractCircle24Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'AddSubtractCircle24Filled');
