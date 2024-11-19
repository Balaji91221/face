'use cilent';
import { motion } from "framer-motion";
import { Zap, BarChart, Globe, Shield, Code, Users } from "lucide-react";


export default function Features() {
    return(
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
    );
}