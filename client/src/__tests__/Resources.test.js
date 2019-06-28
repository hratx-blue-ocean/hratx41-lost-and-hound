import React from "react";
import { render } from "react-testing-library";

import Resources from "../Components/Resources";

describe("Resources", () => {
  it("should render without crashing", () => {
    const { container } = render(<Resources />);

    expect(container).toBeTruthy();
  });
});
