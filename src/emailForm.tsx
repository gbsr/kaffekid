import React from 'react'
import styled from 'styled-components'
import { colors } from './colors'

const EmailForm = () => {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'b1d64ff8-5cce-40d6-b3c1-87e85299f396')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <FormContainer>
      <FormTitle>Talk to me</FormTitle>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Hi, I would really like to buy your art, please."
            required
          ></Textarea>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>

      {result && <ResultMessage>{result}</ResultMessage>}
    </FormContainer>
  )
}

const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${colors.mainText};
`

const FormContainer = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 0 auto 60px;
  padding: 30px;
  background-color: ${colors.formBackground};
  border-radius: 8px;
  border: 1px solid ${colors.borderLight};
  box-shadow: 0 4px 12px ${colors.shadow};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${colors.mainText};
`

const Input = styled.input`
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  font-size: 16px;
  padding: 12px;
  transition: border-color 0.3s;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${colors.accent};
  }
`

const Textarea = styled.textarea`
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  font-size: 16px;
  padding: 12px;
  transition: border-color 0.3s;
  font-family: inherit;
  resize: vertical;
  background-color: white;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: ${colors.accent};
  }
`

const Button = styled.button`
  background-color: ${colors.accent};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 20px;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.accentHover};
  }

  &:active {
    transform: translateY(1px);
  }
`

const ResultMessage = styled.div`
  margin-top: 20px;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${(props) =>
    String(props.children)?.includes('Successfully')
      ? 'rgba(76, 175, 80, 0.1)'
      : props.children === 'Sending....'
      ? 'rgba(33, 150, 243, 0.1)'
      : 'rgba(244, 67, 54, 0.1)'};
  color: ${(props) =>
    String(props.children)?.includes('Successfully')
      ? '#2e7d32'
      : props.children === 'Sending....'
      ? '#0d47a1'
      : '#c62828'};
`

export default EmailForm
