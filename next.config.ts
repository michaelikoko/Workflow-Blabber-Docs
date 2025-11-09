import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({
  // Add your Nextra options here
  search: false,
  defaultShowCopyCode: true,

})

const nextConfig: NextConfig = withNextra({
  /* config options here */
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      'next-mdx-import-source-file': './mdx-components.mjs'
    }
  }

})

export default nextConfig
