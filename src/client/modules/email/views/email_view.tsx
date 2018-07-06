import * as React from 'react';
import { Button, Form } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

class FormExampleSubcomponentControl extends React.Component {
  state = {};

  handleChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: HTMLInputElement) =>
    this.setState({ value });

  render() {
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

interface Props {
  receiver: string;
}

export const EmailView: React.SFC<Props> = ({ receiver }) => (
  <>
    <p>Dear {receiver}</p>
    <p>
      Please review following form for "International Travel to London" from "Tomas Trescak" and
      kindly approve or reject it
    </p>
    <FormExampleSubcomponentControl />
  </>
);
