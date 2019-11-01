import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ReactHtmlParser from 'react-html-parser';

class PromoPage extends React.Component {
  render () {
    const {title, startsAt, endsAt, description, imageLink} = this.props;
    return (
      <React.Fragment>
        <Container>
          <Card xs={12}>
            <Card.Body>
              {imageLink && <Card.Img variant="top" src={imageLink} />}
              <Card.Title>
                {title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Promo period: {startsAt} - {endsAt}
              </Card.Subtitle>
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

PromoPage.propTypes = {
  title: PropTypes.string.required,
  startsAt: PropTypes.string.required,
  endsAt: PropTypes.string.required,
  description: PropTypes.string.required,
  imageLink: PropTypes.string,
};

export default PromoPage
