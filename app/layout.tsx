import '@/app/ui/global.css';
import { textFont } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${textFont.className} antialiased`}>{children}</body>
    </html>
  );
}
