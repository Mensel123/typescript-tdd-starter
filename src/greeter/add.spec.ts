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
})
