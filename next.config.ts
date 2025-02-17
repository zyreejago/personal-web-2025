import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Menambahkan rule untuk memproses file gambar seperti .png
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 8192, // Membatasi ukuran file gambar (dalam byte)
            name: '[path][name].[hash:8].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
