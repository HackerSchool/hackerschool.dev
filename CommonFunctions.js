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


function show() {
    if(paths.parsedPath instanceof HsFile)
        return paths.parsedPath.show();
    
    return "Não é um ficheiro HS";
}

//grep
function grep_message(args, entrie, output, spec_name=false, list_file=false, path = null) {
    file_name = entrie[0];

    message = entrie[1].content;
    if(list_file) {
        if(message.includes(args.str_to_find))
            return output += "[[;#A020F0;]" + path + "]" + "\n";
    }

    message = entrie[1].content.split('\n');
    message.forEach(line => {
        if(line.includes(args.str_to_find)) {
            const start_index = line.indexOf(args.str_to_find);
            const end_index = start_index + args.str_to_find.length - 1;
            before_word = start_index === 0 ? "" : line.slice(0, start_index);
            word_itself = "[[;#EF2929;]" + line.slice(start_index, end_index + 1) + "]";
            after_word = end_index === line.length - 1 ? "" : line.slice(end_index + 1, line.length);
            if (spec_name) {
                header = "[[;#A020F0;]" + path + "]" + "[[;#0000FF;]" + ":" + ["]"];
                output += header;
            }
            output += before_word + word_itself + after_word + "\n";
        }
    });
    return output;
}

function grep_directory(args, directory, output, list_file = false, path = null) {
    store_path = path;
    dir_name = directory[0];
    dir_content = directory[1];
    list_file = args.opt.includes("l") ? true : false;
    for ( let entrie of Object.entries(dir_content) ) {
        tmp = store_path + "/" + entrie[0];
        file = entrie[1];
        if (file instanceof CustomFile)
            output = grep_message(args, entrie, output, spec_name=true, list_file=list_file, path=tmp);
        else {
            output = grep_directory(args, file, output, list_file=list_file, path=tmp);
        }
    }
    return output;
}

//grep -a -r "Hello" ./filename.ext
function grep(args) {
    let list_file = args.opt.includes("l") ? true : false;
    let output = "";
    let path;
    if(args.opt.includes('r')) {
        if ((paths.parsedPath instanceof CustomFile)) {
            entrie = [args.path_not_parsed, paths.parsedPath];
            let path = args.path_not_parsed;
            output = grep_message(args, message, output, spec_name=true, list_file=list_file, path = path);
        }

        else {
            for(let entrie of Object.entries(paths.parsedPath)) {
                path = args.path_not_parsed + "/" + entrie[0];
                file = entrie[1];
                if (file instanceof CustomFile) {
                    output = grep_message(args, entrie, output, spec_name=true, list_file=list_file, path=path);
                }

                else {
                    output = grep_directory(args, entrie, output, list_file=list_file, path=path);
                }
            }
        }
    }
    else {
        if (!(paths.parsedPath instanceof CustomFile))
            return "Não é um ficheiro.";
        let entrie = [args.path_not_parsed, paths.parsedPath];
        output = grep_message(args, entrie, output, spec_name=false, list_file=list_file, args.path_not_parsed);
    }
    return output.trim();
}
