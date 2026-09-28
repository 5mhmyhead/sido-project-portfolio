import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="px-16 py-8">
      <h1 className="font-serif text-6xl font-bold">Sign in as Admin</h1>
      <LoginForm />
    </main>
  );
}