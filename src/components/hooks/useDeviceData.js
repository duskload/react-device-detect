import { parseUserAgent } from '../../lib/parse';

export function useDeviceData(userAgent) {
  const hookUserAgent = userAgent ? userAgent : window.navigator.userAgent
  return parseUserAgent(hookUserAgent)
}
