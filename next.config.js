/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "lh3.googleusercontent.com",
        ],
        // remotePatterns: [
        //     {
        //         protocol: "",
        //         hostname: "",
        //         port: "",
        //         pathname: ""
        //     }
        // ]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
