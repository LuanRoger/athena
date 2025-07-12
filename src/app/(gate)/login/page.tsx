import { AthenaIcon } from "@/components/icons";
import LoginForm from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="card w-1/2 bg-amber-100">
        <div className="card-body">
          <div className="flex w-full flex-col items-center gap-2">
            <AthenaIcon />
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
