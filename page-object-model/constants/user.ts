interface User {
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  city: string;
  password: string;
}

class UserBuilder implements User {
  private user: User;
}

class uUserBuilder implements User {
  private user;

  setFirstName(firstName: string): uUserBuilder {
    this.user.firstname = firstName;
    return this;
  }
}
