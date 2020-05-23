import * as React from 'react';

import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
