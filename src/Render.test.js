import React from "react";
import { render, screen } from "@testing-library/react"
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />); // Renderコンポーネントを取得する
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeeemy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
})