import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

import ProductListItem from './ProductListItem'

class ProductCategory extends React.Component {
  render () {
    const {name, products, slug} = this.props;
    const hasProducts = Array.isArray(products) && products.length;
    return (
      <React.Fragment>
        <Container>
          <div xs={12}>
            <Container xs={12}>
              <h3>
                {name}
              </h3>
            </Container>
          </div>
          <Container xs={12}>
            {(!!hasProducts && <CardColumns>
                { products.map((p, i) =>
                  <ProductListItem product={p} categoryName={name} categorySlug={slug} key={i} xs={12} sm={6} lg={4}/>
                )}
              </CardColumns>
            )}
            {(!hasProducts && <h2>
                There are no products for this category
              </h2>
            )}
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

ProductCategory.propTypes = {
  name: PropTypes.string.required,
  slug: PropTypes.string.required,
  products: PropTypes.array
};
export default ProductCategory
