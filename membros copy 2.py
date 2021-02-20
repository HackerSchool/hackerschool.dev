import codecs

newPeopleContactInfoJson = "\
  126 | Afonso Fernandes | 919133622 | afonso110@gmail.com	| ist93679 | LEIC-T | 20/21 1s | afonsoFernandes.png \n\
127| Ana Margarida Pina da Ajuda	| 911856616 | ana.margarida.ajuda@tecnico.ulisboa.pt	| ist98501 | MEMec | 20/21 1s | anaAjuda.png \n\
128 | André Teodósio | 916508645 |	andrefteo@gmail.com |	ist99889 |	MEEC | 20/21 1s | andreTeodosio.png \n\
129 | Diogo Correia	| 917560028 |	me@diogotc.com	| ist199211	| LEIC-A | 20/21 1s | diogoCorreia.png \n\
130 | Diogo Sousa Matos |	911585053 |	diogo.s.matos@tecnico.ulisboa.pt |	ist95778 |	MEAer | 20/21 1s | diogoMatos.png \n\
132 | Francisco Cruz	| 969306145	| fcruz170@gmail.com	| 96208	| LEIC | 20/21 1s | franciscoCruz.png \n\
133 | Francisco Fonseca |	936039753 | francisco.parreira.fonseca@gmail.com |	ist95789 | MEAer | 20/21 1s | franciscoFonseca.png \n\
134 | Guilherme Soares | 913024984 | guilherme.monteiro696@gmail.com |	ist95873 | MEBiom | 20/21 1s | guilhermeSoares.png \n\
135 | Henrique Alves Pocinho |	912821447	| hapocinho@gmail.com |	ist99952	| MEEC | 20/21 1s | henriquePocinho.png \n\
136 | Inês Carvalho | 960297874 | ines.n.carvalho@tecnico.ulisboa.pt	| ist92812	| MEBiom | 20/21 1s | inesCarvalho.png \n\
137 | Isabel Portugal  | 960129842 | portugalisabelm@gmail.com | ist1100227 | MEMEC | 20/21 1s | isabelPortugal.png \n\
138 | José Pereira  | 965626011| jose.h.pereira@tecnico.ulisboa.pt | ist92405| MEAER| 20/21 1s | josePereira.png \n\
139 | Mafalda Serafim  | 939079700 | mafalda.dmserafim@gmail.com | ist92512| LEIC | 20/21 1s | mafaldaSerafim.png \n\
140 | Manuel Gomes | 915163675| manuel.luiz.gomes@tecnico.ulisboa.pt | ist96268| MEEC | 20/21 1s | manuelGomes.png  \n\
141 | Max Nobre Supelnic| 915419954 | maxsupelnic@tecnico.ulisboa.pt | ist95960| MEBIOM| 20/21 1s | maxSupelnic.png \n\
142 | Pablo Alejandro| 912832562 | pabloportugalgarcia@gmail.com | ist98422| MEMEC | 20/21 1s | pabloAlejandro.png \n\
143 | Pedro Ventura | 910710449 | pedrocasventura@gmail.com | ist93155| MEEC| 20/21 1s | pedroVentura.png \n\
144 | Renato Sebastião | 968 230 829 | renato.sebastiao@tecnico.ulisboa.pt | ist96475| MEMEC | 20/21 1s | renatoSebastiao.png \n\
145 | Ricardo Gomes de Oliveira Caeiro Antunes | 961302451 | riscado.antunes@gmail.com | ist99316| LEIC-A| 20/21 1s | ricardoAntunes.png \n\
146 | Tshepo Thajane | 926 851 251 | tshepothajane03@gmail.com | ist91164| MEAER | 20/21 1s | thespoThajane.png \
"

projetos = " { 'Share It Help It', '}"

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


newMemberInfos = newPeopleContactInfoJson.split("\n")
dirMembersInfos = contactInfoJson.split("\n")
#singleMemberInfos = memberInfos.split("|")
columnInfo = "Nº | Nome | Telemóvel | E-Mail | IST ID | Cargo | Curso | Entrada | Imagem " #not needed

finalString = "membro:\n"
finalDirString = "direcao:\n"
print(dirMembersInfos)

for singleMemberInfosString in newMemberInfos:
  singleMemberInfos = singleMemberInfosString.split("|")
  position = "Membro"
  
  print(singleMemberInfos)
  image = singleMemberInfos[7]
  finalString += "\
    insert into(members) (hackerId, name, position, imageName) \
    values (" + singleMemberInfos[0] + ", \"" + singleMemberInfos[1] + "\", \"" + position + "\", \"" + image + "\"); \n \
  "


for singleMemberInfosString in dirMembersInfos:
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