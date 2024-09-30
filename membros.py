import codecs

class HackerMember:
  def __init__(self, hackerId, name, image):
    self.hackerId = hackerId.strip()
    
    nameArray = name.strip().split(" ")
    
    if(len(nameArray) > 2):
      name = nameArray[0] + " " + nameArray[len(nameArray) - 1]

    if not image:
      image = "default.png"

    self.name = name
    self.image = image.strip()
    self.position = "Membro"
  
  def toString(self):
    return "  - nome: " + self.name + "\n    cargo: " + self.position + "\n    imagem: " + self.image  + "\n"
  
  def str(self):
    return self.hackerId + " " + self.name

class HackerDirectionMember(HackerMember):
  def __init__(self, hackerId, name, image, position):
    super().__init__(hackerId, name, image)
    self.position = position.strip()

class Project:
  def __init__(self, name, image, highlighted, members, description):
    self.name = name
    self.image = image
    self.members = members
    self.description = description
    self.highlighted = highlighted

newPeopleContactInfoJson = "\
  126 | Afonso Fernandes | 919133622 | afonso110@gmail.com	| ist93679 | LEIC-T | 20/21 1s | afonsoFernandes.jpg \n\
127| Ana Margarida Pina da Ajuda	| 911856616 | ana.margarida.ajuda@tecnico.ulisboa.pt	| ist98501 | MEMec | 20/21 1s | anaAjuda.png \n\
128 | André Teodósio | 916508645 |	andrefteo@gmail.com |	ist99889 |	MEEC | 20/21 1s | andreTeodosio.jpg \n\
129 | Diogo Correia	| 917560028 |	me@diogotc.com	| ist199211	| LEIC-A | 20/21 1s | diogoCorreia.jpg \n\
130 | Diogo Sousa Matos |	911585053 |	diogo.s.matos@tecnico.ulisboa.pt |	ist95778 |	MEAer | 20/21 1s | diogoMatos.png \n\
132 | Francisco Cruz	| 969306145	| fcruz170@gmail.com	| 96208	| LEIC | 20/21 1s | franciscoCruz.png \n\
133 | Francisco Fonseca |	936039753 | francisco.parreira.fonseca@gmail.com |	ist95789 | MEAer | 20/21 1s | franciscoFonseca.png \n\
135 | Henrique Alves Pocinho |	912821447	| hapocinho@gmail.com |	ist99952	| MEEC | 20/21 1s | henriquePocinho.jpeg \n\
136 | Inês Carvalho | 960297874 | ines.n.carvalho@tecnico.ulisboa.pt	| ist92812	| MEBiom | 20/21 1s | inesCarvalho.png \n\
137 | Isabel Portugal  | 960129842 | portugalisabelm@gmail.com | ist1100227 | MEMEC | 20/21 1s | mariaPortugal.png \n\
138 | José Pereira  | 965626011| jose.h.pereira@tecnico.ulisboa.pt | ist92405| MEAER| 20/21 1s | josePereira.jpg \n\
139 | Mafalda Serafim  | 939079700 | mafalda.dmserafim@gmail.com | ist92512| LEIC | 20/21 1s | mafaldaSerafim.jpg \n\
140 | Manuel Gomes | 915163675| manuel.luiz.gomes@tecnico.ulisboa.pt | ist96268| MEEC | 20/21 1s | manuelGomes.png  \n\
141 | Max Nobre Supelnic| 915419954 | maxsupelnic@tecnico.ulisboa.pt | ist95960| MEBIOM| 20/21 1s | maxSupelnic.png \n\
142 | Pablo Alejandro| 912832562 | pabloportugalgarcia@gmail.com | ist98422| MEMEC | 20/21 1s | pabloGarcia.jpeg \n\
143 | Pedro Ventura | 910710449 | pedrocasventura@gmail.com | ist93155| MEEC| 20/21 1s | pedroVentura.jpg \n\
144 | Renato Sebastião | 968 230 829 | renato.sebastiao@tecnico.ulisboa.pt | ist96475| MEMEC | 20/21 1s | renatoSebastiao.png \n\
145 | Ricardo Gomes de Oliveira Caeiro Antunes | 961302451 | riscado.antunes@gmail.com | ist99316| LEIC-A| 20/21 1s | ricardoAntunes.png \n\
"

projetos = " { 'Share It Help It', '}"

