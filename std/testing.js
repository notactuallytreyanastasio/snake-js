import {
  strict as strict__22
} from "assert";
import {
  type as type__36, listBuilderAdd as listBuilderAdd_16, listBuilderToList as listBuilderToList_26, listedJoin as listedJoin_34, pairConstructor as pairConstructor_51, listedMap as listedMap_52, stringGet as stringGet_71, stringNext as stringNext_73, listedReduceFrom as listedReduceFrom_85, listedGet as listedGet_89
} from "@temperlang/core";
export class Test extends type__36() {
  /**
   * @param {boolean} success_12
   * @param {() => string} message_13
   */
  assert(success_12, message_13) {
    let t_14;
    if (! success_12) {
      this.#_passing_15 = false;
      t_14 = message_13();
      listBuilderAdd_16(this.#_messages_17, t_14);
    }
    return;
  }
  /**
   * @param {boolean} success_19
   * @param {() => string} message_20
   * @returns {void}
   */
  assertHard(success_19, message_20) {
    this.assert(success_19, message_20);
    if (! success_19) {
      this.#_failedOnAssert_21 = true;
      strict__22.fail(this.messagesCombined());
    }
    return;
  }
  /** @returns {void} */
  softFailToHard() {
    if (this.hasUnhandledFail) {
      this.#_failedOnAssert_21 = true;
      strict__22.fail(this.messagesCombined());
    }
    return;
  }
  /** @returns {boolean} */
  get passing() {
    return this.#_passing_15;
  }
  /** @returns {Array<string>} */
  messages() {
    return listBuilderToList_26(this.#_messages_17);
  }
  /** @returns {boolean} */
  get failedOnAssert() {
    return this.#_failedOnAssert_21;
  }
  /** @returns {boolean} */
  get hasUnhandledFail() {
    let t_29;
    if (this.#_failedOnAssert_21) {
      t_29 = true;
    } else {
      t_29 = this.#_passing_15;
    }
    return ! t_29;
  }
  /** @returns {string | null} */
  messagesCombined() {
    let return_31;
    if (! this.#_messages_17.length) {
      return_31 = null;
    } else {
      function fn_32(it_33) {
        return it_33;
      }
      return_31 = listedJoin_34(this.#_messages_17, ", ", fn_32);
    }
    return return_31;
  }
  /** @type {boolean} */
  #_failedOnAssert_21;
  /** @type {boolean} */
  #_passing_15;
  /** @type {Array<string>} */
  #_messages_17;
  constructor() {
    super ();
    this.#_failedOnAssert_21 = false;
    this.#_passing_15 = true;
    let t_35 = [];
    this.#_messages_17 = t_35;
    return;
  }
};
/**
 * @param {Array<Pair_53<string, (arg0: Test) => void>>} testCases_37
 * @returns {Array<Pair_53<string, Array<string>>>}
 */
export function processTestCases(testCases_37) {
  function fn_38(testCase_39) {
    let t_40;
    let t_41;
    let t_42;
    let t_43;
    const key_44 = testCase_39.key;
    const fun_45 = testCase_39.value;
    const test_46 = new Test();
    let hadBubble_47 = false;
    try {
      fun_45(test_46);
    } catch {
      hadBubble_47 = true;
    }
    const messages_48 = test_46.messages();
    let failures_49;
    if (test_46.passing) {
      t_42 = ! hadBubble_47;
    } else {
      t_42 = false;
    }
    if (t_42) {
      failures_49 = Object.freeze([]);
    } else {
      if (hadBubble_47) {
        t_40 = test_46.failedOnAssert;
        t_43 = ! t_40;
      } else {
        t_43 = false;
      }
      if (t_43) {
        const allMessages_50 = messages_48.slice();
        listBuilderAdd_16(allMessages_50, "Bubble");
        t_41 = listBuilderToList_26(allMessages_50);
        failures_49 = t_41;
      } else {
        failures_49 = messages_48;
      }
    }
    return pairConstructor_51(key_44, failures_49);
  }
  return listedMap_52(testCases_37, fn_38);
};
/**
 * @param {string} s_55
 * @returns {string}
 */
function escapeXml_54(s_55) {
  let return_56;
  let t_57;
  let t_58;
  let t_59;
  let t_60;
  let t_61;
  let t_62;
  let t_63;
  let t_64;
  const sb_65 = [""];
  const end_66 = s_55.length;
  let emitted_67 = 0;
  let i_68 = 0;
  while (i_68 < end_66) {
    continue_69: {
      const c_70 = stringGet_71(s_55, i_68);
      if (c_70 === 38) {
        t_64 = "&amp;";
      } else if (c_70 === 60) {
        t_64 = "&lt;";
      } else if (c_70 === 62) {
        t_64 = "&gt;";
      } else if (c_70 === 39) {
        t_64 = "&#39;";
      } else if (c_70 === 34) {
        t_64 = "&#34;";
      } else {
        if (c_70 === 10) {
          t_60 = true;
        } else {
          if (c_70 === 13) {
            t_59 = true;
          } else {
            t_59 = c_70 === 9;
          }
          t_60 = t_59;
        }
        if (t_60) {
          break continue_69;
        } else {
          if (c_70 < 32) {
            t_62 = true;
          } else {
            if (c_70 === 65534) {
              t_61 = true;
            } else {
              t_61 = c_70 === 65535;
            }
            t_62 = t_61;
          }
          if (t_62) {
            t_63 = "[0x" + c_70.toString(16) + "]";
          } else {
            break continue_69;
          }
          t_64 = t_63;
        }
      }
      const esc_72 = t_64;
      sb_65[0] += s_55.substring(emitted_67, i_68);
      sb_65[0] += esc_72;
      t_57 = stringNext_73(s_55, i_68);
      emitted_67 = t_57;
    }
    t_58 = stringNext_73(s_55, i_68);
    i_68 = t_58;
  }
  if (emitted_67 === 0) {
    return_56 = s_55;
  } else {
    sb_65[0] += s_55.substring(emitted_67, end_66);
    return_56 = sb_65[0];
  }
  return return_56;
}
/**
 * @param {Array<Pair_53<string, Array<string>>>} testResults_74
 * @param {(arg0: string) => void} writeLine_75
 */
export function reportTestResults(testResults_74, writeLine_75) {
  let t_76;
  let t_77;
  let t_78;
  writeLine_75("<testsuites>");
  const total_79 = testResults_74.length.toString();
  function fn_80(fails_81, testResult_82) {
    let t_83;
    if (! testResult_82.value.length) {
      t_83 = 0;
    } else {
      t_83 = 1;
    }
    return fails_81 + t_83 | 0;
  }
  const fails_84 = listedReduceFrom_85(testResults_74, 0, fn_80).toString();
  const totals_86 = "tests='" + total_79 + "' failures='" + fails_84 + "'";
  writeLine_75("  <testsuite name='suite' " + totals_86 + " time='0.0'>");
  let i_87 = 0;
  while (true) {
    t_76 = testResults_74.length;
    if (!(i_87 < t_76)) {
      break;
    }
    const testResult_88 = listedGet_89(testResults_74, i_87);
    const failureMessages_90 = testResult_88.value;
    t_77 = testResult_88.key;
    const name_91 = escapeXml_54(t_77);
    const basics_92 = "name='" + name_91 + "' classname='" + name_91 + "' time='0.0'";
    if (! failureMessages_90.length) {
      writeLine_75("    <testcase " + basics_92 + " />");
    } else {
      writeLine_75("    <testcase " + basics_92 + ">");
      function fn_93(it_94) {
        return it_94;
      }
      t_78 = listedJoin_34(failureMessages_90, ", ", fn_93);
      const message_95 = escapeXml_54(t_78);
      writeLine_75("      <failure message='" + message_95 + "' />");
      writeLine_75("    <\/testcase>");
    }
    i_87 = i_87 + 1 | 0;
  }
  writeLine_75("  <\/testsuite>");
  writeLine_75("<\/testsuites>");
  return;
};
/**
 * @param {Array<Pair_53<string, (arg0: Test) => void>>} testCases_96
 * @returns {string}
 */
export function runTestCases(testCases_96) {
  const report_97 = [""];
  let t_98 = processTestCases(testCases_96);
  function fn_99(line_100) {
    report_97[0] += line_100;
    report_97[0] += "\n";
    return;
  }
  reportTestResults(t_98, fn_99);
  return report_97[0];
};
/**
 * @param {(arg0: Test) => void} testFun_101
 * @returns {void}
 */
export function runTest(testFun_101) {
  const test_102 = new Test();
  try {
    testFun_101(test_102);
  } catch {
    function fn_103() {
      return "bubble during test running";
    }
    test_102.assert(false, fn_103);
  }
  test_102.softFailToHard();
  return;
};
