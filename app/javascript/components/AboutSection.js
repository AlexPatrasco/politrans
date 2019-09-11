import React from "react"
import PropTypes from "prop-types"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import ReactHtmlParser from 'react-html-parser';


class AboutSection extends React.Component {
  render () {
    const {section} = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Typography variant="h2">
            {section.title}
          </Typography>
          {(section.subtitle !== "" && <Typography variant="h6">
              {section.subtitle}
            </Typography>
          )}
          <Typography variant="subtitle1" component="span">
            {ReactHtmlParser(section.body)}
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

AboutSection.propTypes = {
  section: PropTypes.object
};
export default AboutSection
