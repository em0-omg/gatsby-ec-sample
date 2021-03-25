import React from 'react';
import CollectionTile from '../CollectionTile/index';
import { RemainingCollections } from './styles';

export function HomepageCollectionsGrid({ collections }) {
  const saleCollection = collections.find(
    collection => collection.title === 'SALE'
  );
  const remainingCollections = collections.filter(
    collection => collection.title !== 'SALE'
  );
  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale={true}
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          key={saleCollection.shopifyId}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={
            saleCollection.image?.localFile.childImageSharp.fluid
          }
        />
      )}
      <RemainingCollections>
        {remainingCollections.map(collection => {
          return (
            <CollectionTile
              destination={`/all-products?c=${encodeURIComponent(
                collection.shopifyId
              )}`}
              key={collection.shopifyId}
              title={collection.title}
              description={collection.description}
              backgroundImage={
                collection.image?.localFile.childImageSharp.fluid
              }
            />
          );
        })}
      </RemainingCollections>
    </div>
  );
}
