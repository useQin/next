import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '../ui/login-form';
import "@/app/styles/admin.css";
import { Metadata } from 'next';
import  "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen main-loyout">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 ">
        <AcmeLogo login={true} />
        <LoginForm />
      </div>
    </main>
  );
}