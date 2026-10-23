# Graph Report - sweets_frontend  (2026-09-18)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 383 nodes · 595 edges · 38 communities (17 shown, 21 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.85)
- Token cost: 1,278 input · 1,726 output

## Graph Freshness
- Built from commit: `66dfbf05`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Material UI Assets and Icons
- Material UI Layout Components
- Data Fetching and API
- Product Card Components
- ESLint Configuration Setup
- TypeScript Compiler Options
- Material UI Styling and Loaders
- Product Data Types and Views
- Product Display Components
- Development Dependencies and Linting
- Image Carousel Slideshow
- Theming and Application Layout
- Styled Festival Components
- Core UI Library Dependencies
- Build and Testing Scripts
- Festival Data Definitions
- Application Styles and Titles
- Next.js Configuration
- Environment Variables Constants
- Style Guide Configuration
- External Documentation Reference
- Next.js Project Setup
- ESLint Configuration
- ESLint Issue Tracking
- Git Workflow Discussion
- Graph Data Definition
- Graph Reporting Output
- Graphify Project Core
- Graphify Output Directory
- Husky Git Hooks Setup
- Next.js Application Structure
- Next.js ESLint Issues
- API Route Definition
- Main Page Component
- Prettier Configuration
- TypeScript Configuration
- Wiki Documentation

