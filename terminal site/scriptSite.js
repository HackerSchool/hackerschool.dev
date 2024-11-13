
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


// Initialize the terminal
$('#terminal').terminal(function (command) {
    let p_input = readArgs(command);
    let comando = p_input.cmd;
    let argumentos = p_input.argumentos;
    paths.parsedPath = getDirectory(argumentos.path);
    switch(comando) {
        case 'ls':
            this.echo(ls(argumentos));
            break;
        case 'cd':
            output = cd(argumentos)
            if(output)
                this.echo(output);
            break;
        case 'cat':
            this.echo(cat(argumentos));
            break;
        case 'grep':
            this.echo(grep(argumentos));
            break;
        case 'show':
            this.echo(show());
            break;
        case 'empty':
            break;
        default:
            this.echo('Comando não reconhecido.');

    }

},

{
    greetings: 'Muito bem, recruta. \n\
Bem vindo à fase 2. isto é uma simulaçao de terminal bla bla usa o comando "ls" para veres os documentos presentes.\n\
Usa e abusa do google, chatgpt e youtube caso nao saibas comandos de terminal\n',
    prompt: getPrompt,   
    name: 'HackerSchool',
    promptExit: false
});