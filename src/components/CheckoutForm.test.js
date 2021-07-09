import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(< CheckoutForm />)
    //act
    const header = screen.getByText(/Checkout Form/i);
    
    //assert
    expect(header).toBeInTheDocument();
    
});



test("form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm />)
    // Act - user selects and user types 
    const fNameInput = screen.getByLabelText(/First Name:/i);
        userEvent.type(fNameInput, "Chelsea");
    const lNameInput = screen.getByLabelText(/last name:/i);
        userEvent.type(lNameInput, "Ceballos");
    const addressInput = screen.getByLabelText(/address:/i);
        userEvent.type(addressInput, "8033 Emerson Court");
    const cityInput = screen.getByLabelText(/city:/i);
        userEvent.type(cityInput, "Laredo");
    const stateInput = screen.getByLabelText(/state:/i);
        userEvent.type(stateInput, "Texas");
    const zipInput = screen.getByLabelText(/zip:/i);
        userEvent.type(zipInput, "78045");
        //- user clicks submit
        const button = screen.getByRole("button");
            userEvent.click(button);
    //Assert - success message on page
    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
});

