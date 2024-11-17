// Ficheiro para as as definições dos diretórios, ficheiros, descrições dos ficheiros

// Se quiseres adicionar um ficheiro crias um objeto da classe File(descrição, formato) e depois
// adicionas no fileSystem mais em baixo

const imagem = "                  NNNNNNNNNNNNNN                  \n\
             NNNNNNNNNNNNNNNNNNNNNNNN             \n\
          NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN          \n\
        XXXXXXXXXXXXKkooddldKKXXXXXXXXXXXX        \n\
      XXXXXXXXXXXOd,,''.'.'..',ckXXXXXXXXXXX      \n\
    XXXXXXXXXXXKl'','...........;0XXXXXXXXXXXX    \n\
   XXXXXXXXXXXXx,;;:::clc::;,,'''cKXXXXXXXXXXXX   \n\
  XXXXXXXXXXXXK::clodkkxxdoolcc:,,OXXXXXXXXXXXXX  \n\
 XXXXXXXXXXXXXk;clookkkxxdoolccc;'xXXXXXXXXXXXXXX \n\
 XXXXXXXXXXXXKo;:::c:;cddl:,,,,;;.:KXXXXXXXXXXXXX \n\
XXXXXXXXXXXXXKx;:dcl;;ckx:,,',;::.cKXXXXXXXXXXXXXX\n\
KKKKKKKKKKKKKKx::ddxddkkxc:;::cl:,:KKKKKKKKKKKKKKK\n\
KKKKKKKKKKKKKKOc:oxkkxxdl;:::ccc;,kKKKKKKKKKKKKKKK\n\
KKKKKKKKKKKKKKKkldkkdlc,,'',;ccclkKKKKKKKKKKKKKKKK\n\
KKKKKKKKKKKKKKKK0odocclc:;,,,;::0KKKKKKKKKKKKKKKKK\n\
 0000000000000000Oloodoc;;;:;;;k00000000000000000 \n\
 00000000000000000xlclol;;,,,;:O00000000000000000 \n\
  000000000000000Oxdocc:,',,;:clo000000000000000  \n\
   000000000000Okldddddl:;;:::cc'lk000000000000   \n\
    000000Okxdollllddddoc:::::::;;::oxk0000000    \n\
      kxdlllllcccll;coolc:;;,,;;;;;,;;;cldxO      \n\
        ccccllcclcod';cccc:;;;:;;;,';;;;::        \n\
          ccllccccc,,;:clooollc,,,,;;;;:          \n\
             cc:c::.;:cloddol:''',;;;             \n\
                  :,:;coodol:.''                  \
"

const teste = "\
00KK0KKKXXNNNNWWWWWXXXXXNNNNNNNNNNNNNNWNNNNNKKXNXN\n\
OO0NNNXNWWWWWNWMMWWWWWWWWWWNNNNNNNNNNNWWWWWXKKNXXK\n\
000WMNNNWWWWWNWWWWWWWNNNWNNNNNNNNNNNNNNNNWN00KKOOO\n\
0KXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKOO0Ok\n\
kOKXWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKOkkx\n\
xKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXX0Od\n\
cOXNNNNNNNNNNNNNNNNNNNXKKXNNNNNNNNXNNNNNNNNNNNXXKx\n\
;kXXXXXXXXXNNXXXXK0OkdolloxxxOKXXXXXXXXXXXXXXXXXX0\n\
:OXXXXXXXXXXXXXOdlolcc:cccc:ccldxOKXXXXXXXXXXXXXXK\n\
oXXXXXXXXXXX0kdlcc:::::::;;;:;;;:cdOXXXXXXXXXXXXXK\n\
kXXXXXXXXXKklc::;:;;;;;;;:llclc:;;:lOXXXXXXXXXXXXX\n\
OKKKKKKKKKdc:;;,;,,,,,;;ldxddxdol;,;cOKXXXXXXXXXXX\n\
KKKKKKKK0l;;,,',,,,,;::lxkxxxxxdoc,,;cOKKKKKKKKKKX\n\
KKKKKKKKo,,,'''',;:lloxkOOkkkkxxoc;,,,dKKKKKKKKKKK\n\
000KKK0k;,''..'':dxxxkkkkkxxoollll;'',l00KKKKKKKKK\n\
0000000o,'.....'cc::;;:lddo:;,;::c:'',c0000000KKK0\n\
0000000x,.....,cc:;;;::lxOo::::::lo;''c00OkkOOOOOx\n\
000000OO:....'loddoooodxkOxoooddxxdc'':ldddodxxxol\n\
OOOOxxxdl....,ldxkkkkkkkkOOxdxkkkkx:',clclllllloll\n\
OOkxlollc;..'.:odxkxdddoooolloddxdd;;c:ccllllllodo\n\
dddo:;,;;;,,'.,llooddxxddollloloooo::;;:cc:cccoddd\n\
oolc:,,,,,,,'..clooooolllllcclooool;;,;ccc:ccc:::c\n\
lllc;,,,,'..'.':clloodxxxdddooollc:;;,,;;;:::;;;;;\n\
llcc,'..''''...;cccloddxxxddoooll'';;;,;,;;::;;;;;\n\
lc;...,'.......:llc::ccllllcccccl'.,,;;,,',,;;;;;;\n\
:,,'''.........:lllcc::::;:::ccc:..'''';;::::;;;;;\n\
''.............:clllclllllccccc:,..''.'''';::;;;;:\n\
..............':ccllcccccc::::;,......'....'',;;;:\n\
..............,cccclccccc:::;,,..............''',;\n\
...............:lolllc:::::;,'...............'''',\n\
................:oddooloooc'....................',\n\
.................,codoodd:......................',\n\
....................,:::'......................'',\n\
................................................''\n\
.................................................'\n\
"

