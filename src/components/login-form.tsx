"use client";

import { signIn } from "@/app/actions/auth";
import { LoaginSchema, loginSchema } from "@/utils/schemas/form/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinIcon from "./icons/loading-spin-icon";

export default function LoginForm() {
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm<LoaginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: LoaginSchema) {
    const { email, password } = data;

    setIsLoading(true);
    await signIn(email, password);
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">E-mail</legend>
        <input
          className="input input-lg w-full"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {formErrors.email && (
          <p className="label text-error">{formErrors.email.message}</p>
        )}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Senha</legend>
        <input
          className="input input-lg w-full"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {formErrors.password && (
          <p className="label text-error">{formErrors.password.message}</p>
        )}
      </fieldset>
      <div className="flex flex-col justify-end gap-2">
        <Link href="forgot-password" className="self-end underline">
          <span>Esqueceu senha</span>
        </Link>
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? <LoadingSpinIcon /> : `Entrar`}
        </button>
        <span className="inline-flex gap-2 self-end">
          Não possui conta?
          <Link href="register" className="undeline font-bold text-blue-500">
            Registre-se
          </Link>
        </span>
      </div>
    </form>
  );
}
