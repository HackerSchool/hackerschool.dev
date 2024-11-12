class CustomFile {
    constructor(content, type) {
        this.content = content;
        this.type = type;

    }

    getContent() {
        return this.content;
    }

    setContent(newContent) {
        this.content = newContent;
    }

    getType() {
        return this.type;
    }

    setType(newType) {
        this.type = newType;
    }

    toString() {
        return this.getContent();
    }
}
