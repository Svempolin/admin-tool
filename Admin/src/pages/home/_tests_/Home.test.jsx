import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe('Home', () => {
  it('renders the same headline', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading', { level: 3, name: /To continue please register as admin or login/i });
    expect(headingElement).toBeInTheDocument();
  });
});