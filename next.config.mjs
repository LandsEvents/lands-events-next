/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lands-events-laravel.test", "landsevents.test"],
    },
    server: "http://lands-events-laravel.test"
};
export default nextConfig;
