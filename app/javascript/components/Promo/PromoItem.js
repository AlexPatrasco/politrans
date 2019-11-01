import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'

class PromoItem extends React.Component {
  render () {
    const {promotion} = this.props;
    return (
      <React.Fragment>
          <Card>
            {(!!promotion.image_link && <a href={`news/${promotion.slug}`} >
                <Card.Img variant="top" src={promotion.image_link} />
              </a>
            )}
            <Card.Body>
              <a href={`promotions/${promotion.slug}`} >
                <Card.Title>{promotion.title}</Card.Title>
              </a>
            </Card.Body>
          </Card>
      </React.Fragment>
    );
  }
}

PromoItem.propTypes = {
  promotion: PropTypes.object.required,
};

export default PromoItem
