class CORE_NOT_FOUND extends Error {
    constructor() {
        super("The core you trying to get does not exist.");
        this.status = 404;
    }
};

class CORE_LIST_NOT_FOUND extends Error {
    constructor() {
        super("An error has occurred when searching the list. Please try again");
        this.status = 500;
    }
};

class MISSING_DATA extends Error {
    constructor() {
        super("Missing required data for creating a new core.");
        this.status = 400;
    }
}
export const errors = {
    CORE_NOT_FOUND,
    CORE_LIST_NOT_FOUND,
    MISSING_DATA,
};

export default errors;
