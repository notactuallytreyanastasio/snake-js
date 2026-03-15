import {
  strict as strict__13
} from "assert";
import {
  type as type__27, listBuilderAdd as listBuilderAdd_7, listBuilderToList as listBuilderToList_17, listedJoin as listedJoin_25, pairConstructor as pairConstructor_42, listedMap as listedMap_43, stringGet as stringGet_62, stringNext as stringNext_64, listedReduceFrom as listedReduceFrom_76, listedGet as listedGet_80
} from "@temperlang/core";
export class Test extends type__27() {
  /**
   * @param {boolean} success_3
   * @param {() => string} message_4
   */
  assert(success_3, message_4) {
    let t_5;
    if (! success_3) {
      this.#_passing_6 = false;
      t_5 = message_4();
      listBuilderAdd_7(this.#_messages_8, t_5);
    }
    return;
  }
  /**
   * @param {boolean} success_10
   * @param {() => string} message_11
   * @returns {void}
   */
  assertHard(success_10, message_11) {
    this.assert(success_10, message_11);
    if (! success_10) {
      this.#_failedOnAssert_12 = true;
      strict__13.fail(this.messagesCombined());
    }
    return;
  }
  /** @returns {void} */
  softFailToHard() {
    if (this.hasUnhandledFail) {
      this.#_failedOnAssert_12 = true;
      strict__13.fail(this.messagesCombined());
    }
    return;
  }
  /** @returns {boolean} */
  get passing() {
    return this.#_passing_6;
  }
  /** @returns {Array<string>} */
  messages() {
    return listBuilderToList_17(this.#_messages_8);
  }
  /** @returns {boolean} */
  get failedOnAssert() {
    return this.#_failedOnAssert_12;
  }
  /** @returns {boolean} */
  get hasUnhandledFail() {
    let t_20;
    if (this.#_failedOnAssert_12) {
      t_20 = true;
    } else {
      t_20 = this.#_passing_6;
    }
    return ! t_20;
  }
  /** @returns {string | null} */
  messagesCombined() {
    let return_22;
    if (! this.#_messages_8.length) {
      return_22 = null;
    } else {
      function fn_23(it_24) {
        return it_24;
      }
      return_22 = listedJoin_25(this.#_messages_8, ", ", fn_23);
    }
    return return_22;
  }
  /** @type {boolean} */
  #_failedOnAssert_12;
  /** @type {boolean} */
  #_passing_6;
  /** @type {Array<string>} */
  #_messages_8;
  constructor() {
    super ();
    this.#_failedOnAssert_12 = false;
    this.#_passing_6 = true;
    let t_26 = [];
    this.#_messages_8 = t_26;
    return;
  }
};
/**
 * @param {Array<Pair_44<string, (arg0: Test) => void>>} testCases_28
 * @returns {Array<Pair_44<string, Array<string>>>}
 */
export function processTestCases(testCases_28) {
  function fn_29(testCase_30) {
    let t_31;
    let t_32;
    let t_33;
    let t_34;
    const key_35 = testCase_30.key;
    const fun_36 = testCase_30.value;
    const test_37 = new Test();
    let hadBubble_38 = false;
    try {
      fun_36(test_37);
    } catch {
      hadBubble_38 = true;
    }
    const messages_39 = test_37.messages();
    let failures_40;
    if (test_37.passing) {
      t_33 = ! hadBubble_38;
    } else {
      t_33 = false;
    }
    if (t_33) {
      failures_40 = Object.freeze([]);
    } else {
      if (hadBubble_38) {
        t_31 = test_37.failedOnAssert;
        t_34 = ! t_31;
      } else {
        t_34 = false;
      }
      if (t_34) {
        const allMessages_41 = messages_39.slice();
        listBuilderAdd_7(allMessages_41, "Bubble");
        t_32 = listBuilderToList_17(allMessages_41);
        failures_40 = t_32;
      } else {
        failures_40 = messages_39;
      }
    }
    return pairConstructor_42(key_35, failures_40);
  }
  return listedMap_43(testCases_28, fn_29);
};
/**
 * @param {string} s_46
 * @returns {string}
 */
function escapeXml_45(s_46) {
  let return_47;
  let t_48;
  let t_49;
  let t_50;
  let t_51;
  let t_52;
  let t_53;
  let t_54;
  let t_55;
  const sb_56 = [""];
  const end_57 = s_46.length;
  let emitted_58 = 0;
  let i_59 = 0;
  while (i_59 < end_57) {
    continue_60: {
      const c_61 = stringGet_62(s_46, i_59);
      if (c_61 === 38) {
        t_55 = "&amp;";
      } else if (c_61 === 60) {
        t_55 = "&lt;";
      } else if (c_61 === 62) {
        t_55 = "&gt;";
      } else if (c_61 === 39) {
        t_55 = "&#39;";
      } else if (c_61 === 34) {
        t_55 = "&#34;";
      } else {
        if (c_61 === 10) {
          t_51 = true;
        } else {
          if (c_61 === 13) {
            t_50 = true;
          } else {
            t_50 = c_61 === 9;
          }
          t_51 = t_50;
        }
        if (t_51) {
          break continue_60;
        } else {
          if (c_61 < 32) {
            t_53 = true;
          } else {
            if (c_61 === 65534) {
              t_52 = true;
            } else {
              t_52 = c_61 === 65535;
            }
            t_53 = t_52;
          }
          if (t_53) {
            t_54 = "[0x" + c_61.toString(16) + "]";
          } else {
            break continue_60;
          }
          t_55 = t_54;
        }
      }
      const esc_63 = t_55;
      sb_56[0] += s_46.substring(emitted_58, i_59);
      sb_56[0] += esc_63;
      t_48 = stringNext_64(s_46, i_59);
      emitted_58 = t_48;
    }
    t_49 = stringNext_64(s_46, i_59);
    i_59 = t_49;
  }
  if (emitted_58 === 0) {
    return_47 = s_46;
  } else {
    sb_56[0] += s_46.substring(emitted_58, end_57);
    return_47 = sb_56[0];
  }
  return return_47;
}
/**
 * @param {Array<Pair_44<string, Array<string>>>} testResults_65
 * @param {(arg0: string) => void} writeLine_66
 */
export function reportTestResults(testResults_65, writeLine_66) {
  let t_67;
  let t_68;
  let t_69;
  writeLine_66("<testsuites>");
  const total_70 = testResults_65.length.toString();
  function fn_71(fails_72, testResult_73) {
    let t_74;
    if (! testResult_73.value.length) {
      t_74 = 0;
    } else {
      t_74 = 1;
    }
    return fails_72 + t_74 | 0;
  }
  const fails_75 = listedReduceFrom_76(testResults_65, 0, fn_71).toString();
  const totals_77 = "tests='" + total_70 + "' failures='" + fails_75 + "'";
  writeLine_66("  <testsuite name='suite' " + totals_77 + " time='0.0'>");
  let i_78 = 0;
  while (true) {
    t_67 = testResults_65.length;
    if (!(i_78 < t_67)) {
      break;
    }
    const testResult_79 = listedGet_80(testResults_65, i_78);
    const failureMessages_81 = testResult_79.value;
    t_68 = testResult_79.key;
    const name_82 = escapeXml_45(t_68);
    const basics_83 = "name='" + name_82 + "' classname='" + name_82 + "' time='0.0'";
    if (! failureMessages_81.length) {
      writeLine_66("    <testcase " + basics_83 + " />");
    } else {
      writeLine_66("    <testcase " + basics_83 + ">");
      function fn_84(it_85) {
        return it_85;
      }
      t_69 = listedJoin_25(failureMessages_81, ", ", fn_84);
      const message_86 = escapeXml_45(t_69);
      writeLine_66("      <failure message='" + message_86 + "' />");
      writeLine_66("    <\/testcase>");
    }
    i_78 = i_78 + 1 | 0;
  }
  writeLine_66("  <\/testsuite>");
  writeLine_66("<\/testsuites>");
  return;
};
/**
 * @param {Array<Pair_44<string, (arg0: Test) => void>>} testCases_87
 * @returns {string}
 */
export function runTestCases(testCases_87) {
  const report_88 = [""];
  let t_89 = processTestCases(testCases_87);
  function fn_90(line_91) {
    report_88[0] += line_91;
    report_88[0] += "\n";
    return;
  }
  reportTestResults(t_89, fn_90);
  return report_88[0];
};
/**
 * @param {(arg0: Test) => void} testFun_92
 * @returns {void}
 */
export function runTest(testFun_92) {
  const test_93 = new Test();
  try {
    testFun_92(test_93);
  } catch {
    function fn_94() {
      return "bubble during test running";
    }
    test_93.assert(false, fn_94);
  }
  test_93.softFailToHard();
  return;
};
