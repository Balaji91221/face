"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignOutPage = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
      router.push("/auth/signin");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Sign-out failed");
      } else {
        toast.error("Sign-out failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold">Sign Out</h1>
      <button onClick={handleSignOut} className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
        Sign Out
      </button>
    </div>
  );
};

export default SignOutPage;
