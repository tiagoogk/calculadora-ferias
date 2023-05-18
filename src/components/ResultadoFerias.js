import { useLocation, Link } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';

const ResultadoFerias = () => {
  const location = useLocation();
  const resultado = location.state?.resultado
  const salario = location.state?.salario
  const dias = location.state?.dias
  const abono = location.state?.abono
  const adiantar = location.state?.adiantar
  const horaExtra = location.state?.horaExtra
  const numDependentes = location.state?.numDependentes
  const valorFerias = Math.round(salario * (dias / 30))
  const valorAbono = abono ? (salario / 3) : 0
  const valor13 = adiantar ? (salario / 12) : 0
  const valorHoraExtra = Math.round(horaExtra * (salario/180))
  
  let aliquotaINSS = 0.075
  let aliquotaIRRF = 0
  console.log((valorFerias + (valorFerias/3)))
  if(resultado > 1903){
    aliquotaIRRF = 0.075 - (numDependentes * 0.005)
  }else if(resultado > 2825){
    aliquotaIRRF = 0.15 - (numDependentes * 0.005)
  }else if(resultado > 3750){
    aliquotaIRRF = 0.225 - (numDependentes * 0.005)
  }else if(resultado > 4663){
    aliquotaIRRF = 0.275 - (numDependentes * 0.005)
  }else{
    aliquotaIRRF = 0
  }
  
  if(resultado > 1320){
    aliquotaINSS = 0.09 - (numDependentes * 0.005)
  }else if(resultado > 2570){
    aliquotaINSS = 0.12 - (numDependentes * 0.005)
  }else if(resultado > 3855){
    aliquotaINSS = 0.14 - (numDependentes * 0.005)
  }else{
    aliquotaINSS = 0.075
  }
  
  const valorINSS = Math.round(((valorFerias + (valorFerias/3)) * aliquotaINSS))
  const valorIRRF = Math.round(((valorFerias + (valorFerias/3)) * aliquotaIRRF))
  const tabelaDados = [
    { evento: "Valor Férias", ref: "-", proventos: valorFerias, descontos: "-" },
    { evento: "1/3 Férias", ref: "-", proventos: Math.round((valorFerias)/3), descontos: "-" },
    { evento: "Abono Pecuniário", ref: "-", proventos: valorAbono, descontos: "-" },
    { evento: "1/3 Abono Pecuniário", ref: "-", proventos: valorAbono/3, descontos: "-" },
    { evento: "Adiantamento da 1ª Parcela 13º", ref: "-", proventos: valor13, descontos: "-" },
    { evento: "INSS", ref: aliquotaINSS*100+"%", proventos: "-", descontos: valorINSS },
    { evento: "IRRF", ref: aliquotaIRRF*100+"%", proventos: "-", descontos: valorIRRF },
    { evento: "Totais", ref: "-", proventos: Math.round(valorFerias + (valorFerias/3) + valorAbono + (valorAbono/3) + valor13 + valorHoraExtra), descontos: valorINSS + valorIRRF },
  ];

  return (
    <div>
      <h1 className='mt-4 fs-2'>Cálculo</h1>
      {resultado && (
        <div className=''>
          <Row className='bg-white p-4 mb-4 d-flex justify-content-between'>
            <Col>
              <div className='fs-4 mb-2'>Salário Bruto <span className='fw-bold fs-4'>R${salario}</span></div>
              <div className='fs-4 mb-2'>Dependentes <span className='fw-bold fs-4'>{numDependentes}</span></div>
              <div className='fs-4 mb-2'>Abono Pecuniário <span className='fw-bold fs-4'>{abono ? 'Sim' : 'Não'}</span></div>
            </Col>
            <Col>
              <div className='fs-4 mb-2'>Média horas extra <span className='fw-bold fs-4'>R${valorHoraExtra}</span></div>
              <div className='fs-4 mb-2'>Dias de Férias <span className='fw-bold fs-4'>{dias}</span></div>
              <div className='fs-4 mb-2'>Adiantar 1ª Parcela do 13º <span className='fw-bold fs-4'>{adiantar ? 'Sim' : 'Não'}</span></div>
            </Col>
          </Row>
          <h2>Resultado</h2>
          <Row className='bg-white p-4 d-flex justify-content-between'>
            <table className='fs-4 mb-2'>
              <thead>
                <tr>
                  <th style={{ paddingBottom: "1rem" }}>Evento</th>
                  <th style={{ paddingBottom: "1rem" }}>Ref</th>
                  <th style={{ paddingBottom: "1rem" }}>Proventos</th>
                  <th style={{ paddingBottom: "1rem" }}>Descontos</th>
                </tr>
              </thead>
              <tbody>
                {tabelaDados.map((item, index) => (
                  <tr key={index}>
                    <td style={{ paddingBottom: "1rem" }}>{item.evento}</td>
                    <td style={{ paddingBottom: "1rem" }}>{item.ref}</td>
                    <td style={{ paddingBottom: "1rem" }}>R$ {item.proventos}</td>
                    <td style={{ paddingBottom: "1rem" }}>R$ {item.descontos}</td>
                  </tr>
                ))}
                <tr className='text-center'>
                  <td style={{ paddingBottom: "1rem" }} colSpan="2">
                    Valor líquido de férias
                  </td>
                  <td style={{ paddingBottom: "1rem", backgroundColor: "#FEFFCF" }} colSpan="2" >
                    R$ {Math.round(resultado)}
                  </td>
                </tr>
              </tbody>
            </table>
          </Row>
        </div>
      )}
      <Link className='btn btn-primary' to="/calculadora-ferias">Voltar</Link>
    </div>
  );
};
export default ResultadoFerias;