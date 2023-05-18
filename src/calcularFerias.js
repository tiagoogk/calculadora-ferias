const calcularFerias = (
    salarioBruto,
    mediaHoraExtra,
    numDependentes,
    diasFerias,
    abonoPecuniario,
    adiantar13
  ) => {
    let aliquotaINSS = 0.075
    let aliquotaIRRF = 0
    const valorFerias = salarioBruto * (diasFerias / 30)
    const valorAbonoPecuniario = abonoPecuniario ? (salarioBruto / 3) : 0
    const valor13 = adiantar13 ? (salarioBruto / 12) : 0
    const valorHoraExtra = mediaHoraExtra * (salarioBruto/180)
    
    if(valorFerias > 1903){
      aliquotaIRRF = 0.075 - (numDependentes * 0.005)
    }else if(valorFerias > 2825){
      aliquotaIRRF = 0.15 - (numDependentes * 0.005)
    }else if(valorFerias > 3750){
      aliquotaIRRF = 0.225 - (numDependentes * 0.005)
    }else if(valorFerias > 4663){
      aliquotaIRRF = 0.275 - (numDependentes * 0.005)
    }else{
      aliquotaIRRF = 0
    }

    if(valorFerias > 1320){
      aliquotaINSS = 0.09 - (numDependentes * 0.005)
    }else if(valorFerias > 2570){
      aliquotaINSS = 0.12 - (numDependentes * 0.005)
    }else if(valorFerias > 3855){
      aliquotaINSS = 0.14 - (numDependentes * 0.005)
    }else{
      aliquotaINSS = 0.075
    }

    const valorFeriasFinal = (valorFerias + (valorFerias/3))
    const valorPosDeducao = valorFeriasFinal - (valorFeriasFinal * aliquotaINSS) - (valorFeriasFinal * aliquotaIRRF)

    const resultado = valorPosDeducao + valorAbonoPecuniario + valor13 + (valorAbonoPecuniario/3) + valorHoraExtra;
    return resultado;
  };
  
  module.exports = calcularFerias;