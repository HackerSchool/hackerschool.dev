// Ficheiro para as as definições dos diretórios, ficheiros, descrições dos ficheiros

// Se quiseres adicionar um ficheiro crias um objeto da classe File(descrição, formato) e depois
// adicionas no fileSystem mais em baixo
const billy_txt = new File("Skibidi", "txt");

const site_txt = new File("Skibidi", "txt");

const hackerSchool_txt = new File("Descrição da Hacker School", "txt");

const cibersegurança_txt = new File("N somos hackers plot twist do século", "txt");

const socials_txt = new File("Redes Sociais", "txt");

const recrutamento_txt = new File("Recrutamento e Link", "txt");

const workshops_txt = new File("Lista dos Workshops e talvez mais coisas", "txt");

const hacknights_txt = new File("Descrição das hacknights e comando timeleft para ver quanto tempo falta", "txt");

const _segredo_txt = new File("meter alguma coisa muito secreta?", "txt");



var fileSystem = {
    '~': {
        'membros': {
            "billy.txt": billy_txt
        },

        'projetos': {
            "site.txt": site_txt
        },

        'aboutUs': {
            "HackerSchool.txt": hackerSchool_txt,
            "cibersegurança.txt": cibersegurança_txt,
            "socials.txt": socials_txt
        },

        'recrutamento.txt': recrutamento_txt,

        'proximosEventos': {
            "workshops.txt": workshops_txt,
            "hacknights.txt": hacknights_txt
        },

        '.segredo.txt': _segredo_txt
        
        // You can add more files here as needed
    }
};