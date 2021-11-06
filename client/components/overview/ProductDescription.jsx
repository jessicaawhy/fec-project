import React from 'react';
import PropTypes from 'prop-types';
import {
  SloganStyle, DescriptionStyle, FeaturesStyle, FeatureListStyle, FeatureStyle,
}
  from './styles/ProductDescription.style';

const ProductDescription = ({ id }) => (
  <div data-testid="product-description">
    <SloganStyle
      data-testid="slogan"
      className="slogan"
    >
      {id.slogan}

    </SloganStyle>
    <DescriptionStyle
      data-testid="description"
      className="description"
    >
      {id.description}

    </DescriptionStyle>
    <FeaturesStyle>
      Features

    </FeaturesStyle>
    <FeatureListStyle
      data-testid="features"
      className="features"
    >
      {id.features.map((feature) => (
        <FeatureStyle>
          {`${feature.feature}: ${feature.value}`}
        </FeatureStyle>
      ))}
    </FeatureListStyle>
  </div>
);

export default ProductDescription;
ProductDescription.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
