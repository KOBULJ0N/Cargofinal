import React from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Textarea,
  Title,
} from './style';

export const InputBlcok = () => {
  
  return (
    <Container id='section6'>
      <Title>GET A QUOTE</Title>
      <Form>
        <Form.Title>Personal Data</Form.Title>
        <Input.Wrap>
          <Input mr placeholder='Name' />
          <Input mr placeholder='Phone' />
          <Input placeholder='E-mail' />
        </Input.Wrap>
        <Input.Wrap>
          <Input mr placeholder='Company name' />
          <Input placeholder='MC#' />
        </Input.Wrap>

        <Form.Title mt='73'>Notes</Form.Title>
        <Input.Wrap>
          <Textarea placeholder='Notes' />
        </Input.Wrap>

        <Form.Title mt='24'>Personal Data</Form.Title>
        <Input.Wrap>
          <Input mr placeholder='From' />
          <Input mr placeholder='To' />
          <Input placeholder='E-Pick-up date' />
        </Input.Wrap>
        <Input.Wrap>
          <Input placeholder='Delivery date' />
        </Input.Wrap>
        <Button>Submit</Button>
      </Form>

    </Container>
  );
};

export default InputBlcok;
