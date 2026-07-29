import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import { Suspense } from 'react';
import { getBaseUrl } from '@/lib/get-base-url';
import { resolveBrand } from '@/lib/brand';
import { BrandProvider } from '@/lib/brand-context';
import { Providers } from './Providers';
import '@umami/react-zen/styles.full.css';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
});

export default async function ({ children }) {
  if (process.env.DISABLE_UI) {
    return (
      <html>
        <body></body>
      </html>
    );
  }

  const brand = resolveBrand((await headers()).get('host'));

  return (
    <html
      lang="en"
      data-brand={brand.slug}
      className={`${bricolage.variable} ${inter.variable}`}
    >
      <head>
        {/* ?v=3 cache-buster: favicons caches ekstremt hardt; tvinger fersk (transparent) henting. */}
        <link rel="icon" type="image/png" href={`${brand.favicon}?v=3`} />
        <meta name="msapplication-TileColor" content={brand.themeColor} />
        <meta name="theme-color" content={brand.themeColor} />
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <BrandProvider slug={brand.slug}>
          <Suspense>
            <Providers>{children}</Providers>
          </Suspense>
        </BrandProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const brand = resolveBrand(headerStore.get('host'));

  return {
    metadataBase: getBaseUrl(headerStore),
    title: {
      template: `%s | ${brand.name}`,
      default: brand.name,
    },
  };
}
