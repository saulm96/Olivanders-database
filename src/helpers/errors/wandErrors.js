class WAND_NOT_FOUND extends Error {
    constructor() {
        super("Wand not found");
        this.status = 404;
    }
}

class WAND_LIST_NOT_AVAILABLE extends Error {
    constructor() {
        super("The list you tryin to access is not available");
        this.status = 500;
    }
}
class MISSING_DATA extends Error {
    constructor() {
        super("Missing required data for creating a new wand");
    }
}

export const errors = {
    WAND_NOT_FOUND,
    WAND_LIST_NOT_AVAILABLE,
    MISSING_DATA,
}

export default errors;