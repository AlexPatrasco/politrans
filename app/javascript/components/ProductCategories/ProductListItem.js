import React from "react"
import PropTypes from "prop-types"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

class ProductListItem extends React.Component {
  render () {
    const {product} = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h2">
            {product.name}
          </Typography>
          {(product.description !== "" && <Typography variant="subtitle1">
              {product.description}
            </Typography>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object
};
export default ProductListItem
