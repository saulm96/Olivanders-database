class CORE_NOT_FOUND extends Error {
    constructor() {
        super("The core you trying to get does not exist.");
        this.status = 404;
    }
};

class CORE_LIST_NOT_FOUND extends Error {
    constructor() {
        super("The list of cores you're trying to access is not found or you don't have permission to access it.");
        this.status = 500;
    }
};

export const errors = {
    CORE_NOT_FOUND,
    CORE_LIST_NOT_FOUND,
};

export default errors;
