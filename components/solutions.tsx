"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm sm:text-base text-blue-600 font-semibold tracking-wide uppercase">
            Solutions
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Tailored for Your Industry
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our AI face completion technology can revolutionize your specific industry.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <div className="mt-10">
          <Tabs defaultValue="media" className="w-full">
            {/* Tabs List */}
            <TabsList className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="media">Media & Entertainment</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="security">Security & Surveillance</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            </TabsList>

            {/* Tabs Content */}
            <div className="mt-6">
              <TabsContent value="media" className="w-full">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Media & Entertainment</CardTitle>
                    <CardDescription>
                      Enhance visual content and streamline post-production workflows.
                    </CardDescription>
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

              <TabsContent value="ecommerce" className="w-full">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>E-commerce</CardTitle>
                    <CardDescription>
                      Elevate product imagery and enhance user experience.
                    </CardDescription>
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

              <TabsContent value="security" className="w-full">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Security & Surveillance</CardTitle>
                    <CardDescription>
                      Improve identification accuracy and enhance security measures.
                    </CardDescription>
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

              <TabsContent value="healthcare" className="w-full">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Healthcare</CardTitle>
                    <CardDescription>
                      Advance medical imaging and patient care.
                    </CardDescription>
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
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
