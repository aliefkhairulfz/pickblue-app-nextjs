"use client";

import Card from "@/components/ui/card-simple";
import InputWithIcon from "@/components/ui/input-with-icon";
import Label from "@/components/ui/label";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { P } from "@/components/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { SigninFormData, signinSchema } from "../schema/schema";
import Error from "@/components/ui/error";
import Button from "@/components/ui/button";

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

  function onSubmit(args: SigninFormData) {
    console.log(args);
  }

  return (
    <Card className="border-0">
      <Card.Header className="flex items-center">
        <Card.Title>Selamat Datang 👋</Card.Title>
        <Card.Description>
          Masuk ke akun kamu untuk memulai explorasi di PickBlue.
        </Card.Description>
      </Card.Header>

      <Separator />

      <Card.Content className="">
        <form
          className="flex flex-col items-start gap-4 w-[400px]"
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

          <div className="w-full [&>button]:w-full">
            <Button>Masuk</Button>
          </div>
        </form>
      </Card.Content>

      <Card.Footer className="flex items-center justify-center gap-1 pt-0">
        <P>Belum punya akun?</P>
        <NextLink className="text-sm" href={"/sign-up"}>
          Buat akun
        </NextLink>
      </Card.Footer>
    </Card>
  );
}

export default SignInForm;
