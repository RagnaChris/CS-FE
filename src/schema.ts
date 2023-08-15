import { z } from "zod";

export const mailingFormSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const getEarlyAccessFormSchema = z.object({
  name: z.string().nonempty("Invalid name"),
  email: z.string().email("Invalid email"),
  message: z.string().nonempty("Invalid message"),
});
