import React from "react";
import { render, cleanup } from "@testing-library/react";

import Dropdown from "./Dropdown";

afterEach(cleanup);

const labelText = "catalog";
const links = [
  {
    link: "/one",
    text: "one",
  },
  {
    link: "/two",
    text: "two",
  },
  {
    link: "/three",
    text: "three",
  },
];

describe("<Dropdown/>", () => {
  test("renders the component correctly", () => {
    const { getByTestId } = render(
      <Dropdown label={labelText} links={links} />
    );
    const component = getByTestId("dropdown");
    expect(component).toBeTruthy();
  });
});
