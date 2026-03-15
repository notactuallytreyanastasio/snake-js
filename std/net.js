import {
  type as type__745, stdNetSend as stdNetSend_743, panic as panic_751
} from "@temperlang/core";
export class NetRequest extends type__745() {
  /** @type {string} */
  #url_734;
  /** @type {string} */
  #method_735;
  /** @type {string | null} */
  #bodyContent_736;
  /** @type {string | null} */
  #bodyMimeType_737;
  /**
   * @param {string} content_739
   * @param {string} mimeType_740
   */
  post(content_739, mimeType_740) {
    this.#method_735 = "POST";
    this.#bodyContent_736 = content_739;
    let t_741 = this.#bodyMimeType_737;
    this.#bodyMimeType_737 = t_741;
    return;
  }
  /** @returns {globalThis.Promise<NetResponse>} */
  send() {
    return stdNetSend_743(this.#url_734, this.#method_735, this.#bodyContent_736, this.#bodyMimeType_737);
  }
  /** @param {string} url_744 */
  constructor(url_744) {
    super ();
    this.#url_734 = url_744;
    this.#method_735 = "GET";
    this.#bodyContent_736 = null;
    this.#bodyMimeType_737 = null;
    return;
  }
};
export class NetResponse extends type__745() {
};
/**
 * @param {string} url_747
 * @param {string} method_748
 * @param {string | null} bodyContent_749
 * @param {string | null} bodyMimeType_750
 * @returns {globalThis.Promise<NetResponse>}
 */
function sendRequest_746(url_747, method_748, bodyContent_749, bodyMimeType_750) {
  return panic_751();
}
