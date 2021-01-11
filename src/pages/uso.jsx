import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  /* min-height: 692px;
  position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba( 15, 38, 92, 1) 0%,
    rgba( 113, 198, 255, 1) 100%
  );
`
const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  color: #fff;
  margin: 40px 80px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
const Icon = styled(Link)`
  margin-left: 40px;
  margin-top: 40px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
    margin-left: 0px;
  }
`

function uso() {
  return (
    <>
      <Container>
      <Icon to='/'><img src="./images/MM_Logo_Horizontal_Branco_2.svg" alt="logo" title='voltar' height={65} /></Icon>
        <FormWrap>

        <h2>TERMOS DE USO</h2>
        <br/>
        <h3>1. Termos</h3>
          <p>Ao acessar ao site <a href='https://www.macedoemuzzio.com.br/'>Macedo & Muzzio Contabilidade Gerencial</a>
          , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável
          pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de 
          usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
          <br/>
        <h3>2. Uso de Licença</h3>        
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Macedo & Muzzio Contabilidade Gerencial , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>            
            <ol>            
              <li>modificar ou copiar os materiais;</li>            
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>            
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Macedo & Muzzio Contabilidade Gerencial;</li>            
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou  </li>            
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>            
            </ol>            
          <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Macedo & Muzzio Contabilidade Gerencial a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>            
          <br/>  
        <h3>3. Isenção de responsabilidade</h3>          
          <ol>            
            <li>Os materiais no site da Macedo & Muzzio Contabilidade Gerencial são fornecidos 'como estão'. Macedo & Muzzio Contabilidade Gerencial não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. </li>            
            <li>Além disso, o Macedo & Muzzio Contabilidade Gerencial não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
          </ol>
          <br/>            
        <h3>4. Limitações</h3>
          <p>Em nenhum caso o Macedo & Muzzio Contabilidade Gerencial ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Macedo & Muzzio Contabilidade Gerencial, mesmo que Macedo & Muzzio Contabilidade Gerencial ou um representante autorizado da Macedo & Muzzio Contabilidade Gerencial tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
          <br/>
        <h3>5. Precisão dos materiais</h3>            
          <p>Os materiais exibidos no site da Macedo & Muzzio Contabilidade Gerencial podem incluir erros técnicos, tipográficos ou fotográficos. Macedo & Muzzio Contabilidade Gerencial não garante que qualquer material em seu site seja preciso, completo ou atual. Macedo & Muzzio Contabilidade Gerencial pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Macedo & Muzzio Contabilidade Gerencial não se compromete a atualizar os materiais.</p>            
          <br/>
        <h3>6. Links</h3>
          <p>O Macedo & Muzzio Contabilidade Gerencial não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Macedo & Muzzio Contabilidade Gerencial do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>            
          <br/>     
        <h3>Modificações</h3>
          <p>O Macedo & Muzzio Contabilidade Gerencial pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>            
          <br/>
        <h3>Lei aplicável</h3>            
          <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Macedo & Muzzio Contabilidade Gerencial e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>

        </FormWrap>
      </Container>
    </>
  )
}

export default uso
