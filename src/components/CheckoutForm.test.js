import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'
//silly me, I forgot to import screen and userEvent :( 
    // there was no need for it to take me 20 minutes to figure out.

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(< CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
// Arrange
    render(<CheckoutForm />)
// Act - user selects and user types - user clicks submit
    const fNameInput = screen.getByLabelText(/First Name:/i);
        userEvent.type(fNameInput, "Chelsea");

    const lNameInput = screen.getByLabelText(/last name:/i);
        userEvent.type(lNameInput, "Ceballos");

    const addressInput = screen.getByLabelText(/address:/i);
        userEvent.type(addressInput, "123 Lambda Lane");

    const cityInput = screen.getByLabelText(/city:/i);
        userEvent.type(cityInput, "Palm Springs");

    const stateInput = screen.getByLabelText(/state:/i);
        userEvent.type(stateInput, "CA");

    const zipInput = screen.getByLabelText(/zip:/i);
        userEvent.type(zipInput, "92240");

    const button = screen.getByRole("button");
        userEvent.click(button);
//Assert - verify success message
    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
});
