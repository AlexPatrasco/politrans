import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'

class ProductListItem extends React.Component {
  render () {
    const {product, categoryName, categorySlug} = this.props;
    return (
      <React.Fragment>
        <Card xs={12} sm={6} md={4}>
          <Card.Body>
            <Card.Title>
              {product.name}
            </Card.Title>
            {(product.description !== "" && <Card.Text>
                {product.description}
              </Card.Text>
            )}
            <Card.Link href={`/categories/${categorySlug}/products/${product.slug}`}>View</Card.Link>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

ProductListItem.propTypes = {
  categoryName: PropTypes.string.required,
  categorySlug: PropTypes.string.required,
  product: PropTypes.object.required
};
export default ProductListItem
