# A branch tem duas pastas, o terminal para o recrutamento e o terminal para o site
# Vou meter aqui as cenas que planeio implementar à medida que se for fazendo marco com um certo
# Também ainda há umas cenas que não estão bem decididas
# Se alguém quiser ajudar eu fico contente
# Se tiverem mais ideias também podem sugerir

## Terminal Recrutamento
Queria adicionar uma pass para conseguir entrar na pasta da xad0w.b1ts, tipo 1337 

Queria adicionar uma pasta com logs na parte dos xad0w.b1ts (vou explicar muito agora mas
esta parte não tem a ver com programação é só escrever e dar ideias)

A ideia é que fosse um enigma mais difícil mas opcional. Se já jogaram obra dinn eu queria
fazer algo desse tipo, se n vou explicar o conceito do jogo
Basicamente aquilo é um mistério que envolve uma tripulação, o jogo vai-te mostrando vários
cenários de cenas que vão acontecendo a bordo, tu tás tipo em spectator mode, e o objetivo
é descobrir a identidade de todos os tripulantes através dos diálogos e das ações deles
(e perceber o que tá a acontecer naquela viagem mas isso n interessa para aqui acho (btw aquilo
vai do fim para o início n sei também podíamos fazer assim era uma ideia))
mas a ideia era escrevermos uma data de logs de acontecimentos da xad0w.b1ts, e que
através daí fosse possível chegar à identidade dos impostores, tipo número de aluno ou nome
ou algo que dê para chegar a eles. Também podíamos meter mensagens encriptadas e pistas aí algures
talvez n pensei muito nisto

## Terminal Site
Basicamente temos uma diretoria deste género

```bash
    ~: {
        membros: {
            membro1.txt:            e quando davas cat aparecia a foto em ascii art e em baixo nome + cargo + descrição ou algo do género ou então um comando tipo show membro1 
            membro2.txt:            e mudavamos o tipo do arquivo para .hs e quando davas cat só aparecia o nome + cargo + descrição ainda n me decidi também gostava de criar 
                                    uns comandos costumizados tipo show all members, show all RH (aparecia só a descrição não as fotos), e um grep entre um membro e a pasta 
                                    dos projetos que dizia os projetos em que esse membro estava a trabalhar
        }
        projetos: {
            site.txt:               um txt com a descrição de cada projeto (n sei se preciso de adicionar mais alguma coisa, talvez progresso e outros stats)
                                    e queria adicionar um grep entre um projeto e a pasta dos membros para ver os membros que estão a trabalhar neste projeto
        }
        aboutUs: {
            HackerSchool.txt:       descrição da hacker school
            cibersegurança.txt:     n somos hackers plot twist do século
            socials.txt:            redes sociais
        }
        recrutamento.txt:           texto e link
        proximosEventos: {
            workshops.txt:          lista dos workshops e talvez mais coisas e comando timeleft ou algo desse género para 
                                    ver quanto tempo falta
            hacknights.txt:         descrição das hacknights e comando timeleft
        }
        .segredo.txt:               meter alguma coisa muito secreta?
    }
