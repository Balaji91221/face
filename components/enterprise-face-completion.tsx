'use client'

import { Button } from "@/components/ui/button"

import Header from "@/components/Header"
import Hero from './hero'
import Solutions from './solutions'
import Features from './features'
import Demo from './demo'
import Footer from './footer'

export function EnterpriseFaceCompletionComponent() {
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header  />

      {/* Rest of the component remains unchanged */}
      <main className="flex-grow">
        <Hero/>
        <Features />
     <Solutions />
      <Demo />


       

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
      <Footer />

      
    
      
    </div>
  )
}