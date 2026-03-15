const {
  imul: imul__516
} = globalThis.Math;
import {
  type as type__97, requireInstanceOf as requireInstanceOf__311, clampInt64 as clampInt64__698, cmpFloat as cmpFloat__710, mappedGetOr as mappedGetOr_129, listedGet as listedGet_131, mappedForEach as mappedForEach_143, int64ToInt32 as int64ToInt32_183, int64ToFloat64 as int64ToFloat64_186, float64ToString as float64ToString_193, float64ToInt32 as float64ToInt32_195, float64ToInt64 as float64ToInt64_197, stringToInt32 as stringToInt32_209, stringToFloat64 as stringToFloat64_210, stringToInt64 as stringToInt64_215, listBuilderAdd as listBuilderAdd_227, listedGetOr as listedGetOr_231, listBuilderSet as listBuilderSet_239, listBuilderRemoveLast as listBuilderRemoveLast_244, mapBuilderConstructor as mapBuilderConstructor_305, panic as panic_312, mappedGet as mappedGet_317, mapBuilderSet as mapBuilderSet_318, listBuilderToList as listBuilderToList_324, mappedToMap as mappedToMap_325, stringGet as stringGet_374, stringNext as stringNext_482, stringHasAtLeast as stringHasAtLeast_553, stringBuilderAppendCodePoint as stringBuilderAppendCodePoint_558, requireStringIndex as requireStringIndex_587, int64ToInt32Unsafe as int64ToInt32Unsafe_707
} from "@temperlang/core";
export class InterchangeContext extends type__97() {
  /**
   * @param {string} headerName_96
   * @returns {string | null}
   */
  getHeader(headerName_96) {
    null;
  }
};
export class NullInterchangeContext extends type__97(InterchangeContext) {
  /**
   * @param {string} headerName_99
   * @returns {string | null}
   */
  getHeader(headerName_99) {
    return null;
  }
  /** @type {NullInterchangeContext} */
  static #instance_100 = new NullInterchangeContext();
  /** @returns {NullInterchangeContext} */
  static get instance() {
    return this.#instance_100;
  }
  constructor() {
    super ();
    return;
  }
};
export class JsonProducer extends type__97() {
  startObject() {
    null;
  }
  endObject() {
    null;
  }
  /** @param {string} key_105 */
  objectKey(key_105) {
    null;
  }
  startArray() {
    null;
  }
  endArray() {
    null;
  }
  nullValue() {
    null;
  }
  /** @param {boolean} x_110 */
  booleanValue(x_110) {
    null;
  }
  /** @param {number} x_112 */
  int32Value(x_112) {
    null;
  }
  /** @param {bigint} x_114 */
  int64Value(x_114) {
    null;
  }
  /** @param {number} x_116 */
  float64Value(x_116) {
    null;
  }
  /** @param {string} x_118 */
  numericTokenValue(x_118) {
    null;
  }
  /** @param {string} x_120 */
  stringValue(x_120) {
    null;
  }
  /** @returns {JsonParseErrorReceiver | null} */
  get parseErrorReceiver() {
    return null;
  }
};
export class JsonSyntaxTree extends type__97() {
  /** @param {JsonProducer} p_123 */
  produce(p_123) {
    null;
  }
};
export class JsonObject extends type__97(JsonSyntaxTree) {
  /** @type {Map<string, Array<JsonSyntaxTree>>} */
  #properties_124;
  /**
   * @param {string} propertyKey_126
   * @returns {JsonSyntaxTree | null}
   */
  propertyValueOrNull(propertyKey_126) {
    let return_127;
    const treeList_128 = mappedGetOr_129(this.#properties_124, propertyKey_126, Object.freeze([]));
    const lastIndex_130 = treeList_128.length - 1 | 0;
    if (lastIndex_130 >= 0) {
      return_127 = listedGet_131(treeList_128, lastIndex_130);
    } else {
      return_127 = null;
    }
    return return_127;
  }
  /**
   * @param {string} propertyKey_133
   * @returns {JsonSyntaxTree}
   */
  propertyValueOrBubble(propertyKey_133) {
    let return_134;
    let t_135 = this.propertyValueOrNull(propertyKey_133);
    if (t_135 == null) {
      throw Error();
    } else {
      return_134 = t_135;
    }
    return return_134;
  }
  /** @param {JsonProducer} p_137 */
  produce(p_137) {
    p_137.startObject();
    function fn_138(k_139, vs_140) {
      function fn_141(v_142) {
        p_137.objectKey(k_139);
        v_142.produce(p_137);
        return;
      }
      vs_140.forEach(fn_141);
      return;
    }
    mappedForEach_143(this.#properties_124, fn_138);
    p_137.endObject();
    return;
  }
  /** @param {Map<string, Array<JsonSyntaxTree>>} properties_144 */
  constructor(properties_144) {
    super ();
    this.#properties_124 = properties_144;
    return;
  }
  /** @returns {Map<string, Array<JsonSyntaxTree>>} */
  get properties() {
    return this.#properties_124;
  }
};
export class JsonArray extends type__97(JsonSyntaxTree) {
  /** @type {Array<JsonSyntaxTree>} */
  #elements_146;
  /** @param {JsonProducer} p_148 */
  produce(p_148) {
    p_148.startArray();
    function fn_149(v_150) {
      v_150.produce(p_148);
      return;
    }
    this.#elements_146.forEach(fn_149);
    p_148.endArray();
    return;
  }
  /** @param {Array<JsonSyntaxTree>} elements_151 */
  constructor(elements_151) {
    super ();
    this.#elements_146 = elements_151;
    return;
  }
  /** @returns {Array<JsonSyntaxTree>} */
  get elements() {
    return this.#elements_146;
  }
};
export class JsonBoolean extends type__97(JsonSyntaxTree) {
  /** @type {boolean} */
  #content_153;
  /** @param {JsonProducer} p_155 */
  produce(p_155) {
    p_155.booleanValue(this.#content_153);
    return;
  }
  /** @param {boolean} content_156 */
  constructor(content_156) {
    super ();
    this.#content_153 = content_156;
    return;
  }
  /** @returns {boolean} */
  get content() {
    return this.#content_153;
  }
};
export class JsonNull extends type__97(JsonSyntaxTree) {
  /** @param {JsonProducer} p_159 */
  produce(p_159) {
    p_159.nullValue();
    return;
  }
  constructor() {
    super ();
    return;
  }
};
export class JsonString extends type__97(JsonSyntaxTree) {
  /** @type {string} */
  #content_160;
  /** @param {JsonProducer} p_162 */
  produce(p_162) {
    p_162.stringValue(this.#content_160);
    return;
  }
  /** @param {string} content_163 */
  constructor(content_163) {
    super ();
    this.#content_160 = content_163;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_160;
  }
};
export class JsonNumeric extends type__97(JsonSyntaxTree) {
  /** @returns {string} */
  asJsonNumericToken() {
    null;
  }
  /** @returns {number} */
  asInt32() {
    null;
  }
  /** @returns {bigint} */
  asInt64() {
    null;
  }
  /** @returns {number} */
  asFloat64() {
    null;
  }
};
export class JsonInt32 extends type__97(JsonNumeric) {
  /** @type {number} */
  #content_169;
  /** @param {JsonProducer} p_171 */
  produce(p_171) {
    p_171.int32Value(this.#content_169);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_169.toString();
  }
  /** @returns {number} */
  asInt32() {
    return this.#content_169;
  }
  /** @returns {bigint} */
  asInt64() {
    return BigInt(this.#content_169);
  }
  /** @returns {number} */
  asFloat64() {
    return this.#content_169;
  }
  /** @param {number} content_176 */
  constructor(content_176) {
    super ();
    this.#content_169 = content_176;
    return;
  }
  /** @returns {number} */
  get content() {
    return this.#content_169;
  }
};
export class JsonInt64 extends type__97(JsonNumeric) {
  /** @type {bigint} */
  #content_178;
  /** @param {JsonProducer} p_180 */
  produce(p_180) {
    p_180.int64Value(this.#content_178);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_178.toString();
  }
  /** @returns {number} */
  asInt32() {
    return int64ToInt32_183(this.#content_178);
  }
  /** @returns {bigint} */
  asInt64() {
    return this.#content_178;
  }
  /** @returns {number} */
  asFloat64() {
    return int64ToFloat64_186(this.#content_178);
  }
  /** @param {bigint} content_187 */
  constructor(content_187) {
    super ();
    this.#content_178 = content_187;
    return;
  }
  /** @returns {bigint} */
  get content() {
    return this.#content_178;
  }
};
export class JsonFloat64 extends type__97(JsonNumeric) {
  /** @type {number} */
  #content_189;
  /** @param {JsonProducer} p_191 */
  produce(p_191) {
    p_191.float64Value(this.#content_189);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return float64ToString_193(this.#content_189);
  }
  /** @returns {number} */
  asInt32() {
    return float64ToInt32_195(this.#content_189);
  }
  /** @returns {bigint} */
  asInt64() {
    return float64ToInt64_197(this.#content_189);
  }
  /** @returns {number} */
  asFloat64() {
    return this.#content_189;
  }
  /** @param {number} content_199 */
  constructor(content_199) {
    super ();
    this.#content_189 = content_199;
    return;
  }
  /** @returns {number} */
  get content() {
    return this.#content_189;
  }
};
export class JsonNumericToken extends type__97(JsonNumeric) {
  /** @type {string} */
  #content_201;
  /** @param {JsonProducer} p_203 */
  produce(p_203) {
    p_203.numericTokenValue(this.#content_201);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_201;
  }
  /** @returns {number} */
  asInt32() {
    let return_206;
    let t_207;
    let t_208;
    try {
      t_207 = stringToInt32_209(this.#content_201);
      return_206 = t_207;
    } catch {
      t_208 = stringToFloat64_210(this.#content_201);
      return_206 = float64ToInt32_195(t_208);
    }
    return return_206;
  }
  /** @returns {bigint} */
  asInt64() {
    let return_212;
    let t_213;
    let t_214;
    try {
      t_213 = stringToInt64_215(this.#content_201);
      return_212 = t_213;
    } catch {
      t_214 = stringToFloat64_210(this.#content_201);
      return_212 = float64ToInt64_197(t_214);
    }
    return return_212;
  }
  /** @returns {number} */
  asFloat64() {
    return stringToFloat64_210(this.#content_201);
  }
  /** @param {string} content_217 */
  constructor(content_217) {
    super ();
    this.#content_201 = content_217;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_201;
  }
};
export class JsonTextProducer extends type__97(JsonProducer) {
  /** @type {InterchangeContext} */
  #interchangeContext_219;
  /** @type {globalThis.Array<string>} */
  #buffer_220;
  /** @type {Array<number>} */
  #stack_221;
  /** @type {boolean} */
  #wellFormed_222;
  /** @param {InterchangeContext | null} [interchangeContext_223] */
  constructor(interchangeContext_223) {
    super ();
    let interchangeContext_224;
    if (interchangeContext_223 == null) {
      interchangeContext_224 = NullInterchangeContext.instance;
    } else {
      interchangeContext_224 = interchangeContext_223;
    }
    this.#interchangeContext_219 = interchangeContext_224;
    let t_225 = [""];
    this.#buffer_220 = t_225;
    let t_226 = [];
    this.#stack_221 = t_226;
    listBuilderAdd_227(this.#stack_221, 5);
    this.#wellFormed_222 = true;
    return;
  }
  /** @returns {number} */
  #state_229() {
    let t_230 = this.#stack_221.length;
    return listedGetOr_231(this.#stack_221, t_230 - 1 | 0, -1);
  }
  #beforeValue_233() {
    let t_234;
    let t_235;
    let t_236;
    let t_237;
    const currentState_238 = this.#state_229();
    if (currentState_238 === 3) {
      t_234 = this.#stack_221.length;
      listBuilderSet_239(this.#stack_221, t_234 - 1 | 0, 4);
    } else if (currentState_238 === 4) {
      this.#buffer_220[0] += ",";
    } else if (currentState_238 === 1) {
      t_235 = this.#stack_221.length;
      listBuilderSet_239(this.#stack_221, t_235 - 1 | 0, 2);
    } else if (currentState_238 === 5) {
      t_236 = this.#stack_221.length;
      listBuilderSet_239(this.#stack_221, t_236 - 1 | 0, 6);
    } else {
      if (currentState_238 === 6) {
        t_237 = true;
      } else {
        t_237 = currentState_238 === 2;
      }
      if (t_237) {
        this.#wellFormed_222 = false;
      }
    }
    return;
  }
  startObject() {
    this.#beforeValue_233();
    this.#buffer_220[0] += "{";
    listBuilderAdd_227(this.#stack_221, 0);
    return;
  }
  endObject() {
    let t_242;
    this.#buffer_220[0] += "}";
    const currentState_243 = this.#state_229();
    if (0 === currentState_243) {
      t_242 = true;
    } else {
      t_242 = 2 === currentState_243;
    }
    if (t_242) {
      listBuilderRemoveLast_244(this.#stack_221);
    } else {
      this.#wellFormed_222 = false;
    }
    return;
  }
  /** @param {string} key_246 */
  objectKey(key_246) {
    let t_247;
    const currentState_248 = this.#state_229();
    if (!(currentState_248 === 0)) {
      if (currentState_248 === 2) {
        this.#buffer_220[0] += ",";
      } else {
        this.#wellFormed_222 = false;
      }
    }
    encodeJsonString_249(key_246, this.#buffer_220);
    this.#buffer_220[0] += ":";
    if (currentState_248 >= 0) {
      t_247 = this.#stack_221.length;
      listBuilderSet_239(this.#stack_221, t_247 - 1 | 0, 1);
    }
    return;
  }
  startArray() {
    this.#beforeValue_233();
    this.#buffer_220[0] += "[";
    listBuilderAdd_227(this.#stack_221, 3);
    return;
  }
  endArray() {
    let t_252;
    this.#buffer_220[0] += "]";
    const currentState_253 = this.#state_229();
    if (3 === currentState_253) {
      t_252 = true;
    } else {
      t_252 = 4 === currentState_253;
    }
    if (t_252) {
      listBuilderRemoveLast_244(this.#stack_221);
    } else {
      this.#wellFormed_222 = false;
    }
    return;
  }
  nullValue() {
    this.#beforeValue_233();
    this.#buffer_220[0] += "null";
    return;
  }
  /** @param {boolean} x_256 */
  booleanValue(x_256) {
    let t_257;
    this.#beforeValue_233();
    if (x_256) {
      t_257 = "true";
    } else {
      t_257 = "false";
    }
    this.#buffer_220[0] += t_257;
    return;
  }
  /** @param {number} x_259 */
  int32Value(x_259) {
    this.#beforeValue_233();
    let t_260 = x_259.toString();
    this.#buffer_220[0] += t_260;
    return;
  }
  /** @param {bigint} x_262 */
  int64Value(x_262) {
    this.#beforeValue_233();
    let t_263 = x_262.toString();
    this.#buffer_220[0] += t_263;
    return;
  }
  /** @param {number} x_265 */
  float64Value(x_265) {
    this.#beforeValue_233();
    let t_266 = float64ToString_193(x_265);
    this.#buffer_220[0] += t_266;
    return;
  }
  /** @param {string} x_268 */
  numericTokenValue(x_268) {
    this.#beforeValue_233();
    this.#buffer_220[0] += x_268;
    return;
  }
  /** @param {string} x_270 */
  stringValue(x_270) {
    this.#beforeValue_233();
    encodeJsonString_249(x_270, this.#buffer_220);
    return;
  }
  /** @returns {string} */
  toJsonString() {
    let return_272;
    let t_273;
    let t_274;
    let t_275;
    if (this.#wellFormed_222) {
      if (this.#stack_221.length === 1) {
        t_273 = this.#state_229();
        t_274 = t_273 === 6;
      } else {
        t_274 = false;
      }
      t_275 = t_274;
    } else {
      t_275 = false;
    }
    if (t_275) {
      return_272 = this.#buffer_220[0];
    } else {
      throw Error();
    }
    return return_272;
  }
  /** @returns {InterchangeContext} */
  get interchangeContext() {
    return this.#interchangeContext_219;
  }
};
export class JsonParseErrorReceiver extends type__97() {
  /** @param {string} explanation_278 */
  explainJsonError(explanation_278) {
    null;
  }
};
export class JsonSyntaxTreeProducer extends type__97(JsonProducer, JsonParseErrorReceiver) {
  /** @type {Array<Array<JsonSyntaxTree>>} */
  #stack_279;
  /** @type {string | null} */
  #error_280;
  /** @returns {InterchangeContext} */
  get interchangeContext() {
    return NullInterchangeContext.instance;
  }
  constructor() {
    super ();
    let t_282 = [];
    this.#stack_279 = t_282;
    let t_283 = [];
    listBuilderAdd_227(this.#stack_279, t_283);
    this.#error_280 = null;
    return;
  }
  /** @param {JsonSyntaxTree} v_286 */
  #storeValue_285(v_286) {
    let t_287;
    if (! ! this.#stack_279.length) {
      t_287 = this.#stack_279.length;
      listBuilderAdd_227(listedGet_131(this.#stack_279, t_287 - 1 | 0), v_286);
    }
    return;
  }
  startObject() {
    let t_289 = [];
    listBuilderAdd_227(this.#stack_279, t_289);
    return;
  }
  endObject() {
    let return_291;
    let t_292;
    let t_293;
    let t_294;
    let t_295;
    let t_296;
    let t_297;
    let t_298;
    let t_299;
    let t_300;
    let t_301;
    fn_302: {
      if (! this.#stack_279.length) {
        return_291 = void 0;
        break fn_302;
      }
      const ls_303 = listBuilderRemoveLast_244(this.#stack_279);
      const m_304 = mapBuilderConstructor_305();
      let multis_306 = null;
      let i_307 = 0;
      let n_308 = ls_303.length & -2;
      while (i_307 < n_308) {
        const postfixReturn_309 = i_307;
        i_307 = i_307 + 1 | 0;
        const keyTree_310 = listedGet_131(ls_303, postfixReturn_309);
        if (!(keyTree_310 instanceof JsonString)) {
          break;
        }
        try {
          t_294 = requireInstanceOf__311(keyTree_310, JsonString);
          t_295 = t_294;
        } catch {
          t_295 = panic_312();
        }
        const key_313 = t_295.content;
        const postfixReturn_314 = i_307;
        i_307 = i_307 + 1 | 0;
        const value_315 = listedGet_131(ls_303, postfixReturn_314);
        if (m_304.has(key_313)) {
          if (multis_306 == null) {
            t_292 = mapBuilderConstructor_305();
            multis_306 = t_292;
          }
          try {
            if (multis_306 == null) {
              throw Error();
            } else {
              t_296 = multis_306;
            }
            t_297 = t_296;
          } catch {
            t_297 = panic_312();
          }
          const mb_316 = t_297;
          if (! mb_316.has(key_313)) {
            try {
              t_298 = mappedGet_317(m_304, key_313);
              t_299 = t_298;
            } catch {
              t_299 = panic_312();
            }
            mapBuilderSet_318(mb_316, key_313, t_299.slice());
          }
          try {
            t_300 = mappedGet_317(mb_316, key_313);
            t_301 = t_300;
          } catch {
            t_301 = panic_312();
          }
          listBuilderAdd_227(t_301, value_315);
        } else {
          mapBuilderSet_318(m_304, key_313, Object.freeze([value_315]));
        }
      }
      const multis_319 = multis_306;
      if (!(multis_319 == null)) {
        function fn_320(k_321, vs_322) {
          let t_323 = listBuilderToList_324(vs_322);
          mapBuilderSet_318(m_304, k_321, t_323);
          return;
        }
        mappedForEach_143(multis_319, fn_320);
      }
      t_293 = new JsonObject(mappedToMap_325(m_304));
      this.#storeValue_285(t_293);
      return_291 = void 0;
    }
    return return_291;
  }
  /** @param {string} key_327 */
  objectKey(key_327) {
    let t_328 = new JsonString(key_327);
    this.#storeValue_285(t_328);
    return;
  }
  startArray() {
    let t_330 = [];
    listBuilderAdd_227(this.#stack_279, t_330);
    return;
  }
  endArray() {
    let return_332;
    let t_333;
    fn_334: {
      if (! this.#stack_279.length) {
        return_332 = void 0;
        break fn_334;
      }
      const ls_335 = listBuilderRemoveLast_244(this.#stack_279);
      t_333 = new JsonArray(listBuilderToList_324(ls_335));
      this.#storeValue_285(t_333);
      return_332 = void 0;
    }
    return return_332;
  }
  nullValue() {
    let t_337 = new JsonNull();
    this.#storeValue_285(t_337);
    return;
  }
  /** @param {boolean} x_339 */
  booleanValue(x_339) {
    let t_340 = new JsonBoolean(x_339);
    this.#storeValue_285(t_340);
    return;
  }
  /** @param {number} x_342 */
  int32Value(x_342) {
    let t_343 = new JsonInt32(x_342);
    this.#storeValue_285(t_343);
    return;
  }
  /** @param {bigint} x_345 */
  int64Value(x_345) {
    let t_346 = new JsonInt64(x_345);
    this.#storeValue_285(t_346);
    return;
  }
  /** @param {number} x_348 */
  float64Value(x_348) {
    let t_349 = new JsonFloat64(x_348);
    this.#storeValue_285(t_349);
    return;
  }
  /** @param {string} x_351 */
  numericTokenValue(x_351) {
    let t_352 = new JsonNumericToken(x_351);
    this.#storeValue_285(t_352);
    return;
  }
  /** @param {string} x_354 */
  stringValue(x_354) {
    let t_355 = new JsonString(x_354);
    this.#storeValue_285(t_355);
    return;
  }
  /** @returns {JsonSyntaxTree} */
  toJsonSyntaxTree() {
    let t_357;
    if (this.#stack_279.length !== 1) {
      t_357 = true;
    } else {
      t_357 = !(this.#error_280 == null);
    }
    if (t_357) {
      throw Error();
    }
    const ls_358 = listedGet_131(this.#stack_279, 0);
    if (ls_358.length !== 1) {
      throw Error();
    }
    return listedGet_131(ls_358, 0);
  }
  /** @returns {string | null} */
  get jsonError() {
    return this.#error_280;
  }
  /** @returns {JsonParseErrorReceiver} */
  get parseErrorReceiver() {
    return this;
  }
  /** @param {string} error_362 */
  explainJsonError(error_362) {
    this.#error_280 = error_362;
    return;
  }
};
/**
 * @param {string} sourceText_364
 * @param {globalThis.number} i_365
 * @param {JsonProducer} out_366
 * @returns {globalThis.number}
 */
function parseJsonValue_363(sourceText_364, i_365, out_366) {
  let return_367;
  let t_368;
  let t_369;
  let t_370;
  fn_371: {
    t_368 = skipJsonSpaces_372(sourceText_364, i_365);
    i_365 = t_368;
    if (!(sourceText_364.length > i_365)) {
      expectedTokenError_373(sourceText_364, i_365, out_366, "JSON value");
      return_367 = -1;
      break fn_371;
    }
    t_369 = stringGet_374(sourceText_364, i_365);
    if (t_369 === 123) {
      return_367 = parseJsonObject_375(sourceText_364, i_365, out_366);
    } else if (t_369 === 91) {
      return_367 = parseJsonArray_376(sourceText_364, i_365, out_366);
    } else if (t_369 === 34) {
      return_367 = parseJsonString_377(sourceText_364, i_365, out_366);
    } else {
      if (t_369 === 116) {
        t_370 = true;
      } else {
        t_370 = t_369 === 102;
      }
      if (t_370) {
        return_367 = parseJsonBoolean_378(sourceText_364, i_365, out_366);
      } else if (t_369 === 110) {
        return_367 = parseJsonNull_379(sourceText_364, i_365, out_366);
      } else {
        return_367 = parseJsonNumber_380(sourceText_364, i_365, out_366);
      }
    }
  }
  return return_367;
}
/** @template T_381 */
export class JsonAdapter extends type__97() {
  /**
   * @param {T_381} x_383
   * @param {JsonProducer} p_384
   */
  encodeToJson(x_383, p_384) {
    null;
  }
  /**
   * @param {JsonSyntaxTree} t_386
   * @param {InterchangeContext} ic_387
   * @returns {T_381}
   */
  decodeFromJson(t_386, ic_387) {
    null;
  }
};
class BooleanJsonAdapter_388 extends type__97(JsonAdapter) {
  /**
   * @param {boolean} x_390
   * @param {JsonProducer} p_391
   */
  encodeToJson(x_390, p_391) {
    p_391.booleanValue(x_390);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_393
   * @param {InterchangeContext} ic_394
   * @returns {boolean}
   */
  decodeFromJson(t_393, ic_394) {
    let t_395;
    t_395 = requireInstanceOf__311(t_393, JsonBoolean);
    return t_395.content;
  }
  constructor() {
    super ();
    return;
  }
}
class Float64JsonAdapter_396 extends type__97(JsonAdapter) {
  /**
   * @param {number} x_398
   * @param {JsonProducer} p_399
   */
  encodeToJson(x_398, p_399) {
    p_399.float64Value(x_398);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_401
   * @param {InterchangeContext} ic_402
   * @returns {number}
   */
  decodeFromJson(t_401, ic_402) {
    let t_403;
    t_403 = requireInstanceOf__311(t_401, JsonNumeric);
    return t_403.asFloat64();
  }
  constructor() {
    super ();
    return;
  }
}
class Int32JsonAdapter_404 extends type__97(JsonAdapter) {
  /**
   * @param {number} x_406
   * @param {JsonProducer} p_407
   */
  encodeToJson(x_406, p_407) {
    p_407.int32Value(x_406);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_409
   * @param {InterchangeContext} ic_410
   * @returns {number}
   */
  decodeFromJson(t_409, ic_410) {
    let t_411;
    t_411 = requireInstanceOf__311(t_409, JsonNumeric);
    return t_411.asInt32();
  }
  constructor() {
    super ();
    return;
  }
}
class Int64JsonAdapter_412 extends type__97(JsonAdapter) {
  /**
   * @param {bigint} x_414
   * @param {JsonProducer} p_415
   */
  encodeToJson(x_414, p_415) {
    p_415.int64Value(x_414);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_417
   * @param {InterchangeContext} ic_418
   * @returns {bigint}
   */
  decodeFromJson(t_417, ic_418) {
    let t_419;
    t_419 = requireInstanceOf__311(t_417, JsonNumeric);
    return t_419.asInt64();
  }
  constructor() {
    super ();
    return;
  }
}
class StringJsonAdapter_420 extends type__97(JsonAdapter) {
  /**
   * @param {string} x_422
   * @param {JsonProducer} p_423
   */
  encodeToJson(x_422, p_423) {
    p_423.stringValue(x_422);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_425
   * @param {InterchangeContext} ic_426
   * @returns {string}
   */
  decodeFromJson(t_425, ic_426) {
    let t_427;
    t_427 = requireInstanceOf__311(t_425, JsonString);
    return t_427.content;
  }
  constructor() {
    super ();
    return;
  }
}
/** @template T_429 */
class ListJsonAdapter_428 extends type__97(JsonAdapter) {
  /** @type {JsonAdapter<T_429>} */
  #adapterForT_430;
  /**
   * @param {Array<T_429>} x_432
   * @param {JsonProducer} p_433
   */
  encodeToJson(x_432, p_433) {
    const this436 = this;
    p_433.startArray();
    function fn_434(el_435) {
      this436.#adapterForT_430.encodeToJson(el_435, p_433);
      return;
    }
    x_432.forEach(fn_434);
    p_433.endArray();
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_438
   * @param {InterchangeContext} ic_439
   * @returns {Array<T_429>}
   */
  decodeFromJson(t_438, ic_439) {
    let t_440;
    const b_441 = [];
    let t_442;
    t_442 = requireInstanceOf__311(t_438, JsonArray);
    const elements_443 = t_442.elements;
    const n_444 = elements_443.length;
    let i_445 = 0;
    while (i_445 < n_444) {
      const el_446 = listedGet_131(elements_443, i_445);
      i_445 = i_445 + 1 | 0;
      t_440 = this.#adapterForT_430.decodeFromJson(el_446, ic_439);
      listBuilderAdd_227(b_441, t_440);
    }
    return listBuilderToList_324(b_441);
  }
  /** @param {JsonAdapter<T_429>} adapterForT_447 */
  constructor(adapterForT_447) {
    super ();
    this.#adapterForT_430 = adapterForT_447;
    return;
  }
}
/** @template T_448 */
export class OrNullJsonAdapter extends type__97(JsonAdapter) {
  /** @type {JsonAdapter<T_448>} */
  #adapterForT_449;
  /**
   * @param {T_448 | null} x_451
   * @param {JsonProducer} p_452
   */
  encodeToJson(x_451, p_452) {
    if (x_451 == null) {
      p_452.nullValue();
    } else {
      const x_453 = x_451;
      this.#adapterForT_449.encodeToJson(x_453, p_452);
    }
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_455
   * @param {InterchangeContext} ic_456
   * @returns {T_448 | null}
   */
  decodeFromJson(t_455, ic_456) {
    let return_457;
    if (t_455 instanceof JsonNull) {
      return_457 = null;
    } else {
      return_457 = this.#adapterForT_449.decodeFromJson(t_455, ic_456);
    }
    return return_457;
  }
  /** @param {JsonAdapter<T_448>} adapterForT_458 */
  constructor(adapterForT_458) {
    super ();
    this.#adapterForT_449 = adapterForT_458;
    return;
  }
};
/** @type {Array<string>} */
const hexDigits_459 = Object.freeze(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
/**
 * @param {number} cp_461
 * @param {globalThis.Array<string>} buffer_462
 */
function encodeHex4_460(cp_461, buffer_462) {
  const b0_463 = (cp_461 / 4096 | 0) & 15;
  const b1_464 = (cp_461 / 256 | 0) & 15;
  const b2_465 = (cp_461 / 16 | 0) & 15;
  const b3_466 = cp_461 & 15;
  let t_467 = listedGet_131(hexDigits_459, b0_463);
  buffer_462[0] += t_467;
  let t_468 = listedGet_131(hexDigits_459, b1_464);
  buffer_462[0] += t_468;
  let t_469 = listedGet_131(hexDigits_459, b2_465);
  buffer_462[0] += t_469;
  let t_470 = listedGet_131(hexDigits_459, b3_466);
  buffer_462[0] += t_470;
  return;
}
/**
 * @param {string} x_471
 * @param {globalThis.Array<string>} buffer_472
 */
function encodeJsonString_249(x_471, buffer_472) {
  let t_473;
  let t_474;
  let t_475;
  let t_476;
  buffer_472[0] += '"';
  let i_477 = 0;
  let emitted_478 = i_477;
  while (true) {
    if (!(x_471.length > i_477)) {
      break;
    }
    const cp_479 = stringGet_374(x_471, i_477);
    if (cp_479 === 8) {
      t_476 = "\\b";
    } else if (cp_479 === 9) {
      t_476 = "\\t";
    } else if (cp_479 === 10) {
      t_476 = "\\n";
    } else if (cp_479 === 12) {
      t_476 = "\\f";
    } else if (cp_479 === 13) {
      t_476 = "\\r";
    } else if (cp_479 === 34) {
      t_476 = '\\"';
    } else if (cp_479 === 92) {
      t_476 = "\\\\";
    } else {
      if (cp_479 < 32) {
        t_474 = true;
      } else {
        if (55296 <= cp_479) {
          t_473 = cp_479 <= 57343;
        } else {
          t_473 = false;
        }
        t_474 = t_473;
      }
      if (t_474) {
        t_475 = "\\u";
      } else {
        t_475 = "";
      }
      t_476 = t_475;
    }
    const replacement_480 = t_476;
    const nextI_481 = stringNext_482(x_471, i_477);
    if (replacement_480 !== "") {
      buffer_472[0] += x_471.substring(emitted_478, i_477);
      buffer_472[0] += replacement_480;
      if (replacement_480 === "\\u") {
        encodeHex4_460(cp_479, buffer_472);
      }
      emitted_478 = nextI_481;
    }
    i_477 = nextI_481;
  }
  buffer_472[0] += x_471.substring(emitted_478, i_477);
  buffer_472[0] += '"';
  return;
}
/**
 * @param {JsonProducer} out_484
 * @param {string} explanation_485
 */
function storeJsonError_483(out_484, explanation_485) {
  let t_486 = out_484.parseErrorReceiver;
  if (!(t_486 == null)) {
    t_486.explainJsonError(explanation_485);
  }
  return;
}
/**
 * @param {string} sourceText_487
 * @param {globalThis.number} i_488
 * @param {JsonProducer} out_489
 * @param {string} shortExplanation_490
 */
function expectedTokenError_373(sourceText_487, i_488, out_489, shortExplanation_490) {
  let t_491;
  let t_492;
  let gotten_493;
  if (sourceText_487.length > i_488) {
    t_491 = sourceText_487.length;
    t_492 = sourceText_487.substring(i_488, t_491);
    gotten_493 = "`" + t_492 + "`";
  } else {
    gotten_493 = "end-of-file";
  }
  storeJsonError_483(out_489, "Expected " + shortExplanation_490 + ", but got " + gotten_493);
  return;
}
/**
 * @param {string} sourceText_494
 * @param {globalThis.number} i_495
 * @returns {globalThis.number}
 */
function skipJsonSpaces_372(sourceText_494, i_495) {
  let t_496;
  let t_497;
  let t_498;
  let t_499;
  let t_500;
  while (true) {
    if (!(sourceText_494.length > i_495)) {
      break;
    }
    t_496 = stringGet_374(sourceText_494, i_495);
    if (t_496 === 9) {
      t_500 = true;
    } else {
      if (t_496 === 10) {
        t_499 = true;
      } else {
        if (t_496 === 13) {
          t_498 = true;
        } else {
          t_498 = t_496 === 32;
        }
        t_499 = t_498;
      }
      t_500 = t_499;
    }
    if (! t_500) {
      break;
    }
    t_497 = stringNext_482(sourceText_494, i_495);
    i_495 = t_497;
  }
  return i_495;
}
/**
 * @param {string} sourceText_502
 * @param {globalThis.number} start_503
 * @param {globalThis.number} limit_504
 * @returns {number}
 */
function decodeHexUnsigned_501(sourceText_502, start_503, limit_504) {
  let return_505;
  let t_506;
  let t_507;
  let t_508;
  let t_509;
  let t_510;
  fn_511: {
    let n_512 = 0;
    let i_513 = start_503;
    while (true) {
      if (!(i_513 - limit_504 < 0)) {
        break;
      }
      const cp_514 = stringGet_374(sourceText_502, i_513);
      if (48 <= cp_514) {
        t_507 = cp_514 <= 48;
      } else {
        t_507 = false;
      }
      if (t_507) {
        t_510 = cp_514 - 48 | 0;
      } else {
        if (65 <= cp_514) {
          t_508 = cp_514 <= 70;
        } else {
          t_508 = false;
        }
        if (t_508) {
          t_510 = (cp_514 - 65 | 0) + 10 | 0;
        } else {
          if (97 <= cp_514) {
            t_509 = cp_514 <= 102;
          } else {
            t_509 = false;
          }
          if (t_509) {
            t_510 = (cp_514 - 97 | 0) + 10 | 0;
          } else {
            return_505 = -1;
            break fn_511;
          }
        }
      }
      const digit_515 = t_510;
      n_512 = imul__516(n_512, 16) + digit_515 | 0;
      t_506 = stringNext_482(sourceText_502, i_513);
      i_513 = t_506;
    }
    return_505 = n_512;
  }
  return return_505;
}
/**
 * @param {string} sourceText_518
 * @param {globalThis.number} i_519
 * @param {globalThis.Array<string>} sb_520
 * @param {JsonProducer} errOut_521
 * @returns {globalThis.number}
 */
function parseJsonStringTo_517(sourceText_518, i_519, sb_520, errOut_521) {
  let return_522;
  let t_523;
  let t_524;
  let t_525;
  let t_526;
  let t_527;
  let t_528;
  let t_529;
  let t_530;
  let t_531;
  let t_532;
  let t_533;
  let t_534;
  let t_535;
  let t_536;
  let t_537;
  let t_538;
  let t_539;
  let t_540;
  let t_541;
  let t_542;
  let t_543;
  let t_544;
  fn_545: {
    if (!(sourceText_518.length > i_519)) {
      t_534 = true;
    } else {
      t_523 = stringGet_374(sourceText_518, i_519);
      t_534 = t_523 !== 34;
    }
    if (t_534) {
      expectedTokenError_373(sourceText_518, i_519, errOut_521, '"');
      return_522 = -1;
      break fn_545;
    }
    t_524 = stringNext_482(sourceText_518, i_519);
    i_519 = t_524;
    let leadSurrogate_546 = -1;
    let consumed_547 = i_519;
    while (true) {
      if (!(sourceText_518.length > i_519)) {
        break;
      }
      const cp_548 = stringGet_374(sourceText_518, i_519);
      if (cp_548 === 34) {
        break;
      }
      t_525 = stringNext_482(sourceText_518, i_519);
      let iNext_549 = t_525;
      const end_550 = sourceText_518.length;
      let needToFlush_551 = false;
      if (cp_548 !== 92) {
        t_540 = cp_548;
      } else {
        needToFlush_551 = true;
        if (!(sourceText_518.length > iNext_549)) {
          expectedTokenError_373(sourceText_518, iNext_549, errOut_521, "escape sequence");
          return_522 = -1;
          break fn_545;
        }
        const esc0_552 = stringGet_374(sourceText_518, iNext_549);
        t_526 = stringNext_482(sourceText_518, iNext_549);
        iNext_549 = t_526;
        if (esc0_552 === 34) {
          t_536 = true;
        } else {
          if (esc0_552 === 92) {
            t_535 = true;
          } else {
            t_535 = esc0_552 === 47;
          }
          t_536 = t_535;
        }
        if (t_536) {
          t_539 = esc0_552;
        } else if (esc0_552 === 98) {
          t_539 = 8;
        } else if (esc0_552 === 102) {
          t_539 = 12;
        } else if (esc0_552 === 110) {
          t_539 = 10;
        } else if (esc0_552 === 114) {
          t_539 = 13;
        } else if (esc0_552 === 116) {
          t_539 = 9;
        } else if (esc0_552 === 117) {
          if (stringHasAtLeast_553(sourceText_518, iNext_549, end_550, 4)) {
            const startHex_554 = iNext_549;
            t_527 = stringNext_482(sourceText_518, iNext_549);
            iNext_549 = t_527;
            t_528 = stringNext_482(sourceText_518, iNext_549);
            iNext_549 = t_528;
            t_529 = stringNext_482(sourceText_518, iNext_549);
            iNext_549 = t_529;
            t_530 = stringNext_482(sourceText_518, iNext_549);
            iNext_549 = t_530;
            t_531 = decodeHexUnsigned_501(sourceText_518, startHex_554, iNext_549);
            t_537 = t_531;
          } else {
            t_537 = -1;
          }
          const hex_555 = t_537;
          if (hex_555 < 0) {
            expectedTokenError_373(sourceText_518, iNext_549, errOut_521, "four hex digits");
            return_522 = -1;
            break fn_545;
          }
          t_538 = hex_555;
          t_539 = t_538;
        } else {
          expectedTokenError_373(sourceText_518, iNext_549, errOut_521, "escape sequence");
          return_522 = -1;
          break fn_545;
        }
        t_540 = t_539;
      }
      let decodedCp_556 = t_540;
      if (leadSurrogate_546 >= 0) {
        needToFlush_551 = true;
        const lead_557 = leadSurrogate_546;
        if (56320 <= decodedCp_556) {
          t_541 = decodedCp_556 <= 57343;
        } else {
          t_541 = false;
        }
        if (t_541) {
          leadSurrogate_546 = -1;
          decodedCp_556 = 65536 +(imul__516(lead_557 - 55296 | 0, 1024) |(decodedCp_556 - 56320 | 0)) | 0;
        }
      } else {
        if (55296 <= decodedCp_556) {
          t_542 = decodedCp_556 <= 56319;
        } else {
          t_542 = false;
        }
        if (t_542) {
          needToFlush_551 = true;
        }
      }
      if (needToFlush_551) {
        sb_520[0] += sourceText_518.substring(consumed_547, i_519);
        if (leadSurrogate_546 >= 0) {
          try {
            stringBuilderAppendCodePoint_558(sb_520, leadSurrogate_546);
          } catch {
            throw Error();
          }
        }
        if (55296 <= decodedCp_556) {
          t_543 = decodedCp_556 <= 56319;
        } else {
          t_543 = false;
        }
        if (t_543) {
          leadSurrogate_546 = decodedCp_556;
        } else {
          leadSurrogate_546 = -1;
          try {
            stringBuilderAppendCodePoint_558(sb_520, decodedCp_556);
          } catch {
            throw Error();
          }
        }
        consumed_547 = iNext_549;
      }
      i_519 = iNext_549;
    }
    if (!(sourceText_518.length > i_519)) {
      t_544 = true;
    } else {
      t_532 = stringGet_374(sourceText_518, i_519);
      t_544 = t_532 !== 34;
    }
    if (t_544) {
      expectedTokenError_373(sourceText_518, i_519, errOut_521, '"');
      return_522 = -1;
    } else {
      if (leadSurrogate_546 >= 0) {
        try {
          stringBuilderAppendCodePoint_558(sb_520, leadSurrogate_546);
        } catch {
          throw Error();
        }
      } else {
        sb_520[0] += sourceText_518.substring(consumed_547, i_519);
      }
      t_533 = stringNext_482(sourceText_518, i_519);
      i_519 = t_533;
      return_522 = i_519;
    }
  }
  return return_522;
}
/**
 * @param {string} sourceText_559
 * @param {globalThis.number} i_560
 * @param {JsonProducer} out_561
 * @returns {globalThis.number}
 */
function parseJsonObject_375(sourceText_559, i_560, out_561) {
  let return_562;
  let t_563;
  let t_564;
  let t_565;
  let t_566;
  let t_567;
  let t_568;
  let t_569;
  let t_570;
  let t_571;
  let t_572;
  let t_573;
  let t_574;
  let t_575;
  let t_576;
  let t_577;
  let t_578;
  let t_579;
  let t_580;
  let t_581;
  let t_582;
  let t_583;
  fn_584: {
    try {
      if (!(sourceText_559.length > i_560)) {
        t_576 = true;
      } else {
        t_563 = stringGet_374(sourceText_559, i_560);
        t_576 = t_563 !== 123;
      }
      if (t_576) {
        expectedTokenError_373(sourceText_559, i_560, out_561, "'{'");
        return_562 = -1;
        break fn_584;
      }
      out_561.startObject();
      t_564 = stringNext_482(sourceText_559, i_560);
      t_565 = skipJsonSpaces_372(sourceText_559, t_564);
      i_560 = t_565;
      if (sourceText_559.length > i_560) {
        t_566 = stringGet_374(sourceText_559, i_560);
        t_577 = t_566 !== 125;
      } else {
        t_577 = false;
      }
      if (t_577) {
        while (true) {
          const keyBuffer_585 = [""];
          const afterKey_586 = parseJsonStringTo_517(sourceText_559, i_560, keyBuffer_585, out_561);
          if (!(afterKey_586 >= 0)) {
            return_562 = -1;
            break fn_584;
          }
          t_567 = keyBuffer_585[0];
          out_561.objectKey(t_567);
          try {
            t_578 = requireStringIndex_587(afterKey_586);
            t_579 = t_578;
          } catch {
            t_579 = panic_312();
          }
          t_568 = skipJsonSpaces_372(sourceText_559, t_579);
          i_560 = t_568;
          if (sourceText_559.length > i_560) {
            t_569 = stringGet_374(sourceText_559, i_560);
            t_580 = t_569 === 58;
          } else {
            t_580 = false;
          }
          if (t_580) {
            t_570 = stringNext_482(sourceText_559, i_560);
            i_560 = t_570;
            const afterPropertyValue_588 = parseJsonValue_363(sourceText_559, i_560, out_561);
            if (!(afterPropertyValue_588 >= 0)) {
              return_562 = -1;
              break fn_584;
            }
            t_581 = requireStringIndex_587(afterPropertyValue_588);
            i_560 = t_581;
          } else {
            expectedTokenError_373(sourceText_559, i_560, out_561, "':'");
            return_562 = -1;
            break fn_584;
          }
          t_571 = skipJsonSpaces_372(sourceText_559, i_560);
          i_560 = t_571;
          if (sourceText_559.length > i_560) {
            t_572 = stringGet_374(sourceText_559, i_560);
            t_582 = t_572 === 44;
          } else {
            t_582 = false;
          }
          if (t_582) {
            t_573 = stringNext_482(sourceText_559, i_560);
            t_574 = skipJsonSpaces_372(sourceText_559, t_573);
            i_560 = t_574;
          } else {
            break;
          }
        }
      }
      if (sourceText_559.length > i_560) {
        t_575 = stringGet_374(sourceText_559, i_560);
        t_583 = t_575 === 125;
      } else {
        t_583 = false;
      }
      if (t_583) {
        out_561.endObject();
        return_562 = stringNext_482(sourceText_559, i_560);
      } else {
        expectedTokenError_373(sourceText_559, i_560, out_561, "'}'");
        return_562 = -1;
      }
    } catch {
      return_562 = panic_312();
    }
  }
  return return_562;
}
/**
 * @param {string} sourceText_589
 * @param {globalThis.number} i_590
 * @param {JsonProducer} out_591
 * @returns {globalThis.number}
 */
function parseJsonArray_376(sourceText_589, i_590, out_591) {
  let return_592;
  let t_593;
  let t_594;
  let t_595;
  let t_596;
  let t_597;
  let t_598;
  let t_599;
  let t_600;
  let t_601;
  let t_602;
  let t_603;
  let t_604;
  let t_605;
  let t_606;
  fn_607: {
    try {
      if (!(sourceText_589.length > i_590)) {
        t_602 = true;
      } else {
        t_593 = stringGet_374(sourceText_589, i_590);
        t_602 = t_593 !== 91;
      }
      if (t_602) {
        expectedTokenError_373(sourceText_589, i_590, out_591, "'['");
        return_592 = -1;
        break fn_607;
      }
      out_591.startArray();
      t_594 = stringNext_482(sourceText_589, i_590);
      t_595 = skipJsonSpaces_372(sourceText_589, t_594);
      i_590 = t_595;
      if (sourceText_589.length > i_590) {
        t_596 = stringGet_374(sourceText_589, i_590);
        t_603 = t_596 !== 93;
      } else {
        t_603 = false;
      }
      if (t_603) {
        while (true) {
          const afterElementValue_608 = parseJsonValue_363(sourceText_589, i_590, out_591);
          if (!(afterElementValue_608 >= 0)) {
            return_592 = -1;
            break fn_607;
          }
          t_604 = requireStringIndex_587(afterElementValue_608);
          i_590 = t_604;
          t_597 = skipJsonSpaces_372(sourceText_589, i_590);
          i_590 = t_597;
          if (sourceText_589.length > i_590) {
            t_598 = stringGet_374(sourceText_589, i_590);
            t_605 = t_598 === 44;
          } else {
            t_605 = false;
          }
          if (t_605) {
            t_599 = stringNext_482(sourceText_589, i_590);
            t_600 = skipJsonSpaces_372(sourceText_589, t_599);
            i_590 = t_600;
          } else {
            break;
          }
        }
      }
      if (sourceText_589.length > i_590) {
        t_601 = stringGet_374(sourceText_589, i_590);
        t_606 = t_601 === 93;
      } else {
        t_606 = false;
      }
      if (t_606) {
        out_591.endArray();
        return_592 = stringNext_482(sourceText_589, i_590);
      } else {
        expectedTokenError_373(sourceText_589, i_590, out_591, "']'");
        return_592 = -1;
      }
    } catch {
      return_592 = panic_312();
    }
  }
  return return_592;
}
/**
 * @param {string} sourceText_609
 * @param {globalThis.number} i_610
 * @param {JsonProducer} out_611
 * @returns {globalThis.number}
 */
function parseJsonString_377(sourceText_609, i_610, out_611) {
  let t_612;
  const sb_613 = [""];
  const after_614 = parseJsonStringTo_517(sourceText_609, i_610, sb_613, out_611);
  if (after_614 >= 0) {
    t_612 = sb_613[0];
    out_611.stringValue(t_612);
  }
  return after_614;
}
/**
 * @param {string} string_616
 * @param {globalThis.number} inString_617
 * @param {string} substring_618
 * @returns {globalThis.number}
 */
function afterSubstring_615(string_616, inString_617, substring_618) {
  let return_619;
  let t_620;
  let t_621;
  fn_622: {
    let i_623 = inString_617;
    let j_624 = 0;
    while (true) {
      if (!(substring_618.length > j_624)) {
        break;
      }
      if (!(string_616.length > i_623)) {
        return_619 = -1;
        break fn_622;
      }
      if (stringGet_374(string_616, i_623) !== stringGet_374(substring_618, j_624)) {
        return_619 = -1;
        break fn_622;
      }
      t_620 = stringNext_482(string_616, i_623);
      i_623 = t_620;
      t_621 = stringNext_482(substring_618, j_624);
      j_624 = t_621;
    }
    return_619 = i_623;
  }
  return return_619;
}
/**
 * @param {string} sourceText_625
 * @param {globalThis.number} i_626
 * @param {JsonProducer} out_627
 * @returns {globalThis.number}
 */
function parseJsonBoolean_378(sourceText_625, i_626, out_627) {
  let return_628;
  let t_629;
  fn_630: {
    let ch0_631;
    if (sourceText_625.length > i_626) {
      t_629 = stringGet_374(sourceText_625, i_626);
      ch0_631 = t_629;
    } else {
      ch0_631 = 0;
    }
    const end_632 = sourceText_625.length;
    let keyword_633;
    let n_634;
    if (ch0_631 === 102) {
      keyword_633 = "false";
      n_634 = 5;
    } else if (ch0_631 === 116) {
      keyword_633 = "true";
      n_634 = 4;
    } else {
      keyword_633 = null;
      n_634 = 0;
    }
    if (!(keyword_633 == null)) {
      const keyword_635 = keyword_633;
      if (stringHasAtLeast_553(sourceText_625, i_626, end_632, n_634)) {
        const after_636 = afterSubstring_615(sourceText_625, i_626, keyword_635);
        if (after_636 >= 0) {
          return_628 = requireStringIndex_587(after_636);
          out_627.booleanValue(n_634 === 4);
          break fn_630;
        }
      }
    }
    expectedTokenError_373(sourceText_625, i_626, out_627, "`false` or `true`");
    return_628 = -1;
  }
  return return_628;
}
/**
 * @param {string} sourceText_637
 * @param {globalThis.number} i_638
 * @param {JsonProducer} out_639
 * @returns {globalThis.number}
 */
function parseJsonNull_379(sourceText_637, i_638, out_639) {
  let return_640;
  fn_641: {
    const after_642 = afterSubstring_615(sourceText_637, i_638, "null");
    if (after_642 >= 0) {
      return_640 = requireStringIndex_587(after_642);
      out_639.nullValue();
      break fn_641;
    }
    expectedTokenError_373(sourceText_637, i_638, out_639, "`null`");
    return_640 = -1;
  }
  return return_640;
}
/**
 * @param {string} sourceText_643
 * @param {globalThis.number} i_644
 * @param {JsonProducer} out_645
 * @returns {globalThis.number}
 */
function parseJsonNumber_380(sourceText_643, i_644, out_645) {
  let return_646;
  let t_647;
  let t_648;
  let t_649;
  let t_650;
  let t_651;
  let t_652;
  let t_653;
  let t_654;
  let t_655;
  let t_656;
  let t_657;
  let t_658;
  let t_659;
  let t_660;
  let t_661;
  let t_662;
  let t_663;
  let t_664;
  let t_665;
  let t_666;
  let t_667;
  let t_668;
  let t_669;
  let t_670;
  let t_671;
  let t_672;
  let t_673;
  let t_674;
  let t_675;
  let t_676;
  let t_677;
  let t_678;
  let t_679;
  let t_680;
  let t_681;
  let t_682;
  let t_683;
  let t_684;
  let t_685;
  fn_686: {
    let isNegative_687 = false;
    const startOfNumber_688 = i_644;
    if (sourceText_643.length > i_644) {
      t_647 = stringGet_374(sourceText_643, i_644);
      t_665 = t_647 === 45;
    } else {
      t_665 = false;
    }
    if (t_665) {
      isNegative_687 = true;
      t_648 = stringNext_482(sourceText_643, i_644);
      i_644 = t_648;
    }
    let digit0_689;
    if (sourceText_643.length > i_644) {
      t_649 = stringGet_374(sourceText_643, i_644);
      digit0_689 = t_649;
    } else {
      digit0_689 = -1;
    }
    if (digit0_689 < 48) {
      t_666 = true;
    } else {
      t_666 = 57 < digit0_689;
    }
    if (t_666) {
      let error_690;
      if (! isNegative_687) {
        t_667 = digit0_689 !== 46;
      } else {
        t_667 = false;
      }
      if (t_667) {
        error_690 = "JSON value";
      } else {
        error_690 = "digit";
      }
      expectedTokenError_373(sourceText_643, i_644, out_645, error_690);
      return_646 = -1;
      break fn_686;
    }
    t_650 = stringNext_482(sourceText_643, i_644);
    i_644 = t_650;
    let nDigits_691 = 1;
    t_651 = digit0_689 - 48 | 0;
    let tentativeFloat64_692 = t_651;
    t_652 = BigInt(digit0_689 - 48 | 0);
    let tentativeInt64_693 = t_652;
    let overflowInt64_694 = false;
    if (48 !== digit0_689) {
      while (true) {
        if (!(sourceText_643.length > i_644)) {
          break;
        }
        const possibleDigit_695 = stringGet_374(sourceText_643, i_644);
        if (48 <= possibleDigit_695) {
          t_668 = possibleDigit_695 <= 57;
        } else {
          t_668 = false;
        }
        if (t_668) {
          t_653 = stringNext_482(sourceText_643, i_644);
          i_644 = t_653;
          nDigits_691 = nDigits_691 + 1 | 0;
          const nextDigit_696 = possibleDigit_695 - 48 | 0;
          t_669 = tentativeFloat64_692 * 10.0;
          t_654 = nextDigit_696;
          tentativeFloat64_692 = t_669 + t_654;
          const oldInt64_697 = tentativeInt64_693;
          t_670 = clampInt64__698(tentativeInt64_693 * BigInt("10"));
          t_655 = BigInt(nextDigit_696);
          tentativeInt64_693 = clampInt64__698(t_670 + t_655);
          if (tentativeInt64_693 < oldInt64_697) {
            if (clampInt64__698(BigInt("-9223372036854775808") - oldInt64_697) === clampInt64__698(- BigInt(nextDigit_696))) {
              if (isNegative_687) {
                t_671 = oldInt64_697 > BigInt("0");
              } else {
                t_671 = false;
              }
              t_672 = t_671;
            } else {
              t_672 = false;
            }
            if (! t_672) {
              overflowInt64_694 = true;
            }
          }
        } else {
          break;
        }
      }
    }
    let nDigitsAfterPoint_699 = 0;
    if (sourceText_643.length > i_644) {
      t_656 = stringGet_374(sourceText_643, i_644);
      t_673 = 46 === t_656;
    } else {
      t_673 = false;
    }
    if (t_673) {
      t_657 = stringNext_482(sourceText_643, i_644);
      i_644 = t_657;
      const afterPoint_700 = i_644;
      while (true) {
        if (!(sourceText_643.length > i_644)) {
          break;
        }
        const possibleDigit_701 = stringGet_374(sourceText_643, i_644);
        if (48 <= possibleDigit_701) {
          t_674 = possibleDigit_701 <= 57;
        } else {
          t_674 = false;
        }
        if (t_674) {
          t_658 = stringNext_482(sourceText_643, i_644);
          i_644 = t_658;
          nDigits_691 = nDigits_691 + 1 | 0;
          nDigitsAfterPoint_699 = nDigitsAfterPoint_699 + 1 | 0;
          t_675 = tentativeFloat64_692 * 10.0;
          t_659 = possibleDigit_701 - 48 | 0;
          tentativeFloat64_692 = t_675 + t_659;
        } else {
          break;
        }
      }
      if (i_644 === afterPoint_700) {
        expectedTokenError_373(sourceText_643, i_644, out_645, "digit");
        return_646 = -1;
        break fn_686;
      }
    }
    let nExponentDigits_702 = 0;
    if (sourceText_643.length > i_644) {
      t_660 = stringGet_374(sourceText_643, i_644);
      t_676 = 101 ===(t_660 | 32);
    } else {
      t_676 = false;
    }
    if (t_676) {
      t_661 = stringNext_482(sourceText_643, i_644);
      i_644 = t_661;
      if (!(sourceText_643.length > i_644)) {
        expectedTokenError_373(sourceText_643, i_644, out_645, "sign or digit");
        return_646 = -1;
        break fn_686;
      }
      const afterE_703 = stringGet_374(sourceText_643, i_644);
      if (afterE_703 === 43) {
        t_677 = true;
      } else {
        t_677 = afterE_703 === 45;
      }
      if (t_677) {
        t_662 = stringNext_482(sourceText_643, i_644);
        i_644 = t_662;
      }
      while (true) {
        if (!(sourceText_643.length > i_644)) {
          break;
        }
        const possibleDigit_704 = stringGet_374(sourceText_643, i_644);
        if (48 <= possibleDigit_704) {
          t_678 = possibleDigit_704 <= 57;
        } else {
          t_678 = false;
        }
        if (t_678) {
          t_663 = stringNext_482(sourceText_643, i_644);
          i_644 = t_663;
          nExponentDigits_702 = nExponentDigits_702 + 1 | 0;
        } else {
          break;
        }
      }
      if (nExponentDigits_702 === 0) {
        expectedTokenError_373(sourceText_643, i_644, out_645, "exponent digit");
        return_646 = -1;
        break fn_686;
      }
    }
    const afterExponent_705 = i_644;
    if (nExponentDigits_702 === 0) {
      if (nDigitsAfterPoint_699 === 0) {
        t_679 = ! overflowInt64_694;
      } else {
        t_679 = false;
      }
      t_680 = t_679;
    } else {
      t_680 = false;
    }
    if (t_680) {
      let value_706;
      if (isNegative_687) {
        value_706 = clampInt64__698(- tentativeInt64_693);
      } else {
        value_706 = tentativeInt64_693;
      }
      if (BigInt("-2147483648") <= value_706) {
        t_681 = value_706 <= BigInt("2147483647");
      } else {
        t_681 = false;
      }
      if (t_681) {
        t_664 = int64ToInt32Unsafe_707(value_706);
        out_645.int32Value(t_664);
      } else {
        out_645.int64Value(value_706);
      }
      return_646 = i_644;
      break fn_686;
    }
    const numericTokenString_708 = sourceText_643.substring(startOfNumber_688, i_644);
    let doubleValue_709 = NaN;
    if (nExponentDigits_702 !== 0) {
      t_682 = true;
    } else {
      t_682 = nDigitsAfterPoint_699 !== 0;
    }
    if (t_682) {
      try {
        t_683 = stringToFloat64_210(numericTokenString_708);
        doubleValue_709 = t_683;
      } catch {
      }
    }
    if (cmpFloat__710(doubleValue_709, -Infinity) !== 0) {
      if (cmpFloat__710(doubleValue_709, Infinity) !== 0) {
        t_684 = cmpFloat__710(doubleValue_709, NaN) !== 0;
      } else {
        t_684 = false;
      }
      t_685 = t_684;
    } else {
      t_685 = false;
    }
    if (t_685) {
      out_645.float64Value(doubleValue_709);
    } else {
      out_645.numericTokenValue(numericTokenString_708);
    }
    return_646 = i_644;
  }
  return return_646;
}
/**
 * @param {string} sourceText_711
 * @param {JsonProducer} out_712
 */
export function parseJsonToProducer(sourceText_711, out_712) {
  let t_713;
  let t_714;
  let t_715;
  let t_716;
  let t_717;
  let t_718;
  let i_719 = 0;
  const afterValue_720 = parseJsonValue_363(sourceText_711, i_719, out_712);
  if (afterValue_720 >= 0) {
    t_718 = requireStringIndex_587(afterValue_720);
    t_713 = skipJsonSpaces_372(sourceText_711, t_718);
    i_719 = t_713;
    if (sourceText_711.length > i_719) {
      t_714 = out_712.parseErrorReceiver;
      t_717 = !(t_714 == null);
    } else {
      t_717 = false;
    }
    if (t_717) {
      t_715 = sourceText_711.length;
      t_716 = sourceText_711.substring(i_719, t_715);
      storeJsonError_483(out_712, "Extraneous JSON `" + t_716 + "`");
    }
  }
  return;
};
/**
 * @param {string} sourceText_721
 * @returns {JsonSyntaxTree}
 */
export function parseJson(sourceText_721) {
  const p_722 = new JsonSyntaxTreeProducer();
  parseJsonToProducer(sourceText_721, p_722);
  return p_722.toJsonSyntaxTree();
};
/** @returns {JsonAdapter<boolean>} */
export function booleanJsonAdapter() {
  return new BooleanJsonAdapter_388();
};
/** @returns {JsonAdapter<number>} */
export function float64JsonAdapter() {
  return new Float64JsonAdapter_396();
};
/** @returns {JsonAdapter<number>} */
export function int32JsonAdapter() {
  return new Int32JsonAdapter_404();
};
/** @returns {JsonAdapter<bigint>} */
export function int64JsonAdapter() {
  return new Int64JsonAdapter_412();
};
/** @returns {JsonAdapter<string>} */
export function stringJsonAdapter() {
  return new StringJsonAdapter_420();
};
/**
 * @template {unknown} T_724
 * @param {JsonAdapter<T_724>} adapterForT_723
 * @returns {JsonAdapter<Array<T_724>>}
 */
export function listJsonAdapter(adapterForT_723) {
  return new ListJsonAdapter_428(adapterForT_723);
};
