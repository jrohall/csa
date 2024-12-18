// ensures that key will always be a defined string (otherwise ts gets mad)
const getEnv = (key: string, defaultValue?: string) => {
    const value = process.env[key] || defaultValue;

    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }

    return value
}

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnv("PORT", "4004");
export const MONGO_URI = getEnv("MONGO_URI");
export const GMAPS_API_KEY = getEnv("GMAPS_API_KEY");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");

// we will implement these later if authentication is added to the application :)
export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");