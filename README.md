# Next JS Boilerplate

This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

# Project Structure

## src:

- ### **_app_**

    - **/404**
      Contains template 404 error page for handling "page not found" errors.

    - **/about**
    - **/calendar**

        - **/fonts**
          Directory for storing fonts used in the project.

        - **/components**
          Contains components for main page:

            - `HeroSection.tsx` — Components for the hero section.
            - `UpcomingEventsSection.tsx` — Components for the upcoming events section.

        - **/styles**
          Contains global styles and icon styles:

            - `globals.css` — Global styles for the application.
            - `icomoon.css` — Styles for Icomoon icons.

        - **layout.tsx**
          The main layout file of the application, defining shared structure across pages (header, footer, etc.).

        - **not-found.tsx**
          This file redirects users to the `/404` page when a non-existent route is accessed, ensuring proper 404 error
          handling.

        - **page.tsx**
          The main or root page of the application.

- ### **_libs_**

    - **/api-client**

    - **/components**
      Contains reusable components organized into subdirectories:

          - **/buttons**

          - **/footer**

          - **/header**

          - **/icon**
            Contains components for handling icons (`Icon.tsx`).

          - **/links**
            Contains link-related components, such as:

              - `CustomLink.tsx` — Component for custom links.

          - **/mobile-menu**

          - **/tags**
            Contains components for activity and distance tags:

              - `ActivityTypeTag.tsx` — For activity type tags.
              - `DistanceTag.tsx` — For distance tags.

          - `components.ts` — Re-exports common components used in this section.

        - **/context**
    - **/enums**
      Directory for enum types used throughout the project.
        - **/hooks**
          Directory for custom hooks used to encapsulate and manage reusable logic throughout the project.
    - **/locale**
    - **/utils**

- ### **_i18_**
    - **`config.ts`**
    - **`request.ts`**

# Basics

## Icon Type

![Icon Type](https://firebasestorage.googleapis.com/v0/b/dasboard-bb88c.appspot.com/o/icon-type.webp?alt=media&token=4e310b68-2b02-4773-bf7d-d7bde0fc7bbb)

### Usage

```tsx
<Icon name={IconType.INFO} className="text-xl text-dark" />
```

## Dates

Use [DayJS](https://day.js.org/)

## API Calls

... TODO
