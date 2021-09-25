import { parseUserAgent } from '../../lib/parse';

export function useDeviceData(userAgent) {
  return parseUserAgent(userAgent)
}
