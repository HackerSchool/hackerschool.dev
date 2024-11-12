const paths = {
    currentDir: fileSystem["~"],
    parsedPath: fileSystem["~"],
    currentPath: "~"
};

function pathParser(path) {
    let parts = path.split('/').filter(p => p.length > 0);
    let parsedPath = [];
    let dir = fileSystem; 
    if (parts[0] !== '~')
        parsedPath = paths.currentPath.split('/').filter(p => p.length > 0);
    
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