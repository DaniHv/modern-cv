import * as React from 'react';
import { navigate } from 'gatsby';

const NotFound = () => {
  React.useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default NotFound;
