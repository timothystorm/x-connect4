# XConnect4

- github - https://github.com/timothystorm/x-connect4.git

## Criteria

Your exercise will be to create a web version of the classic game of Connect4.
Our board consists of *6 columns with 7 rows high*. At the start of a new game,
the board is empty. If you have never played Connect4, there are plenty of
explanations out on the Internet.

### Objective

Be the first player to get four of your colored checkers in a row -
horizontally, vertically, or diagonally.

## Design Considerations

- Need to be flexible and allow future enhancements such as a different board
  size, more than 2 players, an automated player

## Challenges

- Initial pass of solving for a winner is too brute and needs to be more
  elegant
  - Each move requires a full pass of the entire board which is fine for a
    6 x 7 board but will be inefficient if the board ever is enhanced to be larger

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
