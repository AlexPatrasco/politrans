import React from "react"
import PropTypes from "prop-types"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import CategoryDropdown from './CategoryDropdown'

class Header extends React.Component {
  render () {
    const {productCategories} = this.props;
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Politrans</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {
                Object.keys(productCategories).map((name, index) => {
                  const products = productCategories[name];
                  return <CategoryDropdown name={name} productList={products} key={index} />
                }
              )}
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/promotions">Promotions</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  productCategories: PropTypes.object.required
};
export default Header
