import { useDeviceData } from './useDeviceData';
import { buildSelectorsObject } from '../../lib/buildSelectors';

export function useDeviceSelectors(userAgent) {
  const hookUserAgent = userAgent ? userAgent : window.navigator.userAgent
  const deviceData = useDeviceData(hookUserAgent)
  const selectors = buildSelectorsObject(deviceData)

  return [selectors, deviceData]
}
