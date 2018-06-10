declare module 'react-device-detect' {
    import * as React from 'react';

    export class BrowserView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class MobileView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export function isBrowser(): boolean

    export function isMobile(): boolean
}