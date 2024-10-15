
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



var fileSystem = {
    '~': {
        'membros': {
            "billy.txt": "skibidi"
        },

        'projetos': {
            "site.txt": "skibidi"
        },

        'aboutUs': {
            "HackerSchool.txt": "descrição da hacker school",
            "cibersegurança.txt": "n somos hackers plot twist do século",
            "socials.txt": "redes sociais"
        },

        'recrutamento.txt': "texto e link",

        'proximosEventos': {
            "workshops.txt": "lista dos workshops e talvez mais coisas",
            "hacknights.txt": "descrição das hacknights e comando timeleft para ver quanto tempo falta"
        },

        '.segredo.txt': "meter alguma coisa muito secreta?"
        
        // You can add more files here as needed
    }
};


let currentDir = fileSystem['~']; // Diretoria atual
let currentPath = '~'; // Caminho atual


function getPrompt() {
    return '[[;#6dba83;]guest@hackerschool:]' + "[[;#3465A4;]" + currentPath + ']$ ';
  }


function getDirectory(path) {
    let parts = path.split('/').filter(p => p.length > 0);
    let dir = fileSystem; 
    for (let part of parts) {
        if (dir[part]) {
            dir = dir[part];
        } else {
            return null;
        }
    }
    return dir;
}


function ls(arg) {
    output = "";
    if (arg === '-a'){
        for (const key of Object.keys(currentDir)){
            if (typeof(currentDir[key]) !== 'string')
                output += "[[;#3465A4;#6dba83;]" + key + "]    ";            
            else
                output += key + "    "
        }
    }
    else{
        for (const key of Object.keys(currentDir)){
            if (!key.startsWith('.')){
                if (typeof(currentDir[key]) !== 'string'){
                    output += "[[;#3465A4;#6dba83;]" + key + "]    ";   
                }         
                else
                    output += key + "    "
            }
        }
    }
    return output;
}


function cd(path) {
    if (path === '..') {
        // Subir um nível
        let parts = currentPath.split('/').filter(p => p.length > 0);
        if (parts.length > 0) {
            parts.pop(); // Remover o último segmento
            currentPath = parts.join('/');
            if (currentPath === '') currentPath = '~';
            currentDir = getDirectory(currentPath);
        }
    } else if (currentDir[path] && typeof(currentDir[path]) !== 'string') {
        // Mudar para um subdiretório
        currentDir = currentDir[path];
        currentPath += '/' + path;
    } else if (getDirectory(path) && typeof(getDirectory(path)) !== 'string'){
        currentDir = getDirectory(path);
        let parts = path.split('/').filter(p => p.length > 0);
        currentPath = parts.join('/');
    } else {
        return 'Diretório não encontrado';
    }
    if (currentPath === ''){
        currentPath = '~';
        currentDir = fileSystem['~'];
    }
    return "";
}


function cat(fileName) {
    if (typeof(fileName) === 'string' && currentDir[fileName])
        return currentDir[fileName];
    else if (!currentDir[fileName])
        return "Ficheiro não encontrado";
    else
        return "cat: '" + fileName + "': É uma pasta"
}


// Initialize the terminal
$('#terminal').terminal(function (command) {
    let cmd = command.split(' ');
    let arg1 = cmd[0];
    let arg2 = cmd[1] ? cmd[1] : "";
    
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