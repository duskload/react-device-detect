import React from "react";
import {
  isAndroid,
  isBrowser,
  isIOS,
  isMobile,
  isIE,
  isWinPhone,
  isSmartTV,
  isMobileOnly,
  isWearable,
  isConsole,
  isTablet
} from "../helpers/selectors";

export const AndroidView = props => {
  return isAndroid ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const BrowserView = props => {
  return isBrowser ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const IEView = props => {
  return isIE ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const IOSView = props => {
  return isIOS ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const MobileView = props => {
  return isMobile ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const TabletView = props => {
  return isTablet ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const WinPhoneView = props => {
  return isWinPhone ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const MobileOnlyView = props => {
  return isMobileOnly ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const SmartTVView = props => {
  return isSmartTV ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const ConsoleView = props => {
  return isConsole ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const WearableView = props => {
  return isWearable ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const CustomView = props => {
  return props.condition ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};
