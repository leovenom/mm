import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { MdArrowBack } from 'react-icons/md'

const Container = styled.div`
  /* min-height: 692px;
  position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background:#fff;
`
const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  color: #0F265C;
  margin: 10px 30px;

  ol {
    margin-left: 20px;
    
  }
  a {
    color:#71C6FF;
    font-family: utopia-std, serif;
  }
  h1 {
    font-size: 48px;
  }
  h2 {
    margin-bottom: 12px;
  }
  p {
    line-height: 1.6rem;
    font-family: utopia-std, serif;
  }
  li {
    line-height: 1.6rem;
    font-family: utopia-std, serif;
  }

  @media screen and (max-width: 760px) {
    height: 80%;
  }
  ol {
    margin-left: 16px;
  }
`
const Icon = styled(Link)`
  margin-left: 164px;

  @media screen and (max-width: 820px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
    margin-left: 0px;
  }
`
const Voltar = styled(Link)`
  color:#71C6FF;
  text-decoration: none;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: 'Raleway', sans-serif !important;
  margin-bottom: 16px;
  display: flex;
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 90px 175px;

  @media screen and (max-width: 968px) {
    padding: 10px;
    margin: 40px 70px;
  }
  @media screen and (max-width: 680px) {
    padding: 10px;
    margin: 40px 10px;
  }
`
const ArrowBack= styled(MdArrowBack)`
  margin-right: 5px;
`

function uso() {
  return (
    <>
    <ScrollToTop />
      <Container>
      <FormWrap>
        <Icon to='/'><img src="./images/MM_Logo_Horizontal_Original_2.svg" alt="logo" title='voltar' width={350}/></Icon>
        <FormContent>
        <Voltar to='/'>{<ArrowBack />}Voltar</Voltar>
        <h1>Termos de uso</h1>
        <br/>
        <h2>1. Termos</h2>
          <p>Ao acessar ao site <a href='https://www.macedoemuzzio.com.br/'>Macedo &amp; Muzzio Contabilidade Gerencial</a>
          , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável
          pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de 
          usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
          <br/>
        <h2>2. Uso de Licença</h2>        
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Macedo &amp; Muzzio Contabilidade Gerencial , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>            
            <ol>            
              <li>modificar ou copiar os materiais;</li>            
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>            
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Macedo &amp; Muzzio Contabilidade Gerencial;</li>            
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>            
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>            
            </ol>            
          <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Macedo &amp; Muzzio Contabilidade Gerencial a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>            
          <br/>  
        <h2>3. Isenção de responsabilidade</h2>          
          <ol>            
            <li>Os materiais no site da Macedo &amp; Muzzio Contabilidade Gerencial são fornecidos 'como estão'. Macedo &amp; Muzzio Contabilidade Gerencial não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li>            
            <li>Além disso, o Macedo &amp; Muzzio Contabilidade Gerencial não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
          </ol>
          <br/>            
        <h2>4. Limitações</h2>
          <p>Em nenhum caso o Macedo &amp; Muzzio Contabilidade Gerencial ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Macedo &amp; Muzzio Contabilidade Gerencial, mesmo que Macedo &amp; Muzzio Contabilidade Gerencial ou um representante autorizado da Macedo &amp; Muzzio Contabilidade Gerencial tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
          <br/>
        <h2>5. Precisão dos materiais</h2>            
          <p>Os materiais exibidos no site da Macedo &amp; Muzzio Contabilidade Gerencial podem incluir erros técnicos, tipográficos ou fotográficos. Macedo &amp; Muzzio Contabilidade Gerencial não garante que qualquer material em seu site seja preciso, completo ou atual. Macedo &amp; Muzzio Contabilidade Gerencial pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Macedo &amp; Muzzio Contabilidade Gerencial não se compromete a atualizar os materiais.</p>            
          <br/>
        <h2>6. Links</h2>
          <p>O Macedo &amp; Muzzio Contabilidade Gerencial não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Macedo &amp; Muzzio Contabilidade Gerencial do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>            
          <br/>     
        <h2>Modificações</h2>
          <p>O Macedo &amp; Muzzio Contabilidade Gerencial pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>            
          <br/>
        <h2>Lei aplicável</h2>            
          <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Macedo &amp; Muzzio Contabilidade Gerencial e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default uso
