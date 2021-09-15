declare module '@fluentui/react-icons-combined' {
    export * from '@fluentui/react-icons-combined/lib/esm/index';
  }
declare module '@fluentui/react-icons-combined/lib/esm/components/Accessibility' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
export const Accessibility16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility32Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility32Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/esm/components/AccessibilityCheckmark' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
export const AccessibilityCheckmark24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const AccessibilityCheckmark24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/esm/components/AccessTime' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
export const AccessTime24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const AccessTime24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/esm/components/Add' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
export const Add12Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add12Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/esm/components/Alert' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
export const Alert16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert32Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert32Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/esm/index' {
export * from '@fluentui/react-icons-combined/lib/esm/components/AccessTime';
export * from '@fluentui/react-icons-combined/lib/esm/components/Accessibility';
export * from '@fluentui/react-icons-combined/lib/esm/components/AccessibilityCheckmark';
export * from '@fluentui/react-icons-combined/lib/esm/components/Add';
export * from '@fluentui/react-icons-combined/lib/esm/components/Alert';
}
declare module '@fluentui/react-icons-combined/lib/esm/utils/css' {
/**
 * Dictionary of booleans.
 *
 * @internal
 */
export interface IDictionary {
    [className: string]: boolean;
}
/**
 * Serializable object.
 *
 * @internal
 */
export interface ISerializableObject {
    toString?: () => string;
}
/**
 * css input type.
 *
 * @internal
 */
export type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function css(...args: ICssInput[]): string;
}
declare module '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types' {
export interface IFluentIconsProps {
    primaryFill?: string;
    className?: string;
    filled?: boolean;
}
}
declare module '@fluentui/react-icons-combined/lib/esm/utils/wrapIcon' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/esm/utils/IFluentIconsProps.types';
const wrapIcon: (icon: JSX.Element, displayName?: string | undefined) => React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export default wrapIcon;
}
declare module '@fluentui/react-icons-combined/lib/cjs/components/Accessibility' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
export const Accessibility16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility32Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Accessibility32Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/cjs/components/AccessibilityCheckmark' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
export const AccessibilityCheckmark24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const AccessibilityCheckmark24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/cjs/components/AccessTime' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
export const AccessTime24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const AccessTime24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/cjs/components/Add' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
export const Add12Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add12Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Add28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/cjs/components/Alert' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
export const Alert16Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert16Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert20Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert20Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert24Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert24Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert28Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert28Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert32Filled: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export const Alert32Regular: React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
}
declare module '@fluentui/react-icons-combined/lib/cjs/index' {
export * from '@fluentui/react-icons-combined/lib/cjs/components/AccessTime';
export * from '@fluentui/react-icons-combined/lib/cjs/components/Accessibility';
export * from '@fluentui/react-icons-combined/lib/cjs/components/AccessibilityCheckmark';
export * from '@fluentui/react-icons-combined/lib/cjs/components/Add';
export * from '@fluentui/react-icons-combined/lib/cjs/components/Alert';
}
declare module '@fluentui/react-icons-combined/lib/cjs/utils/css' {
/**
 * Dictionary of booleans.
 *
 * @internal
 */
export interface IDictionary {
    [className: string]: boolean;
}
/**
 * Serializable object.
 *
 * @internal
 */
export interface ISerializableObject {
    toString?: () => string;
}
/**
 * css input type.
 *
 * @internal
 */
export type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function css(...args: ICssInput[]): string;
}
declare module '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types' {
export interface IFluentIconsProps {
    primaryFill?: string;
    className?: string;
    filled?: boolean;
}
}
declare module '@fluentui/react-icons-combined/lib/cjs/utils/wrapIcon' {
import * as React from 'react';
import { IFluentIconsProps } from '@fluentui/react-icons-combined/lib/cjs/utils/IFluentIconsProps.types';
const wrapIcon: (icon: JSX.Element, displayName?: string | undefined) => React.FC<React.HTMLAttributes<HTMLSpanElement> & IFluentIconsProps>;
export default wrapIcon;
}