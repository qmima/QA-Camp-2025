import { fa, faker, th } from '@faker-js/faker';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  fax?: string;
  company?: string;
  adress1: string;
  adress2?: string;
  city: string;
  zipCode: string;
  username: string;
  password: string;
}

export class UserBuilder implements User {
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  fax?: string;
  company?: string;
  adress1: string;
  adress2?: string;
  city: string;
  zipCode: string;
  username: string;
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

  setTelephone(telephone: string) {
    this.telephone = telephone;
    return this;
  }

  setFax(fax: string) {
    this.fax = fax;
    return this;
  }

  setCompany(company: string) {
    this.company = company;
    return this;
  }

  setAdress1(adress1: string) {
    this.adress1 = adress1;
    return this;
  }

  setAdress2(adress2: string) {
    this.adress2 = adress2;
    return this;
  }

  setCity(city: string) {
    this.city = city;
    return this;
  }

  setZipCode(zipCode: string) {
    this.zipCode = zipCode;
    return this;
  }

  setLoginName(username: string) {
    this.username = username;
    return this;
  }

  setPassword(password: string) {
    this.password = password;
    return this;
  }
}

export class UserDirector {
  private builder: UserBuilder;
  constructor(builder: UserBuilder) {
    this.builder = builder;
  }
  constructUser(): User {
    this.builder
      .setFirstName(faker.person.firstName())
      .setLastName(faker.person.lastName())
      .setEmail(faker.internet.email())
      .setTelephone(faker.phone.number())
      .setFax(faker.phone.number())
      .setCompany(faker.company.name())
      .setAdress1(faker.location.streetAddress())
      .setAdress2(faker.location.streetAddress())
      .setCity(faker.location.city())
      .setZipCode(faker.location.zipCode())
      .setLoginName(faker.internet.username())
      .setPassword(faker.internet.password());

    return {
      firstName: this.builder.firstName,
      lastName: this.builder.lastName,
      email: this.builder.email,
      telephone: this.builder.telephone,
      fax: this.builder.fax,
      company: this.builder.company,
      adress1: this.builder.adress1,
      adress2: this.builder.adress2,
      city: this.builder.city,
      zipCode: this.builder.zipCode,
      username: this.builder.username,
      password: this.builder.password,
    };
  }
}
