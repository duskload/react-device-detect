import React from "react";

export const AndroidView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const BrowserView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const IEView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const IOSView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const MobileView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const TabletView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const WinPhoneView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const MobileOnlyView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};

export const SmartTVView = props => {
  return props.device ? (
    <div className={props.viewClassName} style={props.style}>
      {props.children}
    </div>
  ) : null;
};
