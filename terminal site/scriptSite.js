
var c = document.getElementById('chatCanvas');
var ctx = c.getContext('2d');
var cw = c.width = 400;
var ch = c.height = 58;

ctx.font = 'normal 32px monospace';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
ctx.fillStyle = '#fff';
ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
ctx.shadowColor = '#3f3';


var comandos = {
    'help': 'Comandos Disponíveis:\n\twhoami\n\tciberseguranca\n\t'
}


/* var sistema = {
    '~': {
        'help': "whoami, exit, ls, cd, cat e os outros comandos costumizados",
        'membros': pasta_membros, // uma pasta para cada pessoa.
        // dentro de cada pasta o cargo da pessoa e uma foto? / cargo e nome da pessoa + foto não sei o que é
        // que a pasta devia ter.
        // também podíamos fazer um comando que listasse todos os membros de um determinado departamento
        // e um comando que listasse todos os membros
        // e um comando tipo grep pasta_projetos | nome da pessoa para ver os projetos em que ela está
        // (não me lembro como é que o grep funciona mas acho que algo assim era engraçado)
        'projetos': pasta_projetos, // uma pasta para cada projeto.
        // em cada pasta vai ter a descrição num txt e os membros ativos? / pastas dos membros ativos??
        // ou então não havia pasta, só um txt para cada projeto e se fizesses tipo
        // grep pasta_membros | nome projeto dava-te o nome dos membros ativos
        'about us?': HackerSchool, ciberseguranca, socials,
        'recrutamento': texto_e_link,
        'próximos eventos': workshops, hacknights, // comando tipo timeleft?
    }
} */


let currentDir = fileSystem['~']; // Diretoria atual
let currentPath = '~'; // Caminho atual (só se usa no cd)
let parsedPath = '~'; // É o caminho que uso nas outras funções


// Initialize the terminal
$('#terminal').terminal(function (command) {
    let cmd = command.split(' ');
    let arg1 = cmd[0];
    let arg2 = cmd[1] ? cmd[1] : "";
    parsedPath = pathParser(arg2);
    
    if (arg1 === 'ls')
        this.echo(ls(arg2));
    else if (arg1 === 'cd'){
        let aux = cd(arg2);
        if (aux)
            this.echo(aux);
    }
    else if (arg1 === 'cat')
        this.echo(cat(arg2));
    else{
        this.echo('Comando não reconhecido.');
    }
}, {
    greetings: 'Muito bem, recruta. \n\
Bem vindo à fase 2. isto é uma simulaçao de terminal bla bla usa o comando "ls" para veres os documentos presentes.\n\
Usa e abusa do google, chatgpt e youtube caso nao saibas comandos de terminal\n',
    prompt: getPrompt,   
    name: 'HackerSchool',
    promptExit: false
});