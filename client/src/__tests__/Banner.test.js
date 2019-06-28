import React from "react";
import { render } from "react-testing-library";

import Banner from "../Components/Banner";

describe("Banner", () => {
  it("should render without crashing", () => {
    const { container } = render(<Banner />);

    expect(container).toBeTruthy();
  });
});
