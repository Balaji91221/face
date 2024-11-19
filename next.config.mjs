/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'], // Add this line
      },
      async headers() {
        return [
          {
            source: "/(.*)", // Apply to all routes
            headers: [
              {
                key: "Cross-Origin-Opener-Policy",
                value: "same-origin", // You can also use "unsafe-none" depending on your needs
              },
              {
                key: "Cross-Origin-Embedder-Policy",
                value: "require-corp", // Enforces CORS for embedded resources
              },
            ],
          },
        ];
      },
};

export default nextConfig;
