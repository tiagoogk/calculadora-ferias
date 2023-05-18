import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, FormGroup, FormControl, FloatingLabel } from 'react-bootstrap';
import calcularFerias from './calcularFerias';

const CalculadoraFerias = () => {
    const [salarioBruto, setSalarioBruto] = useState(0);
    const [mediaHoraExtra, setMediaHoraExtra] = useState(0);
    const [numDependentes, setNumDependentes] = useState(0);
    const [diasFerias, setDiasFerias] = useState(0);
    const [abonoPecuniario, setAbonoPecuniario] = useState(false);
    const [adiantar13, setAdiantar13] = useState(false);
    const [mostrarResultado, setMostrarResultado] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setMostrarResultado(true);
    };
    
    const resultadoFerias = calcularFerias(
      parseFloat(salarioBruto),
      parseFloat(mediaHoraExtra),
      parseInt(numDependentes),
      parseInt(diasFerias),
      abonoPecuniario,
      adiantar13
    );

    const handleReset = () => {
      setSalarioBruto(0);
      setMediaHoraExtra(0);
      setNumDependentes(0);
      setDiasFerias(0);
      setAbonoPecuniario(false);
      setAdiantar13(false);
      setMostrarResultado(false);
    };
  
    return (
      <Container className='rounded-4 shadow p-4 bg-primary'>
        <Form onSubmit={handleSubmit}>
          <Row className='mb-2'>
            <Col md={6} className='mb-2'>
              <FormGroup controlId="formSalarioBruto">
                <FloatingLabel label="Salário bruto">
                    <FormControl
                    type="number"
                    step="0.01"
                    value={salarioBruto}
                    onChange={(e) => setSalarioBruto(e.target.value)}
                    onFocus={() => setSalarioBruto('')}
                    />
                </FloatingLabel>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formMediaHoraExtra">
                <FloatingLabel label="Média de Hora Extra">
                    <FormControl
                    type="number"
                    step="0.01"
                    value={mediaHoraExtra}
                    onChange={(e) => setMediaHoraExtra(e.target.value)}
                    onFocus={() => setMediaHoraExtra('')}
                    />
                </FloatingLabel>
              </FormGroup>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col md={6} className='mb-2'>
              <FormGroup controlId="formNumDependentes">
                <FloatingLabel label='Número de Dependentes'>
                    <FormControl
                    type="number"
                    value={numDependentes}
                    onChange={(e) => setNumDependentes(e.target.value)}
                    onFocus={() => setNumDependentes('')}
                    />
                </FloatingLabel>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formDiasFerias">
                <FloatingLabel label="Dias de Férias">
                    <FormControl
                    type="number"
                    value={diasFerias}
                    onChange={(e) => setDiasFerias(e.target.value)}
                    onFocus={() => setDiasFerias('')}
                    />
                </FloatingLabel>
              </FormGroup>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col md={6} className='mb-2'>
              <FormGroup controlId="formAbonoPecuniario">
                <FloatingLabel label="Abono Pecuniário">
                    <Form.Select
                    value={abonoPecuniario ? 'true' : 'false'}
                    onChange={(e) => setAbonoPecuniario(e.target.value === 'true')}
                    >
                    <option value="false">Não</option>
                    <option value="true">Sim</option>
                    </Form.Select>
                </FloatingLabel>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup controlId="formAdiantar13">
                <FloatingLabel label="Adiantar 13º?">
                    <Form.Select
                    value={adiantar13 ? 'true' : 'false'}
                    onChange={(e) => setAdiantar13(e.target.value === 'true')}
                    >
                    <option value="false">Não</option>
                    <option value="true">Sim</option>
                    </Form.Select>
                </FloatingLabel>
              </FormGroup>
            </Col>
          </Row>
          <Row className='mb-2 '>
            <Col className='my-0'>
              {mostrarResultado && (
                <div className="resultado">
                  Você tem direito de férias: R${Math.round(resultadoFerias)}
                </div>
              )}
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button variant="outline-light" type="submit">
                Calcular
              </Button>
              <Button className="ms-4" variant="dark" type="button" onClick={handleReset}>
                Limpar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }

  export default CalculadoraFerias;