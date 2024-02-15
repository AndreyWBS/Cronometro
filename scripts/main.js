const $tempo = document.querySelector(".tempo");

async function iniciar(id) {
  const _data_comeco = new Date();

  await new Promise((resolve) => {
    setInterval(function () {
      const _data_final = new Date();
      atualizar_tempo(_data_final, _data_comeco);
      resolve();
    }, 1 * 1000);
  });
}

function atualizar_tempo(_data_final, _data_comeco) {
    $tempo.innerText = (_data_final - _data_comeco)
}

function parar(id) {
  $tempo.innerText = "";
}
