import { Add } from "./add";

describe('add', () => {
  it("should return 0 when input is an empty string", function() {
    const result = Add('');
    expect(result).toBe(0)
  });
  it("should return 1 when '1' is provided as input", function() {
    const result = Add('1')
    expect(result).toBe(1)
  });
  it("should return 2 when input is two numbers '1,1'", function() {
    const result = Add('1,1')
    expect(result).toBe(2)
  });
})
