class WOOD_NOT_FOUND extends Error {
    constructor() {
        super("Wood not found");
        this.status = 404;
    }
}

class WOOD_LIST_NOT_AVAILABLE extends Error {
    constructor() {
        super("The list you tryin to access is not available");
        this.status = 500;
    }
}
class MISSING_DATA extends Error {
    constructor() {
        super("Missing required data for creating a new wood");
    }
}

export const errors = {
    WOOD_NOT_FOUND,
    WOOD_LIST_NOT_AVAILABLE,
    MISSING_DATA,
}


export default errors;