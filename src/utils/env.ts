import * as zod from "zod";

const envSchema = zod.object({
  BASE_URL: zod.string().min(1),
  PROJECT_ID: zod.string().min(1),
});

export const environment = envSchema.parse({
  BASE_URL: import.meta.env.VITE_PUBLIC_API_URL,
  PROJECT_ID: import.meta.env.VITE_PUBLIC_PROJECT_ID,
});
