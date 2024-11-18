'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import faceAiImage from './faceai.png';
//import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Shield, Globe, Zap, Users, Code, Loader2, Menu, Sun, Moon } from 'lucide-react'
import {
  DropdownMenu,

} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function EnterpriseFaceCompletionComponent() {
  const [file, setFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [completedImage, setCompletedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!file) return

    setIsLoading(true)
    setCompletedImage(null)

    // Simulating API call for face completion
    setTimeout(() => {
      setCompletedImage('/placeholder.svg?height=400&width=400')
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <span className="sr-only">FaceAI </span>
                <Zap className="h-8 w-auto sm:h-10 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">FaceAI </span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Features
              </a>
              <a href="#solutions" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Solutions
              </a>
              <a href="#demo" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Demo
              </a>
              <DropdownMenu>
                {/* <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Resources
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>API Reference</DropdownMenuItem>
                  <DropdownMenuItem>Case Studies</DropdownMenuItem>
                </DropdownMenuContent> */}
              </DropdownMenu>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Sign in
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign in to FaceAI </DialogTitle>
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
                    <Button type="submit" className="w-full">Sign In</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Sign up
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Sign up for FaceAI </DialogTitle>
                    <DialogDescription>
                      Create your account to get started with our AI-powered face completion technology.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="User" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="User@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Acme Inc." />
                    </div>
                    <Button type="submit" className="w-full">Create Account</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="ghost" onClick={toggleTheme} className="p-2">
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Zap className="h-8 w-auto text-blue-600" />
                  </div>
                  <div className="-mr-2">
                    <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a href="#features" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">Features</span>
                    </a>
                    <a href="#solutions" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">Solutions</span>
                    </a>
                    <a href="#demo" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">Demo</span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                    Documentation
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                    API Reference
                  </a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                    Case Studies
                  </a>
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Sign up
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Sign up for FaceAI </DialogTitle>
                        <DialogDescription>
                          Create your account to get started with our AI-powered face completion technology.
                        </DialogDescription>
                      </DialogHeader>
                      <form className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name-mobile">Full Name</Label>
                          <Input id="name-mobile" placeholder="User" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-mobile">Email</Label>
                          <Input id="email-mobile" type="email" placeholder="user@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-mobile">Password</Label>
                          <Input id="password-mobile" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-mobile">Company (Optional)</Label>
                          <Input id="company-mobile" placeholder="Acme Inc." />
                        </div>
                        <Button type="submit" className="w-full">Create Account</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-400">
                    Existing customer?{' '}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                          Sign in
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Sign in to FaceAI </DialogTitle>
                          <DialogDescription>
                            Enter your credentials to access your account.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="email-mobile-signin">Email</Label>
                            <Input id="email-mobile-signin" type="email" placeholder="user@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password-mobile-signin">Password</Label>
                            <Input id="password-mobile-signin" type="password" />
                          </div>
                          <Button type="submit" className="w-full">Sign In</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button variant="ghost" onClick={toggleTheme} className="p-2">
                    {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="flex-grow">
        <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              </div>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <motion.h1 
                    className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="block xl:inline">Advanced AI-Powered</span>{' '}
                    <span className="block text-blue-600 xl:inline">Face Completion</span>
                  </motion.h1>
                  <motion.p 
                    className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Harness the power of our state-of-the-art GAN model to enhance, restore, and complete facial features with unparalleled accuracy. Perfect for enterprises in media, e-commerce, security, and healthcare industries.
                  </motion.p>
                  <motion.div 
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="rounded-md shadow">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                        Get started
                      </Button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button variant="outline" size="lg">
                        Live demo
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={faceAiImage}
              alt="AI Face Completion"
            />
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Enterprise-Grade AI Face Completion
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Our cutting-edge technology offers unparalleled accuracy and efficiency for your face completion needs.
              </p>
            </motion.div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'Advanced GAN Model',
                    description: 'Utilize our state-of-the-art Generative Adversarial Network for unmatched face completion accuracy.',
                    icon: Zap,
                  },
                  {
                    name: 'Scalable Architecture',
                    description: 'Process thousands of images simultaneously with our robust, cloud-based infrastructure.',
                    icon: BarChart,
                  },
                  {
                    name: 'Global CDN Integration',
                    description: 'Lightning-fast processing and delivery through our worldwide content delivery network.',
                    icon: Globe,
                  },
                  {
                    name: 'Enterprise-Level Security',
                    description: 'GDPR and CCPA compliant with end-to-end encryption for all data transfers.',
                    icon: Shield,
                  },
                  {
                    name: 'Seamless API Integration',
                    description: 'Easy-to-use RESTful API for seamless integration into your existing workflows and applications.',
                    icon: Code,
                  },
                  {
                    name: 'Dedicated Support Team',
                    description: '24/7 support from our team of AI specialists to ensure smooth operation and quick issue resolution.',
                    icon: Users,
                  },
                ].map((feature) => (
                  <motion.div 
                    key={feature.name} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="solutions" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Tailored for Your Industry
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Discover how our AI face completion technology can revolutionize your specific industry.
              </p>
            </motion.div>

            <div className="mt-10">
              <Tabs defaultValue="media" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                  <TabsTrigger value="media">Media & Entertainment</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                  <TabsTrigger value="security">Security & Surveillance</TabsTrigger>
                  <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                </TabsList>
                <TabsContent value="media">
                  <Card>
                    <CardHeader>
                      <CardTitle>Media & Entertainment</CardTitle>
                      <CardDescription>Enhance visual content and streamline post-production workflows.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Restore and enhance historical footage with unprecedented accuracy</li>
                        <li>Automate facial touch-ups in film and television post-production</li>
                        <li>Generate realistic facial features for animation and visual effects</li>
                        <li>Improve user-generated content for social media platforms</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ecommerce">
                  <Card>
                    <CardHeader>
                      <CardTitle>E-commerce</CardTitle>
                      <CardDescription>Elevate product imagery and enhance user experience.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Enhance product photos with improved facial features</li>
                        <li>Create realistic virtual try-on experiences for cosmetics and accessories</li>
                        <li>Improve user-generated content in reviews and testimonials</li>
                        <li>Generate diverse model imagery for inclusive product representation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security & Surveillance</CardTitle>
                      <CardDescription>Improve identification accuracy and enhance security measures.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Enhance low-quality CCTV footage for better facial recognition</li>
                        <li>Reconstruct partial facial features in forensic investigations</li>
                        <li>Improve accuracy of facial recognition systems in challenging conditions</li>
                        <li>Generate age-progressed images for missing persons cases</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="healthcare">
                  <Card>
                    <CardHeader>
                      <CardTitle>Healthcare</CardTitle>
                      <CardDescription>Advance medical imaging and patient care.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Enhance medical imaging for more accurate diagnoses</li>
                        <li>Assist in treatment planning for reconstructive surgeries</li>
                        <li>Improve patient education with realistic visual aids</li>
                        <li>Support research in facial recognition for genetic disorders</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Interactive Demo</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Experience FaceAI in Action
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Upload an image and see our advanced AI face completion technology at work.
              </p>
            </motion.div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="w-full max-w-2xl mx-auto overflow-hidden">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-center w-full">
                      <Label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 transition-colors duration-200">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 800x400px)</p>
                        </div>
                        <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg" />
                      </Label>
                    </div>
                    
                    {imagePreview && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-lg shadow-lg" />
                      </motion.div>
                    )}

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={!file || isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Complete Face
                        </>
                      )}
                    </Button>
                  </form>

                  {completedImage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Completed Image:</h3>
                      <img src={completedImage} alt="Completed" className="max-w-full h-auto rounded-lg shadow-lg" />
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="bg-blue-600 dark:bg-blue-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-200">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Get started
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button variant="outline" className="text-black border-white hover:bg-blue-700" size="lg">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <Zap className="h-8 w-auto text-blue-400" />
                <span className="ml-2 text-xl font-bold">FaceAI </span>
              </div>
              <p className="text-gray-400 text-base">
                Advanced AI-powered face completion technology for enterprise solutions.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Media & Entertainment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        E-commerce
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Security & Surveillance
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Healthcare
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Guides
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-400 hover:text-gray-300">
                        Licensing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 FaceAI . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    
      
    </div>
  )
}