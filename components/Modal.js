'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Modal = ({ children, bg }) => {
  const pathname = usePathname();

  if (pathname === '/') return null;
  return (
    <div>
      <Link href="/" className={`modal ${bg}`} />
      {children}
    </div>
  );
};

export default Modal;
