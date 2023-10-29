'use client'
// 客户端
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { name: 'Home', href: '/admin', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/admin/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/admin/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
              , {
                ' text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
