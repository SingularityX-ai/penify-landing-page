module.exports = {
    plugins: {
      // Add other PostCSS plugins here if necessary, e.g., autoprefixer
  
      // PurgeCSS configuration
      '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' ? {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './public/index.html',
          // Add more paths to all your components
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      } : false, // Disable PurgeCSS in development for faster build times
    }
  };