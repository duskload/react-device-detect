import { buildSelectorsObject } from '../../lib/selectors';
import { useDeviceData } from './useDeviceData';

export function useDeviceSelectors(userAgent) {
  const data = useDeviceData(userAgent)
  const selectors = buildSelectorsObject(data)

  return [selectors, data]
}
