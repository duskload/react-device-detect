declare module "react-device-detect" {
  import * as React from "react";

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

  export const isMobileSafari: boolean;

  export const isChromium: boolean;

  export const isMobileOnly: boolean;

  export const isAndroid: boolean;

  export const isWinPhone: boolean;

  export const isIOS: boolean;

  export const isChrome: boolean;

  export const isFirefox: boolean;

  export const isSafari: boolean;

  export const isOpera: boolean;

  export const isIE: boolean;

  export const isEdge: boolean;

  export const isYandex: boolean;

  export const osVersion: string;

  export const osName: string;

  export const fullBrowserVersion: string;

  export const browserVersion: string;

  export const browserName: string;

  export const mobileVendor: string;

  export const mobileModel: string;

  export const engineName: string;

  export const engineVersion: string;

  export const getUA: string;
}