contactInfoJson = "\
85 | Filipe Varela        | 915241625 | bfagdsv250@gmail.com                    | ist192459 | Presidente | MEMEC | 18/19 1s | filipeVarela.png\n\
106 | Hugo Marques        | 927831895 | hugofmarques@tecnico.ulisboa.pt         | ist189460 | Vice-presidente | LEIC | 19/20 1s | hugoMarques.jpg\n\
80 | Miguel Fazenda       | 936768525 | miguelsfazenda@gmail.com                | ist190146 | Tesoureiro | MEEC | 17/18 2s | miguelFazenda.png\n\
81 | Pedro Direita        | 916888988 | pedro.direita@gmail.com                 | ist181305 || MEEC | 17/18 2s | pedroDireita.png\n\
108 | Afonso Certo        | 939605952 | certafonso@gmail.com                    | ist196134 | | MEEC | 19/20 1s | afonsoCerto.jpg\n\
109 | Pedro Taborda       | 925896230 | pedrotaborda04@gmail.com                | ist193152 | | MEEC | 19/20 1s | pedroTaborda.png\n\
112 | Francisco Rodrigues | 918869225 | francisco.rodrigues0908@gmail.com       | ist196210 | | MEEC | 19/20 1s | franciscoRodrigues.jpg\n\
115 | Daniel Leitão       | 927862314 | daniel.g.leitao@gmail.com               | ist190042 | | MEEC | 19/20 1s | danielLeitao.png\n\
120 | Duarte Oliveira     | 916855882 | duarte.g.de.oliveira@tecnico.ulisboa.pt | ist194192 | Marketing | MEEC | 19/20 2s | duarteOliveira.png\n\
121 | João Palma          | 914849423 | joaocarlospalma.io@gmail.com         | ist181212 | Desenvolvimento |LEIC | 19/20 2s | joaoPalma.jpeg \n\
122 | Margarida Oliveira  | 912128143 | maggy.oliveira23@gmail.com           | ist196125 | Recursos Humanos |MEM | 19/20 2s | margaridaOliveira2.png\n\
123 | Tiago Almeida       | 918757363 | tiagoalmeida5@tecnico.ulisboa.pt     | ist196328 | Recursos Humanos |MEEC | 19/20 2s | tiagoAlmeida.jpg\n\
125 | Inês Magessi        | 927332017 | inesmagessi1011@gmail.com            | ist195593 | |LEIC | 19/20 2s | inesMagessi.png\
"


newMemberInfos = newPeopleContactInfoJson.split("\n")
dirMembersInfos = contactInfoJson.split("\n")
#singleMemberInfos = memberInfos.split("|")
columnInfo = "Nº | Nome | Telemóvel | E-Mail | IST ID | Cargo | Curso | Entrada | Imagem " #not needed

finalString = "membro:\n"
finalDirString = "direcao:\n"
finalSubDirString = "subDirecao:\n"
subDirPeople = ["108", "133", "135"]
subDirPositions = ["Assistente de Marketing" , "Assistente de Desenvolvimento", "Assistente de Desenvolvimento"]
print(dirMembersInfos)
memberArray = dict()

for singleMemberInfosString in newMemberInfos:
  singleMemberInfos = singleMemberInfosString.split("|")
  if singleMemberInfos[0].strip() in subDirPeople: 
    index = subDirPeople.index(singleMemberInfos[0].strip())
    position = subDirPositions[index]
    member = HackerDirectionMember(singleMemberInfos[0], singleMemberInfos[1], singleMemberInfos[7], position)
    finalSubDirString += member.toString()
    memberArray[member.hackerId] = member
    continue

  member = HackerMember(singleMemberInfos[0], singleMemberInfos[1], singleMemberInfos[7])
  memberArray[member.hackerId] = member

  finalString += member.toString()

for singleMemberInfosString in dirMembersInfos:
  singleMemberInfos = singleMemberInfosString.split("|")
  if singleMemberInfos[0].strip() in subDirPeople: 
    index = subDirPeople.index(singleMemberInfos[0].strip())
    position = subDirPositions[index]
    member = HackerDirectionMember(singleMemberInfos[0], singleMemberInfos[1], singleMemberInfos[8], position)
    finalSubDirString += member.toString()
    memberArray[member.hackerId] = member
    continue
  position = singleMemberInfos[5]
  if len(position.replace(" ", "")) == 0:
    member = HackerMember(singleMemberInfos[0], singleMemberInfos[1], singleMemberInfos[8])
    finalString += member.toString()
  else:
    member = HackerDirectionMember(singleMemberInfos[0], singleMemberInfos[1], singleMemberInfos[8], position)
    
    if(member.position == "Tesoureiro"):
      tesourer = member
    else:
      finalDirString += member.toString()
  
  memberArray[member.hackerId] = member

