/* Projeto Jogo de Ficção Interativa
Crie um jogo de ficção interativa que simule a rotina diária de um personagem.
Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de
estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu
personagem e o conduza durante o seu dia.
*/

const prompt = require('prompt-sync')();

let rotina = [];

function jogo() {
    console.log();
    let escolha1 = prompt(
        'Existem duas Matérias. Você quer fazer "(M) Matemática" ou "(P) Português"? '
    ).toUpperCase();
    console.log();

    if (escolha1 == 'M' ) {
        let escolha2 = +prompt(
            "Escolha (1) para Estudar ou (2) para Fazer a Prova: "
        ); 

        if (escolha2 == 1){
            console.log(
                'Você entrou na sala 1, sua turma já está lá ...'
            );
            atividade++;
            let lista1 = {};  
            lista1.nome = aluno.materia1;
            lista1.atividade = aluno.Estudar_Mat();
            rotina.push(lista1);
            
        
        }else if (escolha2 == 2){
            console.log(
                'Você vai fazer a prova sozinho na biblioteca!'
            );
            atividade++;
            let lista2 = {};
            lista2.nome = aluno.materia1;
            lista2.atividade = aluno.FazerProva_Mat();
            rotina.push(lista2);
            
        }else{
            console.log('Escolha errada! Tente novamente.');

            jogo();
        }
        
    } else if (escolha1 == 'P') {
        let escolha2 = +prompt(
            "Escolha (1) para Estudar ou (2) para Fazer a Prova: "
        ); 

        if (escolha2 == 1){
            console.log(
                'Você entrou na sala 2, sua turma já está lá ...'
            );
            atividade++;
            let lista3 = {};
            lista3.nome = aluno.materia2;
            lista3.atividade = aluno.Estudar_Port();
            rotina.push(lista3);

        }else if (escolha2 == 2){
            console.log(
                'Você vai fazer a prova sozinho na biblioteca!'
            );
            atividade++;
            let lista4 = {};
            lista4.nome = aluno.materia2;
            lista4.atividade = aluno.FazerProva_Port();
            rotina.push(lista4);

        }else{
            console.log('Escolha errada! Tente novamente.');

            jogo();
        }
    } else {
        console.log('Você não escolheu nenhuma das Matérias. Tente novamente.');

        jogo();
    }
}

// Função para esperar um tempo(em milissegundo)
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

// Declarando o objeto
class Pessoa {
    constructor() {
      this.nome = '';
      this.sexo = '';
      this.idade = 0;
    }
  
    // Métodos -> Ações do objetos
    Acordar() {
      console.log("Acordando ...");
      sleep(3000);
    }
    Comer() {
      console.log("Comendo...");
      sleep(3000);

    }
    Descansar() {
      console.log("Descansando...");
      sleep(3000);
    }
}
// Instanciando (criando) o nosso objeto  
let pessoa1 = new Pessoa();

// Herança: A classe Aluno (classe filha) vai HERDAR TUDO de Pessoa (classe mãe)  
class Aluno extends Pessoa {
    constructor(nome, sexo, idade, materia1, materia2) {
      super(nome, sexo, idade);
      this.materia1 = materia1;
      this.materia2 = materia2;
    }
    
    Estudar_Mat() {
      console.log("Estudando Matemática...");
      sleep(5000);
      return 'Estudou!';
    }
    FazerProva_Mat() {
      console.log("Fazendo a prova de Matemática...");
      sleep(3000);
      return 'Fez a prova!';
    }
    Estudar_Port() {
        console.log("Estudando Português...");
        sleep(5000);
        return 'Estudou!';
    }
    FazerProva_Port() {
       console.log("Fazendo a prova de Português...");
       sleep(3000);
       return 'Fez a prova!';
    }
}
let aluno = new Aluno();

console.log(); 

pessoa1.Acordar();
pessoa1.Comer();

console.log();
console.log('<<< Olá!! Vamos estudar ?!?!?! >>>');
console.log();

aluno.nome = String(prompt('Digite o nome : '));
aluno.sexo = String(prompt('Digite (F) Feminino ou (M) Masculino: '));
aluno.idade = +prompt('Digite a idade: ');
aluno.materia1 = 'Matemática';
aluno.materia2 = 'Português';

console.log();
console.log('<< Faça as atividades para completar a ROTINA DE ESTUDO >>');

var atividade = 1;

// Deve fazer 3 atividades para completar a rotina de estudo
while (atividade <= 3 ){
     
    jogo();
        
}

console.log();
console.log('<<< PARABÉNS!! Você concluiu a sua Rotina de Estudo!! >>>')
console.log();

console.log(`${aluno.nome}: \n${rotina[0].nome} => ${rotina[0].atividade}\n 
${rotina[1].nome} => ${rotina[1].atividade}\n 
${rotina[2].nome} => ${rotina[2].atividade}`);

console.log();
pessoa1.Descansar();
