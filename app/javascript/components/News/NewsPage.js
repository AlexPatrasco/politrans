import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ReactHtmlParser from 'react-html-parser';

class NewsPage extends React.Component {
  render () {
    const {title, publishedAt, contents, imageLink} = this.props;
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
                Published: {publishedAt}
              </Card.Subtitle>
              <Card.Text>
                {ReactHtmlParser(contents)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

NewsPage.propTypes = {
  title: PropTypes.string.required,
  publishedAt: PropTypes.string.required,
  contents: PropTypes.string.required,
  imageLink: PropTypes.string,
};

export default NewsPage
