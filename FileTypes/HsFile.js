class HsFile extends CustomFile {
    constructor(content, name, roles) {
        //content será a imagem
        super(content, "hs");
        this.name = name;
        this.roles = roles;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getRoles() {
        return this.roles;
    }

    setRoles(newRoles){
        this.roles = newRoles;
    }

    toString() {
        return this.getContent();
    }

}