import React from "react"
import PropTypes from "prop-types"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

import {capitalize} from "../../helpers/strings"

class CategoryDropdown extends React.Component {
  render () {
    const {name, productList} = this.props;
    const capitalizedName = capitalize(name);
    if (productList && productList.length) {
      return (
        <React.Fragment>
          <NavDropdown title={capitalizedName} id={name}>
            {
              productList.map((productName, index) => {
                const capitalizedProductName = capitalize(productName);
                return <NavDropdown.Item href={`/categories/${name}/products/${capitalizedProductName}`} key={index}>{capitalizedProductName}</NavDropdown.Item>
              })
            }
            <NavDropdown.Divider />
            <NavDropdown.Item href={`/categories/${name}`}>View all</NavDropdown.Item>
          </NavDropdown>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Nav.Link href={`/categories/${name}`}>{capitalizedName}</Nav.Link>
      </React.Fragment>
    );

  }
}

CategoryDropdown.propTypes = {
  name: PropTypes.string.required,
  productList: PropTypes.array
};
export default CategoryDropdown
