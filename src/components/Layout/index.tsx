import * as React from 'react';
import { Helmet } from 'react-helmet';

import {
  GlobalStyles, PageBody, Grid, Main,
} from './styles';
import Header from '../Header';
import Hero from '../Hero';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <>
    <Helmet>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link href="//fonts.googleapis.com/css?family=Raleway:300,400,700,800%7COpen+Sans:400,600,700" rel="stylesheet" type="text/css" />
    </Helmet>

    <GlobalStyles />

    <PageBody>
      <Header />
      <Hero />

      <Grid>
        <Sidebar>
          Prueba
        </Sidebar>

        <Main>
          {children}
        </Main>
      </Grid>
      <Footer />
    </PageBody>
  </>
);

export default Layout;
