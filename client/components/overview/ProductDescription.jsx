import React from 'react';
import PropTypes from 'prop-types';
import {
  SloganStyle, DescriptionStyle, FeaturesStyle, FeatureListStyle, FeatureStyle,
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
    <div data-testid="product-description">
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
      <FeaturesStyle>
        Features

      </FeaturesStyle>
      <FeatureListStyle
        data-testid="features"
        className="features"
      >
        {productInfo.features.map((featureList) => (
          <FeatureStyle>
            {`${featureList.feature}: ${featureList.value}`}
          </FeatureStyle>
        ))}
      </FeatureListStyle>
    </div>
    )
  );
};

export default ProductDescription;
ProductDescription.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
