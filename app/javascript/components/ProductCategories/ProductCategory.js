import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'

import ProductListItem from './ProductListItem'
import {capitalize} from "../../helpers/strings"

class ProductCategory extends React.Component {
  render () {
    const {name, products} = this.props;
    const hasProducts = Array.isArray(products) && products.length;
    return (
      <React.Fragment>
        <Container>
          <div xs={12}>
            <Container xs={12}>
              <h3>
                {capitalize(name)}
              </h3>
            </Container>
          </div>
          <Container xs={12}>
            {(hasProducts && <CardColumns>
                { products.map((p, i) =>
                  <ProductListItem product={p} category={name} key={i} xs={12} sm={6} lg={4}/>
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
  name: PropTypes.string,
  products: PropTypes.array
};
export default ProductCategory
