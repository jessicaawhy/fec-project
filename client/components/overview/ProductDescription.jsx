import React from 'react';
import PropTypes from 'prop-types';

import {
  SloganStyle, DescriptionStyle, FeatureListStyle, FeatureStyle, HorizontalRule,
  DescriptionContainer, Feature, FeatureTitle,
}
  from './styles/ProductDescription.style';

const ProductDescription = ({ productInfo }) => {
  let idLoaded = false;

  if (productInfo.features) {
    idLoaded = true;
  }

  return (
    idLoaded
    && (
    <DescriptionContainer data-testid="product-description">
      <SloganStyle
        data-testid="slogan"
        className="slogan"
      >
        {productInfo.slogan}

      </SloganStyle>

      <DescriptionStyle
        data-testid="description"
        className="description"
      >
        {productInfo.description}

      </DescriptionStyle>

      <FeatureListStyle
        data-testid="features"
        className="features"
      >
        <FeatureStyle>
          <FeatureTitle>Features</FeatureTitle>
          {productInfo.features.map((featureList) => (
            <>
              <HorizontalRule />
              <Feature>
                {
                (featureList.value !== null)
                  ? (
                    `${featureList.feature}: ${featureList.value}`)
                  : (
                    `${featureList.feature}`)
                }
              </Feature>
            </>
          ))}
        </FeatureStyle>
      </FeatureListStyle>

    </DescriptionContainer>
    )
  );
};

export default ProductDescription;

ProductDescription.propTypes = {
  productInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};
