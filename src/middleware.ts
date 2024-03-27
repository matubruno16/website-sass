import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always',

  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    '/': '/',
    '/blog': '/blog',
 
    // If locales use different paths, you can
    // specify each external path per locale.
    '/about': {
      en: '/about',
      es: '/nosotros',
    },
  }
});
 
export const config = {
// Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};