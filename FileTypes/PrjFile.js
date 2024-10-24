class PrjFile extends CustomFile {
    constructor(content, stats) {
        super(content, "prj");
        this.stats = stats;
    }

    toString() {
        return this.getContent();
    }

}