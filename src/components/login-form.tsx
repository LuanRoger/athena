import Link from "next/link";

export default function LoginForm() {
  return (
    <form>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">E-mail</legend>
        <input
          className="input input-lg w-full"
          type="email"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Senha</legend>
        <input
          className="input input-lg w-full"
          type="password"
          placeholder="Senha"
        />
      </fieldset>
      <div className="flex flex-col justify-end gap-2">
        <Link href="forgot-password" className="self-end underline">
          <span>Esqueceu senha</span>
        </Link>
        <button className="btn btn-primary" type="submit">
          Entrar
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
