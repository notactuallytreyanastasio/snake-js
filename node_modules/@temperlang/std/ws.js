import {
  type as type__2, panic as panic_4
} from "@temperlang/core";
export class WsServer extends type__2() {
};
export class WsConnection extends type__2() {
};
/**
 * @param {number} port_3
 * @returns {globalThis.Promise<WsServer>}
 */
export function wsListen(port_3) {
  return panic_4();
};
/**
 * @param {WsServer} server_5
 * @returns {globalThis.Promise<WsConnection>}
 */
export function wsAccept(server_5) {
  return panic_4();
};
/**
 * @param {string} url_6
 * @returns {globalThis.Promise<WsConnection>}
 */
export function wsConnect(url_6) {
  return panic_4();
};
/**
 * @param {WsConnection} conn_7
 * @param {string} msg_8
 * @returns {globalThis.Promise<{}>}
 */
export function wsSend(conn_7, msg_8) {
  return panic_4();
};
/**
 * @param {WsConnection} conn_9
 * @returns {globalThis.Promise<string | null>}
 */
export function wsRecv(conn_9) {
  return panic_4();
};
/**
 * @param {WsConnection} conn_10
 * @returns {globalThis.Promise<{}>}
 */
export function wsClose(conn_10) {
  return panic_4();
};
