# Awesome repo

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1: User can pass integer and it should return array with all of the integer's divisors (except for 1 and the number itself), from smallest to largest
- ⚠ TODO UAT1.1 - When user pass 1, it should return []
- ⚠ TODO UAT1.2 - When user pass 4, it should return [2]
- ⚠ TODO UAT1.3 - When user pass 6, it should return [2,3]
- ⚠ TODO UAT1.4 - When user pass 8, it should return [2,4]
- ⚠ TODO UAT1.5 - When user pass 9, it should return [3]
- ⚠ TODO UAT1.6 - When user pass 10, it should return [2,5]
- ⚠ TODO UAT1.7 - When user pass 12, it should return [2,3,4,6]

Story 2: User can pass integer (prime number) and it should return string '(integer) is prime' 
- ⚠ TODO UAT2.1 - When user pass 2, it should return '2' is prime'
- ⚠ TODO UAT2.2 - When user pass 3, it should return '3' is prime'
- ⚠ TODO UAT2.3 - When user pass 5, it should return '5' is prime'
- ⚠ TODO UAT2.4 - When user pass 7, it should return '7' is prime'
- ⚠ TODO UAT2.5 - When user pass 11, it should return '11' is prime'
- ⚠ TODO UAT2.6 - When user pass 13, it should return '13' is prime'

Story 3: User can pass wrong input, it should return an exception
- ⚠ TODO UAT3.1 - When user pass null, it should return an exception
- ⚠ TODO UAT3.2 - When user pass 0, it should return an exception
