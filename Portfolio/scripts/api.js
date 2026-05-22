// Teste de API no console.log
async function buscarFatoInutil() {
  try {
    const resposta = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const dado = await resposta.json();
    console.log(dado.text); // Exibe no console
    // Exibe na página (assumindo um elemento com id="fato")
    // document.getElementById('fato').textContent = dado.text;
  } catch (erro) {
    console.error('Erro ao buscar fato:', erro);
    document.getElementById('fato').textContent = 'Não foi possível carregar um fato agora.';
  }
}

// Chama a função
console.log('Buscando um fato inútil...');
buscarFatoInutil();
