# QUESTIONS

1. You are given an array of heights of pile of boxes. You have to return the number of steps required to bring the height of entire pile to the same height as pile with minimum height. In one step, you can lower the tallest pile only to the next taller pile. You can adjust only one pile in a step even though 2 piles could be of same height. Following examples will illustrate this better,

**Example 1**

```
Input: arrOfHeights = [150, 210, 210, 80, 110]
Output: 9
Explanation:
Step 1 [150, 150, 210, 80, 110]
Step 2 [150, 150, 150, 80, 110]
Step 3 [110, 150, 150, 80, 110]
Step 4 [110, 110, 150, 80, 110]
Step 5 [110, 110, 110, 80, 110]
Step 6 [80, 110, 110, 80, 110]
Step 7 [80, 80, 110, 80, 110]
Step 8 [80, 80, 80, 80, 110]
Step 9 [80, 80, 80, 80, 80]
```

**Example 2**

```
Input: arrOfHeights = [4, 2, 3, 5, 1]
Output: 10
Explanation:
Step 1 [4, 2, 3, 4, 1]
Step 2 [4, 2, 3, 3, 1]
Step 3 [3, 2, 3, 3, 1]
Step 4 [2, 2, 3, 3, 1]
Step 5 [2, 2, 2, 3, 1]
Step 6 [2, 2, 2, 2, 1]
Step 7 [2, 2, 2, 1, 1]
Step 8 [2, 2, 1, 1, 1]
Step 9 [2, 1, 1, 1, 1]
Step 10 [1, 1, 1, 1, 1]
```
