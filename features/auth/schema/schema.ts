import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama minimal harus 2 karakter" })
    .max(50, { message: "Nama tidak boleh lebih dari 50 karakter" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Nama hanya boleh berisi huruf dan spasi",
    }),

  email: z
    .string()
    .email({ message: "Format email tidak valid" })
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(8, { message: "Password minimal harus 8 karakter" })
    .max(100, { message: "Password tidak boleh lebih dari 100 karakter" })
    .regex(/[A-Z]/, {
      message: "Password harus memiliki minimal satu huruf besar",
    })
    .regex(/[a-z]/, {
      message: "Password harus memiliki minimal satu huruf kecil",
    })
    .regex(/[0-9]/, {
      message: "Password harus memiliki minimal satu angka",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password harus memiliki minimal satu karakter spesial",
    }),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  email: z
    .string()
    .email({ message: "Format email tidak valid" })
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(8, { message: "Password minimal harus 8 karakter" })
    .max(100, { message: "Password tidak boleh lebih dari 100 karakter" })
    .regex(/[A-Z]/, {
      message: "Password harus memiliki minimal satu huruf besar",
    })
    .regex(/[a-z]/, {
      message: "Password harus memiliki minimal satu huruf kecil",
    })
    .regex(/[0-9]/, {
      message: "Password harus memiliki minimal satu angka",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password harus memiliki minimal satu karakter spesial",
    }),
});

export type SigninFormData = z.infer<typeof signinSchema>;
