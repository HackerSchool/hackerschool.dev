import codecs

newPeopleContactInfoJson = "\
  name | cargo | imageName | projetoName \
  "

membersInfos = contactInfoJson.split("\n")

for singleMemberInfosString in membersInfos:
  singleMemberInfos = singleMemberInfosString.split("|")
  
  finalString += "  - nome: " + singleMemberInfos[0] + "\n    cargo: " + singleMemberInfos[1] + "\n    imagem: " + singleMemberInfos[2]  +"\n    projeto: " + singleMemberInfos[3]  + "\n"
  


o que fazer para atrair ou motivar os membros
 - Atrair: Mostrar os nossos projetos, que problemas resolveram, e um video do seu progresso
 - Motivar: Publicitar fortemente o projeto a partir das nossas plataformas, de maneira a que a pessoa possa associar a sua imagem com o projeto?

o que fazer com membros que querem assumir posições de liderança
 - Distribuilo por vários projetos como um gestor dedicado (algo como srum master por exemplo)
 - Atribuir-lhe o papel de lider, que teria o papel de fazer relatorios e motivar a equipa
