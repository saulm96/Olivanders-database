class USER_NOT_FOUND extends Error {
  constructor() {
    super("User not found");
    this.status = 404;
  }
}

class USER_LIST_NOT_AVAILABLE extends Error {
  constructor() {
    super("The list you tryin to access is not available or you dont have permission to access it.");
    this.status = 500;
  }
};

export const errors = {
  USER_NOT_FOUND,
  USER_LIST_NOT_AVAILABLE,
};
export default errors;
