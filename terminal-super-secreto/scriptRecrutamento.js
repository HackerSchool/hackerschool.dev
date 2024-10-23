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
        let aux = cd();
        if (aux)
            this.echo(aux);
    }
    else if (arg1 === 'cat')
        this.echo(cat(arg2));
    else{
        this.echo('Comando não reconhecido.');
    }
}, {
    greetings: 'Muito bem, recruta! Conseguiste desbloquear a fase 1. Assim damos-te as boas vindas ao início da jornada.\n\n\
Para passares à próxima fase, tudo que precisas está nesta página, que é um emulador de terminal UNIX (um pouco limitado!). \n\
Lembra-te que a internet e agora o chatgpt estão sempre prontos para te ajudar. \n\n\
O ls é um comando que serve para mostrar que ficheiros e pastas estão num certo local do computador. \n\
Assim, a primeira pista é de borla: experimenta escrever ls e apertar enter a ver o que acontece!\n',
    prompt: getPrompt,   
    name: 'HackerSchool',
    promptExit: false
});










