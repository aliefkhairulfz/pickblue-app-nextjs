"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card-simple";
import Error from "@/components/ui/error";
import InputWithIcon from "@/components/ui/input-with-icon";
import Label from "@/components/ui/label";
import NextLink from "@/components/ui/nextlink-with-icon";
import Separator from "@/components/ui/separator";
import { H3, P } from "@/components/ui/typography";
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
import { useLocale, useTranslations } from "next-intl";

function SignUpForm() {
  const t = useTranslations("AuthPage");
  const locale = useLocale();

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
        <Card.Title>
          <H3>{t("signupTitle")}</H3>
        </Card.Title>
        <Card.Description>{t("signupDescription")}</Card.Description>
      </Card.Header>

      <Separator />

      <Card.Content>
        <form
          className="flex flex-col items-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="name" className="text-foreground/50">
              {t("nameLabel")}
            </Label>

            <InputWithIcon
              {...register("name")}
              id="name"
              type="text"
              icon={<ALargeSmall />}
              placeholder={t("namePlaceholder")}
            />

            {errors.name && <Error>{errors.name.message}</Error>}
          </div>

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

          {err.error !== null && !err.error && (
            <div className="flex items-center justify-center w-full">
              <P className="text-center text-sm">
                {t("verificationSent", { email: err.email })}
              </P>
            </div>
          )}

          <div className="w-full [&>button]:w-full">
            <Button>{t("signupButton")}</Button>
          </div>
        </form>
      </Card.Content>

      <Card.Footer>
        <P>{t("alreadyAccount")}</P>

        <NextLink className="text-sm" href={`/${locale}/sign-in`}>
          {t("signinLink")}
        </NextLink>
      </Card.Footer>
    </Card>
  );
}

export default SignUpForm;
