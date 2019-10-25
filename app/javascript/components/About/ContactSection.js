import React from "react"
import PropTypes from "prop-types"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'



class ContactSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }

  sendDataToServer(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = this.formAsJSON(event.currentTarget)
    this.sendDataToServer(data)
    this.setState({submitted: true})
  }

  formAsJSON(form) {
    const elements = form.querySelectorAll('input, textarea')
    var obj = {}
    for( var i = 0; i < elements.length; ++i ) {
      var element = elements[i];
      var name = element.id;
      var value = element.value;

      if( name ) {
        obj[ name ] = value;
      }
    }
    return obj
  }

  render () {
    const {submitted} = this.state;
    if (!submitted) {
      return (
        <React.Fragment>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Where should we write back?" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Control type="text" placeholder="How are we to address You?" required />
            </Form.Group>
            <Form.Group controlId="contents">
              <Form.Control as="textarea" placeholder="Let us know what You want to talk about." rows="5" required/>
            </Form.Group>
            <Button variant="success" type="submit">
              Send
            </Button>
          </Form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Alert variant="success">
            <Alert.Heading>Thank You!</Alert.Heading>
            <p>
              We are happy You have found interest in who we are and what we do.
              We will do our best to reach You back ASAP!
            </p>
          </Alert>
        </React.Fragment>
      );
    }
  }
}

export default ContactSection