## God Nodes (most connected - your core abstractions)
1. `@mui/material` - 25 edges
2. `compilerOptions` - 19 edges
3. `color` - 14 edges
4. `react` - 12 edges
5. `scripts` - 11 edges
6. `ProductsType` - 8 edges
7. `getAllProducts()` - 8 edges
8. `productDetailsRoute()` - 8 edges
9. `useProducts()` - 7 edges
10. `loadData()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `getAllFestivals()` --calls--> `loadData()`  [EXTRACTED]
  src/apis/festival/festival.ts → src/apis/api.ts
- `generateStaticParams()` --calls--> `getAllProducts()`  [EXTRACTED]
  src/app/products/[slug]/page.tsx → src/apis/product/product.ts
- `loadProducts()` --calls--> `getAllProducts()`  [EXTRACTED]
  src/common/hooks/useProducts.ts → src/apis/product/product.ts
- `Body()` --calls--> `getProductByCategory()`  [EXTRACTED]
  src/content/main-page/body/Body.tsx → src/content/products/utils/utils.ts
- `Marquee()` --calls--> `style()`  [EXTRACTED]
  src/common/components/marquee/Marquee.tsx → src/common/components/marquee/style.ts

## Import Cycles
- None detected.

## Communities (38 total, 21 thin omitted)

### Community 0 - "Material UI Assets and Icons"
Cohesion: 0.07
Nodes (30): public_assests_karanji, public_assests_logo, public_assests_modak, ref_mui_icons_material_google, ref_mui_icons_material_instagram, @mui/material, ref_next_image, ref_next_link (+22 more)

### Community 1 - "Material UI Layout Components"
Cohesion: 0.07
Nodes (25): ref_mui_icons_material_accountcircle, ref_mui_icons_material_mail, ref_mui_icons_material_notifications, ref_mui_material_appbar, ref_mui_material_badge, ref_mui_material_box, ref_mui_material_iconbutton, ref_mui_material_menu (+17 more)

### Community 2 - "Data Fetching and API"
Cohesion: 0.12
Nodes (20): next, loadData(), loadReview(), getAllFestivals(), getAllProducts(), getProductDetails(), getAllReviews(), LandingPage() (+12 more)

### Community 3 - "Product Card Components"
Cohesion: 0.11
Nodes (19): ref_mui_material_card, ref_mui_material_cardcontent, ref_mui_material_cardmedia, ref_mui_material_typography, ref_next_navigation, ref_node_modules_emotion_react_dist_declarations_src_jsx_namespace, react, generateStaticParams() (+11 more)

### Community 4 - "ESLint Configuration Setup"
Cohesion: 0.07
Nodes (27): eslintConfig, name, private, version, @emotion/cache, @emotion/react, eslint, eslint-config-next (+19 more)

### Community 5 - "TypeScript Compiler Options"
Cohesion: 0.07
Nodes (26): compilerOptions, allowJs, baseUrl, esModuleInterop, forceConsistentCasingInFileNames, ignoreDeprecations, incremental, isolatedModules (+18 more)

### Community 6 - "Material UI Styling and Loaders"
Cohesion: 0.09
Nodes (19): ref_mui_material_avatar, ref_mui_material_backdrop, ref_mui_material_chip, ref_mui_material_circularprogress, ref_mui_material_overridablecomponent, ref_mui_material_tabs, Loader(), CardStyle (+11 more)

### Community 7 - "Product Data Types and Views"
Cohesion: 0.16
Nodes (16): ref_mui_material_usemediaquery, Headline(), Categories, CategoriesKeys, ProductsType, Category, Festival, ProductDetails() (+8 more)

### Community 8 - "Product Display Components"
Cohesion: 0.15
Nodes (13): ref_common_temp_images_empty_jpg, ref_mui_icons_material_add, ref_mui_icons_material_currencyrupeerounded, ref_mui_icons_material_removerounded, Section, ProductDetailsProps, container, EmptyBowlImg (+5 more)

### Community 9 - "Development Dependencies and Linting"
Cohesion: 0.12
Nodes (16): devDependencies, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-import, eslint-plugin-react, husky (+8 more)

### Community 10 - "Image Carousel Slideshow"
Cohesion: 0.15
Nodes (12): public_assests_slideshow_slide_one, public_assests_slideshow_slide_two, ref_mui_icons_material_keyboardarrowleft, ref_mui_icons_material_keyboardarrowright, useCarousel(), MainCarousel(), leftArrow, MainCarouselStyle (+4 more)

### Community 11 - "Theming and Application Layout"
Cohesion: 0.16
Nodes (11): ref_mui_material_colors, ref_mui_material_cssbaseline, ref_mui_material_nextjs_v16_approuter, ref_mui_material_styles, ref_next_font_google, metadata, ColorModeContext, Providers() (+3 more)

### Community 12 - "Styled Festival Components"
Cohesion: 0.17
Nodes (10): @emotion/styled, activeFestival, Container, FestivalBox, FestivalContainer, festivalStyles, ImageButton, ImageStyle (+2 more)

### Community 13 - "Core UI Library Dependencies"
Cohesion: 0.18
Nodes (11): dependencies, @emotion/cache, @emotion/react, @emotion/styled, lodash, @mui/icons-material, @mui/material, @mui/material-nextjs (+3 more)

### Community 14 - "Build and Testing Scripts"
Cohesion: 0.18
Nodes (11): scripts, build, check-format, check-lint, check-types, dev, format, next-lint (+3 more)

### Community 15 - "Festival Data Definitions"
Cohesion: 0.50
Nodes (3): FESTIVALS, FestivalsE, Keys

### Community 16 - "Application Styles and Titles"
Cohesion: 0.50
Nodes (3): appbar, style, title

## Knowledge Gaps
- **165 isolated node(s):** `HeadlineProps`, `MarqueeProps`, `PlatFormLinkType`, `VideoPlayerType`, `HeroType` (+160 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 225 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@mui/material` connect `Material UI Assets and Icons` to `Material UI Layout Components`, `Product Card Components`, `ESLint Configuration Setup`, `Material UI Styling and Loaders`, `Product Data Types and Views`, `Product Display Components`, `Image Carousel Slideshow`, `Styled Festival Components`, `Application Styles and Titles`?**
  _High betweenness centrality (0.319) - this node is a cross-community bridge._
- **Why does `react` connect `Product Card Components` to `Material UI Assets and Icons`, `Material UI Layout Components`, `Data Fetching and API`, `ESLint Configuration Setup`, `Product Display Components`, `Image Carousel Slideshow`, `Theming and Application Layout`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Dependencies and Linting` to `ESLint Configuration Setup`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `HeadlineProps`, `MarqueeProps`, `PlatFormLinkType` to the rest of the system?**
  _165 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Material UI Assets and Icons` be split into smaller, more focused modules?**
  _Cohesion score 0.06693877551020408 - nodes in this community are weakly interconnected._
- **Should `Material UI Layout Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07459677419354839 - nodes in this community are weakly interconnected._
- **Should `Data Fetching and API` be split into smaller, more focused modules?**
  _Cohesion score 0.12043010752688173 - nodes in this community are weakly interconnected._