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
  margin: 10px 30px;

  @media screen and (max-width: 760px) {
    height: 80%;
  }
  h1 {
    justify-content: center;
    display: flex;
  }
  h2 {
    margin-bottom: 12px;
  }
`
const Icon = styled(Link)`
  margin-left: 160px;

  @media screen and (max-width: 820px) {
    justify-content: center;
    display: flex;
    margin-top: 35px;
    margin-left: 0px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 90px 150px;

  @media screen and (max-width: 968px) {
    padding: 10px;
    margin: 40px 70px;
  }
  @media screen and (max-width: 680px) {
    padding: 10px;
    margin: 40px 10px;
  }
`

function privacidade() {
  return (
    <>
      <Container>
      <FormWrap>
        <Icon to='/'><img src="./images/MM_Logo_Horizontal_Branco_2.svg" alt="logo" title='voltar' height={65} /></Icon>
          <FormContent>
            <h1>POLÍTICA DE PRIVACIDADE</h1>
            <br/>
            <h2>Política Privacidade</h2>                    
              <p>A sua privacidade é importante para nós. É política do Macedo &amp; Muzzio Contabilidade Gerencial respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href='https://www.macedoemuzzio.com.br/'> Macedo &amp; Muzzio Contabilidade Gerencial</a>, e outros sites que possuímos e operamos.</p>                    
              <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>                    
              <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>                    
              <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>                    
              <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href='https://politicaprivacidade.com' target='_BLANK' rel="noreferrer" >políticas de privacidade</a>.</p>                    
              <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>                    
              <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>                    
            <br/>
            <br/>
            <h1>Política de Cookies Macedo &amp; Muzzio Contabilidade Gerencial</h1>
            <br/>
            <h2>O que são cookies?</h2>                    
              <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>                    
              <br/>
            <h2>Como usamos os cookies?</h2>                    
              <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.</p>                    
              <br/>
            <h2>Desativar cookies</h2>                    
              <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>              
              <br/>
            <h2>Cookies que definimos</h2>
              <ul>                        
                <li>Cookies relacionados à conta<br/> Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.<br/></li>                        
                <li> Cookies relacionados ao login<br/> Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.<br/></li>                        
                <li> Cookies relacionados a boletins por e-mail<br/> Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.<br/></li>                        
                <li> Pedidos processando cookies relacionados<br/> Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.<br/></li>                        
                <li> Cookies relacionados a pesquisas<br/> Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.<br/></li>                        
                <li> Cookies relacionados a formulários<br/> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.<br/></li>                        
                <li> Cookies de preferências do site<br/> Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.<br/></li>                    
              </ul>                    
              <br/>
            <h2>Cookies de Terceiros</h2>                    
              <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
                <ul>                        
                  <li>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</li>
                </ul>                    
              <p>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>
                <ul>                        
                  <li>As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.</li>                        
                  <li>Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</li>
                  <li>À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</li>
                </ul>   
                <br/>                 
            <h2>Compromisso do Usuário</h2>                                
              <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Macedo &amp; Muzzio Contabilidade Gerencial oferece no site e com caráter enunciativo, mas não limitativo:</p>                                        
                <ul>                        
                  <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>                        
                  <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, <a href='https://ondeapostar.pt/' style={{color: 'inherit',fontWeight: 'normal',textDecoration:'none',}}>apostas online</a> (ex.: <a href='https://ondeapostar.pt/review/betway/' style={{color: 'inherit',fontWeight: 'normal',textDecoration:'none',}}>Betway</a>), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>                        
                  <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Macedo &amp; Muzzio Contabilidade Gerencial, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>                    
                </ul>   
                <br/>                                     
              <h2>Mais informações</h2>                    
                <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>                    
                <p>Esta política é efetiva a partir de <strong>January</strong>/<strong>2021</strong>.</p>
            </FormContent>
          </FormWrap>
      </Container>
    </>
  )
}

export default privacidade