const socials = "\
instagram    [[;#FFFFFF;]https://www.instagram.com/hackerschool_ist/]\n\
facebook     [[;#FFFFFF;]https://www.facebook.com/hackerschoolist/?locale=pt_PT]\n\
youtube      [[;#FFFFFF;]https://www.youtube.com/watch?v=dQw4w9WgXcQ]\n\
github       [[;#FFFFFF;]https://github.com/HackerSchool]\
"

const billy_hs = new HsFile(imagem, "André Santos", "Recursos Humanos", "https://github.com/Billybs", "");

const a_hs = new HsFile(imagem, "André Santos", "Recursos Humanos", "https://github.com/Billybs", "");

const b_hs = new HsFile(imagem, "André Santos", "Recursos Humanos", "https://github.com/Billybs", "");

const c_hs = new HsFile(imagem, "André Santos", "Recursos Humanos", "https://github.com/Billybs", "");

const d_hs = new HsFile(imagem, "André Santos", "Recursos Humanos", "https://github.com/Billybs", "");

const site_prj = new PrjFile("Skibidi", "Concluded");

const hackerSchool_txt = new TxtFile("A HackerSchool é uma associação académica que se foca no desenvolvimento de atividades num ambiente\nmultidisciplinar, de learn-by-doing e de aprendizagem entre pares, inspirado nos valores da cultura hacker.\n\nAqui, independentemente da formação de base, aprende-se a criar novos produtos e serviços sobre tecnologias\nemergentes como a internet das coisas ou a web semântica, utilizando soluções de baixo custo assentes em open\nelectronics, open materials, open fabrication, entre outros.");

const cibersegurança_txt = new TxtFile("N somos hackers plot twist do século");

const socials_txt = new TxtFile(socials);

const recrutamento_evnt = new EvntFile("O nosso recrutamento dura cerca de 2 semanas, e vamos pôr à prova a tua perseverança, criatividade e trabalho em equipa.\nSe estás com interesse no nosso núcleo, tenta o desafio! Terás vários puzzles e enigmas para resolver - mas cuidado! Não te deixes apanhar pelos... xad0w.b1ts.\n[[;#AD7FA8;]https://docs.google.com/forms/d/e/1FAIpQLSdIiMJOEwspbpPPrFDvi0GIiHDNE5an142jXuOAecHs5I7U7Q/closedform]");

const workshops_evnt = new EvntFile("Lista dos Workshops e talvez mais coisas");

const hacknights_evnt = new EvntFile("Descrição das hacknights e comando timeleft para ver quanto tempo falta");

const _segredo_txt = new TxtFile("meter alguma coisa muito secreta?");



var fileSystem = {
    '~': {
        'membros': {
            "billy.hs": billy_hs,
            "a.hs": a_hs,
            "b.hs": b_hs,
        },
        "d.hs": d_hs,
        "c.hs": c_hs,

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