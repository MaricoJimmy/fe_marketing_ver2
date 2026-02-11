# Project Overview: Udata.ai Marketing Website

This is a modern marketing website for Udata.ai, built with Next.js and Tailwind CSS. The site is designed to introduce and promote AI & IoT solutions, products, and services, targeting a wide range of industries and customers.

## Main Pages & Structure

- **Homepage** (`/`):
  - Hero section with background image and call-to-action.
  - List of main products/solutions with logos and links.
  - Fields of application (industries, use cases).
  - Customer showcase with logos.

- **About Us** (`/ve-cong-ty`):
  - Company introduction, mission, vision, and values.
  - Team, achievements, and company images.

- **Careers** (`/tuyen-dung`):
  - List of open positions, job descriptions, and application links.

- **Try Now / Contact** (`/dung-thu`):
  - Contact form for demo requests or inquiries.
  - Collects user/company info, requirements, and interests.

- **Products** (`/san-pham/[product]`):
  - Dedicated landing pages for each product (Uboard, Ugate, Uzero).
  - Each page includes hero section, main features, benefits, and FAQs.
  - Product images and feature highlights.

- **Solutions** (`/giai-phap/[solution]`):
  - Solution pages for AI Assistant, AI Business, EMS, GHG, OEE, Solar Rooftop, Elevator, etc.
  - Each page covers problems, benefits, and main features with illustrations.

- **Blog** (`/blog`):
  - List of blog posts, articles, and news.
  - Each post has its own detail page.

- **Notifications** (`/thong-bao`):
  - Announcements and updates for users.

## Information & Images

- Uses a variety of images for backgrounds, product logos, customer logos, and solution illustrations (see `public/image/`).
- SEO optimized with meta tags for each page.
- Multilingual support (EN, VI, JP, TH) via `locales/`.
- Responsive design for desktop and mobile.

## User Flow

1. User lands on the homepage, learns about Udata.ai and its offerings.
2. Navigates to product or solution pages for more details.
3. Can view company info, blog, or announcements.
4. Interested users can contact or request a demo via the Try Now page.
5. Job seekers can view and apply for open positions.

## Note on Viettel Network Blocking

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install dependencies

```
npm install
# or
yarn install
```

### Run the development server

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Environment variables

Create `.env.local` and define:

```
NEXT_PUBLIC_CHAT_WIDGET_API_URL=https://mini.ugate.ai
NEXT_PUBLIC_CHAT_WIDGET_ORIGIN=https://mini.ugate.ai
NEXT_PUBLIC_CHAT_WIDGET_COLOR=#1890ff
NEXT_PUBLIC_CHAT_WIDGET_TOKEN=your-widget-token
NEXT_PUBLIC_CHAT_WIDGET_SCRIPT_SRC=https://mini.ugate.ai/chat-widget.js
```

### Build for production

```
npm run build
# or
yarn build
```

### Start the production server

```
npm start
# or
yarn start
```

### Lint the code

```
npm run lint
# or
yarn lint
```

### Deployment

You can deploy this project to any platform that supports Node.js, such as Vercel, Netlify, or your own server. For best results, follow the platform's official Next.js deployment guide.

---

Due to access restrictions by the Viettel network when using Vercel or Netlify hosting, users in Vietnam may experience issues accessing the website. To resolve this, a reverse proxy is deployed on DigitalOcean (DO) to redirect requests, ensuring stable access for all users.
