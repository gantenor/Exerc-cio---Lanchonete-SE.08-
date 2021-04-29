var preco, qtd,  cod

cod = parseInt(prompt("Códigodo produto comprado: "));
qtd = parseInt(prompt("Digite a quantidade: "));

if (cod == 1){
  preco = (5 * qtd);
  alert('O preço total é: ' + preco.toFixed(2));
}
  else if (cod == 2){
    preco = (3.50 * qtd)
    alert('O preço total é: ' + preco.toFixed(2));
  }
    else if (cod == 3){
      preco = (4.80 * qtd);
      alert('O preço total é: ' + preco.toFixed(2));
    }
      else if (cod == 4){
        preco = (8.90 * qtd);
        alert('O preço total é: ' + preco.toFixed(2));
      }
        else if (cod == 5){
          preco = (7.32 * qtd);
          alert('O preço total é: ' + preco.toFixed(2));
        }
          else{
            alert('Código inválido');
          }