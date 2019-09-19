import React from "react"
import PropTypes from "prop-types"

import Grid from '@material-ui/core/Grid'

import AboutSection from "./AboutSection"

class AboutList extends React.Component {
  render () {
    const {sections} = this.props;
    return (
      <React.Fragment>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          { sections.map(s =>
            <AboutSection section={s} key={s.id}/>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

AboutList.propTypes = {
  sections: PropTypes.array
};
export default AboutList
