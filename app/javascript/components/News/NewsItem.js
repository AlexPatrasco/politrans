import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'

class NewsItem extends React.Component {
  render () {
    const {article} = this.props;
    return (
      <React.Fragment>
          <Card>
            {(!!article.image_link && <a href={`news/${article.slug}`} >
                <Card.Img variant="top" src={article.image_link} />
              </a>
            )}
            <Card.Body>
              <a href={`news/${article.slug}`} >
                <Card.Title>{article.title}</Card.Title>
              </a>
            </Card.Body>
          </Card>
      </React.Fragment>
    );
  }
}

export default NewsItem
