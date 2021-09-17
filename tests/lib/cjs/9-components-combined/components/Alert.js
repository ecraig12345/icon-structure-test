"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert32Regular = exports.Alert32Filled = exports.Alert28Regular = exports.Alert28Filled = exports.Alert24Regular = exports.Alert24Filled = exports.Alert20Regular = exports.Alert20Filled = exports.Alert16Regular = exports.Alert16Filled = void 0;
const React = require("react");
const wrapIcon_1 = require("../utils/wrapIcon");
const rawSvgAlert16Filled = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M3.5 6.5a4.5 4.5 0 019 0v1.9l.96 2.41a.5.5 0 01-.46.69H3a.5.5 0 01-.46-.69l.96-2.4V6.5z", fill: primaryFill }),
        React.createElement("path", { d: "M6.06 12.5a2 2 0 003.88 0H6.06z", fill: primaryFill }));
};
exports.Alert16Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert16Filled({}), 'Alert16Filled');
const rawSvgAlert16Regular = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M8 2a4.5 4.5 0 00-4.5 4.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h3a.5.5 0 00.46-.69l-.96-2.4V6.5A4.5 4.5 0 008 2zm1 10a1 1 0 01-1 1 1 1 0 01-1-1h2zM4.5 6.5a3.5 3.5 0 117 0V9c0 .06.01.12.04.18l.72 1.82H3.74l.72-1.82A.5.5 0 004.5 9V6.5z", fill: primaryFill }));
};
exports.Alert16Regular = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert16Regular({}), 'Alert16Regular');
const rawSvgAlert20Filled = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M12.45 16a2.5 2.5 0 01-4.9 0h4.9zM10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 01-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0110 2z", fill: primaryFill }));
};
exports.Alert20Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert20Filled({}), 'Alert20Filled');
const rawSvgAlert20Regular = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z", fill: primaryFill }));
};
exports.Alert20Regular = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert20Regular({}), 'Alert20Regular');
const rawSvgAlert24Filled = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M9.04 19h5.92a3 3 0 01-5.92 0zM12 2a7.5 7.5 0 017.5 7.5v4l1.42 3.16a.95.95 0 01-.87 1.34H3.95a.95.95 0 01-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0112 2z", fill: primaryFill }));
};
exports.Alert24Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert24Filled({}), 'Alert24Filled');
const rawSvgAlert24Regular = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M12 2a7.5 7.5 0 017.5 7.25v4.35l1.38 3.15a1.25 1.25 0 01-1.15 1.75H15a3 3 0 01-6 .18v-.18H4.27a1.25 1.25 0 01-1.14-1.75L4.5 13.6V9.5C4.5 5.35 7.85 2 12 2zm1.5 16.5h-3a1.5 1.5 0 003 .15v-.15zM12 3.5c-3.32 0-6 2.67-6 6v4.4L4.66 17h14.7L18 13.9V9.29a5.99 5.99 0 00-6-5.78z", fill: primaryFill }));
};
exports.Alert24Regular = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert24Regular({}), 'Alert24Regular');
const rawSvgAlert28Filled = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M17.47 22a3.5 3.5 0 01-6.94 0h6.94zM14 3a8.5 8.5 0 018.5 8.25v4.36l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 15.6v-4.1C5.5 6.8 9.3 3 14 3z", fill: primaryFill }));
};
exports.Alert28Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert28Filled({}), 'Alert28Filled');
const rawSvgAlert28Regular = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M14 3a8.5 8.5 0 018.5 8.25v4.86l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H17.5a3.5 3.5 0 01-7 .2v-.2H5.27a1.28 1.28 0 01-1.23-1.62l.04-.12L5.5 16.1v-4.6C5.5 6.8 9.3 3 14 3zm2 18.65v-.15h-4a2 2 0 004 .15zM14 4.5a7 7 0 00-7 6.76v4.99c0 .07 0 .13-.02.19l-.03.09L5.6 20h16.8l-1.35-3.48a.75.75 0 01-.04-.17V11.5a7 7 0 00-7.01-7z", fill: primaryFill }));
};
exports.Alert28Regular = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert28Regular({}), 'Alert28Regular');
const rawSvgAlert32Filled = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M7 13a9 9 0 0118 0v3.8l1.93 4.83A1 1 0 0126 23H6a1 1 0 01-.93-1.37L7 16.8V13zm5.12 12a3.99 3.99 0 007.76 0h-7.76z", fill: primaryFill }));
};
exports.Alert32Filled = wrapIcon_1.default(/*#__PURE__*/ rawSvgAlert32Filled({}), 'Alert32Filled');
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M16 4a9 9 0 00-9 9v4.8l-1.93 4.83A1 1 0 006 24h6a3.99 3.99 0 108 0h6a1 1 0 00.93-1.37L25 17.8V13a9 9 0 00-9-9zm2 20c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2h4zM9 13a7 7 0 1114 0v5a1 1 0 00.07.37L24.52 22H7.48l1.45-3.63A1 1 0 009 18v-5z", fill: primaryFill }));
};
exports.Alert32Regular = wrapIcon_1.default(/*#__PURE__*/ rawSvg({}), 'Alert32Regular');
