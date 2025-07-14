import RegisterForm from "@/components/register-form";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 lg:justify-center">
      <div className="card size-full grow bg-amber-100 lg:size-fit lg:w-1/2 lg:grow-0">
        <div className="card-body flex flex-col items-center justify-center">
          <h1 className="self-center text-3xl font-bold">Registro</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
