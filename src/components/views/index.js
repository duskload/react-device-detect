import React, { Fragment } from "react";
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
  return isAndroid ? 
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const BrowserView = props => {
  return isBrowser ? 
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const IEView = props => {
  return isIE ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const IOSView = props => {
  return isIOS ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const MobileView = props => {
  return isMobile ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const TabletView = props => {
  return isTablet ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const WinPhoneView = props => {
  return isWinPhone ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const MobileOnlyView = props => {
  return isMobileOnly ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const SmartTVView = props => {
  return isSmartTV ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const ConsoleView = props => {
  return isConsole ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const WearableView = props => {
  return isWearable ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};

export const CustomView = props => {
  return props.condition ?  
    (props.renderWithFragment || props.noContainer) ? 
    (<Fragment>{props.children}</Fragment>) : 
    (
      <div className={props.viewClassName} style={props.style}>
        {props.children}
      </div>
    ) : null;
};
