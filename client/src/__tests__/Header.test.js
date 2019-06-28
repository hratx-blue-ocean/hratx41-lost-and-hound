import React from "react";
import { render } from "react-testing-library";

import Header from "../Components/Header";

describe("Header", () => {
  it("should render without crashing", () => {
    const { container } = render(<Header />);

    expect(container).toBeTruthy();
  });
});
