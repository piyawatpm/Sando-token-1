export const env = {
  IS_IN_PRODUCTION: process.env.NODE_ENV === 'production',
  SECRET: process.env.SECRET as string,
} as const
