import React from "react";
import { render } from "react-testing-library";

import LoadingPage from "../Components/LoadingPage";

describe("LoadingPage", () => {
  it("should render without crashing", () => {
    const { container } = render(<LoadingPage />);

    expect(container).toBeTruthy();
  });
});
