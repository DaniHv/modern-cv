import { useIntl } from 'gatsby-plugin-intl';

const useTranslation = (localeList) => {
  const intl = useIntl();
  const [actualLocale] = localeList.filter(({ locale }) => locale === intl.locale);

  if (actualLocale) return actualLocale.text;

  const [defaultLocale] = localeList.filter(({ locale }) => locale === intl.defaultLocale);
  if (defaultLocale) return defaultLocale.text;

  return '[ERR] No Translations Provided.';
};

export default useTranslation;
