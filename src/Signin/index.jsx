import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>M&M</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Fale conosco</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Adicionar um assunto</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Enviar</FormButton>
              <Text>Obrigado</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
