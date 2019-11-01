import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'


import PromoItem from './PromoItem'

class PromoList extends React.Component {
  render () {
    const {promoList, pastPromoList, upcomingPromoList} = this.props;
    const hasPromo = promoList && promoList.length
    const hasUpcoming = upcomingPromoList && upcomingPromoList.length
    const hasPast = pastPromoList && pastPromoList.length

    return (
      <React.Fragment>
        {(!!hasPromo && <Container>
          <Container>
            <h2>Check out our current deals!</h2>
          </Container>
          <Container xs={12}>
            <CardColumns>
              { promoList.map((promotion, i) =>
                <PromoItem promotion={promotion} key={i} xs={12} sm={6} lg={4}/>
              )}
            </CardColumns>
          </Container>
        </Container>
        )}

        {(!!hasPromo && !!hasUpcoming && <hr/>)}

        {(!!hasUpcoming && <Container>
          <Container>
            <h2>Check out our upcoming deals!</h2>
          </Container>
          <Container xs={12}>
            <CardColumns>
              { upcomingPromoList.map((promotion, i) =>
                <PromoItem promotion={promotion} key={i} xs={12} sm={6} lg={4}/>
              )}
            </CardColumns>
          </Container>
        </Container>
        )}

        {(!!hasUpcoming && !!hasPast && <hr/>)}

        {(!!hasPast && <Container>
          <Container>
            <h2>Our past deals</h2>
          </Container>
          <Container xs={12}>
            <CardColumns>
              { pastPromoList.map((promotion, i) =>
                <PromoItem promotion={promotion} key={i} xs={12} sm={6} lg={4}/>
              )}
            </CardColumns>
          </Container>
        </Container>
        )}
      </React.Fragment>
    );
  }
}

PromoList.propTypes = {
  promoList: PropTypes.array,
  upcomingPromoList: PropTypes.array,
  pastPromoList: PropTypes.array,
};

export default PromoList
