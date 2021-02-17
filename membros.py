import codecs

contactInfoJson = "\
80 | Miguel Fazenda       | 936768525 | miguelsfazenda@gmail.com                | ist190146 | Tesoureiro | MEEC | 17/18 2s | miguelFazenda.png\n\
81 | Pedro Direita        | 916888988 | pedro.direita@gmail.com                 | ist181305 || MEEC | 17/18 2s | pedroDireita.png\n\
85 | Filipe Varela        | 915241625 | bfagdsv250@gmail.com                    | ist192459 | Presidente | MEMEC | 18/19 1s | filipeVarela.png\n\
90 | João Góis            | 961379368 | joao.luis.gois@tecnico.ulisboa.pt       | ist190284 | | MEMEC | 18/19 1s |\n\
102 | Catarina Bento      | 911710980 | catarina.c.bento@tecnico.ulisboa.pt     | ist193230 | | MEMEC | 18/19 2s |\n\
103 | Cármen Fonseca      | 961546295 | carmenfonseca@tecnico.ulisboa.pt        | ist192671 | | MEAER | 18/19 2s |\n\
106 | Hugo Marques        | 927831895 | hugofmarques@tecnico.ulisboa.pt         | ist189460 | Vice-presidente | LEIC | 19/20 1s | hugoMarques.png\n\
107 | Henrique Guerra     | 933998487 | henrique.b.guerra@tecnico.ulisboa.pt    | ist189456 | Desenvolvimento | LEIC | 19/20 1s | henriqueGuerra.png\n\
108 | Afonso Certo        | 939605952 | certafonso@gmail.com                    | ist196134 | | MEEC | 19/20 1s |\n\
109 | Pedro Taborda       | 925896230 | pedrotaborda04@gmail.com                | ist193152 | | MEEC | 19/20 1s |\n\
112 | Francisco Rodrigues | 918869225 | francisco.rodrigues0908@gmail.com       | ist196210 | | MEEC | 19/20 1s |\n\
115 | Daniel Leitão       | 927862314 | daniel.g.leitao@gmail.com               | ist190042 | | MEEC | 19/20 1s |\n\
120 | Duarte Oliveira     | 916855882 | duarte.g.de.oliveira@tecnico.ulisboa.pt | ist194192 | Marketing | MEEC | 19/20 2s |\n\
121 | João Palma          | 914849423 | joaocarlospalma.io@gmail.com         | ist181212 | Desenvolvimento |LEIC | 19/20 2s | joaoPalma.png\n\
122 | Margarida Oliveira  | 912128143 | maggy.oliveira23@gmail.com           | ist196125 | Recursos Humanos |MEM | 19/20 2s |\n\
123 | Tiago Almeida       | 918757363 | tiagoalmeida5@tecnico.ulisboa.pt     | ist196328 | Recursos Humanos |MEEC | 19/20 2s |\n\
124 | Bernardo Esteves    | 924161865 | bernardo.esteves@tecnico.ulisboa.pt  | ist187633 | |MEIC | 19/20 2s |\n\
125 | Inês Magessi        | 927332017 | inesmagessi1011@gmail.com            | ist195593 | |LEIC | 19/20 2s |\
"


allMembersInfos = contactInfoJson.split("\n")
#singleMemberInfos = memberInfos.split("|")
columnInfo = "Nº | Nome | Telemóvel | E-Mail | IST ID | Cargo | Curso | Entrada | Imagem " #not needed

finalString = "membro:\n"
finalDirString = "direcao:\n"
print(allMembersInfos)
for singleMemberInfosString in allMembersInfos:
  singleMemberInfos = singleMemberInfosString.split("|")
  position = singleMemberInfos[5].replace(" ", "")

  image = singleMemberInfos[8]
  if not image:
    image = "default.png"

  if len(position) == 0:
    position = "Membro"
    finalString += "  - nome: " + singleMemberInfos[1] + "\n    cargo: " + position + "\n    imagem: " + image  + "\n" 
  else:
    finalDirString += "  - nome: " + singleMemberInfos[1] + "\n    cargo: " + position + "\n    imagem: " + image  + "\n" 

