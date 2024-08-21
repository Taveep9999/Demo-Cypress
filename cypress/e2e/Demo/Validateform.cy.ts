import { faker } from "@faker-js/faker";

export const text5 = faker.string.numeric({ length: { min: 5, max: 5 } });
export const text25 = faker.string.numeric({ length: { min: 25, max: 25 } });
export const text33 = faker.string.numeric({ length: { min: 33, max: 33 } });
export const text65 = faker.string.numeric({ length: { min: 65, max: 65 } });


export const Emailinput_Validate = () => {
  cy.get('input[type="email"]').type(text5).clear().blur();
  cy.get(".message_details").should(
    "have.text",
    "The email field is required"
  );
};

export const TypeEmail_Validate = () => {
  cy.get('input[type="email"]').clear().type(text5);
  cy.get(".message_details").should("have.text","The email field must be a valid email");
};

export const Email_Validate_64 = () => {
  cy.get('input[type="email"]').type(text65);
  cy.get(".message_details").should("have.text","The email field may not be greater than 64 characters");
};

export const Password_require = () => {
  cy.get('input[type="password"]').type(text5).clear().blur();
  cy.get(".message_details").should("have.text","The password field is required");
};

export const Password_Validate_8 = () => {
  cy.get('input[type="password"]').type(text5);
  cy.get(".message_details")
    .invoke("text")
    .should("include", "The password field must be at least 8 characters");
};

export const Password_Validate_24 = () => {
  cy.get('input[type="password"]').type(text25);
  cy.get(".message_details").should("have.text","The password field may not be greater than 24 characters");
};
  
export const FirstName_require = () => {
  cy.get('input[type="firstname"]').type(text5).clear().blur();
  cy.get(".message_details").should("have.text","The firstname field is required");
};

export const FirstName_Validate_32 = () => {
  cy.get('input[type="firstname"]').type(text33);
  cy.get(".message_details").should("have.text","The firstname field may not be greater than 32 characters");
};

export const LastName_require = () => {
  cy.get('input[type="firstname"]').type(text5).clear().blur();
  cy.get(".message_details").should("have.text","The lastname field is required");
};

export const LastName_Validate_32 = () => {
  cy.get('input[type="firstname"]').type(text33);
  cy.get(".message_details").should("have.text","The lastname field may not be greater than 32 characters");
};

describe('validateform', () => {
    it('test_validate', () => {
        Emailinput_Validate();
        TypeEmail_Validate();
        Email_Validate_64();
        Password_require();
        Password_Validate_8();
        Password_Validate_24();
        FirstName_require();
        FirstName_Validate_32();
        LastName_require();
        LastName_Validate_32();
    });
});
