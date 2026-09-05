import * as z from "zod";

const loginSchema = z.object({
    phone:z
    .string({error:"phone number is required"}),
    // email:z
    // .email({
    //     error:(data)=>data.input?"Invalid email":"email is required"
    // }),
    password:z.string({error:"Password is required"})
})

export {loginSchema};