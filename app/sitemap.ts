import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const routes = ['/', '/about', '/courses', '/resources', '/speaking', '/consulting', '/blog', '/contact'];
  const lastmod = new Date();
  return routes.map((path) => ({ url: `${base}${path}`, lastModified: lastmod }));
}
