// Ficheiro que tem a definição das funções comuns entre o terminal do site e do recrutamento

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
            if (!(currentDir[key] instanceof CustomFile))
                output += "[[;#3465A4;#6dba83;]" + key + "]    ";            
            else
                output +="[[;#6dba83;]" + key + "]    ";
        }
    }
    else{
        for (const key of Object.keys(getDirectory(parsedPath))){
            if (!key.startsWith('.')){
                if (!(currentDir[key] instanceof CustomFile)){
                    output += "[[;#3465A4;#6dba83;]" + key + "]    ";   
                }         
                else
                    output +="[[;#6dba83;]" + key + "]    ";
            }
        }
    }
    return output;
}


function cd() {
    if (parsedPath === "") 
        return "Diretório não encontrado";
    else if (getDirectory(parsedPath) instanceof CustomFile) 
        return "Não é um diretório";
    
    currentPath = parsedPath;
    currentDir = getDirectory(currentPath);
    return "";
}


function cat(arg) {
    if (getDirectory(parsedPath) instanceof CustomFile)
        return getDirectory(parsedPath);
    else if (!getDirectory(parsedPath))
        return "Ficheiro não encontrado";
    else
        return "cat: '" + arg + "': É uma pasta";
}


function pathParser(path) {
    let parts = path.split('/').filter(p => p.length > 0);
    let parsedPath = [];
    let dir = fileSystem; 
    if (parts[0] !== '~')
        parsedPath = currentPath.split('/').filter(p => p.length > 0);
    
    for (let part of parts) {
        if (part === '.')
            continue;
        else if (part === '..')
            parsedPath.pop();
        else
            parsedPath.push(part);
    }

    if (!parsedPath.length)
        return "~";

    for (let part of parsedPath) {
        if (dir[part]) 
            dir = dir[part];
        else 
            return "";
    }
    return parsedPath.join('/');
}


function parseCommandArgs(input) {
    const args = input.trim().split(/\s+/); // Divide a string em partes pelo espaço
    const tags = [];
    let arg = null;

    args.forEach(item => {
        if (item.startsWith("-") && item.length > 1) {
            // Trata item como uma série de tags, tanto em formato `-rl` quanto `-r -l`
            item.slice(1).split("").forEach(tag => {
                if (!tags.includes(tag)) { // Adiciona apenas tags únicas
                    tags.push(tag);
                }
            });
        } else if (arg === null) {
            // O primeiro argumento depois das tags será o argumento principal
            arg = item;
        } else {
            // O segundo argumento depois do principal será o caminho
            parsedPath = item;
        }
    });

    return "";
}



function show(...args) {
    const roles = ["RH", "DEV"];
    let rolesSearch = [];
    let options = [];
    let path = "";
    for(arg of args) {
        if (arg.startsWith('-')) { // Check for '-' options
            if(arg.length === 1) // Verificar se a opcao: '-'
                console.error("Error: Invalid option, use [command] --help to check for <command> options");
            parameters = arg.slice(1, arg.length) // Ficar apenas com '-abc' -> 'abc'
            options = [...options, ...parameters] // Fazer append as options de [a ,b, c], Juntar duas listas basicamente 
        } else if (arg.includes('/')) { // Procurar qual o argumento e o path
            path = arg;
        } else if (roles.includes(arg)) { // Vejo o que eu quero procurar tipo 'show RH'
            rolesSearch.push(arg);
        } else { // O que o user meteu n faz sentido
            console.error("Error: Invalid argument, use [command] --help to check for <comamnd> usability"); 
        }
    }

    
    if (args.length === 1) {
        const dir = getDirectory(path);
    }
}







function grep(pattern, path) {
    if (!getDirectory(path)) {
        return "Ficheiro não encontrado";
    } else if (currentDir[fileName].getType() !== 'txt') {
        return "grep: '" + fileName + "': É uma pasta";
    }

    let fileContent = currentDir[fileName].toString();
    let lines = fileContent.split('\n');
    
    let matchingLines = lines.filter(line => line.includes(pattern));

    if (matchingLines.length > 0) {
        return matchingLines.join('\n');
    } else {
        return "grep: Nenhuma correspondência encontrada para o padrão '" + pattern + "'";
    }
}