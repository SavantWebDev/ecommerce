export function validaNome(valor) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(valor);
}

export function validaEmail(valor) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(valor);
}

export function validaSenha(valor) {
  if (valor.length > 10) {
    console.log("O texto digitado tem mais de 10 caracteres");
  }
}

export function validaIdade(valor) {
  const dataDeNascimento = new Date(valor);
  console.log(dataDeNascimento);
  const dataAtual = new Date();
  console.log(dataAtual);
  const dataMais18 = new Date(
    dataDeNascimento.getUTCFullYear() + 18,
    dataDeNascimento.getUTCMonth(),
    dataDeNascimento.getUTCDate()
  );
  console.log(dataMais18);
  console.log(dataAtual >= dataMais18);
  return dataAtual >= dataMais18;
}

export function validaCpf(valor) {
  const cpf = valor.replace(/[^\d]+/g, "");
  if(validaNumerosRepitidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    return false;
} else {
    console.log("cpf valido")
    return true
}
}

function validaNumerosRepitidos(cpf) {
    const numeroRepitidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numeroRepitidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let mutiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * mutiplicador;
        mutiplicador--
    }
    // console.log(soma)

    soma = (soma * 10) % 11;

    // console.log(soma)

    if(soma == 10 || soma == 11) {
        soma = 0
    }

    console.log("primeiro digito é" + soma);

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let mutiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * mutiplicador;
        mutiplicador--
    }
    // console.log(soma);
    soma = (soma * 10) % 11;

    // console.log(soma);

    if(soma == 10 || soma == 11) {
        soma = 0
    }

    console.log("segundo digito é" + soma);
    return soma != cpf[10];

}