finalDirString += tesourer.toString()
finalString = finalDirString + finalSubDirString + finalString

file = codecs.open("data/membros.yml", "w", "utf-8")
print(finalString)
file.write(finalString)
file.close()

print(memberArray)
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects
#Projects

projects = [
  Project("HSApp", "HSApp-1.png", False, [memberArray["139"],memberArray["140"],memberArray["143"],memberArray["146"]], "A aplicação central da HS onde os membros podem encontrar novidades, anúncios, contactos e informação sobre os projetos, tudo exclusivamente do núcleo. A ideia é para ser um centro auxiliar de informação do núcleo."),
  Project("HSInventory", "hsInventory.png", True, [memberArray["129"],memberArray["130"],memberArray["135"],memberArray["115"]], "Criação de uma base dados do núcleo gerida a partir do website criado para o mesmo efeito e onde serão guardada informação relativamente aos estados de material ou ferramentas do núcleo."),
  Project("HSTable", "hsTable.jpg", True, [memberArray["127"],memberArray["137"],memberArray["108"]], "Uma mesa smart tátil que funciona com base na tecnologia de “light triangulation” e concebida de modo a facilitar a gestão de tarefas do utilizador através de aplicações desenvolvidas para esse fim (e.g. verificar o calendário, tirar notas, etc..), e garantindo ao mesmo tempo uma interface natural, adaptável e fácil de usar."),
  Project("HSRobot", "hsRobot.gif", True, [memberArray["126"],memberArray["133"],memberArray["136"],memberArray["138"],memberArray["144"],memberArray["145"],memberArray["123"]], " Um robô capaz de andar por um labirinto com paredes coloridas a fim de ir buscar uma lata de Coca-Cola para o utilizador. Ao mesmo tempo, tem uma aplicação android atribuída a fim de ser controlável, interagir e muito mais com o utilizador."),
  Project("ShareItHelpIt", "shareItHelpIt2.png", False, [memberArray["132"],memberArray["134"],memberArray["141"],memberArray["122"],memberArray["125"]], "Uma plataforma que conecte todas as drives do Técnico num único lugar, facilitando angariação de apontamentos, livros e muito mais, bem como partilha de apontamentos entre alunos num sistema de raking."),
  Project("Smart Irrigation System", "smartIrrigationSystem.jpeg", False, [memberArray["128"],memberArray["142"],memberArray["80"],memberArray["120"]], "Um projeto focado na criação de um sistema de rega inteligente e autónomo, capaz de controlar a água suficiente para cada tipo de planta bem como a que hora as deve regar."),
  Project("Under Pressure", "underPressure.jpeg", False, [memberArray["109"],memberArray["112"]], "O projeto consiste num conjunto de sensores de baixo-custo, resistentes à erosão do mar, recebendo dados relativamente à pressão do mar, sedimentação e outro tipo de informação a fim de ajudar na limpeza das praias Portuguesas."),
  Project("HSWatch", "hswatch.png", False, [memberArray["81"],memberArray["85"]], "Um smartwatch feito de raiz, que tem como capacidades, com a ajuda de uma app Android própria, de mostrar as notificações das redes sociais mais usadas, indicar quando é recebida ou perdida uma chamada, cronometrar o tempo, criar alarmes e mostrar a meteorologia dos 6 dias seguintes."),
  Project("HSSite", "logoProject.png", False, [memberArray["106"]], "Reestruturação e melhoramento geral do website que vês perante ti! O objetivo é tornar o website mais dinâmico e agradável visualmente, adicionando ao mesmo tempo capacidade móvel e capacidade adaptativa, sendo que deverá interagir com o HSInventory e HSApp."),
]

for project in projects:
  memberPhotoString = ""
  for member in project.members:
    memberPhotoString += "\"" + member.image + "\","

  memberPhotoString = memberPhotoString[:len(memberPhotoString) - 1] + " "

  file = codecs.open("content/projetos/current/" + project.name + ".md", "w", "utf-8")
  fileContent = ("+++\n\
title = \"" + project.name + "\"\n\
description= \"" + project.description + "\" \n\
\n\
date = \"2020-10-14\" \n\
Destacado=" + ("true" if project.highlighted else "false") + " \n\
\n\
photo = \"" + project.image + "\" \n\
\n\
type = \"currentProject\" \n\
layout = \"projeto\" \n\
\n\
teamPhotos = [" + memberPhotoString + "] \n\
+++")
  print(fileContent)
  file.write(fileContent)
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