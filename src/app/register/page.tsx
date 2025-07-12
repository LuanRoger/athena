import RegisterForm from "@/components/register-form";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="card w-1/2 bg-amber-100">
        <div className="card-body flex flex-col">
          <h1 className="self-center text-3xl font-bold">Registro</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
