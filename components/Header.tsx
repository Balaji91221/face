'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Zap, Moon, Sun, Menu, X, User } from 'lucide-react'
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth"
import { toast } from "react-toastify"

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  // Redirect to /signin if no user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (!currentUser) {
        router.push('/signin'); // Redirect to signin page if no user is logged in
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      toast.success("Successfully signed out!")
      router.push("/signin")
    } catch (error) {
      toast.error((error as Error).message || "Sign-out failed")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Zap className="h-8 w-auto text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">FaceAI</span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-10">
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

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="font-medium">{user.displayName || user.email || "User"}</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" onClick={() => router.push("/signin")}>
                Sign In
              </Button>
            )}

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {["Features", "Solutions", "Demo"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <Button variant="ghost" onClick={toggleTheme} className="w-full justify-start py-2">
              {theme === "light" ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
              Toggle Theme
            </Button>
            {user ? (
              <>
                <Button variant="ghost" className="w-full justify-start py-2 font-medium">
                  {user.displayName || user.email || "User"}
                </Button>
                <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start py-2">
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="ghost" onClick={() => router.push("/signin")} className="w-full justify-start py-2">
                Sign In
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
