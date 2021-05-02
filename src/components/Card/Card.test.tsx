import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import Card from "./Card";

it("renders the Card in the default state", () => {
  render(<Card />);

  screen.getByRole("heading", { level: 6, name: "Headline 6" });
  screen.getByText("Body 2");
  screen.getByRole("button", { name: "share" });
  screen.getByLabelText("avatar");
});
exports;
