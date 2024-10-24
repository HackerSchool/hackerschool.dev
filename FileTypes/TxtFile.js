class TxtFile extends CustomFile {
    constructor(content) {
        super(content, "txt");
    }

    toString() {
        return this.getContent();
    }

}