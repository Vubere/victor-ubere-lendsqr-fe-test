
import { Router } from "react-router-dom";
import App from "../../App";

import { render, waitFor, screen, act, cleanup } from "@testing-library/react";

import { createMemoryHistory } from "history";

describe("Routing", () => {
  afterEach(() => {
    cleanup
  });
  it("should render 404 page on navigation to unknown route", async () => {
    const history = createMemoryHistory();
    history.push("/");
    act(() => {
      render(
        <Router navigator={history} location={history.location}>
          <App />
        </Router>
      );
    });
    await waitFor(() => expect(history.location.pathname).toBe("/login" || "/dashboard" || "/"));
    setTimeout(async () => {
      history.push("/unknown-route");



      await waitFor(() => expect(history.location.pathname).toBe("/unknown-route"));

      expect(await screen.findByText('404, not found')).toBeInTheDocument()

    }, 3000);

  });
  it('should go to login page on initial page ', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router navigator={history} location={history.location}>
        <App />
      </Router>
    );
    setTimeout(() => {
      expect(history.location.pathname).toBe('/login');
    }, 1000);
  });
});
