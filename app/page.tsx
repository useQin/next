import  Link from "next/link";
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
      <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          ></Link>
      <div>
        Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
      </div>
      <div>
      </div>
      <div>
        Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.
        Jumpstart your Next.js development with one of our pre-built solutions.
      </div>
      <InvoiceStatus status={"pending"} />
    </main>
  );
}
