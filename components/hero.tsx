'use cilent';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import faceAiImage from './faceai.png';
export default function Hero() {
    return (
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
    );
}