// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the sign-in page when the home page is accessed
    router.push('/signin');
  }, [router]);

  return null; // No need to render anything, the redirect will happen automatically
}