finalString = finalDirString + finalString

file = codecs.open("data/membros.yml", "w", "utf-8")
print(finalString)
file.write(finalString)
file.close()


"""
var contactInfoJson = "\
80 | Miguel Fazenda       | 936768525 | miguelsfazenda@gmail.com                | ist190146 | Tesoureiro | MEEC | 17/18 2s\
81 | Pedro Direita        | 916888988 | pedro.direita@gmail.com                 | ist181305 || MEEC | 17/18 2s\
85 | Filipe Varela        | 915241625 | bfagdsv250@gmail.com                    | ist192459 | Presidente | MEMEC | 18/19 1s\
90 | João Góis            | 961379368 | joao.luis.gois@tecnico.ulisboa.pt       | ist190284 | | MEMEC | 18/19 1s\
102 | Catarina Bento      | 911710980 | catarina.c.bento@tecnico.ulisboa.pt     | ist193230 | | MEMEC | 18/19 2s\
103 | Cármen Fonseca      | 961546295 | carmenfonseca@tecnico.ulisboa.pt        | ist192671 | | MEAER | 18/19 2s\
106 | Hugo Marques        | 927831895 | hugofmarques@tecnico.ulisboa.pt         | ist189460 | Vice-presidente | LEIC | 19/20 1s\
107 | Henrique Guerra     | 933998487 | henrique.b.guerra@tecnico.ulisboa.pt    | ist189456 | Desenvolvimento | LEIC | 19/20 1s\
108 | Afonso Certo        | 939605952 | certafonso@gmail.com                    | ist196134 | | MEEC | 19/20 1s\
109 | Pedro Taborda       | 925896230 | pedrotaborda04@gmail.com                | ist193152 | | MEEC | 19/20 1s\
112 | Francisco Rodrigues | 918869225 | francisco.rodrigues0908@gmail.com       | ist196210 | | MEEC | 19/20 1s\
115 | Daniel Leitão       | 927862314 | daniel.g.leitao@gmail.com               | ist190042 | | MEEC | 19/20 1s\
120 | Duarte Oliveira     | 916855882 | duarte.g.de.oliveira@tecnico.ulisboa.pt | ist194192 | Marketing | MEEC | 19/20 2s\
121 | João Palma          | 914849423 | joaocarlospalma.io@gmail.com         | ist181212 | Desenvolvimento |LEIC | 19/20 2s\
122 | Margarida Oliveira  | 912128143 | maggy.oliveira23@gmail.com           | ist196125 | Recursos Humanos |MEM | 19/20 2s\
123 | Tiago Almeida       | 918757363 | tiagoalmeida5@tecnico.ulisboa.pt     | ist196328 | Recursos Humanos |MEEC | 19/20 2s\
124 | Bernardo Esteves    | 924161865 | bernardo.esteves@tecnico.ulisboa.pt  | ist187633 | |MEIC | 19/20 2s\
125 | Inês Magessi        | 927332017 | inesmagessi1011@gmail.com            | ist195593 | |LEIC | 19/20 2s\
";

var allMembersInfos = contactInfoJson.split("\n");
var singleMemberInfos = memberInfos.split("|");
var columnInfo = "Nº | Nome | Telemóvel | E-Mail | IST ID | Cargo | Curso | Entrada ";
var columnInfoArray = columnInfo.split("|");



/*
membro:
  - nome: Sargento
    cargo: Presidente
    imagem:

  - nome: Pessoa 2
    cargo: Maker
    imagem:

  - nome: Pessoa 3
    cargo: Maker
    imagem:
  - nome: Pessoa 4
    cargo: Maker
    imagem:
  - nome: Pessoa 5
    cargo: Maker
    imagem:
  - nome: Pessoa 6
    cargo: Maker
    imagem:
  - nome: Pessoa 7
    cargo: Maker
    imagem:

*/
"""