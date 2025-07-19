import { AthenaIcon } from "@/components/icons";
import LoginForm from "@/components/login-form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 lg:justify-center">
      <div className="card bg-secondary-content card-lg size-full grow lg:size-fit lg:w-1/2 lg:grow-0">
        <div className="card-body flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center gap-2">
            <AthenaIcon />
            <h1 className="card-title">Login</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
