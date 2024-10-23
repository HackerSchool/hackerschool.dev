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
            if (!(currentDir[key] instanceof File))
                output += "[[;#3465A4;#6dba83;]" + key + "]    ";            
            else
                output += key + "    "
        }
    }
    else{
        for (const key of Object.keys(getDirectory(parsedPath))){
            if (!key.startsWith('.')){
                if (!(currentDir[key] instanceof File)){
                    output += "[[;#3465A4;#6dba83;]" + key + "]    ";   
                }         
                else
                    output += key + "    "
            }
        }
    }
    return output;
}


function cd() {
    if (parsedPath === "") 
        return "Diretório não encontrado";
    else if (getDirectory(parsedPath) instanceof File) 
        return "Não é um diretório";
    
    currentPath = parsedPath;
    currentDir = getDirectory(currentPath);
    return "";
}


function cat(fileName) {
    if (currentDir[fileName].getType() === 'txt')
        return currentDir[fileName];
    else if (!currentDir[fileName])
        return "Ficheiro não encontrado";
    else
        return "cat: '" + fileName + "': É uma pasta"
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