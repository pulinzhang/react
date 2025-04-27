# React Shop

A modern e-commerce application built with Next.js and deployed on Cloudflare Pages.

## Features

- User authentication (login/register)
- Product listing and details
- Shopping cart functionality
- Multi-language support (English/Chinese)
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-shop.git
cd react-shop
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Cloudflare Pages. To deploy:

1. Install Wrangler CLI
```bash
npm install -g wrangler
```

2. Login to Cloudflare
```bash
wrangler login
```

3. Build the project
```bash
npm run build
# or
yarn build
```

4. Deploy to Cloudflare Pages
```bash
npm run deploy
# or
yarn deploy
```

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/context` - React context providers
- `/src/mocks` - Mock data for development
- `/public` - Static assets

## License

MIT
