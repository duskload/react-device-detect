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

    export class AndroidView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class IEView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }


    export class IOSView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class TabletView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class WinPhoneView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class MobileOnlyView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class SmartTVView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class ConsoleView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class WearableView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export class CustomView extends React.Component<any, never> {
        device: any;

        render(): JSX.Element;
    }

    export const isBrowser: boolean;

    export const isMobile: boolean;

    export const isTablet: boolean;

    export const isSmartTV: boolean;

    export const isConsole: boolean;

    export const isWearable: boolean;

}
