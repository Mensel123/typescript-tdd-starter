import { greet } from "./greeter";

describe("greet", () => {
  it("should greet the world", () => {
    // Arrange
    jest.spyOn(console, "log");
    console.log("test");

    // Act
    greet();

    // Assert
    expect(console.log).toHaveBeenCalledWith("hello world");
  });
});
