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
  isTablet,
} from '../lib/selectors';

export const AndroidView = ({ renderWithFragment, children, ...props }) => {
  return isAndroid ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const BrowserView = ({ renderWithFragment, children, ...props }) => {
  return isBrowser ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const IEView = ({ renderWithFragment, children, ...props }) => {
  return isIE ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const IOSView = ({ renderWithFragment, children, ...props }) => {
  return isIOS ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const MobileView = ({ renderWithFragment, children, ...props }) => {
  return isMobile ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const TabletView = ({ renderWithFragment, children, ...props }) => {
  return isTablet ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const WinPhoneView = ({ renderWithFragment, children, ...props }) => {
  return isWinPhone ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const MobileOnlyView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  ...props
}) => {
  return isMobileOnly ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const SmartTVView = ({ renderWithFragment, children, ...props }) => {
  return isSmartTV ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const ConsoleView = ({ renderWithFragment, children, ...props }) => {
  return isConsole ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const WearableView = ({ renderWithFragment, children, ...props }) => {
  return isWearable ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};

export const CustomView = ({
  renderWithFragment,
  children,
  viewClassName,
  style,
  condition,
  ...props
}) => {
  return condition ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div {...props}>{children}</div>
    )
  ) : null;
};
