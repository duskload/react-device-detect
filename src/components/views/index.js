import React, { Fragment } from 'react';
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
} from '../helpers/selectors';

export const AndroidView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isAndroid ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const BrowserView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isBrowser ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const IEView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isIE ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const IOSView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isIOS ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const MobileView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isMobile ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const TabletView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isTablet ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const WinPhoneView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isWinPhone ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const MobileOnlyView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isMobileOnly ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const SmartTVView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isSmartTV ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const ConsoleView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isConsole ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const WearableView = ({ renderWithFragment, children, viewClassName, style, ...props }) => {
  return isWearable ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};

export const CustomView = ({ renderWithFragment, children, viewClassName, style, condition, ...props }) => {
  return condition ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style} {...props}>
        {children}
      </div>
    )
  ) : null;
};
