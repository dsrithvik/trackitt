'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      {/* Logo */}
      <div>
        <span className="text-xl font-bold">Trackitt</span>
      </div>

      {/* Auth Buttons */}
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          {/* Welcome Message */}
          <span className="text-sm">Welcome, {user?.firstName}</span>
          {/* User Profile Button */}
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
