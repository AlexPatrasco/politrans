import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'


import ReactHtmlParser from 'react-html-parser';


class AboutSection extends React.Component {
  render () {
    const {section} = this.props;
    return (
      <React.Fragment>
        <Container xs={12}>
          <Card border="light">
            <Card.Body>
              {(section.subtitle !== "" && <Card.Subtitle className="mb-2 text-muted">
                  {section.subtitle}
                </Card.Subtitle>
              )}
              <Card.Text>
                {ReactHtmlParser(section.body)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

AboutSection.propTypes = {
  section: PropTypes.object
};
export default AboutSection
