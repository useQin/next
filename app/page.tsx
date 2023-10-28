import Image from "next/image";
import InvoiceStatus from '@/app/ui/invoices/status';
import styles from '@/app/ui/home.module.css';
import { titleFont } from '@/app/ui/fonts';
import AcmeLogo from '@/app/ui/acme-logo';
export default function Page() {

  return (
    <main >
      <AcmeLogo />
      <div className={styles.shape} />
      <div className={`${titleFont.className} antialiased`}>
        张三
      </div>
      <div>
        Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
      </div>
      <div>
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
      <div>
        Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.
        Jumpstart your Next.js development with one of our pre-built solutions.
      </div>
      <InvoiceStatus status={"pending"} />
    </main>
  );
}
