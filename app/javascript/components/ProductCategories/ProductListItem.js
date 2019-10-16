import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'

import {capitalize} from "../../helpers/strings"

class ProductListItem extends React.Component {
  render () {
    const {product, category} = this.props;
    const capitalizedProductName = capitalize(product.name);
    console.log(this.props)
    console.log(product)
    return (
      <React.Fragment>
        <Card xs={12} sm={6} md={4}>
          <Card.Body>
            <Card.Title>
              {capitalizedProductName}
            </Card.Title>
            {(product.description !== "" && <Card.Text>
                {product.description}
              </Card.Text>
            )}
            <Card.Link href={`/categories/${category}/products/${product.name}`}>View</Card.Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

ProductListItem.propTypes = {
  category: PropTypes.string.required,
  product: PropTypes.object.required
};
export default ProductListItem
