import Login from '../../pages/Login'
import { BrowserRouter } from 'react-router-dom'

import routes from '../../contants/routes';

import { cleanup, render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

test('navigates to another page on login with valid email and password', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginBtn = await screen.findByRole('button');
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);

  window.location.replace(`${window.location.hostname}/${routes.login}`)
  window.history.pushState({}, 'Login', `${routes.login}`)

  expect(window.location.pathname).toBe(`${routes.login}`)

  await user.type(emailInput, 'testemail@gmail.com');
  await user.type(passwordInput, '123456');

  expect(window.location.pathname).toBe(`${routes.login}`)


  await user.click(loginBtn);

  expect(window.location.pathname).not.toBe(`${routes.login}`)


  cleanup();
}, 5000);

test('Throws error when loggin in with invalid email', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const loginBtn = getByText(/Log In/i);



  await user.type(emailInput, 'testemail');
  await user.type(passwordInput, '123456');
  await user.click(loginBtn);

  const error = await screen.findByText(/Please enter a valid email/i);
  expect(error).toBeInTheDocument();
  cleanup()
});
test('Throw error when logging in with invalid password', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const loginBtn = getByText(/Log In/i);

  await user.type(emailInput, 'testemail@gmail.com')
  await user.type(passwordInput, '12345');
  await user.click(loginBtn);

  expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();

  cleanup();
})
test('Throw error when logging in with invalid email and password', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const loginBtn = getByText(/Log In/i);

  await user.type(emailInput, 'testemail');
  await user.type(passwordInput, '12345');
  await user.click(loginBtn);
  expect(await screen.findByText(/Please enter a valid email/i)).toBeInTheDocument();
  expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();

  cleanup();
})

test('Throw error when logging in with empty email and password', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  expect(emailInput.textContent).toBe('');
  expect(passwordInput.textContent).toBe('');
  const loginBtn = getByText(/Log In/i);

  await user.click(loginBtn);
  expect(await screen.findByText(/Please enter a valid email/i)).toBeInTheDocument();
  expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();

  cleanup();
})

test('Throw error when logging in with empty email', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const loginBtn = getByText(/Log In/i);
  expect(emailInput.textContent).toBe('');
  await user.type(passwordInput, '123456');
  await user.click(loginBtn);
  expect(await screen.findByText(/Please enter a valid email/i)).toBeInTheDocument();

  cleanup();
})

test('Throw error when logging in with empty password', async () => {
  const { getByText, getByPlaceholderText } = render(<BrowserRouter><Login /></BrowserRouter>);

  const emailInput = getByPlaceholderText(/Email/i);
  const passwordInput = getByPlaceholderText(/Password/i);
  const loginBtn = getByText(/Log In/i);

  await user.type(emailInput, 'testemail@gmail.com');
  expect(passwordInput.textContent).toBe('');
  await user.click(loginBtn);
  expect(await screen.findByText(/Password must be at least 6 characters/i)).toBeInTheDocument();

  cleanup();
})

