export { deviceDetect } from './lib/detect';
export { OsTypes, BrowserTypes } from './constants/constants';
export { parseUserAgent } from './lib/parse';
export { setUserAgent } from './utils/utils';

export * from './components/views';
export * from './components/withOrientationChange';
export * from './components/hooks/useOrientationChange';
export { useDeviceData } from './components/hooks/useDeviceData';
export { useDeviceSelectors } from './components/hooks/useDeviceSelectors';
export * from './lib/selectors';
