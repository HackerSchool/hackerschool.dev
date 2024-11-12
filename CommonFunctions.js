// Ficheiro que tem a definição das funções comuns entre o terminal do site e do recrutamento

function getPrompt() {
    return '[[;#6dba83;]guest@hackerschool:]' + "[[;#3465A4;]" + paths.currentPath + ']$ ';
  }


function ls(args) {
    let output = "";
    let directory = paths.parsedPath;

    
    if(!args.path) {
        directory = paths.currentDir;
    }

    for (let [key, values] of Object.entries(directory)) {
        if (values instanceof CustomFile) {
            if ( key.startsWith('.') && args && (args.opt.includes('a')) ){ 
                output += "[[;#3465A4;#6dba83;]" + key + "]    ";  
            }
            else if ( !key.startsWith('.'))
                output += "[[;#3465A4;#6dba83;]" + key + "]    ";  
        }
        else {
            output +="[[;#6dba83;]" + key + "]    ";
        }
    }

    return output;
}


function cd(args) {
    if (!args.args) {
        paths.parsedPath = fileSystem["~"];
        paths.currentDir = paths.parsedPath;
        paths.currentPath = "~";
        return;
    }
    if (paths.parsedPath instanceof CustomFile) 
        return "Não é um diretório";
    if (!args.path)
        return "eheheeheheh";
    paths.currentPath = args.path;
    paths.currentDir = paths.parsedPath;
    return "";
}

function cat(args) {
    if (paths.parsedPath instanceof CustomFile)
        return paths.parsedPath;
    else if (!paths.parsedPath)
        return "Ficheiro não encontrado";
    else
        return "cat: '" + args.str_to_find + "': É uma pasta";
}


function show(args) {
    return null;
}

//grep
function grep_message(output, message) {
    message.forEach(line => {
        if(line.includes(args.str_to_find)) {
            const start_index = line.indexOf(args.str_to_find);
            const end_index = start_index + args.str_to_find.length - 1;
            before_word = start_index === 0 ? "" : line.slice(0, start_index);
            word_itself = "[[;#EF2929;]" + line.slice(start_index, end_index + 1) + "]";
            after_word = end_index === line.length - 1 ? "" : line.slice(end_index + 1, line.length);
            output += before_word + word_itself + after_word + "\n";
        }
    });
    return output;
}

function grep_directory(word, path) {
    return "";
}

//grep -a -r "Hello" ./filename.ext
function grep(args) {
    let output = "";
    console.log(args);
    if(!args.opt.length){
        if (!(paths.parsedPath instanceof CustomFile))
            return "Não é um ficheiro.";
        message = paths.parsedPath.content.split('\n');
        output = grep_message(output, message);
    }
    if(args.opt.includes('r'))
        console.log(paths.parsedPath);
        for(let [file, content] of Object.entries(paths.parsedPath)) {
            console.log(file);
        }
    return output.trim();
}
