# TicTacToe
The Tic-tac-toe of a lifetime for 2 players

I made a lot of mistakes because I didn't understand well the concept of inheriting and reusing code, and one day I'll do better but for now an explanation of this code:

## What should be done?

* Each player must have 1 turn in which they must give their X or their O depending on which was the symbol used in the previous turn

* The images must be changed depending on the turn

* The mechanics of the game should be added, that is, with what positions you win or lose (In this case, if the X wins, a sign "YOU WON" will appear, if the O wins, a sign saying "YOU LOST" will appear) these mechanics will appear at make 3 in a row

It looks simple to some extent ... at least I thought so at the beginning
A small tiny ultra small detail is that each box must have something that says to the code "I'm activated and my 2 next door neighbors are also therefore we win!!!"

The code must interact with each other, which made the inheritance of functions difficult, it is also necessary to define the turn of which player it is


Step one was to create the grids and make them pretty by adding an image for when they are not touched yet I gave each grid an id and a class

The second step I took was to change the images to one of an X when the box is touched, this was quite simple and I did it with onclick

The third step was the logical one, making the first X no longer come out an X but an O representing the second player this... I did it with a variable that changed between 1 and 2 depending on which player is giving, 1 for X and 2 for O but this did not work well, unfortunately I discovered it later but the problem was that if it was given too fast to the box it would bug and stop working, I solved this by changing that instead of integers it was manipulated with booleans (true or false)

The fourth step was the mechanics of 3 in a row, there are 8 possible ways to win per player, in this case as there were 2 there were 16 unique configurations

- For this, first create variables by box that reported if that box was touched (activated) or not
- I had to make it so that if 3 nearby cells were activated, the "you won" sign would appear
- And finally I had to do the same but with the O's therefore I had to make variables that inform if the activated box is an X or an O

Let's leave it at that it was difficult and took time but after a while I finished and the game was ready

The time it took me would be almost 15 hours invested (including HTML, CSS AND JS) and there were more than 1000 lines of code
