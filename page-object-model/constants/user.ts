interface User {
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  city: string;
  password: string;
}

export class UserBuilder implements User {
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  city: string;
  password: string;

  setFirstName(firstName: string) {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setAdress(adress: string) {
    this.adress = adress;
    return this;
  }

  setCity(city: string) {
    this.city = city;
    return this;
  }

  createNewUser(builder: UserBuilder) {
    builder.setFirstName('1');
    builder.setLastName('1');
    builder.setEmail('1');
    builder.setAdress('1');
    builder.setCity('1');
  }
}
