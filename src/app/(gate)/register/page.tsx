import RegisterForm from "@/components/register-form";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 lg:justify-center">
      <div className="card bg-secondary-content card-lg size-full grow lg:size-fit lg:w-1/2 lg:grow-0">
        <div className="card-body flex flex-col items-center justify-center">
          <h1 className="card-title">Registro</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
