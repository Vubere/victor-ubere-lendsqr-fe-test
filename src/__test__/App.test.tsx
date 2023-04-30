import App from "../App";
import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event';


test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');

  expect(buttonCount.innerHTML).toBe('count is 0');
  const codeCount = screen.queryByText(/The count is now:/i);
  expect(codeCount).not.toBeInTheDocument();

  await user.click(buttonCount);
  await user.click(buttonCount);

  expect(buttonCount.innerHTML).toBe('count is 2');
  expect(screen.queryByText(/The count is now:/i)).toBeInTheDocument();

});