import z from "zod";
export const schema=z.object({

})
export type AuthBody = z.infer<typeof schema>;