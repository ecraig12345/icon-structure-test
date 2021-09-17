import * as React from 'react';
import wrapIcon from '../utils/wrapIcon';
const rawSvg = (iconProps) => {
    const { className, primaryFill } = iconProps;
    return React.createElement("svg", { width: 28, height: 28, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg", className: className },
        React.createElement("path", { d: "M14 2a12 12 0 110 24 12 12 0 010-24zm0 6c-.38 0-.7.28-.74.65l-.01.1v4.5h-4.5a.75.75 0 00-.1 1.5h4.6v4.5a.75.75 0 001.5.1v-4.6h4.5a.75.75 0 00.1-1.5h-4.6v-4.5A.75.75 0 0014 8z", fill: primaryFill }));
};
export const AddCircle28Filled = /*#__PURE__*/ wrapIcon(/*#__PURE__*/ rawSvg({}), 'AddCircle28Filled');
