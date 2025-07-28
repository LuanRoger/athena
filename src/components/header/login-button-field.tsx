import Link from "next/link";

export default function LoginButtonField() {
  return (
    <>
      <Link
        className="btn text-primary border-primary rounded-4xl border-2"
        href="/register"
      >
        Registrar-se
      </Link>
      <Link
        className="btn bg-primary rounded-4xl border-none text-white"
        href="/login"
      >
        Entrar
      </Link>
    </>
  );
}
