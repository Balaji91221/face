"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HeaderComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Persist theme preference in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center lg:w-1/3">
            <a href="#" className="flex items-center">
              <Zap className="h-8 w-auto text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">FaceAI</span>
            </a>
          </div>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex lg:w-1/3 justify-center space-x-10">
            {["Features", "Solutions", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center lg:w-1/3 justify-end space-x-4">
            {/* Sign In */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign in to FaceAI</DialogTitle>
                  <DialogDescription>
                    Enter your credentials to access your account.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Sign Up */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign up for FaceAI</DialogTitle>
                  <DialogDescription>
                    Create your account to get started.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="user@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Theme Toggle */}
            <Button variant="ghost" onClick={toggleTheme} className="p-2">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Zap className="h-8 w-auto text-blue-600" />
                <Button
                  variant="ghost"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
            </div>
            <div className="py-6 px-5 space-y-4">
              {["Features", "Solutions", "Demo"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
