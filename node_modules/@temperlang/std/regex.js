import {
  type as type__753, requireInstanceOf as requireInstanceOf__877, pairConstructor as pairConstructor_831, mapConstructor as mapConstructor_830, regexCompileFormatted as regexCompileFormatted_843, regexCompiledFound as regexCompiledFound_847, regexCompiledFind as regexCompiledFind_852, regexCompiledReplace as regexCompiledReplace_857, regexCompiledSplit as regexCompiledSplit_860, listedGet as listedGet_912, stringFromCodePoint as stringFromCodePoint_914, regexFormatterPushCodeTo as regexFormatterPushCodeTo_915, stringGet as stringGet_923, stringNext as stringNext_924, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_938, listBuilderAdd as listBuilderAdd_1054, listBuilderToList as listBuilderToList_1055
} from "@temperlang/core";
export class RegexNode extends type__753() {
  /** @returns {Regex} */
  compiled() {
    return new Regex(this);
  }
  /**
   * @param {string} text_745
   * @returns {boolean}
   */
  found(text_745) {
    return this.compiled().found(text_745);
  }
  /**
   * @param {string} text_747
   * @returns {Match}
   */
  find(text_747) {
    return this.compiled().find(text_747);
  }
  /**
   * @param {string} text_749
   * @param {(arg0: Match) => string} format_750
   * @returns {string}
   */
  replace(text_749, format_750) {
    return this.compiled().replace(text_749, format_750);
  }
  /**
   * @param {string} text_752
   * @returns {Array<string>}
   */
  split(text_752) {
    return this.compiled().split(text_752);
  }
};
export class Capture extends type__753(RegexNode) {
  /** @type {string} */
  #name_754;
  /** @type {RegexNode} */
  #item_755;
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
   * @param {string} name_756
   * @param {RegexNode} item_757
   */
  constructor(name_756, item_757) {
    super ();
    this.#name_754 = name_756;
    this.#item_755 = item_757;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_754;
  }
  /** @returns {RegexNode} */
  get item() {
    return this.#item_755;
  }
};
export class CodePart extends type__753(RegexNode) {
};
export class CodePoints extends type__753(CodePart) {
  /** @type {string} */
  #value_760;
  /** @param {string} value_761 */
  constructor(value_761) {
    super ();
    this.#value_760 = value_761;
    return;
  }
  /** @returns {string} */
  get value() {
    return this.#value_760;
  }
};
export class Special extends type__753(RegexNode) {
};
export class SpecialSet extends type__753(CodePart, Special) {
};
export class CodeRange extends type__753(CodePart) {
  /** @type {number} */
  #min_763;
  /** @type {number} */
  #max_764;
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
   * @param {number} min_765
   * @param {number} max_766
   */
  constructor(min_765, max_766) {
    super ();
    this.#min_763 = min_765;
    this.#max_764 = max_766;
    return;
  }
  /** @returns {number} */
  get min() {
    return this.#min_763;
  }
  /** @returns {number} */
  get max() {
    return this.#max_764;
  }
};
export class CodeSet extends type__753(RegexNode) {
  /** @type {Array<CodePart>} */
  #items_769;
  /** @type {boolean} */
  #negated_770;
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
   * @param {Array<CodePart>} items_771
   * @param {boolean | null} [negated_772]
   */
  constructor(items_771, negated_772) {
    super ();
    let negated_773;
    if (negated_772 == null) {
      negated_773 = false;
    } else {
      negated_773 = negated_772;
    }
    this.#items_769 = items_771;
    this.#negated_770 = negated_773;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    return this.#items_769;
  }
  /** @returns {boolean} */
  get negated() {
    return this.#negated_770;
  }
};
export class Or extends type__753(RegexNode) {
  /** @type {Array<RegexNode>} */
  #items_776;
  /** @param {Array<RegexNode>} items_777 */
  constructor(items_777) {
    super ();
    this.#items_776 = items_777;
    return;
  }
  /** @returns {Array<RegexNode>} */
  get items() {
    return this.#items_776;
  }
};
export class Repeat extends type__753(RegexNode) {
  /** @type {RegexNode} */
  #item_779;
  /** @type {number} */
  #min_780;
  /** @type {number | null} */
  #max_781;
  /** @type {boolean} */
  #reluctant_782;
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
   * @param {RegexNode} item_783
   * @param {number} min_784
   * @param {number | null} max_785
   * @param {boolean | null} [reluctant_786]
   */
  constructor(item_783, min_784, max_785, reluctant_786) {
    super ();
    let reluctant_787;
    if (reluctant_786 == null) {
      reluctant_787 = false;
    } else {
      reluctant_787 = reluctant_786;
    }
    this.#item_779 = item_783;
    this.#min_780 = min_784;
    this.#max_781 = max_785;
    this.#reluctant_782 = reluctant_787;
    return;
  }
  /** @returns {RegexNode} */
  get item() {
    return this.#item_779;
  }
  /** @returns {number} */
  get min() {
    return this.#min_780;
  }
  /** @returns {number | null} */
  get max() {
    return this.#max_781;
  }
  /** @returns {boolean} */
  get reluctant() {
    return this.#reluctant_782;
  }
};
export class Sequence extends type__753(RegexNode) {
  /** @type {Array<RegexNode>} */
  #items_792;
  /** @param {Array<RegexNode>} items_793 */
  constructor(items_793) {
    super ();
    this.#items_792 = items_793;
    return;
  }
  /** @returns {Array<RegexNode>} */
  get items() {
    return this.#items_792;
  }
};
export class Match extends type__753() {
  /** @type {Group} */
  #full_795;
  /** @type {Map<string, Group>} */
  #groups_796;
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
   * @param {Group} full_797
   * @param {Map<string, Group>} groups_798
   */
  constructor(full_797, groups_798) {
    super ();
    this.#full_795 = full_797;
    this.#groups_796 = groups_798;
    return;
  }
  /** @returns {Group} */
  get full() {
    return this.#full_795;
  }
  /** @returns {Map<string, Group>} */
  get groups() {
    return this.#groups_796;
  }
};
export class Group extends type__753() {
  /** @type {string} */
  #name_801;
  /** @type {string} */
  #value_802;
  /** @type {globalThis.number} */
  #begin_803;
  /** @type {globalThis.number} */
  #end_804;
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
   * @param {string} name_805
   * @param {string} value_806
   * @param {globalThis.number} begin_807
   * @param {globalThis.number} end_808
   */
  constructor(name_805, value_806, begin_807, end_808) {
    super ();
    this.#name_801 = name_805;
    this.#value_802 = value_806;
    this.#begin_803 = begin_807;
    this.#end_804 = end_808;
    return;
  }
  /** @returns {string} */
  get name() {
    return this.#name_801;
  }
  /** @returns {string} */
  get value() {
    return this.#value_802;
  }
  /** @returns {globalThis.number} */
  get begin() {
    return this.#begin_803;
  }
  /** @returns {globalThis.number} */
  get end() {
    return this.#end_804;
  }
};
class RegexRefs_813 extends type__753() {
  /** @type {CodePoints} */
  #codePoints_814;
  /** @type {Group} */
  #group_815;
  /** @type {Match} */
  #match_816;
  /** @type {Or} */
  #orObject_817;
  /**
   * @param {{
   *   codePoints ?: CodePoints | null, group ?: Group | null, match ?: Match | null, orObject ?: Or | null
   * }}
   * props
   * @returns {RegexRefs_813}
   */
  static["new"](props) {
    return new RegexRefs_813(props.codePoints, props.group, props.match, props.orObject);
  }
  /**
   * @param {CodePoints | null} [codePoints_818]
   * @param {Group | null} [group_819]
   * @param {Match | null} [match_820]
   * @param {Or | null} [orObject_821]
   */
  constructor(codePoints_818, group_819, match_820, orObject_821) {
    super ();
    let t_822;
    let t_823;
    let t_824;
    let t_825;
    let t_826;
    let codePoints_827;
    if (codePoints_818 == null) {
      t_822 = new CodePoints("");
      codePoints_827 = t_822;
    } else {
      codePoints_827 = codePoints_818;
    }
    let group_828;
    if (group_819 == null) {
      t_823 = new Group("", "", 0, 0);
      group_828 = t_823;
    } else {
      group_828 = group_819;
    }
    let match_829;
    if (match_820 == null) {
      t_824 = mapConstructor_830(Object.freeze([pairConstructor_831("", group_828)]));
      t_825 = new Match(group_828, t_824);
      match_829 = t_825;
    } else {
      match_829 = match_820;
    }
    let orObject_832;
    if (orObject_821 == null) {
      t_826 = new Or(Object.freeze([]));
      orObject_832 = t_826;
    } else {
      orObject_832 = orObject_821;
    }
    this.#codePoints_814 = codePoints_827;
    this.#group_815 = group_828;
    this.#match_816 = match_829;
    this.#orObject_817 = orObject_832;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    return this.#codePoints_814;
  }
  /** @returns {Group} */
  get group() {
    return this.#group_815;
  }
  /** @returns {Match} */
  get match() {
    return this.#match_816;
  }
  /** @returns {Or} */
  get orObject() {
    return this.#orObject_817;
  }
}
export class Regex extends type__753() {
  /** @type {RegexNode} */
  #data_837;
  /** @param {RegexNode} data_838 */
  constructor(data_838) {
    super ();
    const t_839 = data_838;
    this.#data_837 = t_839;
    const formatted_840 = RegexFormatter_841.regexFormat(data_838);
    let t_842 = regexCompileFormatted_843(data_838, formatted_840);
    this.#compiled_844 = t_842;
    return;
  }
  /**
   * @param {string} text_846
   * @returns {boolean}
   */
  found(text_846) {
    return regexCompiledFound_847(this, this.#compiled_844, text_846);
  }
  /**
   * @param {string} text_849
   * @param {globalThis.number | null} [begin_850]
   * @returns {Match}
   */
  find(text_849, begin_850) {
    let begin_851;
    if (begin_850 == null) {
      begin_851 = 0;
    } else {
      begin_851 = begin_850;
    }
    return regexCompiledFind_852(this, this.#compiled_844, text_849, begin_851, regexRefs_853);
  }
  /**
   * @param {string} text_855
   * @param {(arg0: Match) => string} format_856
   * @returns {string}
   */
  replace(text_855, format_856) {
    return regexCompiledReplace_857(this, this.#compiled_844, text_855, format_856, regexRefs_853);
  }
  /**
   * @param {string} text_859
   * @returns {Array<string>}
   */
  split(text_859) {
    return regexCompiledSplit_860(this, this.#compiled_844, text_859, regexRefs_853);
  }
  /** @type {unknown} */
  #compiled_844;
  /** @returns {RegexNode} */
  get data() {
    return this.#data_837;
  }
};
class RegexFormatter_841 extends type__753() {
  /** @type {globalThis.Array<string>} */
  #out_862;
  /**
   * @param {RegexNode} data_864
   * @returns {string}
   */
  static regexFormat(data_864) {
    return new RegexFormatter_841().format(data_864);
  }
  /**
   * @param {RegexNode} regex_866
   * @returns {string}
   */
  format(regex_866) {
    this.#pushRegex_867(regex_866);
    return this.#out_862[0];
  }
  /** @param {RegexNode} regex_869 */
  #pushRegex_867(regex_869) {
    let t_870;
    let t_871;
    let t_872;
    let t_873;
    let t_874;
    let t_875;
    let t_876;
    if (regex_869 instanceof Capture) {
      t_870 = requireInstanceOf__877(regex_869, Capture);
      this.#pushCapture_878(t_870);
    } else if (regex_869 instanceof CodePoints) {
      t_871 = requireInstanceOf__877(regex_869, CodePoints);
      this.#pushCodePoints_879(t_871, false);
    } else if (regex_869 instanceof CodeRange) {
      t_872 = requireInstanceOf__877(regex_869, CodeRange);
      this.#pushCodeRange_880(t_872);
    } else if (regex_869 instanceof CodeSet) {
      t_873 = requireInstanceOf__877(regex_869, CodeSet);
      this.#pushCodeSet_881(t_873);
    } else if (regex_869 instanceof Or) {
      t_874 = requireInstanceOf__877(regex_869, Or);
      this.#pushOr_882(t_874);
    } else if (regex_869 instanceof Repeat) {
      t_875 = requireInstanceOf__877(regex_869, Repeat);
      this.#pushRepeat_883(t_875);
    } else if (regex_869 instanceof Sequence) {
      t_876 = requireInstanceOf__877(regex_869, Sequence);
      this.#pushSequence_884(t_876);
    } else if (Object.is(regex_869, Begin)) {
      this.#out_862[0] += "^";
    } else if (Object.is(regex_869, Dot)) {
      this.#out_862[0] += ".";
    } else if (Object.is(regex_869, End)) {
      this.#out_862[0] += "$";
    } else if (Object.is(regex_869, WordBoundary)) {
      this.#out_862[0] += "\\b";
    } else if (Object.is(regex_869, Digit)) {
      this.#out_862[0] += "\\d";
    } else if (Object.is(regex_869, Space)) {
      this.#out_862[0] += "\\s";
    } else if (Object.is(regex_869, Word)) {
      this.#out_862[0] += "\\w";
    }
    return;
  }
  /** @param {Capture} capture_886 */
  #pushCapture_878(capture_886) {
    this.#out_862[0] += "(";
    let t_887 = this.#out_862;
    let t_888 = capture_886.name;
    this.#pushCaptureName_889(t_887, t_888);
    let t_890 = capture_886.item;
    this.#pushRegex_867(t_890);
    this.#out_862[0] += ")";
    return;
  }
  /**
   * @param {globalThis.Array<string>} out_892
   * @param {string} name_893
   */
  #pushCaptureName_889(out_892, name_893) {
    out_892[0] += "?<" + name_893 + ">";
    return;
  }
  /**
   * @param {number} code_896
   * @param {boolean} insideCodeSet_897
   */
  #pushCode_895(code_896, insideCodeSet_897) {
    let return_898;
    let t_899;
    let t_900;
    let t_901;
    let t_902;
    let t_903;
    let t_904;
    let t_905;
    let t_906;
    let t_907;
    fn_908: {
      try {
        let specialEscape_909;
        if (code_896 === Codes_910.carriageReturn) {
          specialEscape_909 = "r";
        } else if (code_896 === Codes_910.newline) {
          specialEscape_909 = "n";
        } else if (code_896 === Codes_910.tab) {
          specialEscape_909 = "t";
        } else {
          specialEscape_909 = "";
        }
        if (specialEscape_909 !== "") {
          this.#out_862[0] += "\\";
          this.#out_862[0] += specialEscape_909;
          return_898 = void 0;
          break fn_908;
        }
        if (code_896 <= 127) {
          const escapeNeed_911 = listedGet_912(escapeNeeds_913, code_896);
          if (Object.is(escapeNeed_911, 2)) {
            t_900 = true;
          } else {
            if (insideCodeSet_897) {
              t_899 = code_896 === Codes_910.dash;
            } else {
              t_899 = false;
            }
            t_900 = t_899;
          }
          if (t_900) {
            this.#out_862[0] += "\\";
            t_901 = stringFromCodePoint_914(code_896);
            this.#out_862[0] += t_901;
            return_898 = void 0;
            break fn_908;
          } else if (Object.is(escapeNeed_911, 0)) {
            t_902 = stringFromCodePoint_914(code_896);
            this.#out_862[0] += t_902;
            return_898 = void 0;
            break fn_908;
          }
        }
        if (code_896 >= Codes_910.supplementalMin) {
          t_906 = true;
        } else {
          if (code_896 > Codes_910.highControlMax) {
            if (Codes_910.surrogateMin <= code_896) {
              t_903 = code_896 <= Codes_910.surrogateMax;
            } else {
              t_903 = false;
            }
            if (t_903) {
              t_904 = true;
            } else {
              t_904 = code_896 === Codes_910.uint16Max;
            }
            t_905 = ! t_904;
          } else {
            t_905 = false;
          }
          t_906 = t_905;
        }
        if (t_906) {
          t_907 = stringFromCodePoint_914(code_896);
          this.#out_862[0] += t_907;
        } else {
          regexFormatterPushCodeTo_915(this, this.#out_862, code_896, insideCodeSet_897);
        }
      } catch {
        throw Error();
      }
      return_898 = void 0;
    }
    return return_898;
  }
  /**
   * @param {CodePoints} codePoints_917
   * @param {boolean} insideCodeSet_918
   */
  #pushCodePoints_879(codePoints_917, insideCodeSet_918) {
    let t_919;
    let t_920;
    const value_921 = codePoints_917.value;
    let index_922 = 0;
    while (true) {
      if (!(value_921.length > index_922)) {
        break;
      }
      t_919 = stringGet_923(value_921, index_922);
      this.#pushCode_895(t_919, insideCodeSet_918);
      t_920 = stringNext_924(value_921, index_922);
      index_922 = t_920;
    }
    return;
  }
  /** @param {CodeRange} codeRange_926 */
  #pushCodeRange_880(codeRange_926) {
    this.#out_862[0] += "[";
    this.#pushCodeRangeUnwrapped_927(codeRange_926);
    this.#out_862[0] += "]";
    return;
  }
  /** @param {CodeRange} codeRange_929 */
  #pushCodeRangeUnwrapped_927(codeRange_929) {
    let t_930 = codeRange_929.min;
    this.#pushCode_895(t_930, true);
    this.#out_862[0] += "-";
    let t_931 = codeRange_929.max;
    this.#pushCode_895(t_931, true);
    return;
  }
  /** @param {CodeSet} codeSet_933 */
  #pushCodeSet_881(codeSet_933) {
    let t_934;
    let t_935;
    let t_936;
    const adjusted_937 = regexFormatterAdjustCodeSet_938(this, codeSet_933, regexRefs_853);
    if (adjusted_937 instanceof CodeSet) {
      t_936 = requireInstanceOf__877(adjusted_937, CodeSet);
      if (! t_936.items.length) {
        if (t_936.negated) {
          this.#out_862[0] += "[\\s\\S]";
        } else {
          this.#out_862[0] += "(?:$.)";
        }
      } else {
        this.#out_862[0] += "[";
        if (t_936.negated) {
          this.#out_862[0] += "^";
        }
        let i_939 = 0;
        while (true) {
          t_934 = t_936.items.length;
          if (!(i_939 < t_934)) {
            break;
          }
          t_935 = listedGet_912(t_936.items, i_939);
          this.#pushCodeSetItem_940(t_935);
          i_939 = i_939 + 1 | 0;
        }
        this.#out_862[0] += "]";
      }
    } else {
      this.#pushRegex_867(adjusted_937);
    }
    return;
  }
  /** @param {CodePart} codePart_942 */
  #pushCodeSetItem_940(codePart_942) {
    let t_943;
    let t_944;
    let t_945;
    if (codePart_942 instanceof CodePoints) {
      t_943 = requireInstanceOf__877(codePart_942, CodePoints);
      this.#pushCodePoints_879(t_943, true);
    } else if (codePart_942 instanceof CodeRange) {
      t_944 = requireInstanceOf__877(codePart_942, CodeRange);
      this.#pushCodeRangeUnwrapped_927(t_944);
    } else if (codePart_942 instanceof SpecialSet) {
      t_945 = requireInstanceOf__877(codePart_942, SpecialSet);
      this.#pushRegex_867(t_945);
    }
    return;
  }
  /** @param {Or} or_947 */
  #pushOr_882(or_947) {
    let t_948;
    let t_949;
    let t_950;
    if (! ! or_947.items.length) {
      this.#out_862[0] += "(?:";
      t_948 = listedGet_912(or_947.items, 0);
      this.#pushRegex_867(t_948);
      let i_951 = 1;
      while (true) {
        t_949 = or_947.items.length;
        if (!(i_951 < t_949)) {
          break;
        }
        this.#out_862[0] += "|";
        t_950 = listedGet_912(or_947.items, i_951);
        this.#pushRegex_867(t_950);
        i_951 = i_951 + 1 | 0;
      }
      this.#out_862[0] += ")";
    }
    return;
  }
  /** @param {Repeat} repeat_953 */
  #pushRepeat_883(repeat_953) {
    let t_954;
    let t_955;
    let t_956;
    let t_957;
    let t_958;
    this.#out_862[0] += "(?:";
    let t_959 = repeat_953.item;
    this.#pushRegex_867(t_959);
    this.#out_862[0] += ")";
    const min_960 = repeat_953.min;
    const max_961 = repeat_953.max;
    if (min_960 === 0) {
      t_956 = max_961 === 1;
    } else {
      t_956 = false;
    }
    if (t_956) {
      this.#out_862[0] += "?";
    } else {
      if (min_960 === 0) {
        t_957 = max_961 == null;
      } else {
        t_957 = false;
      }
      if (t_957) {
        this.#out_862[0] += "*";
      } else {
        if (min_960 === 1) {
          t_958 = max_961 == null;
        } else {
          t_958 = false;
        }
        if (t_958) {
          this.#out_862[0] += "+";
        } else {
          t_954 = min_960.toString();
          this.#out_862[0] += "{" + t_954;
          if (min_960 !== max_961) {
            this.#out_862[0] += ",";
            if (!(max_961 == null)) {
              t_955 = max_961.toString();
              this.#out_862[0] += t_955;
            }
          }
          this.#out_862[0] += "}";
        }
      }
    }
    if (repeat_953.reluctant) {
      this.#out_862[0] += "?";
    }
    return;
  }
  /** @param {Sequence} sequence_963 */
  #pushSequence_884(sequence_963) {
    let t_964;
    let t_965;
    let i_966 = 0;
    while (true) {
      t_964 = sequence_963.items.length;
      if (!(i_966 < t_964)) {
        break;
      }
      t_965 = listedGet_912(sequence_963.items, i_966);
      this.#pushRegex_867(t_965);
      i_966 = i_966 + 1 | 0;
    }
    return;
  }
  /**
   * @param {CodePart} codePart_968
   * @returns {number | null}
   */
  maxCode(codePart_968) {
    let return_969;
    let t_970;
    let t_971;
    if (codePart_968 instanceof CodePoints) {
      t_971 = requireInstanceOf__877(codePart_968, CodePoints);
      const value_972 = t_971.value;
      if (! value_972) {
        return_969 = null;
      } else {
        let max_973 = 0;
        let index_974 = 0;
        while (true) {
          if (!(value_972.length > index_974)) {
            break;
          }
          const next_975 = stringGet_923(value_972, index_974);
          if (next_975 > max_973) {
            max_973 = next_975;
          }
          t_970 = stringNext_924(value_972, index_974);
          index_974 = t_970;
        }
        return_969 = max_973;
      }
    } else if (codePart_968 instanceof CodeRange) {
      return_969 = requireInstanceOf__877(codePart_968, CodeRange).max;
    } else if (Object.is(codePart_968, Digit)) {
      return_969 = Codes_910.digit9;
    } else if (Object.is(codePart_968, Space)) {
      return_969 = Codes_910.space;
    } else if (Object.is(codePart_968, Word)) {
      return_969 = Codes_910.lowerZ;
    } else {
      return_969 = null;
    }
    return return_969;
  }
  constructor() {
    super ();
    let t_976 = [""];
    this.#out_862 = t_976;
    return;
  }
}
class Codes_910 extends type__753() {
  /** @type {number} */
  static #ampersand_977 = 38;
  /** @returns {number} */
  static get ampersand() {
    return this.#ampersand_977;
  }
  /** @type {number} */
  static #backslash_978 = 92;
  /** @returns {number} */
  static get backslash() {
    return this.#backslash_978;
  }
  /** @type {number} */
  static #caret_979 = 94;
  /** @returns {number} */
  static get caret() {
    return this.#caret_979;
  }
  /** @type {number} */
  static #carriageReturn_980 = 13;
  /** @returns {number} */
  static get carriageReturn() {
    return this.#carriageReturn_980;
  }
  /** @type {number} */
  static #curlyLeft_981 = 123;
  /** @returns {number} */
  static get curlyLeft() {
    return this.#curlyLeft_981;
  }
  /** @type {number} */
  static #curlyRight_982 = 125;
  /** @returns {number} */
  static get curlyRight() {
    return this.#curlyRight_982;
  }
  /** @type {number} */
  static #dash_983 = 45;
  /** @returns {number} */
  static get dash() {
    return this.#dash_983;
  }
  /** @type {number} */
  static #dot_984 = 46;
  /** @returns {number} */
  static get dot() {
    return this.#dot_984;
  }
  /** @type {number} */
  static #highControlMin_985 = 127;
  /** @returns {number} */
  static get highControlMin() {
    return this.#highControlMin_985;
  }
  /** @type {number} */
  static #highControlMax_986 = 159;
  /** @returns {number} */
  static get highControlMax() {
    return this.#highControlMax_986;
  }
  /** @type {number} */
  static #digit0_987 = 48;
  /** @returns {number} */
  static get digit0() {
    return this.#digit0_987;
  }
  /** @type {number} */
  static #digit9_988 = 57;
  /** @returns {number} */
  static get digit9() {
    return this.#digit9_988;
  }
  /** @type {number} */
  static #lowerA_989 = 97;
  /** @returns {number} */
  static get lowerA() {
    return this.#lowerA_989;
  }
  /** @type {number} */
  static #lowerZ_990 = 122;
  /** @returns {number} */
  static get lowerZ() {
    return this.#lowerZ_990;
  }
  /** @type {number} */
  static #newline_991 = 10;
  /** @returns {number} */
  static get newline() {
    return this.#newline_991;
  }
  /** @type {number} */
  static #peso_992 = 36;
  /** @returns {number} */
  static get peso() {
    return this.#peso_992;
  }
  /** @type {number} */
  static #pipe_993 = 124;
  /** @returns {number} */
  static get pipe() {
    return this.#pipe_993;
  }
  /** @type {number} */
  static #plus_994 = 43;
  /** @returns {number} */
  static get plus() {
    return this.#plus_994;
  }
  /** @type {number} */
  static #question_995 = 63;
  /** @returns {number} */
  static get question() {
    return this.#question_995;
  }
  /** @type {number} */
  static #roundLeft_996 = 40;
  /** @returns {number} */
  static get roundLeft() {
    return this.#roundLeft_996;
  }
  /** @type {number} */
  static #roundRight_997 = 41;
  /** @returns {number} */
  static get roundRight() {
    return this.#roundRight_997;
  }
  /** @type {number} */
  static #slash_998 = 47;
  /** @returns {number} */
  static get slash() {
    return this.#slash_998;
  }
  /** @type {number} */
  static #squareLeft_999 = 91;
  /** @returns {number} */
  static get squareLeft() {
    return this.#squareLeft_999;
  }
  /** @type {number} */
  static #squareRight_1000 = 93;
  /** @returns {number} */
  static get squareRight() {
    return this.#squareRight_1000;
  }
  /** @type {number} */
  static #star_1001 = 42;
  /** @returns {number} */
  static get star() {
    return this.#star_1001;
  }
  /** @type {number} */
  static #tab_1002 = 9;
  /** @returns {number} */
  static get tab() {
    return this.#tab_1002;
  }
  /** @type {number} */
  static #tilde_1003 = 42;
  /** @returns {number} */
  static get tilde() {
    return this.#tilde_1003;
  }
  /** @type {number} */
  static #upperA_1004 = 65;
  /** @returns {number} */
  static get upperA() {
    return this.#upperA_1004;
  }
  /** @type {number} */
  static #upperZ_1005 = 90;
  /** @returns {number} */
  static get upperZ() {
    return this.#upperZ_1005;
  }
  /** @type {number} */
  static #space_1006 = 32;
  /** @returns {number} */
  static get space() {
    return this.#space_1006;
  }
  /** @type {number} */
  static #surrogateMin_1007 = 55296;
  /** @returns {number} */
  static get surrogateMin() {
    return this.#surrogateMin_1007;
  }
  /** @type {number} */
  static #surrogateMax_1008 = 57343;
  /** @returns {number} */
  static get surrogateMax() {
    return this.#surrogateMax_1008;
  }
  /** @type {number} */
  static #supplementalMin_1009 = 65536;
  /** @returns {number} */
  static get supplementalMin() {
    return this.#supplementalMin_1009;
  }
  /** @type {number} */
  static #uint16Max_1010 = 65535;
  /** @returns {number} */
  static get uint16Max() {
    return this.#uint16Max_1010;
  }
  /** @type {number} */
  static #underscore_1011 = 95;
  /** @returns {number} */
  static get underscore() {
    return this.#underscore_1011;
  }
  constructor() {
    super ();
    return;
  }
}
class Begin_1012 extends type__753(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1013 = new Begin_1012();
/** @type {Special} */
export const Begin = return_1013;
class Dot_1014 extends type__753(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1015 = new Dot_1014();
/** @type {Special} */
export const Dot = return_1015;
class End_1016 extends type__753(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1017 = new End_1016();
/** @type {Special} */
export const End = return_1017;
class WordBoundary_1018 extends type__753(Special) {
  constructor() {
    super ();
    return;
  }
}
/** @type {Special} */
const return_1019 = new WordBoundary_1018();
/** @type {Special} */
export const WordBoundary = return_1019;
class Digit_1020 extends type__753(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1021 = new Digit_1020();
/** @type {SpecialSet} */
export const Digit = return_1021;
class Space_1022 extends type__753(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1023 = new Space_1022();
/** @type {SpecialSet} */
export const Space = return_1023;
class Word_1024 extends type__753(SpecialSet) {
  constructor() {
    super ();
    return;
  }
}
/** @type {SpecialSet} */
const return_1025 = new Word_1024();
/** @type {SpecialSet} */
export const Word = return_1025;
/** @returns {Array<number>} */
function buildEscapeNeeds_1026() {
  let t_1027;
  let t_1028;
  let t_1029;
  let t_1030;
  let t_1031;
  let t_1032;
  let t_1033;
  let t_1034;
  let t_1035;
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
  const escapeNeeds_1052 = [];
  let code_1053 = 0;
  while (code_1053 <= 127) {
    if (code_1053 === Codes_910.dash) {
      t_1034 = true;
    } else {
      if (code_1053 === Codes_910.space) {
        t_1033 = true;
      } else {
        if (code_1053 === Codes_910.underscore) {
          t_1032 = true;
        } else {
          if (Codes_910.digit0 <= code_1053) {
            t_1027 = code_1053 <= Codes_910.digit9;
          } else {
            t_1027 = false;
          }
          if (t_1027) {
            t_1031 = true;
          } else {
            if (Codes_910.upperA <= code_1053) {
              t_1028 = code_1053 <= Codes_910.upperZ;
            } else {
              t_1028 = false;
            }
            if (t_1028) {
              t_1030 = true;
            } else {
              if (Codes_910.lowerA <= code_1053) {
                t_1029 = code_1053 <= Codes_910.lowerZ;
              } else {
                t_1029 = false;
              }
              t_1030 = t_1029;
            }
            t_1031 = t_1030;
          }
          t_1032 = t_1031;
        }
        t_1033 = t_1032;
      }
      t_1034 = t_1033;
    }
    if (t_1034) {
      t_1051 = 0;
    } else {
      if (code_1053 === Codes_910.ampersand) {
        t_1050 = true;
      } else {
        if (code_1053 === Codes_910.backslash) {
          t_1049 = true;
        } else {
          if (code_1053 === Codes_910.caret) {
            t_1048 = true;
          } else {
            if (code_1053 === Codes_910.curlyLeft) {
              t_1047 = true;
            } else {
              if (code_1053 === Codes_910.curlyRight) {
                t_1046 = true;
              } else {
                if (code_1053 === Codes_910.dot) {
                  t_1045 = true;
                } else {
                  if (code_1053 === Codes_910.peso) {
                    t_1044 = true;
                  } else {
                    if (code_1053 === Codes_910.pipe) {
                      t_1043 = true;
                    } else {
                      if (code_1053 === Codes_910.plus) {
                        t_1042 = true;
                      } else {
                        if (code_1053 === Codes_910.question) {
                          t_1041 = true;
                        } else {
                          if (code_1053 === Codes_910.roundLeft) {
                            t_1040 = true;
                          } else {
                            if (code_1053 === Codes_910.roundRight) {
                              t_1039 = true;
                            } else {
                              if (code_1053 === Codes_910.slash) {
                                t_1038 = true;
                              } else {
                                if (code_1053 === Codes_910.squareLeft) {
                                  t_1037 = true;
                                } else {
                                  if (code_1053 === Codes_910.squareRight) {
                                    t_1036 = true;
                                  } else {
                                    if (code_1053 === Codes_910.star) {
                                      t_1035 = true;
                                    } else {
                                      t_1035 = code_1053 === Codes_910.tilde;
                                    }
                                    t_1036 = t_1035;
                                  }
                                  t_1037 = t_1036;
                                }
                                t_1038 = t_1037;
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
                    t_1044 = t_1043;
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
      if (t_1050) {
        t_1051 = 2;
      } else {
        t_1051 = 1;
      }
    }
    listBuilderAdd_1054(escapeNeeds_1052, t_1051);
    code_1053 = code_1053 + 1 | 0;
  }
  return listBuilderToList_1055(escapeNeeds_1052);
}
/** @type {Array<number>} */
const escapeNeeds_913 = buildEscapeNeeds_1026();
/** @type {RegexRefs_813} */
const regexRefs_853 = new RegexRefs_813();
/**
 * @param {RegexNode} item_1056
 * @returns {RegexNode}
 */
export function entire(item_1056) {
  return new Sequence(Object.freeze([Begin, item_1056, End]));
};
/**
 * @param {RegexNode} item_1057
 * @param {boolean | null} [reluctant_1058]
 * @returns {Repeat}
 */
export function oneOrMore(item_1057, reluctant_1058) {
  let reluctant_1059;
  if (reluctant_1058 == null) {
    reluctant_1059 = false;
  } else {
    reluctant_1059 = reluctant_1058;
  }
  return new Repeat(item_1057, 1, null, reluctant_1059);
};
/**
 * @param {RegexNode} item_1060
 * @param {boolean | null} [reluctant_1061]
 * @returns {Repeat}
 */
export function optional(item_1060, reluctant_1061) {
  let reluctant_1062;
  if (reluctant_1061 == null) {
    reluctant_1062 = false;
  } else {
    reluctant_1062 = reluctant_1061;
  }
  return new Repeat(item_1060, 0, 1, reluctant_1062);
};
