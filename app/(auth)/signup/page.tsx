'use client';

import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
const SignUpPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Header />
    <h1 className="text-2xl font-bold">Sign Up</h1>
    <AuthForm isSignUp /> {/* Pass isSignUp prop to differentiate from sign-in */}
  </div>
);

export default SignUpPage;
