import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'


import NewsItem from './NewsItem'

class NewsList extends React.Component {
  render () {
    const {newsList} = this.props;
    const hasNews = newsList && newsList.length
    return (
      <React.Fragment>
        <Container xs={12}>
          {(!!hasNews && <CardColumns>
              { newsList.map((article, i) =>
                <NewsItem article={article} key={i} xs={12} sm={6} lg={4}/>
              )}
            </CardColumns>
          )}
          {(!hasNews && <h2>
              There are no news at this moment
            </h2>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

NewsList.propTypes = {
  newsList: PropTypes.array,
};

export default NewsList
