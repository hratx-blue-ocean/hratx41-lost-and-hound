import React from "react";
import { render } from "react-testing-library";

import Footer from "../Components/Footer";

describe("Footer", () => {
  it("should render without crashing", () => {
    const { container } = render(<Footer />);

    expect(container).toHaveTextContent("lost and hound");
  });
});
