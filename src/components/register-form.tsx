"use client";

import { registerSchema, RegisterSchema } from "@/utils/schemas/form/register";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/app/actions/auth";
import { useState } from "react";
import LoadingSpinIcon from "./icons/loading-spin-icon";
import { showToastByActionResult } from "@/utils/toast";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: RegisterSchema) {
    const { username, email, password } = data;

    setIsLoading(true);

    const result = await signUp(username, email, password);
    showToastByActionResult(result, false);

    setIsLoading(false);
  }

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nome de Usuário</legend>
        <input
          className="input w-full"
          placeholder="Digite seu nome de usuário"
          {...register("username")}
        />
        {formErrors.username && (
          <p className="label">{formErrors.username.message}</p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">E-mails</legend>
        <input
          className="input w-full"
          placeholder="E-mail"
          type="email"
          {...register("email")}
        />
        {formErrors.email && (
          <p className="label text-error">{formErrors.email.message}</p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Senha</legend>
        <input
          className="input w-full"
          placeholder="Senha"
          type="password"
          {...register("password")}
        />
        {formErrors.password && (
          <p className="label">{formErrors.password.message}</p>
        )}
      </fieldset>
      <button className="btn btn-primary" disabled={isLoading}>
        {isLoading ? <LoadingSpinIcon /> : `Confirmar`}
      </button>
      <span className="inline-flex gap-2 self-center text-sm font-bold">
        Já possui conta?
        <Link href="/login" className="text-blue-600 underline">
          Entre aqui
        </Link>
      </span>
    </form>
  );
}
