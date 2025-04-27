import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除不正确的 experimental.runtime 配置
  // 添加正确的 Edge Runtime 配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-runtime',
            value: 'edge',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
