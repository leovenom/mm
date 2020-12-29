import emailjs from 'emailjs-com';
import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, FormInputText } from './SigninElements'

const SignIn = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wyz50yt', 'template_pxi9lbh', e.target, 'user_12T6PVF5oIb4Wm6EGuEhu')
    .then((result) => {
      alert('E-mail enviado com sucesso.', result.status, result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}

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

            <Form onSubmit={sendEmail}>
              <FormH1>Fale conosco</FormH1>
              <FormLabel htmlFor='for'>Nome</FormLabel>
                <FormInput htmlFor='nome' name='user_nome' placeholder="Seu nome" required />

              {/* <FormLabel htmlFor='for' name='user_contato'>Telefone</FormLabel>
                <FormInput htmlFor='contato' required /> */}

              <FormLabel htmlFor='for'>E-mail</FormLabel>
                <FormInput htmlFor='email' type='email' name='user_email' placeholder="contato@email.com" required />

              <FormLabel htmlFor='for'>Mensagem</FormLabel>
                <FormInputText htmlFor='mensagem' name="user_message" placeholder="Escreva aqui sua mensagem" required />
              <FormButton type='submit' value='send'>Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
