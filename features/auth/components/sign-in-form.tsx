"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card-simple";
import Error from "@/components/ui/error";
import InputWithIcon from "@/components/ui/input-with-icon";
import Label from "@/components/ui/label";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { H3, P } from "@/components/ui/typography";
import { fetchClient } from "@/utils/http-request/fetch-client";
import {
  FailsResponseData,
  SuccessResponseData,
} from "@/utils/http-request/response-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { SigninFormData, signinSchema } from "../schema/schema";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [err, setErr] = useState<{
    error: boolean | null;
    email: string;
    errorMsg: string;
  }>({
    error: null,
    errorMsg: "",
    email: "",
  });

  async function onSubmit(args: SigninFormData) {
    const body = {
      ...args,
      provider_id: "credentials",
    };

    const { data, error } = await fetchClient<
      SigninFormData,
      SuccessResponseData,
      FailsResponseData
    >({
      path: "/auth/sign-in",
      method: "POST",
      body: body,
    });

    if (error) {
      console.log("error message is:", error.message);
      return setErr((old) => ({
        ...old,
        error: true,
        email: "",
        errorMsg: error.message,
      }));
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
        <Card.Title>
          <H3>Selamat Datang 👋</H3>
        </Card.Title>
        <Card.Description>
          Masuk ke akun kamu untuk memulai explorasi di PickBlue.
        </Card.Description>
      </Card.Header>

      <Separator />

      <Card.Content>
        <form
          className="flex flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              placeholder="masukkan password kamu"
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </div>

          {err.error !== null && err.error && (
            <div className="flex items-center justify-center w-full">
              <P className="text-center text-sm">
                gagal{" "}
                {err.errorMsg === "password_not_match"
                  ? "password kamu salah"
                  : err.errorMsg}
              </P>
            </div>
          )}

          <div className="w-full [&>button]:w-full">
            <Button>Masuk</Button>
          </div>
        </form>
      </Card.Content>

      <Card.Footer>
        <P>Belum punya akun?</P>
        <NextLink className="text-sm" href={"/sign-up"}>
          Buat akun
        </NextLink>
      </Card.Footer>
    </Card>
  );
}

export default SignInForm;
