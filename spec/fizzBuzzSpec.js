describe("fizzBuzz", function() {

    beforeEach(function() {
    calc = new fizzBuzz;
    });

    describe("fizzBuzz tests", function() {
        it("should return fizzBuzz", function() {
             var result = fizzBuzz(15)
             expect(result).toBe("FizzBuzz");
        });
        
        it("should return fizz", function() {
            var result = fizzBuzz(3)
            expect(result).toBe("Fizz");
        });
        
        it("should return Buzz", function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });
        
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
    });
});
