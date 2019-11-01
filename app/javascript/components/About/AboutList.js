import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'




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
            <Tab.Container defaultActiveKey="0">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    { sections.map((s, i) =>
                      <Nav.Item>
                        <Nav.Link eventKey={i}>{s.title}</Nav.Link>
                      </Nav.Item>
                    )}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    { sections.map((s, i) =>
                      <Tab.Pane eventKey={i}>
                        <AboutSection section={s} key={i}/>
                      </Tab.Pane>
                    )}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
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
