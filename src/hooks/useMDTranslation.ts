import { useIntl } from 'gatsby-plugin-intl';

const useMDTranslation = (mds) => {
  const intl = useIntl();

  const [mdActualLocale] = mds.filter(({ node: { name } }) => name.split('.')[1] === intl.locale);
  if (mdActualLocale) return mdActualLocale.node.md.html;

  const [mdDefaultLocale] = mds.filter(({ node: { name } }) => name.split('.')[1] === intl.defaultLocale);
  if (mdDefaultLocale) return mdDefaultLocale.node.md.html;

  return null;
};

export default useMDTranslation;
