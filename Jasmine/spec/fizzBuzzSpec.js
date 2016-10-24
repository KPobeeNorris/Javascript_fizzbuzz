
describe("Fizzbuzz", function() {

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(isDivisibleByThree(3)).toBe(true);
    });


    it('divisible by 5', function() {
      expect(isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('it return fizz, buzz or fizzbuzz', function() {
    it('returns fizz', function() {
      expect(fizzBuzz(3)).toBe('fizz');
    });
    it('returns buzz', function() {
      expect(fizzBuzz(5)).toBe('buzz');
    });
    it('returns fizzbuzz', function() {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
  });
});
