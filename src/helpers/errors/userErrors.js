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

class MISSING_DATA extends Error {
  constructor() {
    super("Missing required data for creating a new user.");
    this.status = 500;
  }
};

//login errors
class EMAIL_ALREADY_IN_USE extends Error {
  constructor() {
    super("Email already in use.");
    this.status = 400;
  }
}

class PASSWORD_DO_NOT_MATCH extends Error {
  constructor() {
    super("Passwords do not match.");
    this.status = 400;
  }
}

//register errors
class INCORRECT_EMAIL extends Error {
  constructor() {
    super("Please use a valid email.");
    this.status = 400;
  }
}

class INCORRECT_PASSWORD extends Error {
    constructor() {
      super("Incorrect password");
      this.status = 401;
    
}
}


export const errors = {
  USER_NOT_FOUND,
  USER_LIST_NOT_AVAILABLE,
  MISSING_DATA,
  EMAIL_ALREADY_IN_USE,
  PASSWORD_DO_NOT_MATCH,
  INCORRECT_EMAIL,
  INCORRECT_PASSWORD
};
export default errors;
