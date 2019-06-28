import React from "react";
import { render } from "react-testing-library";

import ResultsList from "../Components/ResultsList";

describe("ResultsList", () => {
  it("should render without crashing", () => {
    const { container } = render(<ResultsList />);

    expect(container).toBeTruthy();
  });
});
