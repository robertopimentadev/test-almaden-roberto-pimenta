import { z } from "zod";

export const createPasswordCardSchema = z.object({
    url: z
        .string()
        .url("URL must be valid"),

    name: z
        .string()
        .min(1, "Name is required"),

    username: z
        .string()
        .min(1, "Username is required"),

    password: z
        .string()
        .min(1, "Password is required"),
});

export const updatePasswordCardSchema = z.object({
    url: z.string().url().optional(),
    name: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
});