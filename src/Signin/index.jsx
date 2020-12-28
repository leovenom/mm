import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, FormInputText } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>M&M</Icon>
          <FormContent>
            {/* <Form action='#'>
              <FormH1>Fale conosco</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Adicionar um assunto</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Enviar</FormButton>
              <Text>Obrigado</Text>
            </Form> */}

            <Form action='#' className="contact-form">
              <FormH1>Fale conosco</FormH1>
              <FormLabel htmlFor='for' name='user_nome'>Nome</FormLabel>
                <FormInput htmlFor='nome' required />

              <FormLabel htmlFor='for' name='user_contato'>Telefone</FormLabel>
                <FormInput htmlFor='contato' required />

              <FormLabel htmlFor='for' name='user_email'>Email</FormLabel>
                <FormInput htmlFor='email' required />

              <FormLabel htmlFor='for' name='user_message'>Mensagem</FormLabel>
                <FormInputText htmlFor='mensagem' required />
              <FormButton type='submit'>Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
