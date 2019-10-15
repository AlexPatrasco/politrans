import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'

import AboutSection from "./AboutSection"

class AboutList extends React.Component {
  render () {
    const {sections} = this.props;
    return (
      <React.Fragment>
        <Container>
          { sections.map((s, i) =>
            <AboutSection section={s} key={i}/>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

AboutList.propTypes = {
  sections: PropTypes.array
};
export default AboutList
