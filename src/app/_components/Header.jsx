'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      {/* Logo */}
      <div>
        <span className="text-xl font-bold">Trackitt</span>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <>
            {/* User Info */}
            <span className="text-sm">Welcome, {user?.firstName}</span>
            {/* User Profile Button */}
            <UserButton />
          </>
        ) : (
          <>
            <Button onClick={() => window.location.href = '/sign-up'}>Sign Up</Button>
            <Button onClick={() => window.location.href = '/sign-in'}>Sign In</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
