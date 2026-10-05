/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 75 for gallery thumbnails, 90 for the zoomable lightbox view.
    qualities: [75, 90],
  },
};

export default nextConfig;
