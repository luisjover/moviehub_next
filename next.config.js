/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
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
