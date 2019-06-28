import React from "react";
import { render } from "react-testing-library";

import About from "../Components/About";

describe("About", () => {
  it("should render without crashing", () => {
    const { container } = render(<About />);

    expect(container).toBeTruthy();
  });
});
