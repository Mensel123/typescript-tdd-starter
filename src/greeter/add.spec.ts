import { Add } from "./add";

describe('add', () => {
  it("should return 0 when input is an empty string", function() {
    const result = Add('');
    expect(result).toBe(0)
  });
})
