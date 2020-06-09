import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';
import StudiesList from '../components/StudiesList';
import JobList from '../components/JobList';
import CertificationList from '../components/CertificationList';
import KnowledgeList from '../components/KnowledgeList';

const Index: React.FunctionComponent = () => (
  <>
    <SEO />

    <Layout>
      <About />
      <JobList max={3} toggable />
      <StudiesList max={3} toggable />
      <CertificationList max={3} toggable />
      <KnowledgeList max={6} toggable />
    </Layout>
  </>
);

export default Index;
