import {
  type as type__736, stdNetSend as stdNetSend_734, panic as panic_742
} from "@temperlang/core";
export class NetRequest extends type__736() {
  /** @type {string} */
  #url_725;
  /** @type {string} */
  #method_726;
  /** @type {string | null} */
  #bodyContent_727;
  /** @type {string | null} */
  #bodyMimeType_728;
  /**
   * @param {string} content_730
   * @param {string} mimeType_731
   */
  post(content_730, mimeType_731) {
    this.#method_726 = "POST";
    this.#bodyContent_727 = content_730;
    let t_732 = this.#bodyMimeType_728;
    this.#bodyMimeType_728 = t_732;
    return;
  }
  /** @returns {globalThis.Promise<NetResponse>} */
  send() {
    return stdNetSend_734(this.#url_725, this.#method_726, this.#bodyContent_727, this.#bodyMimeType_728);
  }
  /** @param {string} url_735 */
  constructor(url_735) {
    super ();
    this.#url_725 = url_735;
    this.#method_726 = "GET";
    this.#bodyContent_727 = null;
    this.#bodyMimeType_728 = null;
    return;
  }
};
export class NetResponse extends type__736() {
};
/**
 * @param {string} url_738
 * @param {string} method_739
 * @param {string | null} bodyContent_740
 * @param {string | null} bodyMimeType_741
 * @returns {globalThis.Promise<NetResponse>}
 */
function sendRequest_737(url_738, method_739, bodyContent_740, bodyMimeType_741) {
  return panic_742();
}
