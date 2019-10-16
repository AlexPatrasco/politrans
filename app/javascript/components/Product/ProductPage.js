import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ReactHtmlParser from 'react-html-parser';

import {capitalize} from "../../helpers/strings"

class ProductPage extends React.Component {
  render () {
    const {name, description, imageLink} = this.props;
    return (
      <React.Fragment>
        <Container>
          <Card xs={12}>
            <Card.Body>
              {imageLink && <Card.Img variant="top" src={imageLink} />}
              <Card.Title>
                {capitalize(name)}
              </Card.Title>
              <Card.Text>
                {ReactHtmlParser(description)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

ProductPage.propTypes = {
  name: PropTypes.string.required,
  description: PropTypes.string,
  imageLink: PropTypes.string,
};
export default ProductPage
