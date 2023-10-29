import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '../ui/login-form';
import "@/app/styles/admin.css";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen main-loyout">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <AcmeLogo />
        <LoginForm />
      </div>
    </main>
  );
}