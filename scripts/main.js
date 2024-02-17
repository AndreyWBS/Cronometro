const $tempo = document.querySelector(".tempo");

async function iniciar(id) {
  const _data_comeco = new Date();

  await new Promise((resolve) => {
    setInterval(function () {
      const _data_final = new Date();
      atualizar_tempo(_data_final, _data_comeco);
      resolve();
    }, 100);
  });
}

function atualizar_tempo(_data_final, _data_comeco) {
  $tempo.innerText = tratando_tempo(_data_final - _data_comeco);
}
function tratando_tempo(milesimos) {
  const hora = parseInt((milesimos % 86400000) / 3600000);
  const minutos = parseInt((milesimos % 3600000) / 60000);
  const segundos = parseInt((milesimos % 60000) / 1000);
  const milesimos_ = parseInt(milesimos % 1000);

  console.log(
    hora,
    ":hora",
    minutos,
    ":minutos",
    segundos,
    ":segundos",
    milesimos_,
    ":milesimos"
  );
  /*
        86400000
        hora = 3 600 000
        minutos = 60 000
        segundos = 1 000
        milesimos =  1 

    */

  return (
    formatar_numero(hora) +
    ":" +
    formatar_numero(minutos) +
    ":" +
    formatar_numero(segundos) +
    "." +
    formatar_numero(milesimos_)
  );
}
function formatar_numero(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}
function parar(id) {
  $tempo.innerText = "";
}
