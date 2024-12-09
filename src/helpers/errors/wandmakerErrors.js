class WANDMAKER_NOT_FOUND extends Error {
    constructor() {
        super("Wandmaker not found");
        this.status = 404;
    }
};

class WANDMAKER_LIST_NOT_AVAILABLE extends Error {
    constructor() {
        super("The list you tryin to access is not available");
        this.status = 500;
    }
};

class MISSING_DATA extends Error {
    constructor() {
        super("Missing required data for creating a new wandmaker");
        this.status = 500;
    };
}

export const errors = {
    WANDMAKER_NOT_FOUND,
    WANDMAKER_LIST_NOT_AVAILABLE,
    MISSING_DATA,
}

export default errors;