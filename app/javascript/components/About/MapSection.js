import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapSection = withScriptjs(withGoogleMap(props =>
  <React.Fragment>
    <Container>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 47.025549, lng: 28.830433 }}
      >
        <Marker position={{ lat: 47.025549, lng: 28.830433 }} />
      </GoogleMap>
    </Container>
  </React.Fragment>
))

MapSection.defaultProps = {
  isMarkerShown: true,
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `25em`, margin: `0 auto`, width: `80%` }} ></div>,
  mapElement: <div style={{ height: `100%` }} />
}

export default MapSection
