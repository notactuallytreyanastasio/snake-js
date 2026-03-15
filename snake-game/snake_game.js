import {
  newGame as newGame_0, changeDirection as changeDirection_1, tick as tick_2, render as render_3, Right as Right_8, Direction as Direction_9, Up as Up_13, Down as Down_14, Left as Left_15, Playing as Playing_37
} from "snake";
import {
  globalConsole as globalConsole__5, adaptAwaiter as adaptAwaiter__18, stdSleep as sleep_35, stdReadLine as readLine_23, panic as panic_25, runAsync as runAsync_27
} from "@temperlang/core";
/** @type {Console_6} */
const console_4 = globalConsole__5;
/** @type {Direction_9} */
let inputDirection_7 = new Right_8();
/**
 * @param {string} line_11
 * @returns {Direction_9 | null}
 */
function parseInput_10(line_11) {
  let return_12;
  if (line_11 === "w") {
    return_12 = new Up_13();
  } else if (line_11 === "s") {
    return_12 = new Down_14();
  } else if (line_11 === "a") {
    return_12 = new Left_15();
  } else if (line_11 === "d") {
    return_12 = new Right_8();
  } else {
    return_12 = null;
  }
  return return_12;
}
/** @returns {Generator<{}>} */
const fn_16 = adaptAwaiter__18(function* fn_16(await_17) {
    let t_19;
    let t_20;
    let t_21;
    let t_22;
    try {
      while (true) {
        t_21 = yield await_17(readLine_23());
        const line_24 = t_21;
        if (!(line_24 == null)) {
          t_19 = typeof line_24 === "string";
        } else {
          t_19 = false;
        }
        if (t_19) {
          if (line_24 == null) {
            t_22 = panic_25();
          } else {
            t_22 = line_24;
          }
          const dir_26 = parseInput_10(t_22);
          if (!(dir_26 == null)) {
            t_20 = dir_26 instanceof Direction_9;
          } else {
            t_20 = false;
          }
          if (t_20) {
            if (dir_26 == null) {
              inputDirection_7 = panic_25();
            } else {
              inputDirection_7 = dir_26;
            }
          }
        } else {
          break;
        }
      }
    } catch {
    }
});
runAsync_27(fn_16);
/** @returns {Generator<{}>} */
const fn_28 = adaptAwaiter__18(function* fn_28(await_29) {
    let t_30;
    let t_31;
    let t_32;
    let t_33;
    let t_34;
    try {
      console_4.log("Snake! Use w/a/s/d + Enter to move.");
      console_4.log("Starting in 1 second...");
      yield await_29(sleep_35(1000));
      t_30 = newGame_0(20, 10, 42);
      let game_36 = t_30;
      while (true) {
        if (!(game_36.status instanceof Playing_37)) {
          break;
        }
        game_36 = changeDirection_1(game_36, inputDirection_7);
        t_31 = tick_2(game_36);
        game_36 = t_31;
        t_32 = render_3(game_36);
        console_4.log(t_32);
        yield await_29(sleep_35(200));
      }
      t_33 = render_3(game_36);
      console_4.log(t_33);
      t_34 = game_36.score.toString();
      console_4.log("Final score: " + t_34);
    } catch {
    }
});
runAsync_27(fn_28);
