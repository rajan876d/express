import * as z from "zod";
import { passwordRegex } from "../../constants/regex.js";
import { Role_Admin, Role_Customer, Role_Merchant } from "../../constants/role.js";

const userSchema = z.object({
  name: z
    .string({ error: "name is required" })
    .trim(),

  email: z
    .email({ error: (data)=>data.input?"INvalid email":"Email is required" })
    .trim()
    .check(z.minLength(5),z.maxLength(100)),

  password: z
    .string({ error: "password is required" })
    .trim()
    .check(z.maxLength(100),
  z.regex(passwordRegex,{errro:"password must be ingiven format:must content upper case, lower case, special caracter also length must be greate than 8"})),

    
  role: z.array(z.enum([Role_Admin ,Role_Customer, Role_Merchant])).optional(),

  phone: z
    .string({ error: "phone isss required" })
    .trim(),

  isActive: z.boolean().optional(),
});



export { userSchema };