class HsFile extends CustomFile {
    constructor(image, name, role, github, linkedin) {
        //content será a imagem
        super(image, "hs");
        this.name = name;
        this.role = role;
        this.github = github;
        this.linkedin = linkedin;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getRole() {
        return this.role;
    }

    setRole(newRole){
        this.role = newRole;
    }

    getGithub() {
        return this.github;
    }

    setGithub(newGithub) {
        this.github = newGithub;
    }

    getLinkedin() {
        return this.linkedin;
    }

    setLinkedin(newLinkedin) {
        this.linkedin = newLinkedin;
    }

    show(args) {
        // Divide a imagem em linhas
        const linhasImagem = this.getContent().split('\n');
        
        // Obtém o nome e gera uma linha de separadores do tamanho do nome
        const nome = this.getName();
        const separador = '-'.repeat(nome.length);
        
        // Define as cores por Role
        const coresRole = {
            'Recursos Humanos': '#AD7FA8',
            'Desenvolvimento': '#8AE234',
            'Presidente': '#000000',
            'Marketing': '#729FCF'
        };
    
        // Obtém a cor de acordo com o Role, ou uma cor padrão se o Role não existir no dicionário
        const role = this.getRole();
        const cor = coresRole[role] || '#AD7FA8';
    
        // Linhas de informações com a cor dinâmica e alguns espaços adicionais
        const linhasInfo = [
            `[[;${cor};]${nome}]`,
            `${separador}`,
            `[[;${cor};]Role]:       ${role}`,
            `[[;${cor};]GitHub]:     [[;#FFFFFF;]${this.getGithub()}]`,
            `[[;${cor};]Linkedin]:   ${this.getLinkedin()}`
        ];
    
        // Encontra o número máximo de linhas entre a imagem e as informações
        const linhasMax = Math.max(linhasImagem.length, linhasInfo.length);
        
        
        // Gera o output alinhando a imagem com as informações
        let resultado = '';
        for (let i = 0; i < linhasMax; i++) {
            const linhaImagem = linhasImagem[i] || '';  // Linha da imagem ou string vazia se não existir
            const linhaInfo = linhasInfo[i] || '';      // Linha de info ou string vazia se não existir
    
            // Adiciona espaço entre a imagem e a info e une as duas partes
            if (args.opt.includes('i'))
                resultado += linhaImagem + "\n";
            else if (args.opt.includes('d'))
                resultado += linhaInfo + "\n";
            else
                resultado += linhaImagem.padEnd(20) + '   ' + linhaInfo + '\n'; // 3 espaços adicionais
        }
    
        return resultado.trimEnd();
    }
    

    toString() {
        return this.getContent();
    }

}