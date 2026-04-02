import { render, screen } from "@testing-library/react";
import Newarrival from "./Newarrival";

jest.mock("../../utils/dummy", () => ({
  newArrivals: [
    {
      id: 1,
      name: "Test Product",
      image: "test.jpg",
    },
  ],
}));
test("test for New arrival heading",()=>{
    render(<Newarrival/>);
    expect(screen.getByText("New Arrivals")).toBeInTheDocument();
})
test("test for the dynamic data, ",()=>{
    render(<Newarrival/>);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
})