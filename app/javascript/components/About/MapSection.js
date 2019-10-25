import React from "react"
import PropTypes from "prop-types"

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapSection = withScriptjs(withGoogleMap(props =>
  <React.Fragment>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 47.025549, lng: 28.830433 }}
      >
        <Marker position={{ lat: 47.025549, lng: 28.830433 }} />
      </GoogleMap>
  </React.Fragment>
))

MapSection.defaultProps = {
  isMarkerShown: true,
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `25em`, margin: `0 auto`, width: `100%` }} ></div>,
  mapElement: <div style={{ height: `100%` }} />
}

export default MapSection
