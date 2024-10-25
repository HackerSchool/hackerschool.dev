### A branch tem duas pastas, o terminal para o recrutamento e o terminal para o site  
### Vou meter aqui as cenas que planeio implementar à medida que se for fazendo marco com um certo  
### Também ainda há umas cenas que não estão bem decididas  
### Se alguém quiser ajudar eu fico contente  
### Se tiverem mais ideias também podem sugerir  

---

# Terminal Recrutamento
+ Queria adicionar uma pass para conseguir entrar na pasta da xad0w.b1ts, tipo 1337 

+ Queria adicionar uma pasta com logs na parte dos xad0w.b1ts (vou explicar muito agora mas
esta parte não tem a ver com programação é só escrever e dar ideias)
A ideia é que fosse um enigma mais difícil mas opcional. Se já jogaram obra dinn eu queria
fazer algo desse tipo, se n vou explicar o conceito do jogo.  
Basicamente aquilo é um mistério que envolve uma tripulação, o jogo vai-te mostrando vários
cenários de cenas que vão acontecendo a bordo, tu tás tipo em spectator mode, e o objetivo
é descobrir a identidade de todos os tripulantes através dos diálogos e das ações deles
(e perceber o que tá a acontecer naquela viagem mas isso n interessa para aqui acho (btw aquilo
vai do fim para o início n sei também podíamos fazer assim era uma ideia))
mas a ideia era escrevermos uma data de logs de acontecimentos da xad0w.b1ts, e que
através daí fosse possível chegar à identidade dos impostores, tipo número de aluno ou nome
ou algo que dê para chegar a eles. Também podíamos meter mensagens encriptadas e pistas aí algures
talvez n pensei muito nisto

---

# Terminal Site
Vamos ter ficheiros custom. Até agora temos os seguintes tipos:  
```bash
- .txt          Armazena texto. Dá para dar cat.

- .hs           Até agora vai armazenar nome, cargo(s), e uma foto em ascii_art.
                A pasta dos membros vai ter todos os membros.hs. Se dermos cat nestes ficheiros, tipo cat membro1.hs,
                ele vai imprimir tudo o que está armazenado no ficheiro (foto, nome, cargo e talvez outras coisas que nos lembremos de adicionar).
                Comandos costumizados: show .    show RH .    show membro1.hs .    show membro1.hs -n -r . (só para mostrar o nome e a role por exemplo).
                Também queríamos fazer um grep entre um membro e a pasta dos projetos que dizia os projetos em que esse membro estava a trabalhar mas
                ainda estamos a pensar se não faz mais sentido armazenar isso no .hs como mais um atributo.

- .prj          Até agora é igual a um txt, mas decidimos usar no o caso de querermos adicionar stats extra aos projetos, tipo progresso n sei.
                Também queríamos fazer um grep entre um projeto e a pasta dos membros para ver os membros que stão a trabalhar neste projeto.

- .evnt         Basicamente um txt mas vai ter um comando extra.
                Comando costumizado: timeleft, diz-te quanto tempo é que falta até um determinado evento.
```

Até agora o plano para a diretoria é este:

```bash
    ~: {
        membros: {
            membro1.hs:             foto + nome + cargo + talvez outras coisas        
        }

        projetos: {
            site.prj:               descrição do projeto
        }

        aboutUs: {
            HackerSchool.txt:       descrição da hacker school
            cibersegurança.txt:     n somos hackers plot twist do século
            socials.txt:            redes sociais
        }

        recrutamento.evnt:          texto e link

        proximosEventos: {
            workshops.evnt:         lista dos workshops e talvez mais coisas
            hacknights.evnt:        descrição das hacknights
        }

        .segredo.txt:               meter alguma coisa muito secreta?
    }
