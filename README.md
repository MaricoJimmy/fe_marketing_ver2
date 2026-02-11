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

## Docker Deployment

This project includes Docker support for containerized deployment.

### Prerequisites

- [Docker](https://www.docker.com/) (v20.10 or later)
- [Docker Compose](https://docs.docker.com/compose/) (v2.0 or later)

### Quick Start with Docker Compose

1. **Build and run the container:**

```bash
docker-compose up -d
```

2. **View logs:**

```bash
docker-compose logs -f
```

3. **Stop the container:**

```bash
docker-compose down
```

4. **Rebuild after changes:**

```bash
docker-compose up -d --build
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Manual Docker Build

1. **Build the Docker image:**

```bash
docker build -t nextjs-app .
```

2. **Run the container:**

```bash
docker run -p 3000:3000 nextjs-app
```

### Build for Production (AMD64 Architecture)

For deployment to cloud platforms like Azure, AWS, or GCP:

```bash
docker build --platform linux/amd64 \
  --build-arg WORDPRESS_GRAPHQL_ENDPOINT=https://pambu-cms.org/graphql \
  -t your-registry/your-image:tag .
```

### Push to Azure Container Registry

1. **Login to Azure Container Registry:**

```bash
az acr login --name your-registry-name
```

2. **Build and tag the image:**

```bash
docker build --platform linux/amd64 \
  --build-arg WORDPRESS_GRAPHQL_ENDPOINT=https://pambu-cms.org/graphql \
  -t your-registry.azurecr.io/your-repo/your-image:tag .
```

3. **Push to registry:**

```bash
docker push your-registry.azurecr.io/your-repo/your-image:tag
```

### Environment Variables for Docker

The Docker setup supports the following environment variables:

- `WORDPRESS_GRAPHQL_ENDPOINT` - GraphQL API endpoint (required for build)
- `NODE_ENV` - Set to `production` for production builds
- `PORT` - Application port (default: 3000)

You can configure these in `docker-compose.yml` or pass them during build/run.

### Docker Image Optimization

The Dockerfile uses multi-stage builds to minimize image size:

- **Base stage**: Node.js Alpine image
- **Dependencies stage**: Installs npm packages
- **Builder stage**: Builds the Next.js application
- **Runner stage**: Production-ready image with minimal footprint

The final image runs as a non-root user (`nextjs`) for enhanced security.
