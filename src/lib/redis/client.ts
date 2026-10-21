import { Redis } from '@upstash/redis';

const redisUrl = process.env.UPSTASH_REDIS_REST_URL || '';
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || '';

export const isRedisConfigured = Boolean(
  redisUrl &&
    redisToken &&
    !redisUrl.includes('dummy.upstash.io') &&
    redisToken !== 'dummy'
);

export const redis = new Redis({
  url: isRedisConfigured ? redisUrl : 'https://dummy.upstash.io',
  token: isRedisConfigured ? redisToken : 'dummy',
  retry: false,
});
