function palavrao(texto) {
  let palavras = texto.split(' ');
  let maiorPalavra = '';

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maiorPalavra.length) {
      maiorPalavra = palavras[i];
    }
  }

  return maiorPalavra;
}

console.log(palavrao("boa tarde genteeee"));