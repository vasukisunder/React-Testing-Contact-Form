import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('title appears', () => {
  const { getByText } = render(<ContactForm />);
  
  const text = getByText(/react testing contact form/i);
  expect(text).toBeVisible();
});

test('inputs are visible', () => {
  const { getByLabelText } = render(<ContactForm />);
  
  getByLabelText(/first name/i); 
  getByLabelText(/last name/i); 
  getByLabelText(/email/i); 
  getByLabelText(/message/i); 
  
});

test('placeholder text is visible', () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  getByPlaceholderText(/luo/i);
  getByPlaceholderText(/bluebill1049@hotmail.com/i);
})

test('input fields function correctly', () => {
  const {getByLabelText} = render(<ContactForm />);

  const firstName = getByLabelText(/first/i);
  const lastName = getByLabelText(/last/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  fireEvent.change(firstName, {target: {value: 'Vasuki'}});
  fireEvent.change(lastName, {target: {value: 'Sunder'}});
  fireEvent.change(email, {target: {value: 'vasuki@gmail.com'}});
  fireEvent.change(message, {target: {value: 'hello'}});

  expect(firstName.value).toBe('Vasuki');
  expect(lastName.value).toBe('Sunder');
  expect(email.value).toBe('vasuki@gmail.com');
  expect(message.value).toBe('hello');

});




