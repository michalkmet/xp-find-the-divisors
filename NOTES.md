# Notes

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

pomodoro 1:
- ✅ Initial refactor
- ✅ User stories
- ✅ UAT1.1 - When user pass 1, it should return []
- ✅ UAT1.2 - When user pass 4, it should return [2]
- ✅ UAT1.3 - When user pass 6, it should return [2,3]


