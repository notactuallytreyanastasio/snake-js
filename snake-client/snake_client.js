import {
  globalConsole as globalConsole__1, adaptAwaiter as adaptAwaiter__6, stdReadLine as readLine_18, wsConnect as wsConnect_11, wsSend as wsSend_21, wsRecv as wsRecv_23, wsClose as wsClose_25, panic as panic_20, runAsync as runAsync_22
} from "@temperlang/core";
/** @type {Console_2} */
const console_0 = globalConsole__1;
/** @type {boolean} */
let connected_3 = true;
/** @returns {Generator<{}>} */
const fn_4 = adaptAwaiter__6(function* fn_4(await_5) {
    let t_7;
    let t_8;
    let t_9;
    let t_10;
    try {
      console_0.log("Snake Multiplayer Client");
      console_0.log("Connecting to ws://localhost:8080...");
      t_8 = yield await_5(wsConnect_11("ws://localhost:8080"));
      const ws_12 = t_8;
      console_0.log("Connected! Use w/a/s/d to move.");
      const fn_13 = adaptAwaiter__6(function* fn_13(await_14) {
          let t_15;
          let t_16;
          let t_17;
          try {
            while (connected_3) {
              t_16 = yield await_14(readLine_18());
              const line_19 = t_16;
              if (!(line_19 == null)) {
                t_15 = typeof line_19 === "string";
              } else {
                t_15 = false;
              }
              if (t_15) {
                if (line_19 == null) {
                  t_17 = panic_20();
                } else {
                  t_17 = line_19;
                }
                if (t_17 === "w") {
                  try {
                    yield await_14(wsSend_21(ws_12, "u"));
                  } catch {
                  }
                } else if (t_17 === "s") {
                  try {
                    yield await_14(wsSend_21(ws_12, "d"));
                  } catch {
                  }
                } else if (t_17 === "a") {
                  try {
                    yield await_14(wsSend_21(ws_12, "l"));
                  } catch {
                  }
                } else if (t_17 === "d") {
                  try {
                    yield await_14(wsSend_21(ws_12, "r"));
                  } catch {
                  }
                }
              } else {
                break;
              }
            }
          } catch {
          }
      });
      runAsync_22(fn_13);
      while (connected_3) {
        t_9 = yield await_5(wsRecv_23(ws_12));
        const msg_24 = t_9;
        if (!(msg_24 == null)) {
          t_7 = typeof msg_24 === "string";
        } else {
          t_7 = false;
        }
        if (t_7) {
          if (msg_24 == null) {
            t_10 = panic_20();
          } else {
            t_10 = msg_24;
          }
          console_0.log(t_10);
        } else {
          console_0.log("Disconnected from server.");
          connected_3 = false;
        }
      }
      try {
        yield await_5(wsClose_25(ws_12));
      } catch {
      }
    } catch {
    }
});
runAsync_22(fn_4);
