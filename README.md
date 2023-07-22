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
- ✅ DONE UAT1.1 - When user pass 1, it should return []
- ✅ DONE UAT1.2 - When user pass 4, it should return [2]
- ✅ DONE UAT1.3 - When user pass 6, it should return [2,3]
- ✅ DONE UAT1.4 - When user pass 8, it should return [2,4]
- ✅ DONE UAT1.5 - When user pass 9, it should return [3]
- ✅ DONE UAT1.6 - When user pass 10, it should return [2,5]
- ✅ DONE UAT1.7 - When user pass 12, it should return [2,3,4,6]

Story 2: User can pass integer (prime number) and it should return string '(integer) is prime' 
- ✅ DONE UAT2.1 - When user pass 2, it should return '2' is prime
- ✅ DONE UAT2.2 - When user pass 3, it should return '3' is prime
- ✅ DONE UAT2.3 - When user pass 5, it should return '5' is prime
- ✅ DONE UAT2.4 - When user pass 7, it should return '7' is prime
- ✅ DONE UAT2.5 - When user pass 11, it should return '11' is prime
- ✅ DONE UAT2.6 - When user pass 13, it should return '13' is prime

Story 3: User can pass wrong input, it should return an exception
- ⚠ TODO UAT3.1 - When user pass null, it should return an exception
- ⚠ TODO UAT3.2 - When user pass 0, it should return an exception

Story 4:  User can pass larger integers and it should return array with all of the integer's divisors (except for 1 and the number itself), from smallest to largest
- ⚠ TODO UAT4.1 - When user 25, it should return [5]
- ⚠ TODO UAT4.2 - When user 27, it should return [3,9]
- ⚠ TODO UAT4.3 - When user 24, it should return [2,3,4,6,8,12]
- ⚠ TODO UAT4.4 - When user 33, it should return [3,11]
- ⚠ TODO UAT4.5 - When user 48, it should return [2,3,4,6,8,12,24]

Story 5: User can pass large integer (prime number) and it should return string '(integer) is prime'
- ⚠ TODO UAT5.1 - When user pass 37, it should return '37' is prime
- ⚠ TODO UAT5.2 - When user pass 41, it should return '41' is prime
- ⚠ TODO UAT5.3 - When user pass 139, it should return '139' is prime
