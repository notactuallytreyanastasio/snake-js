import {
  newMultiGame as newMultiGame_0, multiTick as multiTick_1, multiRender as multiRender_2, changePlayerDirection as changePlayerDirection_3, addPlayer as addPlayer_5, playerHeadChar as playerHeadChar_6, MultiSnakeGame as MultiSnakeGame_17, PlayerSnake as PlayerSnake_34, Right as Right_35, Dead as Dead_36, Up as Up_78, Down as Down_79, Left as Left_80
} from "snake";
import {
  WsConnection as WsConnection_19
} from "@temperlang/std/ws";
const {
  imul: imul__57
} = globalThis.Math;
import {
  globalConsole as globalConsole__8, adaptAwaiter as adaptAwaiter__24, stdSleep as sleep_31, stdTermCols as terminalColumns_11, stdTermRows as terminalRows_13, wsListen as wsListen_53, wsAccept as wsAccept_54, wsSend as wsSend_46, wsRecv as wsRecv_75, listedGetOr as listedGetOr_38, listBuilderAdd as listBuilderAdd_39, listBuilderToList as listBuilderToList_40, listedGet as listedGet_45, runAsync as runAsync_47, panic as panic_77
} from "@temperlang/core";
/** @type {Console_9} */
const console_7 = globalConsole__8;
/** @type {number} */
let detectedCols_10 = terminalColumns_11();
/** @type {number} */
let detectedRows_12 = terminalRows_13();
/** @type {number} */
let boardWidth_14;
if (detectedCols_10 > 100) {
  boardWidth_14 = detectedCols_10 - 4 | 0;
} else {
  boardWidth_14 = 80;
}
/** @type {number} */
let boardHeight_15;
if (detectedRows_12 > 30) {
  boardHeight_15 = detectedRows_12 - 12 | 0;
} else {
  boardHeight_15 = 30;
}
/** @type {MultiSnakeGame_17} */
let game_16 = newMultiGame_0(boardWidth_14, boardHeight_15, 0, 42);
/** @type {Array<WsConnection_19>} */
let wsConns_18 = [];
/** @type {number} */
let nextId_20 = 0;
/** @type {boolean} */
let running_21 = true;
/** @returns {Generator<{}>} */
const fn_22 = adaptAwaiter__24(function* fn_22(await_23) {
    let t_25;
    let t_26;
    let t_27;
    let t_28;
    let t_29;
    let t_30;
    try {
      while (true) {
        if (!(game_16.snakes.length === 0)) {
          break;
        }
        yield await_23(sleep_31(500));
      }
      console_7.log("Game starting!");
      while (running_21) {
        const dirs_32 = [];
        let i_33 = 0;
        while (true) {
          t_25 = game_16.snakes.length;
          if (!(i_33 < t_25)) {
            break;
          }
          t_26 = game_16.snakes;
          t_27 = new PlayerSnake_34(0, Object.freeze([]), new Right_35(), 0, new Dead_36());
          const snake_37 = listedGetOr_38(t_26, i_33, t_27);
          listBuilderAdd_39(dirs_32, snake_37.direction);
          i_33 = i_33 + 1 | 0;
        }
        t_28 = listBuilderToList_40(dirs_32);
        t_29 = multiTick_1(game_16, t_28);
        game_16 = t_29;
        const frame_41 = multiRender_2(game_16);
        const conns_42 = listBuilderToList_40(wsConns_18);
        let ci_43 = 0;
        while (true) {
          t_30 = conns_42.length;
          if (!(ci_43 < t_30)) {
            break;
          }
          try {
            const conn_44 = listedGet_45(conns_42, ci_43);
            yield await_23(wsSend_46(conn_44, frame_41));
          } catch {
          }
          ci_43 = ci_43 + 1 | 0;
        }
        yield await_23(sleep_31(200));
      }
    } catch {
    }
});
runAsync_47(fn_22);
/** @returns {Generator<{}>} */
const fn_48 = adaptAwaiter__24(function* fn_48(await_49) {
    let t_50;
    let t_51;
    try {
      console_7.log("Snake Multiplayer Server");
      console_7.log("Starting on port 8080...");
      let server_52;
      server_52 = yield await_49(wsListen_53(8080));
      console_7.log("Listening on ws://localhost:8080");
      console_7.log("Waiting for players to connect...");
      while (running_21) {
        t_51 = yield await_49(wsAccept_54(server_52));
        const ws_55 = t_51;
        const playerId_56 = nextId_20;
        nextId_20 = nextId_20 + 1 | 0;
        game_16 = addPlayer_5(game_16, imul__57(playerId_56, 7) + 13 | 0);
        listBuilderAdd_39(wsConns_18, ws_55);
        const symbol_58 = playerHeadChar_6(playerId_56);
        t_50 = playerId_56.toString();
        console_7.log("Player " + t_50 + " (" + symbol_58 + ") connected!");
        const connId_59 = playerId_56;
        const connWs_60 = ws_55;
        const fn_61 = adaptAwaiter__24(function* fn_61(await_62) {
            let t_63;
            let t_64;
            let t_65;
            let t_66;
            let t_67;
            let t_68;
            let t_69;
            let t_70;
            let t_71;
            let t_72;
            let t_73;
            let t_74;
            try {
              while (running_21) {
                t_73 = yield await_62(wsRecv_75(connWs_60));
                const msg_76 = t_73;
                if (!(msg_76 == null)) {
                  t_63 = typeof msg_76 === "string";
                } else {
                  t_63 = false;
                }
                if (t_63) {
                  if (msg_76 == null) {
                    t_74 = panic_77();
                  } else {
                    t_74 = msg_76;
                  }
                  if (t_74 === "u") {
                    t_64 = new Up_78();
                    t_65 = changePlayerDirection_3(game_16, connId_59, t_64);
                    game_16 = t_65;
                  } else if (t_74 === "d") {
                    t_66 = new Down_79();
                    t_67 = changePlayerDirection_3(game_16, connId_59, t_66);
                    game_16 = t_67;
                  } else if (t_74 === "l") {
                    t_68 = new Left_80();
                    t_69 = changePlayerDirection_3(game_16, connId_59, t_68);
                    game_16 = t_69;
                  } else if (t_74 === "r") {
                    t_70 = new Right_35();
                    t_71 = changePlayerDirection_3(game_16, connId_59, t_70);
                    game_16 = t_71;
                  }
                } else {
                  t_72 = connId_59.toString();
                  console_7.log("Player " + t_72 + " disconnected");
                  break;
                }
              }
            } catch {
            }
        });
        runAsync_47(fn_61);
      }
    } catch {
    }
});
runAsync_47(fn_48);
