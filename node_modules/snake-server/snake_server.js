import {
  newMultiGame as newMultiGame_0, multiTick as multiTick_1, multiRender as multiRender_2, changePlayerDirection as changePlayerDirection_3, addPlayer as addPlayer_5, playerHeadChar as playerHeadChar_6, MultiSnakeGame as MultiSnakeGame_17, PlayerSnake as PlayerSnake_33, Right as Right_34, Dead as Dead_35, Up as Up_76, Down as Down_77, Left as Left_78
} from "snake";
import {
  WsConnection as WsConnection_19
} from "@temperlang/std/ws";
const {
  imul: imul__74
} = globalThis.Math;
import {
  globalConsole as globalConsole__8, adaptAwaiter as adaptAwaiter__24, stdSleep as sleep_30, stdTermCols as terminalColumns_11, stdTermRows as terminalRows_13, wsListen as wsListen_66, wsAccept as wsAccept_67, wsSend as wsSend_44, wsRecv as wsRecv_69, listedGetOr as listedGetOr_37, listBuilderAdd as listBuilderAdd_38, listBuilderToList as listBuilderToList_39, runAsync as runAsync_45, panic as panic_72
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
    try {
      while (true) {
        if (!(game_16.snakes.length === 0)) {
          break;
        }
        yield await_23(sleep_30(500));
      }
      console_7.log("Game starting!");
      while (running_21) {
        const dirs_31 = [];
        let i_32 = 0;
        while (true) {
          t_25 = game_16.snakes.length;
          if (!(i_32 < t_25)) {
            break;
          }
          t_26 = game_16.snakes;
          t_27 = new PlayerSnake_33(0, Object.freeze([]), new Right_34(), 0, new Dead_35());
          const snake_36 = listedGetOr_37(t_26, i_32, t_27);
          listBuilderAdd_38(dirs_31, snake_36.direction);
          i_32 = i_32 + 1 | 0;
        }
        t_28 = listBuilderToList_39(dirs_31);
        t_29 = multiTick_1(game_16, t_28);
        game_16 = t_29;
        const frame_40 = multiRender_2(game_16);
        const conns_41 = listBuilderToList_39(wsConns_18);
        function fn_42(conn_43) {
          wsSend_44(conn_43, frame_40);
          return;
        }
        conns_41.forEach(fn_42);
        yield await_23(sleep_30(200));
      }
    } catch {
    }
});
runAsync_45(fn_22);
/** @returns {Generator<{}>} */
const fn_46 = adaptAwaiter__24(function* fn_46(await_47) {
    let t_48;
    let t_49;
    let t_50;
    let t_51;
    let t_52;
    let t_53;
    let t_54;
    let t_55;
    let t_56;
    let t_57;
    let t_58;
    let t_59;
    let t_60;
    let t_61;
    let t_62;
    let t_63;
    let t_64;
    try {
      console_7.log("Snake Multiplayer Server");
      console_7.log("Starting on port 8080...");
      let server_65;
      server_65 = yield await_47(wsListen_66(8080));
      console_7.log("Listening on ws://localhost:8080");
      console_7.log("Waiting for players to connect...");
      while (running_21) {
        t_60 = yield await_47(wsAccept_67(server_65));
        const ws_68 = t_60;
        try {
          t_61 = yield await_47(wsRecv_69(ws_68));
          t_62 = t_61;
        } catch {
          t_62 = null;
        }
        const firstMsgRaw_70 = t_62;
        let isSpectator_71 = false;
        if (!(firstMsgRaw_70 == null)) {
          t_48 = typeof firstMsgRaw_70 === "string";
        } else {
          t_48 = false;
        }
        if (t_48) {
          if (firstMsgRaw_70 == null) {
            t_63 = panic_72();
          } else {
            t_63 = firstMsgRaw_70;
          }
          if (t_63 === "spectate") {
            isSpectator_71 = true;
          }
        }
        if (isSpectator_71) {
          listBuilderAdd_38(wsConns_18, ws_68);
          console_7.log("Spectator connected!");
        } else {
          const playerId_73 = nextId_20;
          nextId_20 = nextId_20 + 1 | 0;
          t_49 = addPlayer_5(game_16, imul__74(playerId_73, 7) + 13 | 0);
          game_16 = t_49;
          listBuilderAdd_38(wsConns_18, ws_68);
          const symbol_75 = playerHeadChar_6(playerId_73);
          t_50 = playerId_73.toString();
          console_7.log("Player " + t_50 + " (" + symbol_75 + ") connected!");
          if (!(firstMsgRaw_70 == null)) {
            t_51 = typeof firstMsgRaw_70 === "string";
          } else {
            t_51 = false;
          }
          if (t_51) {
            if (firstMsgRaw_70 == null) {
              t_64 = panic_72();
            } else {
              t_64 = firstMsgRaw_70;
            }
            if (t_64 === "u") {
              t_52 = new Up_76();
              t_53 = changePlayerDirection_3(game_16, playerId_73, t_52);
              game_16 = t_53;
            } else if (t_64 === "d") {
              t_54 = new Down_77();
              t_55 = changePlayerDirection_3(game_16, playerId_73, t_54);
              game_16 = t_55;
            } else if (t_64 === "l") {
              t_56 = new Left_78();
              t_57 = changePlayerDirection_3(game_16, playerId_73, t_56);
              game_16 = t_57;
            } else if (t_64 === "r") {
              t_58 = new Right_34();
              t_59 = changePlayerDirection_3(game_16, playerId_73, t_58);
              game_16 = t_59;
            }
          }
          const connId_79 = playerId_73;
          const connWs_80 = ws_68;
          const fn_81 = adaptAwaiter__24(function* fn_81(await_82) {
              let t_83;
              let t_84;
              let t_85;
              let t_86;
              let t_87;
              let t_88;
              let t_89;
              let t_90;
              let t_91;
              let t_92;
              let t_93;
              let t_94;
              try {
                while (running_21) {
                  t_93 = yield await_82(wsRecv_69(connWs_80));
                  const msg_95 = t_93;
                  if (!(msg_95 == null)) {
                    t_83 = typeof msg_95 === "string";
                  } else {
                    t_83 = false;
                  }
                  if (t_83) {
                    if (msg_95 == null) {
                      t_94 = panic_72();
                    } else {
                      t_94 = msg_95;
                    }
                    if (t_94 === "u") {
                      t_84 = new Up_76();
                      t_85 = changePlayerDirection_3(game_16, connId_79, t_84);
                      game_16 = t_85;
                    } else if (t_94 === "d") {
                      t_86 = new Down_77();
                      t_87 = changePlayerDirection_3(game_16, connId_79, t_86);
                      game_16 = t_87;
                    } else if (t_94 === "l") {
                      t_88 = new Left_78();
                      t_89 = changePlayerDirection_3(game_16, connId_79, t_88);
                      game_16 = t_89;
                    } else if (t_94 === "r") {
                      t_90 = new Right_34();
                      t_91 = changePlayerDirection_3(game_16, connId_79, t_90);
                      game_16 = t_91;
                    }
                  } else {
                    t_92 = connId_79.toString();
                    console_7.log("Player " + t_92 + " disconnected");
                    break;
                  }
                }
              } catch {
              }
          });
          runAsync_45(fn_81);
        }
      }
    } catch {
    }
});
runAsync_45(fn_46);
