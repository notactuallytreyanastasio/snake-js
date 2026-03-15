import {
  type as type__762, requireInstanceOf as requireInstanceOf__886, pairConstructor as pairConstructor_840, mapConstructor as mapConstructor_839, regexCompileFormatted as regexCompileFormatted_852, regexCompiledFound as regexCompiledFound_856, regexCompiledFind as regexCompiledFind_861, regexCompiledReplace as regexCompiledReplace_866, regexCompiledSplit as regexCompiledSplit_869, listedGet as listedGet_921, stringFromCodePoint as stringFromCodePoint_923, regexFormatterPushCodeTo as regexFormatterPushCodeTo_924, stringGet as stringGet_932, stringNext as stringNext_933, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_947, listBuilderAdd as listBuilderAdd_1063, listBuilderToList as listBuilderToList_1064
} from "@temperlang/core";
export class RegexNode extends type__762() {
  /** @returns {Regex} */
  compiled() {
    return new Regex(this);
  }
  /**
   * @param {string} text_754
   * @returns {boolean}
   */
  found(text_754) {
    return this.compiled().found(text_754);
  }
  /**
   * @param {string} text_756
   * @returns {Match}
   */
  find(text_756) {
    return this.compiled().find(text_756);
  }
  /**
   * @param {string} text_758
   * @param {(arg0: Match) => string} format_759
   * @returns {string}
   */
  replace(text_758, format_759) {
    return this.compiled().replace(text_758, format_759);
  }
  /**
   * @param {string} text_761
   * @returns {Array<string>}
   */
  split(text_761) {
    return this.compiled().split(text_761);
  }
};
export class Capture extends type__762(RegexNode) {
  /** @type {string} */
  #name_763;
  /** @type {RegexNode} */
  #item_764;
  /**
   * @param {{
   *   name: string, item: RegexNode
   * }}
   * props
   * @returns {Capture}
   */
  static["new"](props) {
    return new Capture(props.name, props.item);
  }
  /**
   * @param {string} name_765
   * @param {RegexNode} item_766
   */
  constructor(name_765, item_766) {
    super ();
    this.#name_763 = name_765;
    this.#item_764 = item_766;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_763;
  }
  /** @returns {RegexNode} */
  get item() {
    return this.#item_764;
  }
};
export class CodePart extends type__762(RegexNode) {
};
export class CodePoints extends type__762(CodePart) {
  /** @type {string} */
  #value_769;
  /** @param {string} value_770 */
  constructor(value_770) {
    super ();
    this.#value_769 = value_770;
    return;
  }
  /** @returns {string} */
  get value() {
    return this.#value_769;
  }
};
export class Special extends type__762(RegexNode) {
};
export class SpecialSet extends type__762(CodePart, Special) {
};
export class CodeRange extends type__762(CodePart) {
  /** @type {number} */
  #min_772;
  /** @type {number} */
  #max_773;
  /**
   * @param {{
   *   min: number, max: number
   * }}
   * props
   * @returns {CodeRange}
   */
  static["new"](props) {
    return new CodeRange(props.min, props.max);
  }
  /**
   * @param {number} min_774
   * @param {number} max_775
   */
  constructor(min_774, max_775) {
    super ();
    this.#min_772 = min_774;
    this.#max_773 = max_775;
    return;
  }
  /** @returns {number} */
  get min() {
    return this.#min_772;
  }
  /** @returns {number} */
  get max() {
    return this.#max_773;
  }
};
export class CodeSet extends type__762(RegexNode) {
  /** @type {Array<CodePart>} */
  #items_778;
  /** @type {boolean} */
  #negated_779;
  /**
   * @param {{
   *   items: Array<CodePart>, negated ?: boolean | null
   * }}
   * props
   * @returns {CodeSet}
   */
  static["new"](props) {
    return new CodeSet(props.items, props.negated);
  }
  /**
   * @param {Array<CodePart>} items_780
   * @param {boolean | null} [negated_781]
   */
  constructor(items_780, negated_781) {
    super ();
    let negated_782;
    if (negated_781 == null) {
      negated_782 = false;
    } else {
      negated_782 = negated_781;
    }
    this.#items_778 = items_780;
    this.#negated_779 = negated_782;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    return this.#items_778;
  }
  /** @returns {boolean} */
  get negated() {
    return this.#negated_779;
  }
};
export class Or extends type__762(RegexNode) {
  /** @type {Array<RegexNode>} */
  #items_785;
  /** @param {Array<RegexNode>} items_786 */
  constructor(items_786) {
    super ();
    this.#items_785 = items_786;
    return;
  }
  /** @returns {Array<RegexNode>} */
  get items() {
    return this.#items_785;
  }
};
export class Repeat extends type__762(RegexNode) {
  /** @type {RegexNode} */
  #item_788;
  /** @type {number} */
  #min_789;
  /** @type {number | null} */
  #max_790;
  /** @type {boolean} */
  #reluctant_791;
  /**
   * @param {{
   *   item: RegexNode, min: number, max: number | null, reluctant ?: boolean | null
   * }}
   * props
   * @returns {Repeat}
   */
  static["new"](props) {
    return new Repeat(props.item, props.min, props.max, props.reluctant);
  }
  /**
   * @param {RegexNode} item_792
   * @param {number} min_793
   * @param {number | null} max_794
   * @param {boolean | null} [reluctant_795]
   */
  constructor(item_792, min_793, max_794, reluctant_795) {
    super ();
    let reluctant_796;
    if (reluctant_795 == null) {
      reluctant_796 = false;
    } else {
      reluctant_796 = reluctant_795;
    }
    this.#item_788 = item_792;
    this.#min_789 = min_793;
    this.#max_790 = max_794;
    this.#reluctant_791 = reluctant_796;
    return;
  }
  /** @returns {RegexNode} */
  get item() {
    return this.#item_788;
  }
  /** @returns {number} */
  get min() {
    return this.#min_789;
  }
  /** @returns {number | null} */
  get max() {
    return this.#max_790;
  }
  /** @returns {boolean} */
  get reluctant() {
    return this.#reluctant_791;
  }
};
export class Sequence extends type__762(RegexNode) {
  /** @type {Array<RegexNode>} */
  #items_801;
  /** @param {Array<RegexNode>} items_802 */
  constructor(items_802) {
    super ();
    this.#items_801 = items_802;
    return;
  }
  /** @returns {Array<RegexNode>} */
  get items() {
    return this.#items_801;
  }
};
export class Match extends type__762() {
  /** @type {Group} */
  #full_804;
  /** @type {Map<string, Group>} */
  #groups_805;
  /**
   * @param {{
   *   full: Group, groups: Map<string, Group>
   * }}
   * props
   * @returns {Match}
   */
  static["new"](props) {
    return new Match(props.full, props.groups);
  }
  /**
   * @param {Group} full_806
   * @param {Map<string, Group>} groups_807
   */
  constructor(full_806, groups_807) {
    super ();
    this.#full_804 = full_806;
    this.#groups_805 = groups_807;
    return;
  }
  /** @returns {Group} */
  get full() {
    return this.#full_804;
  }
  /** @returns {Map<string, Group>} */
  get groups() {
    return this.#groups_805;
  }
};
export class Group extends type__762() {
  /** @type {string} */
  #name_810;
  /** @type {string} */
  #value_811;
  /** @type {globalThis.number} */
  #begin_812;
  /** @type {globalThis.number} */
  #end_813;
  /**
   * @param {{
   *   name: string, value: string, begin: globalThis.number, end: globalThis.number
   * }}
   * props
   * @returns {Group}
   */
  static["new"](props) {
    return new Group(props.name, props.value, props.begin, props.end);
  }
  /**
   * @param {string} name_814
   * @param {string} value_815
   * @param {globalThis.number} begin_816
   * @param {globalThis.number} end_817
   */
  constructor(name_814, value_815, begin_816, end_817) {
    super ();
    this.#name_810 = name_814;
    this.#value_811 = value_815;
    this.#begin_812 = begin_816;
    this.#end_813 = end_817;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_810;
  }
  /** @returns {string} */
  get value() {
    return this.#value_811;
  }
  /** @returns {globalThis.number} */
  get begin() {
    return this.#begin_812;
  }
  /** @returns {globalThis.number} */
  get end() {
    return this.#end_813;
  }
};
class RegexRefs_822 extends type__762() {
  /** @type {CodePoints} */
  #codePoints_823;
  /** @type {Group} */
  #group_824;
  /** @type {Match} */
  #match_825;
  /** @type {Or} */
  #orObject_826;
  /**
   * @param {{
   *   codePoints ?: CodePoints | null, group ?: Group | null, match ?: Match | null, orObject ?: Or | null
   * }}
   * props
   * @returns {RegexRefs_822}
   */
  static["new"](props) {
    return new RegexRefs_822(props.codePoints, props.group, props.match, props.orObject);
  }
  /**
   * @param {CodePoints | null} [codePoints_827]
   * @param {Group | null} [group_828]
   * @param {Match | null} [match_829]
   * @param {Or | null} [orObject_830]
   */
  constructor(codePoints_827, group_828, match_829, orObject_830) {
    super ();
    let t_831;
    let t_832;
    let t_833;
    let t_834;
    let t_835;
    let codePoints_836;
    if (codePoints_827 == null) {
      t_831 = new CodePoints("");
      codePoints_836 = t_831;
    } else {
      codePoints_836 = codePoints_827;
    }
    let group_837;
    if (group_828 == null) {
      t_832 = new Group("", "", 0, 0);
      group_837 = t_832;
    } else {
      group_837 = group_828;
    }
    let match_838;
    if (match_829 == null) {
      t_833 = mapConstructor_839(Object.freeze([pairConstructor_840("", group_837)]));
      t_834 = new Match(group_837, t_833);
      match_838 = t_834;
    } else {
      match_838 = match_829;
    }
    let orObject_841;
    if (orObject_830 == null) {
      t_835 = new Or(Object.freeze([]));
      orObject_841 = t_835;
    } else {
      orObject_841 = orObject_830;
    }
    this.#codePoints_823 = codePoints_836;
    this.#group_824 = group_837;
    this.#match_825 = match_838;
    this.#orObject_826 = orObject_841;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    return this.#codePoints_823;
  }
  /** @returns {Group} */
  get group() {
    return this.#group_824;
  }
  /** @returns {Match} */
  get match() {
    return this.#match_825;
  }
  /** @returns {Or} */
  get orObject() {
    return this.#orObject_826;
  }
}
export class Regex extends type__762() {
  /** @type {RegexNode} */
  #data_846;
  /** @param {RegexNode} data_847 */
  constructor(data_847) {
    super ();
    const t_848 = data_847;
    this.#data_846 = t_848;
    const formatted_849 = RegexFormatter_850.regexFormat(data_847);
    let t_851 = regexCompileFormatted_852(data_847, formatted_849);
    this.#compiled_853 = t_851;
    return;
  }
  /**
   * @param {string} text_855
   * @returns {boolean}
   */
  found(text_855) {
    return regexCompiledFound_856(this, this.#compiled_853, text_855);
  }
  /**
   * @param {string} text_858
   * @param {globalThis.number | null} [begin_859]
   * @returns {Match}
   */
  find(text_858, begin_859) {
    let begin_860;
    if (begin_859 == null) {
      begin_860 = 0;
    } else {
      begin_860 = begin_859;
    }
    return regexCompiledFind_861(this, this.#compiled_853, text_858, begin_860, regexRefs_862);
  }
  /**
   * @param {string} text_864
   * @param {(arg0: Match) => string} format_865
   * @returns {string}
   */
  replace(text_864, format_865) {
    return regexCompiledReplace_866(this, this.#compiled_853, text_864, format_865, regexRefs_862);
  }
  /**
   * @param {string} text_868
   * @returns {Array<string>}
   */
  split(text_868) {
    return regexCompiledSplit_869(this, this.#compiled_853, text_868, regexRefs_862);
  }
  /** @type {unknown} */
  #compiled_853;
  /** @returns {RegexNode} */
  get data() {
    return this.#data_846;
  }
};
class RegexFormatter_850 extends type__762() {
  /** @type {globalThis.Array<string>} */
  #out_871;
  /**
   * @param {RegexNode} data_873
   * @returns {string}
   */
  static regexFormat(data_873) {
    return new RegexFormatter_850().format(data_873);
  }
  /**
   * @param {RegexNode} regex_875
   * @returns {string}
   */
  format(regex_875) {
    this.#pushRegex_876(regex_875);
    return this.#out_871[0];
  }
  /** @param {RegexNode} regex_878 */
  #pushRegex_876(regex_878) {
    let t_879;
    let t_880;
    let t_881;
    let t_882;
    let t_883;
    let t_884;
    let t_885;
    if (regex_878 instanceof Capture) {
      t_879 = requireInstanceOf__886(regex_878, Capture);
      this.#pushCapture_887(t_879);
    } else if (regex_878 instanceof CodePoints) {
      t_880 = requireInstanceOf__886(regex_878, CodePoints);
      this.#pushCodePoints_888(t_880, false);
    } else if (regex_878 instanceof CodeRange) {
      t_881 = requireInstanceOf__886(regex_878, CodeRange);
      this.#pushCodeRange_889(t_881);
    } else if (regex_878 instanceof CodeSet) {
      t_882 = requireInstanceOf__886(regex_878, CodeSet);
      this.#pushCodeSet_890(t_882);
    } else if (regex_878 instanceof Or) {
      t_883 = requireInstanceOf__886(regex_878, Or);
      this.#pushOr_891(t_883);
    } else if (regex_878 instanceof Repeat) {
      t_884 = requireInstanceOf__886(regex_878, Repeat);
      this.#pushRepeat_892(t_884);
    } else if (regex_878 instanceof Sequence) {
      t_885 = requireInstanceOf__886(regex_878, Sequence);
      this.#pushSequence_893(t_885);
    } else if (Object.is(regex_878, Begin)) {
      this.#out_871[0] += "^";
    } else if (Object.is(regex_878, Dot)) {
      this.#out_871[0] += ".";
    } else if (Object.is(regex_878, End)) {
      this.#out_871[0] += "$";
    } else if (Object.is(regex_878, WordBoundary)) {
      this.#out_871[0] += "\\b";
    } else if (Object.is(regex_878, Digit)) {
      this.#out_871[0] += "\\d";
    } else if (Object.is(regex_878, Space)) {
      this.#out_871[0] += "\\s";
    } else if (Object.is(regex_878, Word)) {
      this.#out_871[0] += "\\w";
    }
    return;
  }
  /** @param {Capture} capture_895 */
  #pushCapture_887(capture_895) {
    this.#out_871[0] += "(";
    let t_896 = this.#out_871;
    let t_897 = capture_895.name;
    this.#pushCaptureName_898(t_896, t_897);
    let t_899 = capture_895.item;
    this.#pushRegex_876(t_899);
    this.#out_871[0] += ")";
    return;
  }
  /**
   * @param {globalThis.Array<string>} out_901
   * @param {string} name_902
   */
  #pushCaptureName_898(out_901, name_902) {
    out_901[0] += "?<" + name_902 + ">";
    return;
  }
  /**
   * @param {number} code_905
   * @param {boolean} insideCodeSet_906
   */
  #pushCode_904(code_905, insideCodeSet_906) {
    let return_907;
    let t_908;
    let t_909;
    let t_910;
    let t_911;
    let t_912;
    let t_913;
    let t_914;
    let t_915;
    let t_916;
    fn_917: {
      try {
        let specialEscape_918;
        if (code_905 === Codes_919.carriageReturn) {
          specialEscape_918 = "r";
        } else if (code_905 === Codes_919.newline) {
          specialEscape_918 = "n";
        } else if (code_905 === Codes_919.tab) {
          specialEscape_918 = "t";
        } else {
          specialEscape_918 = "";
        }
        if (specialEscape_918 !== "") {
          this.#out_871[0] += "\\";
          this.#out_871[0] += specialEscape_918;
          return_907 = void 0;
          break fn_917;
        }
        if (code_905 <= 127) {
          const escapeNeed_920 = listedGet_921(escapeNeeds_922, code_905);
          if (Object.is(escapeNeed_920, 2)) {
            t_909 = true;
          } else {
            if (insideCodeSet_906) {
              t_908 = code_905 === Codes_919.dash;
            } else {
              t_908 = false;
            }
            t_909 = t_908;
          }
          if (t_909) {
            this.#out_871[0] += "\\";
            t_910 = stringFromCodePoint_923(code_905);
            this.#out_871[0] += t_910;
            return_907 = void 0;
            break fn_917;
          } else if (Object.is(escapeNeed_920, 0)) {
            t_911 = stringFromCodePoint_923(code_905);
            this.#out_871[0] += t_911;
            return_907 = void 0;
            break fn_917;
          }
        }
        if (code_905 >= Codes_919.supplementalMin) {
          t_915 = true;
        } else {
          if (code_905 > Codes_919.highControlMax) {
            if (Codes_919.surrogateMin <= code_905) {
              t_912 = code_905 <= Codes_919.surrogateMax;
            } else {
              t_912 = false;
            }
            if (t_912) {
              t_913 = true;
            } else {
              t_913 = code_905 === Codes_919.uint16Max;
            }
            t_914 = ! t_913;
          } else {
            t_914 = false;
          }
          t_915 = t_914;
        }
        if (t_915) {
          t_916 = stringFromCodePoint_923(code_905);
          this.#out_871[0] += t_916;
        } else {
          regexFormatterPushCodeTo_924(this, this.#out_871, code_905, insideCodeSet_906);
        }
      } catch {
        throw Error();
      }
      return_907 = void 0;
    }
    return return_907;
  }
  /**
   * @param {CodePoints} codePoints_926
   * @param {boolean} insideCodeSet_927
   */
  #pushCodePoints_888(codePoints_926, insideCodeSet_927) {
    let t_928;
    let t_929;
    const value_930 = codePoints_926.value;
    let index_931 = 0;
    while (true) {
      if (!(value_930.length > index_931)) {
        break;
      }
      t_928 = stringGet_932(value_930, index_931);
      this.#pushCode_904(t_928, insideCodeSet_927);
      t_929 = stringNext_933(value_930, index_931);
      index_931 = t_929;
    }
    return;
  }
  /** @param {CodeRange} codeRange_935 */
  #pushCodeRange_889(codeRange_935) {
    this.#out_871[0] += "[";
    this.#pushCodeRangeUnwrapped_936(codeRange_935);
    this.#out_871[0] += "]";
    return;
  }
  /** @param {CodeRange} codeRange_938 */
  #pushCodeRangeUnwrapped_936(codeRange_938) {
    let t_939 = codeRange_938.min;
    this.#pushCode_904(t_939, true);
    this.#out_871[0] += "-";
    let t_940 = codeRange_938.max;
    this.#pushCode_904(t_940, true);
    return;
  }
  /** @param {CodeSet} codeSet_942 */
  #pushCodeSet_890(codeSet_942) {
    let t_943;
    let t_944;
    let t_945;
    const adjusted_946 = regexFormatterAdjustCodeSet_947(this, codeSet_942, regexRefs_862);
    if (adjusted_946 instanceof CodeSet) {
      t_945 = requireInstanceOf__886(adjusted_946, CodeSet);
      if (! t_945.items.length) {
        if (t_945.negated) {
          this.#out_871[0] += "[\\s\\S]";
        } else {
          this.#out_871[0] += "(?:$.)";
        }
      } else {
        this.#out_871[0] += "[";
        if (t_945.negated) {
          this.#out_871[0] += "^";
        }
        let i_948 = 0;
        while (true) {
          t_943 = t_945.items.length;
          if (!(i_948 < t_943)) {
            break;
          }
          t_944 = listedGet_921(t_945.items, i_948);
          this.#pushCodeSetItem_949(t_944);
          i_948 = i_948 + 1 | 0;
        }
        this.#out_871[0] += "]";
      }
    } else {
      this.#pushRegex_876(adjusted_946);
    }
    return;
  }
  /** @param {CodePart} codePart_951 */
  #pushCodeSetItem_949(codePart_951) {
    let t_952;
    let t_953;
    let t_954;
    if (codePart_951 instanceof CodePoints) {
      t_952 = requireInstanceOf__886(codePart_951, CodePoints);
      this.#pushCodePoints_888(t_952, true);
    } else if (codePart_951 instanceof CodeRange) {
      t_953 = requireInstanceOf__886(codePart_951, CodeRange);
      this.#pushCodeRangeUnwrapped_936(t_953);
    } else if (codePart_951 instanceof SpecialSet) {
      t_954 = requireInstanceOf__886(codePart_951, SpecialSet);
      this.#pushRegex_876(t_954);
    }
    return;
  }
  /** @param {Or} or_956 */
  #pushOr_891(or_956) {
    let t_957;
    let t_958;
    let t_959;
    if (! ! or_956.items.length) {
      this.#out_871[0] += "(?:";
      t_957 = listedGet_921(or_956.items, 0);
      this.#pushRegex_876(t_957);
      let i_960 = 1;
      while (true) {
        t_958 = or_956.items.length;
        if (!(i_960 < t_958)) {
          break;
        }
        this.#out_871[0] += "|";
        t_959 = listedGet_921(or_956.items, i_960);
        this.#pushRegex_876(t_959);
        i_960 = i_960 + 1 | 0;
      }
      this.#out_871[0] += ")";
    }
    return;
  }
  /** @param {Repeat} repeat_962 */
  #pushRepeat_892(repeat_962) {
    let t_963;
    let t_964;
    let t_965;
    let t_966;
    let t_967;
    this.#out_871[0] += "(?:";
    let t_968 = repeat_962.item;
    this.#pushRegex_876(t_968);
    this.#out_871[0] += ")";
    const min_969 = repeat_962.min;
    const max_970 = repeat_962.max;
    if (min_969 === 0) {
      t_965 = max_970 === 1;
    } else {
      t_965 = false;
    }
    if (t_965) {
      this.#out_871[0] += "?";
    } else {
      if (min_969 === 0) {
        t_966 = max_970 == null;
      } else {
        t_966 = false;
      }
      if (t_966) {
        this.#out_871[0] += "*";
      } else {
        if (min_969 === 1) {
          t_967 = max_970 == null;
        } else {
          t_967 = false;
        }
        if (t_967) {
          this.#out_871[0] += "+";
        } else {
          t_963 = min_969.toString();
          this.#out_871[0] += "{" + t_963;
          if (min_969 !== max_970) {
            this.#out_871[0] += ",";
            if (!(max_970 == null)) {
              t_964 = max_970.toString();
              this.#out_871[0] += t_964;
            }
          }
          this.#out_871[0] += "}";
        }
      }
    }
    if (repeat_962.reluctant) {
      this.#out_871[0] += "?";
    }
    return;
  }
  /** @param {Sequence} sequence_972 */
  #pushSequence_893(sequence_972) {
    let t_973;
    let t_974;
    let i_975 = 0;
    while (true) {
      t_973 = sequence_972.items.length;
      if (!(i_975 < t_973)) {
        break;
      }
      t_974 = listedGet_921(sequence_972.items, i_975);
      this.#pushRegex_876(t_974);
      i_975 = i_975 + 1 | 0;
    }
    return;
  }
  /**
   * @param {CodePart} codePart_977
   * @returns {number | null}
   */
  maxCode(codePart_977) {
    let return_978;
    let t_979;
    let t_980;
    if (codePart_977 instanceof CodePoints) {
      t_980 = requireInstanceOf__886(codePart_977, CodePoints);
      const value_981 = t_980.value;
      if (! value_981) {
        return_978 = null;
      } else {
        let max_982 = 0;
        let index_983 = 0;
        while (true) {
          if (!(value_981.length > index_983)) {
            break;
          }
          const next_984 = stringGet_932(value_981, index_983);
          if (next_984 > max_982) {
            max_982 = next_984;
          }
          t_979 = stringNext_933(value_981, index_983);
          index_983 = t_979;
        }
        return_978 = max_982;
      }
    } else if (codePart_977 instanceof CodeRange) {
      return_978 = requireInstanceOf__886(codePart_977, CodeRange).max;
    } else if (Object.is(codePart_977, Digit)) {
      return_978 = Codes_919.digit9;
    } else if (Object.is(codePart_977, Space)) {
      return_978 = Codes_919.space;
    } else if (Object.is(codePart_977, Word)) {
      return_978 = Codes_919.lowerZ;
    } else {
      return_978 = null;
    }
    return return_978;
  }
  constructor() {
    super ();
    let t_985 = [""];
    this.#out_871 = t_985;
    return;
  }
}
class Codes_919 extends type__762() {
  /** @type {number} */
  static #ampersand_986 = 38;
  /** @returns {number} */
  static get ampersand() {
    return this.#ampersand_986;
  }
  /** @type {number} */
  static #backslash_987 = 92;
  /** @returns {number} */
  static get backslash() {
    return this.#backslash_987;
  }
  /** @type {number} */
  static #caret_988 = 94;
  /** @returns {number} */
  static get caret() {
    return this.#caret_988;
  }
  /** @type {number} */
  static #carriageReturn_989 = 13;
  /** @returns {number} */
  static get carriageReturn() {
    return this.#carriageReturn_989;
  }
  /** @type {number} */
  static #curlyLeft_990 = 123;
  /** @returns {number} */
  static get curlyLeft() {
    return this.#curlyLeft_990;
  }
  /** @type {number} */
  static #curlyRight_991 = 125;
  /** @returns {number} */
  static get curlyRight() {
    return this.#curlyRight_991;
  }
  /** @type {number} */
  static #dash_992 = 45;
  /** @returns {number} */
  static get dash() {
    return this.#dash_992;
  }
  /** @type {number} */
  static #dot_993 = 46;
  /** @returns {number} */
  static get dot() {
    return this.#dot_993;
  }
  /** @type {number} */
  static #highControlMin_994 = 127;
  /** @returns {number} */
  static get highControlMin() {
    return this.#highControlMin_994;
  }
  /** @type {number} */
  static #highControlMax_995 = 159;
  /** @returns {number} */
  static get highControlMax() {
    return this.#highControlMax_995;
  }
  /** @type {number} */
  static #digit0_996 = 48;
  /** @returns {number} */
  static get digit0() {
    return this.#digit0_996;
  }
  /** @type {number} */
  static #digit9_997 = 57;
  /** @returns {number} */
  static get digit9() {
    return this.#digit9_997;
  }
  /** @type {number} */
  static #lowerA_998 = 97;
  /** @returns {number} */
  static get lowerA() {
    return this.#lowerA_998;
  }
  /** @type {number} */
  static #lowerZ_999 = 122;
  /** @returns {number} */
  static get lowerZ() {
    return this.#lowerZ_999;
  }
  /** @type {number} */
  static #newline_1000 = 10;
  /** @returns {number} */
  static get newline() {
    return this.#newline_1000;
  }
  /** @type {number} */
  static #peso_1001 = 36;
  /** @returns {number} */
  static get peso() {
    return this.#peso_1001;
  }
  /** @type {number} */
  static #pipe_1002 = 124;
  /** @returns {number} */
  static get pipe() {
    return this.#pipe_1002;
  }
  /** @type {number} */
  static #plus_1003 = 43;
  /** @returns {number} */
  static get plus() {
    return this.#plus_1003;
  }
  /** @type {number} */
  static #question_1004 = 63;
  /** @returns {number} */
  static get question() {
    return this.#question_1004;
  }
  /** @type {number} */
  static #roundLeft_1005 = 40;
  /** @returns {number} */
  static get roundLeft() {
    return this.#roundLeft_1005;
  }
  /** @type {number} */
  static #roundRight_1006 = 41;
  /** @returns {number} */
  static get roundRight() {
    return this.#roundRight_1006;
  }
  /** @type {number} */
  static #slash_1007 = 47;
  /** @returns {number} */
  static get slash() {
    return this.#slash_1007;
  }
  /** @type {number} */
  static #squareLeft_1008 = 91;
  /** @returns {number} */
  static get squareLeft() {
    return this.#squareLeft_1008;
  }
  /** @type {number} */
  static #squareRight_1009 = 93;
  /** @returns {number} */
  static get squareRight() {
    return this.#squareRight_1009;
  }
  /** @type {number} */
  static #star_1010 = 42;
  /** @returns {number} */
  static get star() {
    return this.#star_1010;
  }
  /** @type {number} */
  static #tab_1011 = 9;
  /** @returns {number} */
  static get tab() {
    return this.#tab_1011;
  }
  /** @type {number} */
  static #tilde_1012 = 42;
  /** @returns {number} */
  static get tilde() {
    return this.#tilde_1012;
  }
  /** @type {number} */
  static #upperA_1013 = 65;
  /** @returns {number} */
  static get upperA() {
    return this.#upperA_1013;
  }
  /** @type {number} */
  static #upperZ_1014 = 90;
  /** @returns {number} */
  static get upperZ() {
    return this.#upperZ_1014;
  }
  /** @type {number} */
  static #space_1015 = 32;
  /** @returns {number} */
  static get space() {
    return this.#space_1015;
  }
  /** @type {number} */
  static #surrogateMin_1016 = 55296;
  /** @returns {number} */
  static get surrogateMin() {
    return this.#surrogateMin_1016;
  }
  /** @type {number} */
  static #surrogateMax_1017 = 57343;
  /** @returns {number} */
  static get surrogateMax() {
    return this.#surrogateMax_1017;
  }
  /** @type {number} */
  static #supplementalMin_1018 = 65536;
  /** @returns {number} */
  static get supplementalMin() {
    return this.#supplementalMin_1018;
  }
  /** @type {number} */
  static #uint16Max_1019 = 65535;
  /** @returns {number} */
  static get uint16Max() {
    return this.#uint16Max_1019;
  }
  /** @type {number} */
  static #underscore_1020 = 95;
  /** @returns {number} */
  static get underscore() {
    return this.#underscore_1020;
  }
  constructor() {
    super ();
    return;
  }
}
class Begin_1021 extends type__762(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1022 = new Begin_1021();
/** @type {Special} */
export const Begin = return_1022;
class Dot_1023 extends type__762(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1024 = new Dot_1023();
/** @type {Special} */
export const Dot = return_1024;
class End_1025 extends type__762(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1026 = new End_1025();
/** @type {Special} */
export const End = return_1026;
class WordBoundary_1027 extends type__762(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1028 = new WordBoundary_1027();
/** @type {Special} */
export const WordBoundary = return_1028;
class Digit_1029 extends type__762(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1030 = new Digit_1029();
/** @type {SpecialSet} */
export const Digit = return_1030;
class Space_1031 extends type__762(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1032 = new Space_1031();
/** @type {SpecialSet} */
export const Space = return_1032;
class Word_1033 extends type__762(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1034 = new Word_1033();
/** @type {SpecialSet} */
export const Word = return_1034;
/** @returns {Array<number>} */
function buildEscapeNeeds_1035() {
  let t_1036;
  let t_1037;
  let t_1038;
  let t_1039;
  let t_1040;
  let t_1041;
  let t_1042;
  let t_1043;
  let t_1044;
  let t_1045;
  let t_1046;
  let t_1047;
  let t_1048;
  let t_1049;
  let t_1050;
  let t_1051;
  let t_1052;
  let t_1053;
  let t_1054;
  let t_1055;
  let t_1056;
  let t_1057;
  let t_1058;
  let t_1059;
  let t_1060;
  const escapeNeeds_1061 = [];
  let code_1062 = 0;
  while (code_1062 <= 127) {
    if (code_1062 === Codes_919.dash) {
      t_1043 = true;
    } else {
      if (code_1062 === Codes_919.space) {
        t_1042 = true;
      } else {
        if (code_1062 === Codes_919.underscore) {
          t_1041 = true;
        } else {
          if (Codes_919.digit0 <= code_1062) {
            t_1036 = code_1062 <= Codes_919.digit9;
          } else {
            t_1036 = false;
          }
          if (t_1036) {
            t_1040 = true;
          } else {
            if (Codes_919.upperA <= code_1062) {
              t_1037 = code_1062 <= Codes_919.upperZ;
            } else {
              t_1037 = false;
            }
            if (t_1037) {
              t_1039 = true;
            } else {
              if (Codes_919.lowerA <= code_1062) {
                t_1038 = code_1062 <= Codes_919.lowerZ;
              } else {
                t_1038 = false;
              }
              t_1039 = t_1038;
            }
            t_1040 = t_1039;
          }
          t_1041 = t_1040;
        }
        t_1042 = t_1041;
      }
      t_1043 = t_1042;
    }
    if (t_1043) {
      t_1060 = 0;
    } else {
      if (code_1062 === Codes_919.ampersand) {
        t_1059 = true;
      } else {
        if (code_1062 === Codes_919.backslash) {
          t_1058 = true;
        } else {
          if (code_1062 === Codes_919.caret) {
            t_1057 = true;
          } else {
            if (code_1062 === Codes_919.curlyLeft) {
              t_1056 = true;
            } else {
              if (code_1062 === Codes_919.curlyRight) {
                t_1055 = true;
              } else {
                if (code_1062 === Codes_919.dot) {
                  t_1054 = true;
                } else {
                  if (code_1062 === Codes_919.peso) {
                    t_1053 = true;
                  } else {
                    if (code_1062 === Codes_919.pipe) {
                      t_1052 = true;
                    } else {
                      if (code_1062 === Codes_919.plus) {
                        t_1051 = true;
                      } else {
                        if (code_1062 === Codes_919.question) {
                          t_1050 = true;
                        } else {
                          if (code_1062 === Codes_919.roundLeft) {
                            t_1049 = true;
                          } else {
                            if (code_1062 === Codes_919.roundRight) {
                              t_1048 = true;
                            } else {
                              if (code_1062 === Codes_919.slash) {
                                t_1047 = true;
                              } else {
                                if (code_1062 === Codes_919.squareLeft) {
                                  t_1046 = true;
                                } else {
                                  if (code_1062 === Codes_919.squareRight) {
                                    t_1045 = true;
                                  } else {
                                    if (code_1062 === Codes_919.star) {
                                      t_1044 = true;
                                    } else {
                                      t_1044 = code_1062 === Codes_919.tilde;
                                    }
                                    t_1045 = t_1044;
                                  }
                                  t_1046 = t_1045;
                                }
                                t_1047 = t_1046;
                              }
                              t_1048 = t_1047;
                            }
                            t_1049 = t_1048;
                          }
                          t_1050 = t_1049;
                        }
                        t_1051 = t_1050;
                      }
                      t_1052 = t_1051;
                    }
                    t_1053 = t_1052;
                  }
                  t_1054 = t_1053;
                }
                t_1055 = t_1054;
              }
              t_1056 = t_1055;
            }
            t_1057 = t_1056;
          }
          t_1058 = t_1057;
        }
        t_1059 = t_1058;
      }
      if (t_1059) {
        t_1060 = 2;
      } else {
        t_1060 = 1;
      }
    }
    listBuilderAdd_1063(escapeNeeds_1061, t_1060);
    code_1062 = code_1062 + 1 | 0;
  }
  return listBuilderToList_1064(escapeNeeds_1061);
}
/** @type {Array<number>} */
const escapeNeeds_922 = buildEscapeNeeds_1035();
/** @type {RegexRefs_822} */
const regexRefs_862 = new RegexRefs_822();
/**
 * @param {RegexNode} item_1065
 * @returns {RegexNode}
 */
export function entire(item_1065) {
  return new Sequence(Object.freeze([Begin, item_1065, End]));
};
/**
 * @param {RegexNode} item_1066
 * @param {boolean | null} [reluctant_1067]
 * @returns {Repeat}
 */
export function oneOrMore(item_1066, reluctant_1067) {
  let reluctant_1068;
  if (reluctant_1067 == null) {
    reluctant_1068 = false;
  } else {
    reluctant_1068 = reluctant_1067;
  }
  return new Repeat(item_1066, 1, null, reluctant_1068);
};
/**
 * @param {RegexNode} item_1069
 * @param {boolean | null} [reluctant_1070]
 * @returns {Repeat}
 */
export function optional(item_1069, reluctant_1070) {
  let reluctant_1071;
  if (reluctant_1070 == null) {
    reluctant_1071 = false;
  } else {
    reluctant_1071 = reluctant_1070;
  }
  return new Repeat(item_1069, 0, 1, reluctant_1071);
};
