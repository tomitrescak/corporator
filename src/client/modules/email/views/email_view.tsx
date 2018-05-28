import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

class FormExampleSubcomponentControl extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select fluid label="Gender" options={options} placeholder="Gender" />
        </Form.Group>
        <Form.Input fluid label="Budget" labelPosition="left" placeholder="First name" />
        <Form.TextArea label="About" placeholder="Tell us more about you..." />

        <Button color="red" icon="remove" content="Reject" floated="right" />
        <Button color="green" icon="check" content="Accept" floated="right" />
      </Form>
    );
  }
}

export const EmailView = () => (
  <>
    <p>Dear Simi</p>
    <p>
      Please review following form for "International Travel to London" from "Tomas Trescak" and
      kindly approve or reject it
    </p>
    <FormExampleSubcomponentControl />
  </>
);
