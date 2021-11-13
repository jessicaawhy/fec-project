import React from 'react';
import PropTypes from 'prop-types';

import {
  SloganStyle, DescriptionStyle, FeatureListStyle, FeatureStyle, HorizontalRule,
  DescriptionContainer,
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
          <h4>Features</h4>
          {productInfo.features.map((featureList) => (
            <>
              <HorizontalRule />
              {`${featureList.feature}: ${featureList.value}`}
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
