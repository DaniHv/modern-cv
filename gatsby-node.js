const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MultilanguageString {
      locale: String
      text: String
    }
    type dataJson implements Node @dontInfer {
      about: JSON
    }
    type Organization {
      name: String!
      url: String
      logo: String
    }
    type DateMY {
      month: Int
      year: Int
    }
    type Courses {
      id: String!
      title: [MultilanguageString]
      description: [MultilanguageString]
      badge: String
      date: DateMY
      url: String
    }
    type CertificationsJson implements Node @dontInfer {
      id: String!
      badge: String
      title: [MultilanguageString]
      description: [MultilanguageString]
      organization: Organization!
      date: DateMY!
      page: String
      url: String
      certificationImg: String
      certificationUrl: String
      courses: [Courses]
    }
    type Institution {
      name: String!
      url: String
      logo: String
    }
    type Period {
      since: DateMY!
      until: DateMY
    }
    type StudiesJson implements Node @dontInfer {
      title: [MultilanguageString]
      description: [MultilanguageString]
      institution: Institution!
      period: Period!,
      page: String
    }
    type JobsJson implements Node @dontInfer {
      id: String
      title: [MultilanguageString]
      description: [MultilanguageString]
      organization: Organization!
      period: Period!,
      page: String,
    }
    type InterestsJson implements Node @dontInfer {
      title: [MultilanguageString]
    }
    type HobbiesJson implements Node @dontInfer {
      title: [MultilanguageString]
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data: results } = await graphql(`
    {
      certifications: allCertificationsJson {
        edges {
          node {
            title {
              locale
              text
            }
            badge
            description {
              locale
              text
            }
            organization {
              name
              url
            }
            date {
              month
              year
            }
            page
            url
            certificationImg
            certificationUrl
            courses {
              title {
                locale
                text
              }
              description {
                locale
                text
              }
              badge
              date {
                month
                year
              }
              url
            }
          }
        }
      }
      jobs: allJobsJson {
        edges {
          node {
            id
            title {
              locale
              text
            }
            description {
              locale
              text
            }
            organization {
              name
              url
              logo
            }
            period {
              since {
                month
                year
              }
              until {
                month
                year
              }
            }
            page
          }
        }
      }
      studies: allStudiesJson {
        edges {
          node {
            id
            title {
              locale
              text
            }
            description {
              locale
              text
            }
            institution {
              name
              url
              logo
            }
            period {
              since {
                month
                year
              }
              until {
                month
                year
              }
            }
            page
          }
        }
      }
      mds: allFile(filter: { sourceInstanceName: { eq: "md" } }) {
        edges {
          node {
            name
            dir: relativeDirectory
            md: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);
  const {
    jobs, certifications, studies, mds,
  } = results;

  jobs.edges.forEach(({ node: job }) => {
    if (!job.page) return;
    const jobMds = mds.edges.filter(
      ({ node }) => node.dir === 'jobs' && node.name.split('.')[0] === job.page,
    );

    createPage({
      path: `/job/${job.page}`,
      component: path.join(__dirname, 'src', 'templates', 'job.tsx'),
      context: {
        job,
        mds: jobMds,
      },
    });
  });

  certifications.edges.forEach(({ node: certification }) => {
    if (!certification.page) return;
    const certificationMds = mds.edges.filter(
      ({ node }) => node.dir === 'certifications' && node.name.split('.')[0] === certification.page,
    );

    createPage({
      path: `/certification/${certification.page}`,
      component: path.join(__dirname, 'src', 'templates', 'certification.tsx'),
      context: {
        certification,
        mds: certificationMds,
      },
    });
  });

  studies.edges.forEach(({ node: study }) => {
    if (!study.page) return;
    const studyMds = mds.edges.filter(
      ({ node }) => node.dir === 'studies' && node.name.split('.')[0] === study.page,
    );

    createPage({
      path: `/study/${study.page}`,
      component: path.join(__dirname, 'src', 'templates', 'study.tsx'),
      context: {
        study,
        mds: studyMds,
      },
    });
  });
};
