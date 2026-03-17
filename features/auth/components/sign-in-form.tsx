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
import { useLocale, useTranslations } from "next-intl";

function SignInForm() {
  const t = useTranslations("AuthPage");
  const locale = useLocale();

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
          <H3>{t("signinTitle")}</H3>
        </Card.Title>
        <Card.Description>{t("signinDescription")}</Card.Description>
      </Card.Header>

      <Separator />

      <Card.Content>
        <form
          className="flex flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="email" className="text-foreground/50">
              {t("emailLabel")}
            </Label>

            <InputWithIcon
              {...register("email")}
              id="email"
              type="email"
              icon={<Mail />}
              placeholder={t("emailPlaceholder")}
            />

            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="password" className="text-foreground/50">
              {t("passwordLabel")}
            </Label>

            <InputWithIcon
              {...register("password")}
              id="password"
              type="text"
              icon={<KeyRound />}
              placeholder={t("passwordPlaceholder")}
            />

            {errors.password && <Error>{errors.password.message}</Error>}
          </div>

          {err.error !== null && err.error && (
            <div className="flex items-center justify-center w-full">
              <P className="text-center text-sm">
                {err.errorMsg === "password_not_match"
                  ? t("passwordWrong")
                  : err.errorMsg}
              </P>
            </div>
          )}

          <div className="w-full [&>button]:w-full">
            <Button>{t("signinButton")}</Button>
          </div>
        </form>
      </Card.Content>

      <Card.Footer>
        <P>{t("noAccount")}</P>

        <NextLink className="text-sm" href={`/${locale}/sign-up`}>
          {t("createAccount")}
        </NextLink>
      </Card.Footer>
    </Card>
  );
}

export default SignInForm;
