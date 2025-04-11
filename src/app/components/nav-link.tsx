'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ children, href }: { children: string; href: string }) {
  const path = usePathname();

  console.log('path', path);

  return (
    <Link href={href} className={path === href ? 'active' : undefined}>
      {children}
    </Link>
  );
}
