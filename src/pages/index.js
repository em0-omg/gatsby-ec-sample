import React from 'react';
import {
  Layout,
  HomepageCollectionsGrid,
  FeaturedProducts,
  SEO,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <SEO title="Homepage" description="The MadHatter store homepage" />
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured hats'
        )}
      />
      {!!collections.find(
        collection => collection.title === 'Featured hats'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
