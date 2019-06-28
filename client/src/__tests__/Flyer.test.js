import React from "react";
import { render } from "react-testing-library";

import Flyer from "../Components/Flyer";

describe("Flyer", () => {
  it("should render without crashing", () => {
    const { container } = render(<Flyer />);

    expect(container).toBeTruthy();
  });
});
