import { validateEmail } from "../../src/components/helper";

describe('validateEmail', () => {
  it('Should be a function', () => {
    expect(typeof validateEmail).toBe('function');
  });
});
