import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { Navbar, NavSection, NavItem } from './styles';

const query = graphql`
  {
    information: dataJson {
      mainPage
    }
  }
`;

const Header: React.FunctionComponent = () => {
  const { information: { mainPage } } = useStaticQuery(query);
  const intl = useIntl();

  return (
    <Navbar>
      <NavSection>
        <NavItem>
          <a href={mainPage} target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: 'mainPage' })}
          </a>
        </NavItem>
      </NavSection>

      <NavSection>
        <NavItem className={intl.locale === 'en' && 'active'}>
          <Link to="/en">EN</Link>
        </NavItem>
        <NavItem className={intl.locale === 'es' && 'active'}>
          <Link to="/es">ES</Link>
        </NavItem>
      </NavSection>
    </Navbar>
  );
};

export default Header;
