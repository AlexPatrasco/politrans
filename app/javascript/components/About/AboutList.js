import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import AboutSection from "./AboutSection"
import MapSection from "./MapSection"
import ContactSection from "./ContactSection"
import "./AboutList.css"

class AboutList extends React.Component {
  render () {
    const {sections} = this.props;
    return (
      <React.Fragment>
        <Row>
          <Container>
            <hr/>
            <h2>
              Who are we?
            </h2>
            <hr/>
          </Container>
          <Container>
            { sections.map((s, i) =>
              <AboutSection section={s} key={i}/>
            )}
          </Container>
        </Row>
        <Row>
          <Container>
            <hr/>
            <h2>
              Let's talk!
            </h2>
            <hr/>
          </Container>
          <Container>
            <ContactSection />
          </Container>
        </Row>
        <Row>
          <Container>
            <hr/>
            <h2>
              Want to meet us in person?
            </h2>
            <hr/>
          </Container>
          <Container>
            <MapSection/>
          </Container>
        </Row>
      </React.Fragment>
    );
  }
}

AboutList.propTypes = {
  sections: PropTypes.array
};
export default AboutList
