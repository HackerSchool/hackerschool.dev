class EvntFile extends CustomFile {
    constructor(content) {
        super(content, "evnt");
    }

    toString() {
        return this.getContent();
    }

}