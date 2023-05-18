import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormGroup, FormControl, FormLabel as Label, InputGroup } from 'react-bootstrap';
import calcularFerias from './calcularFerias';
import { useNavigate } from 'react-router-dom';

const CalculadoraFerias = () => {
    const [salarioBruto, setSalarioBruto] = useState(0);
    const [mediaHoraExtra, setMediaHoraExtra] = useState(0);
    const [numDependentes, setNumDependentes] = useState(0);
    const [diasFerias, setDiasFerias] = useState(0);
    const [abonoPecuniario, setAbonoPecuniario] = useState(false);
    const [adiantar13, setAdiantar13] = useState(false);    
    
    const resultadoFerias = calcularFerias(
      parseFloat(salarioBruto),
      parseFloat(mediaHoraExtra),
      parseInt(numDependentes),
      parseInt(diasFerias),
      abonoPecuniario,
      adiantar13
      );
      
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/resultado', { state: { resultado: resultadoFerias, salario: salarioBruto, dias: diasFerias, abono: abonoPecuniario, adiantar: adiantar13, horaExtra: mediaHoraExtra, numDependentes: numDependentes } });
      };
    const handleReset = () => {
      setSalarioBruto(0);
      setMediaHoraExtra(0);
      setNumDependentes(0);
      setDiasFerias(0);
      setAbonoPecuniario(false);
      setAdiantar13(false);
    };

  
    return (
      <div>
        <Row className='mt-4 d-flex justify-content-between'>
          <Col className='order-md-0 order-1' md={5}>
            <h1>Como utilizar a calculadora de férias</h1>
            <p>Para ficar tranquilo no seu descanso e com dinheiro no bolso, veja como fazer o cálculo de férias:</p>
            <ol>
              <li>Preencha o valor do seu salário bruto;</li>
              <li>Preencha o valor médio da sua hora extra (Opcional);</li>
              <li>Informe o número de dependentes, caso tenha;</li>
              <li>Preencha a quantidade de dias de férias requisitados;</li>
              <li>Informe se vai ter abono pecuniário de 1/3;</li>
              <li>Marque se irá adiantar a 1ª parcela do 13º salário.</li>
            </ol>
            <p>É previsto por lei que um funcionário CLT pode tirar férias após trabalhar um período de 12 meses (1 ano). Porém, é possível que dúvidas existam em relação ao cálculo de férias remuneradas.</p>
            <p>Dessa forma, confira um exemplo de como ele é realizado no caso de um trabalhador que recebe um salário de R$2400/mês.</p>
          </Col>
          <Col className='order-md-1 order-0' md={5}>
            <Container className='rounded-1 shadow py-4 px-5 bg-white mb-4'>
              <Form onSubmit={handleSubmit}>
                <h2 className='mb-2 h3'>Calculadora de Férias Online</h2>
                <Row className='mb-2'>
                  <Col md={6} className='mb-2'>
                    <FormGroup controlId="formSalarioBruto">
                      <Label>Salário Bruto</Label>
                      <InputGroup>
                        <InputGroup.Text>R$</InputGroup.Text>
                        <FormControl
                          type="number"
                          step="0.01"
                          value={salarioBruto}
                          onChange={(e) => setSalarioBruto(e.target.value)}
                          onFocus={() => setSalarioBruto('')}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup controlId="formMediaHoraExtra">
                      <Label>Média de Hora Extra</Label>
                      <InputGroup>
                        <InputGroup.Text>R$</InputGroup.Text>
                        <FormControl
                          type="number"
                          step="0.01"
                          value={mediaHoraExtra}
                          onChange={(e) => setMediaHoraExtra(e.target.value)}
                          onFocus={() => setMediaHoraExtra('')}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col md={6} className='mb-2'>
                    <FormGroup controlId="formNumDependentes">
                      <Label>Número de Dependentes</Label>
                      <FormControl
                        type="number"
                        value={numDependentes}
                        onChange={(e) => setNumDependentes(e.target.value)}
                        onFocus={() => setNumDependentes('')}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup controlId="formDiasFerias">
                      <Label>Dias de Férias</Label>
                      <FormControl
                        type="number"
                        value={diasFerias}
                        onChange={(e) => setDiasFerias(e.target.value)}
                        onFocus={() => setDiasFerias('')}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col md={6} className='mb-2'>
                    <FormGroup controlId="formAbonoPecuniario">
                      <Label>Abono Pecunário?</Label>
                      <Form.Select
                        value={abonoPecuniario ? 'true' : 'false'}
                        onChange={(e) => setAbonoPecuniario(e.target.value === 'true')}
                        >
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                      </Form.Select>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup controlId="formAdiantar13">
                    <Label>Adiantar 13º?</Label>
                    <Form.Select
                      value={adiantar13 ? 'true' : 'false'}
                      onChange={(e) => setAdiantar13(e.target.value === 'true')}
                      >
                      <option value="false">Não</option>
                      <option value="true">Sim</option>
                    </Form.Select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Button variant="primary" type="submit">
                    Calcular
                  </Button>
                </Row>
                <Row className='mb-2'>
                  <Button className='text-muted' variant="light" type="button" onClick={handleReset}>
                    Limpar
                  </Button>
                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }

  export default CalculadoraFerias;