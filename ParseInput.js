function readArgs(command) {
    if(!command)
        return {cmd: "empty", argumentos: {path: "", str_to_find: "", opt: [], args: false} };

    let cmd_list = command.trim().split(/\s+(.*)/).filter(Boolean);
    if(cmd_list.length === 1)
        return {cmd: cmd_list[0], argumentos: {path: "", str_to_find: "", opt: [], args: false} };

    let [comando, argumentos] = cmd_list;
    argumentos = argumentos.split(" ");

    let options = [];
    let path = "~";
    let str_to_find = "";

    for(arg of argumentos) {
        if (arg.startsWith('-') && arg.length > 1) { // Check for '-' options
            parameters = arg.slice(1, arg.length) // Ficar apenas com '-abc' -> 'abc'
            options = [...options, ...parameters] // Fazer append as options de [a ,b, c], Juntar duas listas basicamente 
        } else { // Vejo o que eu quero procurar tipo 'show RH'
            if (!path) 
                path = arg;                 
            else {  // Procurar qual o argumento e o path
                str_to_find = path;
                path = arg;
            }
        } 
    }

    // Process Path
    if(!path.includes('/'))
        path = paths.currentPath + '/' + path;
    path = pathParser(path);
    const input = {
        cmd: comando,
        argumentos: {
            path: path,
            str_to_find: str_to_find,
            opt: options,
            args: true
        }
    };
    return input;
}
