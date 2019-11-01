import React from "react"
import PropTypes from "prop-types"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

class CategoryDropdown extends React.Component {
  render () {
    const {name, productList, slug} = this.props;
    if (productList && productList.length) {
      return (
        <React.Fragment>
          <NavDropdown title={name} id={name} >
            {
              productList.map((product, index) => {
                const [productName, productSlug] = product;
                return <NavDropdown.Item href={`/categories/${slug}/products/${productSlug}`} key={index}>{productName}</NavDropdown.Item>
              })
            }
            <NavDropdown.Divider />
            <NavDropdown.Item href={`/categories/${slug}`}>View all</NavDropdown.Item>
          </NavDropdown>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Nav.Link href={`/categories/${slug}`}>{name}</Nav.Link>
      </React.Fragment>
    );

  }
}

CategoryDropdown.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  productList: PropTypes.array
};
export default CategoryDropdown
