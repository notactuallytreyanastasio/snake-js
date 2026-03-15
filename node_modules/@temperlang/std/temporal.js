import {
  JsonProducer as JsonProducer_1077, JsonSyntaxTree as JsonSyntaxTree_1082, InterchangeContext as InterchangeContext_1083, JsonAdapter as JsonAdapter_1084, JsonString as JsonString_1092
} from "./json.js";
import {
  type as type__1085, requireInstanceOf as requireInstanceOf__1093, modIntInt as modIntInt_1100, stringGet as stringGet_1111, stringNext as stringNext_1112, stringCountBetween as stringCountBetween_1114
} from "@temperlang/core";
class DateJsonAdapter_1072 extends type__1085(JsonAdapter_1084) {
  /**
   * @param {globalThis.Date} x_1074
   * @param {JsonProducer_1077} p_1075
   */
  encodeToJson(x_1074, p_1075) {
    encodeToJson_1076(x_1074, p_1075);
    return;
  }
  /**
   * @param {JsonSyntaxTree_1082} t_1079
   * @param {InterchangeContext_1083} ic_1080
   * @returns {globalThis.Date}
   */
  decodeFromJson(t_1079, ic_1080) {
    return decodeFromJson_1081(t_1079, ic_1080);
  }
  constructor() {
    super ();
    return;
  }
}
// Type `std/temporal/`.Date connected to globalThis.Date
/**
 * @param {globalThis.Date} this_1086
 * @param {JsonProducer_1077} p_1087
 */
function encodeToJson_1076(this_1086, p_1087) {
  let t_1088 = this_1086.toISOString().split("T")[0];
  p_1087.stringValue(t_1088);
  return;
}
/**
 * @param {JsonSyntaxTree_1082} t_1089
 * @param {InterchangeContext_1083} ic_1090
 * @returns {globalThis.Date}
 */
function decodeFromJson_1081(t_1089, ic_1090) {
  let t_1091;
  t_1091 = requireInstanceOf__1093(t_1089, JsonString_1092);
  return new (globalThis.Date)(globalThis.Date.parse(t_1091.content));
}
/** @returns {JsonAdapter_1084<globalThis.Date>} */
function jsonAdapter_1094() {
  return new DateJsonAdapter_1072();
}
/** @type {Array<number>} */
const daysInMonth_1095 = Object.freeze([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
/**
 * @param {number} year_1097
 * @returns {boolean}
 */
function isLeapYear_1096(year_1097) {
  let return_1098;
  let t_1099;
  if (modIntInt_1100(year_1097, 4) === 0) {
    if (modIntInt_1100(year_1097, 100) !== 0) {
      return_1098 = true;
    } else {
      t_1099 = modIntInt_1100(year_1097, 400);
      return_1098 = t_1099 === 0;
    }
  } else {
    return_1098 = false;
  }
  return return_1098;
}
/**
 * @param {number} minWidth_1102
 * @param {number} num_1103
 * @param {globalThis.Array<string>} sb_1104
 */
function padTo_1101(minWidth_1102, num_1103, sb_1104) {
  let t_1105;
  let t_1106;
  let t_1107;
  const decimal_1108 = num_1103.toString(10);
  let decimalIndex_1109 = 0;
  const decimalEnd_1110 = decimal_1108.length;
  if (decimalIndex_1109 < decimalEnd_1110) {
    t_1105 = stringGet_1111(decimal_1108, decimalIndex_1109);
    t_1107 = t_1105 === 45;
  } else {
    t_1107 = false;
  }
  if (t_1107) {
    sb_1104[0] += "-";
    t_1106 = stringNext_1112(decimal_1108, decimalIndex_1109);
    decimalIndex_1109 = t_1106;
  }
  let t_1113 = stringCountBetween_1114(decimal_1108, decimalIndex_1109, decimalEnd_1110);
  let nNeeded_1115 = minWidth_1102 - t_1113 | 0;
  while (nNeeded_1115 > 0) {
    sb_1104[0] += "0";
    nNeeded_1115 = nNeeded_1115 - 1 | 0;
  }
  sb_1104[0] += decimal_1108.substring(decimalIndex_1109, decimalEnd_1110);
  return;
}
/** @type {Array<number>} */
const dayOfWeekLookupTableLeapy_1116 = Object.freeze([0, 0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]);
/** @type {Array<number>} */
const dayOfWeekLookupTableNotLeapy_1117 = Object.freeze([0, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]);
