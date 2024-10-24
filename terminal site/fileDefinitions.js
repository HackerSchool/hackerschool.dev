// Ficheiro para as as definições dos diretórios, ficheiros, descrições dos ficheiros

// Se quiseres adicionar um ficheiro crias um objeto da classe File(descrição, formato) e depois
// adicionas no fileSystem mais em baixo
const billy_hs = new HsFile("Skibidi", ["RH"]);

const site_prj = new PrjFile("Skibidi", "Concluded");

const hackerSchool_txt = new TxtFile("Descrição da Hacker School");

const cibersegurança_txt = new TxtFile("N somos hackers plot twist do século");

const socials_txt = new TxtFile("instagram\t[[;#AD7FA8;]https://www.instagram.com/hackerschool_ist/]\nfacebook\t[[;#AD7FA8;]https://www.facebook.com/hackerschoolist/?locale=pt_PT]\nyoutube\t[[;#AD7FA8;]https://www.youtube.com/watch?v=dQw4w9WgXcQ]\ngithub\t[[;#AD7FA8;]https://github.com/HackerSchool]");

const recrutamento_evnt = new EvntFile("O nosso recrutamento dura cerca de 2 semanas, e vamos pôr à prova a tua perseverança, criatividade e trabalho em equipa.\nSe estás com interesse no nosso núcleo, tenta o desafio! Terás vários puzzles e enigmas para resolver - mas cuidado! Não te deixes apanhar pelos... xad0w.b1ts.\n[[;#AD7FA8;]https://docs.google.com/forms/d/e/1FAIpQLSdIiMJOEwspbpPPrFDvi0GIiHDNE5an142jXuOAecHs5I7U7Q/closedform]");

const workshops_evnt = new EvntFile("Lista dos Workshops e talvez mais coisas");

const hacknights_evnt = new EvntFile("Descrição das hacknights e comando timeleft para ver quanto tempo falta");

const _segredo_txt = new TxtFile("meter alguma coisa muito secreta?");



var fileSystem = {
    '~': {
        'membros': {
            "billy.hs": billy_hs
        },

        'projetos': {
            "site.prj": site_prj
        },

        'aboutUs': {
            "HackerSchool.txt": hackerSchool_txt,
            "cibersegurança.txt": cibersegurança_txt,
            "socials.txt": socials_txt
        },

        'recrutamento.evnt': recrutamento_evnt,

        'proximosEventos': {
            "workshops.evnt": workshops_evnt,
            "hacknights.evnt": hacknights_evnt
        },

        '.segredo.txt': _segredo_txt
        
        // You can add more files here as needed
    }
};