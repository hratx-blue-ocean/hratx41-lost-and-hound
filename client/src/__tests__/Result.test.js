import React from "react";
import { render } from "react-testing-library";

import Result from "../Components/Result";

describe("Result", () => {
  it("should render without crashing", () => {
    const { container } = render(<Result />);

    expect(container).toBeTruthy();
  });
});
