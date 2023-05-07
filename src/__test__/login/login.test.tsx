import Login from '../../pages/Login'
import { BrowserRouter, Router } from 'react-router-dom'

import routes from '../../contants/routes';
import { createMemoryHistory } from 'history';

import { cleanup, render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';


describe('Login Page', () => {
  test('navigates to dashboard page on successful login with valid email and password', async () => {
    const history = createMemoryHistory();

    render(
      <Router navigator={history} location={history.location} basename='/'>
        <Login />
      </Router>
    );
    history.push(routes.login)


    const loginBtn = await screen.findByRole('button');
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    expect(history.location.pathname).toBe(`${routes.login}`)

    await user.type(emailInput, 'testemail@gmail.com');
    await user.type(passwordInput, '123456');

    await user.click(loginBtn);

    expect(history.location.pathname).not.toBe(`${routes.login}`)
    expect(history.location.pathname).toMatch(/dashboard/i)

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

});