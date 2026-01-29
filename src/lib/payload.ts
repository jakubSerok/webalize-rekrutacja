import { getPayload } from 'payload';
import config from '../payload/payload.config';

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null;

export const getPayloadClient = async () => {
  if (!cachedPayload) {
    cachedPayload = await getPayload({ config });
  }
  return cachedPayload;
};
