## Project Architecture

This is a **Next.js 16 App Router** e-commerce application built for **TADM Nutrition** with **Shopify** as the headless CMS. Key architectural features:

### Internationalization (i18n)
- **Supported locales**: English (`en`) and German (`de`)
- **Proxy**: Handles locale detection and URL rewriting (`proxy.ts`)
- **Dictionary system**: JSON files in `/dictionaries/` with `DictProvider.tsx` for context
- **URL structure**: `/{locale}/{page}` (e.g., `/en/product/handle`, `/de/mix`)

### Shopify Integration
- **Core API**: `/lib/shopify/index.ts` handles all Shopify operations
- **Environment variables required**:
  - `SHOPIFY_STORE_DOMAIN`
  - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
  - `SHOPIFY_REVALIDATION_SECRET`
- **GraphQL queries/mutations**: Organized in `/lib/shopify/queries/` and `/lib/shopify/mutations/`
- **Cart functionality**: Full cart management with optimistic UI updates

### Routing Structure
- **Main layout**: `/app/layout.tsx` (minimal wrapper with preconnect hints)
- **Localized routes**: `/app/[lang]/` with dynamic pages
- **Product pages**: `/app/[lang]/product/[handle]/page.tsx`
- **Category pages**: `/app/[lang]/search/[collection]/page.tsx`
- **Static product sections**: `/app/[lang]/algae`, `/app/[lang]/cannabis`, `/app/[lang]/cumin`, `/app/[lang]/mix`, `/app/[lang]/nature`, `/app/[lang]/softgel`, `/app/[lang]/walnut`

### UI Components
- **Design system**: Tailwind CSS with custom config, Urbanist font
- **Component library**: Custom components in `/components/` (including `/components/ui/`)
- **Icons**: Heroicons, Tabler Icons, and Lucide React
- **Animations**: Framer Motion for interactions

### Key Features
- **Server-side rendering** with React Server Components
- **Image optimization**: Next.js Image with Shopify CDN support (preconnect enabled)
- **Analytics**: Custom analytics integration
- **Cart management**: Context-based with local storage persistence
- **Search and filtering**: Collection-based product discovery
- **SEO**: FAQ schema, proper H1 hierarchy, hreflang tags

## Important File Locations

- **Shopify integration**: `/lib/shopify/`
- **UI components**: `/components/` (all components consolidated here)
- **Internationalization**: `/dictionaries/`, `/app/DictProvider.tsx`, `/proxy.ts`
- **Styling**: `/app/globals.css`, `/tailwind.config.js`
- **Product pages**: `/app/[lang]/` directory structure
- **Utilities**: `/lib/utils.ts` (includes cn() for Tailwind classes)

## Package Manager

This project uses **pnpm** with Node.js >=20. The project has React 19 and Next.js 16 with override configurations for React types.

## Path Aliases

The project uses `@/*` path alias pointing to the root directory (`./`), configured in `tsconfig.json`.
