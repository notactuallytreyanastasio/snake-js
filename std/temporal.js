import {
  JsonProducer as JsonProducer_1068, JsonSyntaxTree as JsonSyntaxTree_1073, InterchangeContext as InterchangeContext_1074, JsonAdapter as JsonAdapter_1075, JsonString as JsonString_1083
} from "./json.js";
import {
  type as type__1076, requireInstanceOf as requireInstanceOf__1084, modIntInt as modIntInt_1091, stringGet as stringGet_1102, stringNext as stringNext_1103, stringCountBetween as stringCountBetween_1105
} from "@temperlang/core";
class DateJsonAdapter_1063 extends type__1076(JsonAdapter_1075) {
  /**
   * @param {globalThis.Date} x_1065
   * @param {JsonProducer_1068} p_1066
   */
  encodeToJson(x_1065, p_1066) {
    encodeToJson_1067(x_1065, p_1066);
    return;
  }
  /**
   * @param {JsonSyntaxTree_1073} t_1070
   * @param {InterchangeContext_1074} ic_1071
   * @returns {globalThis.Date}
   */
  decodeFromJson(t_1070, ic_1071) {
    return decodeFromJson_1072(t_1070, ic_1071);
  }
  constructor() {
    super ();
    return;
  }
}
// Type `std/temporal/`.Date connected to globalThis.Date
/**
 * @param {globalThis.Date} this_1077
 * @param {JsonProducer_1068} p_1078
 */
function encodeToJson_1067(this_1077, p_1078) {
  let t_1079 = this_1077.toISOString().split("T")[0];
  p_1078.stringValue(t_1079);
  return;
}
/**
 * @param {JsonSyntaxTree_1073} t_1080
 * @param {InterchangeContext_1074} ic_1081
 * @returns {globalThis.Date}
 */
function decodeFromJson_1072(t_1080, ic_1081) {
  let t_1082;
  t_1082 = requireInstanceOf__1084(t_1080, JsonString_1083);
  return new (globalThis.Date)(globalThis.Date.parse(t_1082.content));
}
/** @returns {JsonAdapter_1075<globalThis.Date>} */
function jsonAdapter_1085() {
  return new DateJsonAdapter_1063();
}
/** @type {Array<number>} */
const daysInMonth_1086 = Object.freeze([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
/**
 * @param {number} year_1088
 * @returns {boolean}
 */
function isLeapYear_1087(year_1088) {
  let return_1089;
  let t_1090;
  if (modIntInt_1091(year_1088, 4) === 0) {
    if (modIntInt_1091(year_1088, 100) !== 0) {
      return_1089 = true;
    } else {
      t_1090 = modIntInt_1091(year_1088, 400);
      return_1089 = t_1090 === 0;
    }
  } else {
    return_1089 = false;
  }
  return return_1089;
}
/**
 * @param {number} minWidth_1093
 * @param {number} num_1094
 * @param {globalThis.Array<string>} sb_1095
 */
function padTo_1092(minWidth_1093, num_1094, sb_1095) {
  let t_1096;
  let t_1097;
  let t_1098;
  const decimal_1099 = num_1094.toString(10);
  let decimalIndex_1100 = 0;
  const decimalEnd_1101 = decimal_1099.length;
  if (decimalIndex_1100 < decimalEnd_1101) {
    t_1096 = stringGet_1102(decimal_1099, decimalIndex_1100);
    t_1098 = t_1096 === 45;
  } else {
    t_1098 = false;
  }
  if (t_1098) {
    sb_1095[0] += "-";
    t_1097 = stringNext_1103(decimal_1099, decimalIndex_1100);
    decimalIndex_1100 = t_1097;
  }
  let t_1104 = stringCountBetween_1105(decimal_1099, decimalIndex_1100, decimalEnd_1101);
  let nNeeded_1106 = minWidth_1093 - t_1104 | 0;
  while (nNeeded_1106 > 0) {
    sb_1095[0] += "0";
    nNeeded_1106 = nNeeded_1106 - 1 | 0;
  }
  sb_1095[0] += decimal_1099.substring(decimalIndex_1100, decimalEnd_1101);
  return;
}
/** @type {Array<number>} */
const dayOfWeekLookupTableLeapy_1107 = Object.freeze([0, 0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]);
/** @type {Array<number>} */
const dayOfWeekLookupTableNotLeapy_1108 = Object.freeze([0, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5]);
