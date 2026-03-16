"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card-simple";
import Error from "@/components/ui/error";
import InputWithIcon from "@/components/ui/input-with-icon";
import Label from "@/components/ui/label";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { P } from "@/components/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { ALargeSmall, KeyRound, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { SignupFormData, signupSchema } from "../schema/schema";
import { fetchClient } from "@/utils/http-request/fetch-client";
import {
  FailsResponseData,
  SuccessResponseData,
} from "@/utils/http-request/response-type";
import { useState } from "react";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [err, setErr] = useState<{ error: boolean | null; email: string }>({
    error: null,
    email: "",
  });

  async function onSubmit(args: SignupFormData) {
    const body = {
      ...args,
      provider_id: "credentials",
    };

    const { data, error } = await fetchClient<
      SignupFormData,
      SuccessResponseData,
      FailsResponseData
    >({
      path: "/auth/sign-up",
      method: "POST",
      body: body,
    });

    if (error) {
      return setErr((old) => ({ ...old, error: true, email: "" }));
    }

    setErr((old) => ({
      ...old,
      error: false,
      email: data?.data.email as string,
    }));
  }

  return (
    <Card className="border-0 bg-transparent hover:shadow-none">
      <Card.Header>
        <Card.Title>Selamat Datang di PickBlue 👋</Card.Title>
        <Card.Description>
          Mulai registrasi untuk memulai explorasi di PickBlue.
        </Card.Description>
      </Card.Header>

      <Separator />

      <Card.Content>
        <form
          className="flex flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="name" className="text-foreground/50">
              Nama
            </Label>
            <InputWithIcon
              {...register("name")}
              id="name"
              type="text"
              icon={<ALargeSmall />}
              placeholder="masukkan nama kamu"
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="email" className="text-foreground/50">
              Email
            </Label>
            <InputWithIcon
              {...register("email")}
              id="email"
              type="email"
              icon={<Mail />}
              placeholder="masukkan email kamu"
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="password" className="text-foreground/50">
              Password
            </Label>
            <InputWithIcon
              {...register("password")}
              id="password"
              type="text"
              icon={<KeyRound />}
              placeholder="buat password kamu"
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>

          {err.error !== null && !err.error && (
            <div className="flex items-center justify-center w-full">
              <P className="text-center text-sm">
                email verifikasi telah dikirim ke {err.email}
              </P>
            </div>
          )}

          <div className="w-full [&>button]:w-full">
            <Button>Registrasi Sekarang</Button>
          </div>
        </form>
      </Card.Content>

      <Card.Footer>
        <P>Sudah punya akun?</P>
        <NextLink className="text-sm" href={"/sign-in"}>
          Masuk
        </NextLink>
      </Card.Footer>
    </Card>
  );
}

export default SignUpForm;
