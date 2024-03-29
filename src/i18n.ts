import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'es', 'pt'];
 
export let baseLocale = "";

export default getRequestConfig(async ({locale}) => {
     baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale)) notFound();
 
  return {
    messages: (await import(`../messages/${baseLocale}.json`)).default
  };
});