import React from "react"
import PropTypes from "prop-types"

import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'

class HomePage extends React.Component {
  render () {
    const {news, promotions} = this.props;
    return (
      <React.Fragment>
        <Carousel>
          { [...news, ...promotions].map((item, i) => {
              var path = item.starts_at ? "promotions/" : "news/"
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={item.image_link}
                    alt={item.title}
                  />
                  <Carousel.Caption>
                    <Nav.Link href={path+item.slug}>
                      <h3>{item.title}</h3>
                    </Nav.Link>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            }
          )}
        </Carousel>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  news: PropTypes.array,
  promotions: PropTypes.array,

};
export default HomePage
