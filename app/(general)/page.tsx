'use client';
import { useEffect } from "react";


export default function RootPage() {

  useEffect(() => {
    window.location.href = '/home'
  }, []);

  return (
    <div>
    </div>
  );
}
