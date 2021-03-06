"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M4 7.57c.04-.82.24-1.59.58-2.28L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L14.3 15H3.75a.75.75 0 01-.74-.76v-.12l.04-.12L4 11.4V7.57z", fill: primaryFill }),
        React.createElement("path", { d: "M17 14.25c0 .18-.06.34-.16.46L5.79 3.66A6.1 6.1 0 019.99 2a5.92 5.92 0 016 5.36v.22l.01.22v3.6l.95 2.6.03.08.01.09v.08z", fill: primaryFill }),
        React.createElement("path", { d: "M12.45 16a2.5 2.5 0 01-4.9 0h4.9z", fill: primaryFill }));
};
const AlertOff20Filled = /*#__PURE__*/ wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'AlertOff20Filled');
exports.default = AlertOff20Filled;
