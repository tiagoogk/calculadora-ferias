import './App.scss';
import React from 'react';
import CalculadoraFerias from './CalculadoraFerias'
import Footer from './Footer'


const App = () => {
 
  return (
    <div className='App'>
      <div className='container mb-4'>
        <h1 className='text-center'>Calculadora</h1>
        <CalculadoraFerias />
      </div>
      <div className='container w-75 texto-explicacao'>
        <p>Texto retirado do site do TST:</p>
        <p>Férias é um descanso concedido ao empregado que trabalha pelo menos um ano para o empregador. O direito é assegurado no artigo 7º, inciso XVII da Constituição da República, que trata dos direitos dos trabalhadores urbanos e rurais “o gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal”.</p>
        <p>O trabalhador adquire direito a férias após cada período de 12 meses (período aquisitivo) de vigência do contrato de trabalho, ou seja, conta-se o ano contratual, e não o ano civil (CLT, artigo 130). Algumas circunstâncias interrompem essa contagem, como a do empregado que deixa o emprego e não é readmitido em 60 dias ou que permanece em licença remunerada por mais de 30 dias. Outras hipóteses estão previstas na lei (CLT, artigos 131 e 132).</p>
        <p>Após o primeiro ano de trabalho (período aquisitivo), inicia-se a contagem do período de concessão das férias (período concessivo). A escolha do período depende da concordância do empregador, que pode definir as escalas de férias. A lei prevê duas exceções. Os membros de uma família que trabalharem no mesmo estabelecimento ou empresa terão direito a gozar férias no mesmo período, se assim o desejarem e se disto não resultar prejuízo para o serviço. A outra hipótese é a do empregado estudante menor de 18 anos, que tem o direito de fazer coincidir suas férias com as escolares</p>
        <p className='text-md-center'>Essa calculadora usa como base de cálculo a tabela do início do ano de 2023. Alguns dados podem estar divergentes devido a arrendodamentos.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
