import React from "react";
import { render } from "react-testing-library";

import Splash from "../Components/Splash";

describe("Splash", () => {
  it("should render without crashing", () => {
    const { container } = render(<Splash />);

    expect(container).toBeTruthy();
  });
});
