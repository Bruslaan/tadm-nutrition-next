## Project Architecture

This is a **Next.js 15 App Router** e-commerce application built for **TADM Nutrition** with **Shopify** as the headless CMS. Key architectural features:

### Internationalization (i18n)
- **Supported locales**: English (`en`) and German (`de`)
- **Middleware**: Handles locale detection and URL rewriting (`middleware.js`)
- **Dictionary system**: JSON files in `/dictionaries/` with `DictProvider.tsx` for context
- **URL structure**: `/{locale}/site/{page}` (e.g., `/en/site/product/handle`)

### Shopify Integration
- **Core API**: `/lib/shopify/index.ts` handles all Shopify operations
- **Environment variables required**: 
  - `SHOPIFY_STORE_DOMAIN`
  - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
  - `SHOPIFY_REVALIDATION_SECRET`
- **GraphQL queries/mutations**: Organized in `/lib/shopify/queries/` and `/lib/shopify/mutations/`
- **Cart functionality**: Full cart management with optimistic UI updates

### Routing Structure
- **Main layout**: `/app/layout.tsx` (minimal wrapper)
- **Localized routes**: `/app/[lang]/` with dynamic pages
- **Product pages**: `/app/[lang]/site/product/[handle]/page.tsx`
- **Category pages**: `/app/[lang]/site/search/[collection]/page.tsx`
- **Static product sections**: Individual product pages (algae, cannabis, cumin, mix, nature, softgel, walnut)

### UI Components
- **Design system**: Tailwind CSS with custom config, Geist font
- **Component library**: Custom components in `/components/` and `/src/components/ui/`
- **Icons**: Heroicons, Tabler Icons, and Lucide React
- **Animations**: Framer Motion for interactions

### Key Features
- **Server-side rendering** with React Server Components
- **Image optimization**: Next.js Image with Shopify CDN support
- **Analytics**: Shopify analytics integration
- **Cart management**: Context-based with local storage persistence
- **Search and filtering**: Collection-based product discovery

## Important File Locations

- **Shopify integration**: `/lib/shopify/`
- **UI components**: `/components/` and `/src/components/ui/`
- **Internationalization**: `/dictionaries/`, `/app/DictProvider.tsx`, `/middleware.js`
- **Styling**: `/app/globals.css`, `/tailwind.config.js`
- **Product pages**: `/app/[lang]/site/` directory structure

## Package Manager

This project uses **pnpm** with Node.js >=20. The project has React 19 and Next.js 15 with override configurations for React types.