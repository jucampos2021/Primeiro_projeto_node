/*Construa uma calculadora de IMC em NodeJS, que irá receber como entrada do usuário: o seu nome, peso e altura. 
Após realizar o calculo o programa deve retornar:
- O nome do usuário;
- O seu peso;
- A sua altura;
- O valor do IMC;
- E a classificação do IMC. (Abaixo do peso, Dentro do peso ou Sobrepeso).

Instruções para o calculo:
- IMC = Peso ÷ Altura² ou IMC = Peso ÷ (Altura*Altura)

Tabela de classificação:
- IMC menor que 18,5 = Abaixo do peso;
- IMC maior que 18,5 e menor que 24,9 = Peso normal;
- IMC maior que 24,9 = Sobrepeso. 

DESAFIO: Adicione uma funcionalidade que permita que o usuário consulte o histórico de todos os cálculos que foram realizados 
pela calculadora. 
DICA: Uma opção para resolver o desafio é utilizar as variáveis do tipo object para armazenar as informações do usuário 
e um array para guardar essas variáveis.*/

var readline = require('readline-sync');
var pessoa = {};

function fReceberPeso(){
  let peso;
  do{
      peso = readline.question("Informe um peso em kg.");       
      if (isNaN(peso)){
          alert("Peso inválido. Informe um peso em kg.");
      }
  }while(isNaN(peso));
  return Number(peso);
}

function fReceberDados() {
    console.log('\n Bem Vindo! \n');
  
    do {
      pessoa.nome = toString(readline.question('Informe um nome.\n'));
  
      if (parseInt(pessoa.nome)) {
        console.log('O nome informado não é valido! Tente novamente. \n');
      }
    } while (parseInt(pessoa.nome));
    return toString(pessoa.nome);
  }
  

fReceberDados();
fValidarPeso();