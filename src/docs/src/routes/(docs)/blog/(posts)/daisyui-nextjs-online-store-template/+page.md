---
title: "Introducing: Online store template for NextJS and daisyUI"
desc: Learn to create a professional online store using our Online Store Template, powered by Lemon Squeezy API and customizable product data.
published: true
date: 2025-01-18
thumbnail: https://img.daisyui.com/images/blog/online-store-template-thumbnail.webp
author: Abhijeet Biswal
tags:
  - Templates
---

## Introduction

Creating an online store has never been easier! With the ["Online Store Template"](https://www.daisyui.com/store/#426780) available at Official [daisyUI store](https://www.daisyui.com/store), you can quickly set up a professional store using Next.js, TypeScript, and the Lemon Squeezy API. This template allows for extensive customization with additional metadata stored in JSON files. Let’s dive in!

## 1. Installation

Begin by setting up the project dependencies.

### Step 1: Install Dependencies

Run the following command in your terminal to install the required dependencies:

```bash
npm install
```

To start the development server:

```bash
npm run dev
```

This will run your site in development mode at `http://localhost:3000`.

## 2. Configure Your Site

### Adding Your Lemon Squeezy API

#### Step 1: Configure the API

By default, the site displays example data from the `data/lemonsqueezy-products.example.json` file. To connect your store to Lemon Squeezy, follow these steps:

1. **Generate an API Key**

   - Log in to your [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com/settings/api).
   - Create a new API key and copy it.

2. **Add the API Key to the Environment File**

![env file example](https://img.daisyui.com/images/blog/store-env.webp)

- Create a `.env` file in the root of your project.
- Add the following line:
  ```env
  LEMON_SQUEEZY_API_KEY=your_api_key_here
  ```

Replace `your_api_key_here` with the API key you copied earlier.

3. **Test Your Integration**
   Restart the development server to load the environment variables and see your products fetched from Lemon Squeezy.

### Extending Product Data

#### Step 2: Add Metadata

The Lemon Squeezy dashboard allows limited customization of product data. To enhance your store’s functionality, use the `data/metadata.json` file for additional information. This includes:

- **Categories**: Add custom categories like `trending`, `new arrivals`, or `bestsellers`.
- **Variants**: Define product variations (e.g., sizes, colors) with names and links.
- **Images**: Include high-quality images for product galleries.
- **Details**: Add detailed product descriptions and technical information.

Example `metadata.json` entry:

```json
{
  "id": "12345",
  "availability": true,
  "sale": true,
  "category": ["trending", "bestsellers"],
  "original_price": "$50",
  "variant": {
    "size": [
      { "name": "Small", "link": "https://example.com/small" },
      { "name": "Medium", "link": "https://example.com/medium" }
    ]
  },
  "info": {
    "Material": "100% Cotton",
    "Care Instructions": "Machine washable"
  },
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
}
```

### Configure Your Site

#### Step 3: Customizing the Site

To personalize your store’s content and design, edit the following files:

1. **`data/site.ts`**: Update the global site settings, including the site name, hero section, and footer content.
2. **`data/sidebar.ts`**: Modify the sidebar content, including categories and quick links.

#### Editing Pages

To customize the core pages of your store, update these files:

![pages route](https://img.daisyui.com/images/blog/pages-route-example.webp)

- **Homepage** (`/page.tsx`):

  - Navigate to the `app/page.tsx` file.
  - Update the hero section, featured products, and banners to reflect your brand.

  Example snippet from `page.tsx`:

  ```tsx
  export default async function Home() {
    return (
      <div>
        <Hero />
        <Features />
        <TrendingProducts />
        <Categories />
        <OfferCard />
        <NewArrivals />
        <NewsLetter />
      </div>
    );
  }
  ```

- **Category and Collection Pages** (`/collections/[slug].tsx`):

  - Located in `app/collections/[slug].tsx`, this file controls category and collection pages.
  - Use this file to manage the display of products dynamically based on categories.

- **Product Details Page** (`/products/[slug].tsx`):

  - Located in `app/products/[slug].tsx`, this file handles individual product details.
  - This page dynamically displays product images, information, and variants.

  Example product details layout:

  ```tsx
  const ProductDetails = () => {
    return (
      <div className="pb-20">
        <div className="mt-10 flex flex-col">
          <div className="flex flex-col lg:grid gap-6 lg:gap-12 lg:grid-cols-2">
            <ProductImage params={{ slug: slug as string }} />
          </div>
        </div>
      </div>
    );
  };
  ```

## 3. Build Your Store for Production

Once you're happy with your store, it's time to build it for production:

```bash
npm run build
```

This command will optimize and generate your site’s static assets, ready for deployment.

## 4. Deployment Options

Now that your store is built, you can deploy it using one of the following platforms:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

It can also be deployed anywhere Next.js works. For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).

## Conclusion

The ["Online Store Template"](https://www.daisyui.com/store/#426780) by daisyUI simplifies the process of building and managing an online store. With Lemon Squeezy API and customizable JSON metadata, you have the flexibility to create a store that meets your unique needs. Start building your store today and take your business to the next level!

## Need Help?

If you have questions or need assistance, join our [Discord community](https://daisyui.com/discord/). We’re here to help you get started and troubleshoot any issues.
