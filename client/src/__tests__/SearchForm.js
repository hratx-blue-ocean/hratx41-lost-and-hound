import React from "react";
import { render } from "react-testing-library";

import SearchForm from "../Components/SearchForm";

describe("SearchForm", () => {
  it("should render without crashing", () => {
    const { container } = render(<SearchForm />);

    expect(container).toBeTruthy();
  });
});
