import React from 'react';
import PropTypes from 'prop-types';
import {
  SloganStyle, DescriptionStyle, FeaturesStyle, FeatureListStyle, FeatureStyle,
}
  from './styles/ProductDescription.style';

const ProductDescription = ({ id }) => (
  <div data-testid="productDescription">
    <SloganStyle>{id.slogan}</SloganStyle>
    <DescriptionStyle>{id.description}</DescriptionStyle>
    <FeaturesStyle>Features</FeaturesStyle>
    <FeatureListStyle>
      {id.features.map((feature) => (
        <FeatureStyle>{`${feature.feature}: ${feature.value}`}</FeatureStyle>
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
