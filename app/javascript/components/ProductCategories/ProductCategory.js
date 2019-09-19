import React from "react"
import PropTypes from "prop-types"

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'

import ProductListItem from './ProductListItem'

const styles = theme => ({
  root: {
    padding: '1em',
    textTransform: 'capitalize',
  },
});

class ProductCategory extends React.Component {
  render () {
    const {name, products, classes} = this.props;
    const hasProducts = Array.isArray(products) && products.length;
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h4">
                {name}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {(hasProducts && <Grid
                container
                direction="row"
                justify="center"
                spacing={2}
              >
                { products.map(p =>
                  <ProductListItem product={p} key={p.id}/>
                )}
              </Grid>
            )}
            {(!hasProducts && <Typography variant="h3">
                There are no products for this category
              </Typography>
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

ProductCategory.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.object.isRequired,
  products: PropTypes.array
};
export default withStyles(styles)(ProductCategory)
