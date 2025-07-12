import { AthenaIcon } from "@/components/icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="card w-1/2 bg-amber-100">
        <div className="card-body">
          <div className="flex w-full flex-col items-center gap-2">
            <AthenaIcon />
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">E-mail</legend>
            <input
              className="input h-12 w-full"
              type="email"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Senha</legend>
            <input
              className="input h-12 w-full"
              type="password"
              placeholder="Senha"
            />
          </fieldset>
          <div className="flex flex-col justify-end gap-2">
            <Link href="forgot-password" className="self-end underline">
              <span>Esqueceu senha</span>
            </Link>
            <button className="btn btn-primary">Entrar</button>
            <span className="inline-flex gap-2 self-end">
              Não possui conta?
              <Link
                href="register"
                className="undeline font-bold text-blue-500"
              >
                Registre-se
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
