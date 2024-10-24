class HsFile extends CustomFile {
    constructor(content, roles) {
        super(content, "hs");
        this.roles = roles;
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