# syook-general-problem-solving
# Easy
01. Am I Perfect?

Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
Output
Return “Perfect” if the number is perfect
if the sum of factors is greater than the input return “Abundant”
if the sum of factors is lesser than the input return “Deficient”.

02.How many trails to 1?

Take a positive integer x. If x is even, divide x by 2 to get x / 2. If x is odd, multiply x by 3 and add 1 to get 3x + 1. Repeat the process indefinitely. No matter which number you start with, you will always reach 1 eventually during the process.
Given a number x, return the number of steps required to reach 1.

# MEDIUM
03. Greater than and less than in a matrix

Detect values in a matrix that is greater than or equal to every element in its row and less than or equal to every element in its column.

# HARD
04. Catch the fish

Long lost in the Viking village, you and 3 others are lost and looking for food. Lucky for you guys find a river that has plenty of fish. You gather around to catch and realize that everyone going together to catch is not an efficient way, since the fish moves downwards along with the flow of the river.
So you guys follow a pattern where every (Kth) fish is hit by the 2nd guy. Every (Lth) fish is hit by the 3rd guy, and every (Mth) fish gets hit by the 4th guy. Finally every (Nth) fish you hit it yourself.
So, your job is to find the efficiency of hitting fish, given the total number of fish and the pattern followed.
Write a function that takes k,l,m,n, total as input and returns how many fishes get hit by the above pattern.
