import React from "react";
import { render } from "react-testing-library";

import PostDog from "../Components/PostDog";

describe("PostDog", () => {
  it("should render without crashing", () => {
    const { container } = render(<PostDog />);

    expect(container).toBeTruthy();
  });
});
