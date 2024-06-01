"use client";

import { useUser } from '@clerk/nextjs';
import React from 'react'

function Footer() {
  const {user} =  useUser();
  return user&&(
    <div>
      Footer
    </div>
  )
}

export default Footer
