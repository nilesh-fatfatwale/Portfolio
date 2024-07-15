import React from 'react';
import styled from 'styled-components';
import { CgMailForward } from 'react-icons/cg';
import { useForm } from '@formspree/react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bg};
`;

const InnerContact = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  p {
    color: ${(props) => props.theme.remainingTextColor};
    text-align: center;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.remainingTextColor};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: 18px;
  position: relative;
  text-align: left;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px; 
 
`;

const Input = styled.input`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;
  width: 600px;
  color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.inputColor};
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  &::placeholder {
    color: #999;
  }
  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;
  width: 600px;
  color: ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.inputColor};
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  &::placeholder {
    color: #999;
  }
  &:focus {
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${(props) => props.theme.buttonBgColor};
  color: ${(props) => props.theme.textcolor};
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #2c3136;
  }
`;

const Labeles = styled.label`
  color: ${(props) => props.theme.buttonBgColor};
  margin-bottom: 8px; 
`;

const Contact = () => {
  const [state] = useForm("xoqorodg");
  return (
    <Container id="contact">
      <InnerContact>
        <InnerContainer>
          <Title>Contact</Title>
          <p>
            Please contact me directly at <u>fatfatwalenilesh@gmail.com</u> or through this form.
          </p>
          <Form action="https://formspree.io/f/xoqorodg" method="POST">
            <InputContainer>
              <Labeles>Name</Labeles>
              <Input type="text" name="name" placeholder="Enter Name" required={true} />
            </InputContainer>
            <InputContainer>
              <Labeles>Email</Labeles>
              <Input
                type="email"
                name="_replyto"
                placeholder="Enter Email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                required={true}
              />
            </InputContainer>
            <InputContainer>
              <Labeles>Subject</Labeles>
              <Input type="text" name="_subject" placeholder="Enter Subject" required={true} />
            </InputContainer>
            <InputContainer>
              <Labeles>Message</Labeles>
              <TextArea name="message" rows="4" placeholder="Enter Message..." required={true} />
            </InputContainer>
            <SendButton type="submit">
              Send <CgMailForward />
            </SendButton>
          </Form>
        </InnerContainer>
      </InnerContact>
    </Container>
  );
};

export default Contact;
