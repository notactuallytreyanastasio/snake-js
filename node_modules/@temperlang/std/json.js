const {
  imul: imul__525
} = globalThis.Math;
import {
  type as type__106, requireInstanceOf as requireInstanceOf__320, clampInt64 as clampInt64__707, cmpFloat as cmpFloat__719, mappedGetOr as mappedGetOr_138, listedGet as listedGet_140, mappedForEach as mappedForEach_152, int64ToInt32 as int64ToInt32_192, int64ToFloat64 as int64ToFloat64_195, float64ToString as float64ToString_202, float64ToInt32 as float64ToInt32_204, float64ToInt64 as float64ToInt64_206, stringToInt32 as stringToInt32_218, stringToFloat64 as stringToFloat64_219, stringToInt64 as stringToInt64_224, listBuilderAdd as listBuilderAdd_236, listedGetOr as listedGetOr_240, listBuilderSet as listBuilderSet_248, listBuilderRemoveLast as listBuilderRemoveLast_253, mapBuilderConstructor as mapBuilderConstructor_314, panic as panic_321, mappedGet as mappedGet_326, mapBuilderSet as mapBuilderSet_327, listBuilderToList as listBuilderToList_333, mappedToMap as mappedToMap_334, stringGet as stringGet_383, stringNext as stringNext_491, stringHasAtLeast as stringHasAtLeast_562, stringBuilderAppendCodePoint as stringBuilderAppendCodePoint_567, requireStringIndex as requireStringIndex_596, int64ToInt32Unsafe as int64ToInt32Unsafe_716
} from "@temperlang/core";
export class InterchangeContext extends type__106() {
  /**
   * @param {string} headerName_105
   * @returns {string | null}
   */
  getHeader(headerName_105) {
    null;
  }
};
export class NullInterchangeContext extends type__106(InterchangeContext) {
  /**
   * @param {string} headerName_108
   * @returns {string | null}
   */
  getHeader(headerName_108) {
    return null;
  }
  /** @type {NullInterchangeContext} */
  static #instance_109 = new NullInterchangeContext();
  /** @returns {NullInterchangeContext} */
  static get instance() {
    return this.#instance_109;
  }
  constructor() {
    super ();
    return;
  }
};
export class JsonProducer extends type__106() {
  startObject() {
    null;
  }
  endObject() {
    null;
  }
  /** @param {string} key_114 */
  objectKey(key_114) {
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
  /** @param {boolean} x_119 */
  booleanValue(x_119) {
    null;
  }
  /** @param {number} x_121 */
  int32Value(x_121) {
    null;
  }
  /** @param {bigint} x_123 */
  int64Value(x_123) {
    null;
  }
  /** @param {number} x_125 */
  float64Value(x_125) {
    null;
  }
  /** @param {string} x_127 */
  numericTokenValue(x_127) {
    null;
  }
  /** @param {string} x_129 */
  stringValue(x_129) {
    null;
  }
  /** @returns {JsonParseErrorReceiver | null} */
  get parseErrorReceiver() {
    return null;
  }
};
export class JsonSyntaxTree extends type__106() {
  /** @param {JsonProducer} p_132 */
  produce(p_132) {
    null;
  }
};
export class JsonObject extends type__106(JsonSyntaxTree) {
  /** @type {Map<string, Array<JsonSyntaxTree>>} */
  #properties_133;
  /**
   * @param {string} propertyKey_135
   * @returns {JsonSyntaxTree | null}
   */
  propertyValueOrNull(propertyKey_135) {
    let return_136;
    const treeList_137 = mappedGetOr_138(this.#properties_133, propertyKey_135, Object.freeze([]));
    const lastIndex_139 = treeList_137.length - 1 | 0;
    if (lastIndex_139 >= 0) {
      return_136 = listedGet_140(treeList_137, lastIndex_139);
    } else {
      return_136 = null;
    }
    return return_136;
  }
  /**
   * @param {string} propertyKey_142
   * @returns {JsonSyntaxTree}
   */
  propertyValueOrBubble(propertyKey_142) {
    let return_143;
    let t_144 = this.propertyValueOrNull(propertyKey_142);
    if (t_144 == null) {
      throw Error();
    } else {
      return_143 = t_144;
    }
    return return_143;
  }
  /** @param {JsonProducer} p_146 */
  produce(p_146) {
    p_146.startObject();
    function fn_147(k_148, vs_149) {
      function fn_150(v_151) {
        p_146.objectKey(k_148);
        v_151.produce(p_146);
        return;
      }
      vs_149.forEach(fn_150);
      return;
    }
    mappedForEach_152(this.#properties_133, fn_147);
    p_146.endObject();
    return;
  }
  /** @param {Map<string, Array<JsonSyntaxTree>>} properties_153 */
  constructor(properties_153) {
    super ();
    this.#properties_133 = properties_153;
    return;
  }
  /** @returns {Map<string, Array<JsonSyntaxTree>>} */
  get properties() {
    return this.#properties_133;
  }
};
export class JsonArray extends type__106(JsonSyntaxTree) {
  /** @type {Array<JsonSyntaxTree>} */
  #elements_155;
  /** @param {JsonProducer} p_157 */
  produce(p_157) {
    p_157.startArray();
    function fn_158(v_159) {
      v_159.produce(p_157);
      return;
    }
    this.#elements_155.forEach(fn_158);
    p_157.endArray();
    return;
  }
  /** @param {Array<JsonSyntaxTree>} elements_160 */
  constructor(elements_160) {
    super ();
    this.#elements_155 = elements_160;
    return;
  }
  /** @returns {Array<JsonSyntaxTree>} */
  get elements() {
    return this.#elements_155;
  }
};
export class JsonBoolean extends type__106(JsonSyntaxTree) {
  /** @type {boolean} */
  #content_162;
  /** @param {JsonProducer} p_164 */
  produce(p_164) {
    p_164.booleanValue(this.#content_162);
    return;
  }
  /** @param {boolean} content_165 */
  constructor(content_165) {
    super ();
    this.#content_162 = content_165;
    return;
  }
  /** @returns {boolean} */
  get content() {
    return this.#content_162;
  }
};
export class JsonNull extends type__106(JsonSyntaxTree) {
  /** @param {JsonProducer} p_168 */
  produce(p_168) {
    p_168.nullValue();
    return;
  }
  constructor() {
    super ();
    return;
  }
};
export class JsonString extends type__106(JsonSyntaxTree) {
  /** @type {string} */
  #content_169;
  /** @param {JsonProducer} p_171 */
  produce(p_171) {
    p_171.stringValue(this.#content_169);
    return;
  }
  /** @param {string} content_172 */
  constructor(content_172) {
    super ();
    this.#content_169 = content_172;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_169;
  }
};
export class JsonNumeric extends type__106(JsonSyntaxTree) {
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
export class JsonInt32 extends type__106(JsonNumeric) {
  /** @type {number} */
  #content_178;
  /** @param {JsonProducer} p_180 */
  produce(p_180) {
    p_180.int32Value(this.#content_178);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_178.toString();
  }
  /** @returns {number} */
  asInt32() {
    return this.#content_178;
  }
  /** @returns {bigint} */
  asInt64() {
    return BigInt(this.#content_178);
  }
  /** @returns {number} */
  asFloat64() {
    return this.#content_178;
  }
  /** @param {number} content_185 */
  constructor(content_185) {
    super ();
    this.#content_178 = content_185;
    return;
  }
  /** @returns {number} */
  get content() {
    return this.#content_178;
  }
};
export class JsonInt64 extends type__106(JsonNumeric) {
  /** @type {bigint} */
  #content_187;
  /** @param {JsonProducer} p_189 */
  produce(p_189) {
    p_189.int64Value(this.#content_187);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_187.toString();
  }
  /** @returns {number} */
  asInt32() {
    return int64ToInt32_192(this.#content_187);
  }
  /** @returns {bigint} */
  asInt64() {
    return this.#content_187;
  }
  /** @returns {number} */
  asFloat64() {
    return int64ToFloat64_195(this.#content_187);
  }
  /** @param {bigint} content_196 */
  constructor(content_196) {
    super ();
    this.#content_187 = content_196;
    return;
  }
  /** @returns {bigint} */
  get content() {
    return this.#content_187;
  }
};
export class JsonFloat64 extends type__106(JsonNumeric) {
  /** @type {number} */
  #content_198;
  /** @param {JsonProducer} p_200 */
  produce(p_200) {
    p_200.float64Value(this.#content_198);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return float64ToString_202(this.#content_198);
  }
  /** @returns {number} */
  asInt32() {
    return float64ToInt32_204(this.#content_198);
  }
  /** @returns {bigint} */
  asInt64() {
    return float64ToInt64_206(this.#content_198);
  }
  /** @returns {number} */
  asFloat64() {
    return this.#content_198;
  }
  /** @param {number} content_208 */
  constructor(content_208) {
    super ();
    this.#content_198 = content_208;
    return;
  }
  /** @returns {number} */
  get content() {
    return this.#content_198;
  }
};
export class JsonNumericToken extends type__106(JsonNumeric) {
  /** @type {string} */
  #content_210;
  /** @param {JsonProducer} p_212 */
  produce(p_212) {
    p_212.numericTokenValue(this.#content_210);
    return;
  }
  /** @returns {string} */
  asJsonNumericToken() {
    return this.#content_210;
  }
  /** @returns {number} */
  asInt32() {
    let return_215;
    let t_216;
    let t_217;
    try {
      t_216 = stringToInt32_218(this.#content_210);
      return_215 = t_216;
    } catch {
      t_217 = stringToFloat64_219(this.#content_210);
      return_215 = float64ToInt32_204(t_217);
    }
    return return_215;
  }
  /** @returns {bigint} */
  asInt64() {
    let return_221;
    let t_222;
    let t_223;
    try {
      t_222 = stringToInt64_224(this.#content_210);
      return_221 = t_222;
    } catch {
      t_223 = stringToFloat64_219(this.#content_210);
      return_221 = float64ToInt64_206(t_223);
    }
    return return_221;
  }
  /** @returns {number} */
  asFloat64() {
    return stringToFloat64_219(this.#content_210);
  }
  /** @param {string} content_226 */
  constructor(content_226) {
    super ();
    this.#content_210 = content_226;
    return;
  }
  /** @returns {string} */
  get content() {
    return this.#content_210;
  }
};
export class JsonTextProducer extends type__106(JsonProducer) {
  /** @type {InterchangeContext} */
  #interchangeContext_228;
  /** @type {globalThis.Array<string>} */
  #buffer_229;
  /** @type {Array<number>} */
  #stack_230;
  /** @type {boolean} */
  #wellFormed_231;
  /** @param {InterchangeContext | null} [interchangeContext_232] */
  constructor(interchangeContext_232) {
    super ();
    let interchangeContext_233;
    if (interchangeContext_232 == null) {
      interchangeContext_233 = NullInterchangeContext.instance;
    } else {
      interchangeContext_233 = interchangeContext_232;
    }
    this.#interchangeContext_228 = interchangeContext_233;
    let t_234 = [""];
    this.#buffer_229 = t_234;
    let t_235 = [];
    this.#stack_230 = t_235;
    listBuilderAdd_236(this.#stack_230, 5);
    this.#wellFormed_231 = true;
    return;
  }
  /** @returns {number} */
  #state_238() {
    let t_239 = this.#stack_230.length;
    return listedGetOr_240(this.#stack_230, t_239 - 1 | 0, -1);
  }
  #beforeValue_242() {
    let t_243;
    let t_244;
    let t_245;
    let t_246;
    const currentState_247 = this.#state_238();
    if (currentState_247 === 3) {
      t_243 = this.#stack_230.length;
      listBuilderSet_248(this.#stack_230, t_243 - 1 | 0, 4);
    } else if (currentState_247 === 4) {
      this.#buffer_229[0] += ",";
    } else if (currentState_247 === 1) {
      t_244 = this.#stack_230.length;
      listBuilderSet_248(this.#stack_230, t_244 - 1 | 0, 2);
    } else if (currentState_247 === 5) {
      t_245 = this.#stack_230.length;
      listBuilderSet_248(this.#stack_230, t_245 - 1 | 0, 6);
    } else {
      if (currentState_247 === 6) {
        t_246 = true;
      } else {
        t_246 = currentState_247 === 2;
      }
      if (t_246) {
        this.#wellFormed_231 = false;
      }
    }
    return;
  }
  startObject() {
    this.#beforeValue_242();
    this.#buffer_229[0] += "{";
    listBuilderAdd_236(this.#stack_230, 0);
    return;
  }
  endObject() {
    let t_251;
    this.#buffer_229[0] += "}";
    const currentState_252 = this.#state_238();
    if (0 === currentState_252) {
      t_251 = true;
    } else {
      t_251 = 2 === currentState_252;
    }
    if (t_251) {
      listBuilderRemoveLast_253(this.#stack_230);
    } else {
      this.#wellFormed_231 = false;
    }
    return;
  }
  /** @param {string} key_255 */
  objectKey(key_255) {
    let t_256;
    const currentState_257 = this.#state_238();
    if (!(currentState_257 === 0)) {
      if (currentState_257 === 2) {
        this.#buffer_229[0] += ",";
      } else {
        this.#wellFormed_231 = false;
      }
    }
    encodeJsonString_258(key_255, this.#buffer_229);
    this.#buffer_229[0] += ":";
    if (currentState_257 >= 0) {
      t_256 = this.#stack_230.length;
      listBuilderSet_248(this.#stack_230, t_256 - 1 | 0, 1);
    }
    return;
  }
  startArray() {
    this.#beforeValue_242();
    this.#buffer_229[0] += "[";
    listBuilderAdd_236(this.#stack_230, 3);
    return;
  }
  endArray() {
    let t_261;
    this.#buffer_229[0] += "]";
    const currentState_262 = this.#state_238();
    if (3 === currentState_262) {
      t_261 = true;
    } else {
      t_261 = 4 === currentState_262;
    }
    if (t_261) {
      listBuilderRemoveLast_253(this.#stack_230);
    } else {
      this.#wellFormed_231 = false;
    }
    return;
  }
  nullValue() {
    this.#beforeValue_242();
    this.#buffer_229[0] += "null";
    return;
  }
  /** @param {boolean} x_265 */
  booleanValue(x_265) {
    let t_266;
    this.#beforeValue_242();
    if (x_265) {
      t_266 = "true";
    } else {
      t_266 = "false";
    }
    this.#buffer_229[0] += t_266;
    return;
  }
  /** @param {number} x_268 */
  int32Value(x_268) {
    this.#beforeValue_242();
    let t_269 = x_268.toString();
    this.#buffer_229[0] += t_269;
    return;
  }
  /** @param {bigint} x_271 */
  int64Value(x_271) {
    this.#beforeValue_242();
    let t_272 = x_271.toString();
    this.#buffer_229[0] += t_272;
    return;
  }
  /** @param {number} x_274 */
  float64Value(x_274) {
    this.#beforeValue_242();
    let t_275 = float64ToString_202(x_274);
    this.#buffer_229[0] += t_275;
    return;
  }
  /** @param {string} x_277 */
  numericTokenValue(x_277) {
    this.#beforeValue_242();
    this.#buffer_229[0] += x_277;
    return;
  }
  /** @param {string} x_279 */
  stringValue(x_279) {
    this.#beforeValue_242();
    encodeJsonString_258(x_279, this.#buffer_229);
    return;
  }
  /** @returns {string} */
  toJsonString() {
    let return_281;
    let t_282;
    let t_283;
    let t_284;
    if (this.#wellFormed_231) {
      if (this.#stack_230.length === 1) {
        t_282 = this.#state_238();
        t_283 = t_282 === 6;
      } else {
        t_283 = false;
      }
      t_284 = t_283;
    } else {
      t_284 = false;
    }
    if (t_284) {
      return_281 = this.#buffer_229[0];
    } else {
      throw Error();
    }
    return return_281;
  }
  /** @returns {InterchangeContext} */
  get interchangeContext() {
    return this.#interchangeContext_228;
  }
};
export class JsonParseErrorReceiver extends type__106() {
  /** @param {string} explanation_287 */
  explainJsonError(explanation_287) {
    null;
  }
};
export class JsonSyntaxTreeProducer extends type__106(JsonProducer, JsonParseErrorReceiver) {
  /** @type {Array<Array<JsonSyntaxTree>>} */
  #stack_288;
  /** @type {string | null} */
  #error_289;
  /** @returns {InterchangeContext} */
  get interchangeContext() {
    return NullInterchangeContext.instance;
  }
  constructor() {
    super ();
    let t_291 = [];
    this.#stack_288 = t_291;
    let t_292 = [];
    listBuilderAdd_236(this.#stack_288, t_292);
    this.#error_289 = null;
    return;
  }
  /** @param {JsonSyntaxTree} v_295 */
  #storeValue_294(v_295) {
    let t_296;
    if (! ! this.#stack_288.length) {
      t_296 = this.#stack_288.length;
      listBuilderAdd_236(listedGet_140(this.#stack_288, t_296 - 1 | 0), v_295);
    }
    return;
  }
  startObject() {
    let t_298 = [];
    listBuilderAdd_236(this.#stack_288, t_298);
    return;
  }
  endObject() {
    let return_300;
    let t_301;
    let t_302;
    let t_303;
    let t_304;
    let t_305;
    let t_306;
    let t_307;
    let t_308;
    let t_309;
    let t_310;
    fn_311: {
      if (! this.#stack_288.length) {
        return_300 = void 0;
        break fn_311;
      }
      const ls_312 = listBuilderRemoveLast_253(this.#stack_288);
      const m_313 = mapBuilderConstructor_314();
      let multis_315 = null;
      let i_316 = 0;
      let n_317 = ls_312.length & -2;
      while (i_316 < n_317) {
        const postfixReturn_318 = i_316;
        i_316 = i_316 + 1 | 0;
        const keyTree_319 = listedGet_140(ls_312, postfixReturn_318);
        if (!(keyTree_319 instanceof JsonString)) {
          break;
        }
        try {
          t_303 = requireInstanceOf__320(keyTree_319, JsonString);
          t_304 = t_303;
        } catch {
          t_304 = panic_321();
        }
        const key_322 = t_304.content;
        const postfixReturn_323 = i_316;
        i_316 = i_316 + 1 | 0;
        const value_324 = listedGet_140(ls_312, postfixReturn_323);
        if (m_313.has(key_322)) {
          if (multis_315 == null) {
            t_301 = mapBuilderConstructor_314();
            multis_315 = t_301;
          }
          try {
            if (multis_315 == null) {
              throw Error();
            } else {
              t_305 = multis_315;
            }
            t_306 = t_305;
          } catch {
            t_306 = panic_321();
          }
          const mb_325 = t_306;
          if (! mb_325.has(key_322)) {
            try {
              t_307 = mappedGet_326(m_313, key_322);
              t_308 = t_307;
            } catch {
              t_308 = panic_321();
            }
            mapBuilderSet_327(mb_325, key_322, t_308.slice());
          }
          try {
            t_309 = mappedGet_326(mb_325, key_322);
            t_310 = t_309;
          } catch {
            t_310 = panic_321();
          }
          listBuilderAdd_236(t_310, value_324);
        } else {
          mapBuilderSet_327(m_313, key_322, Object.freeze([value_324]));
        }
      }
      const multis_328 = multis_315;
      if (!(multis_328 == null)) {
        function fn_329(k_330, vs_331) {
          let t_332 = listBuilderToList_333(vs_331);
          mapBuilderSet_327(m_313, k_330, t_332);
          return;
        }
        mappedForEach_152(multis_328, fn_329);
      }
      t_302 = new JsonObject(mappedToMap_334(m_313));
      this.#storeValue_294(t_302);
      return_300 = void 0;
    }
    return return_300;
  }
  /** @param {string} key_336 */
  objectKey(key_336) {
    let t_337 = new JsonString(key_336);
    this.#storeValue_294(t_337);
    return;
  }
  startArray() {
    let t_339 = [];
    listBuilderAdd_236(this.#stack_288, t_339);
    return;
  }
  endArray() {
    let return_341;
    let t_342;
    fn_343: {
      if (! this.#stack_288.length) {
        return_341 = void 0;
        break fn_343;
      }
      const ls_344 = listBuilderRemoveLast_253(this.#stack_288);
      t_342 = new JsonArray(listBuilderToList_333(ls_344));
      this.#storeValue_294(t_342);
      return_341 = void 0;
    }
    return return_341;
  }
  nullValue() {
    let t_346 = new JsonNull();
    this.#storeValue_294(t_346);
    return;
  }
  /** @param {boolean} x_348 */
  booleanValue(x_348) {
    let t_349 = new JsonBoolean(x_348);
    this.#storeValue_294(t_349);
    return;
  }
  /** @param {number} x_351 */
  int32Value(x_351) {
    let t_352 = new JsonInt32(x_351);
    this.#storeValue_294(t_352);
    return;
  }
  /** @param {bigint} x_354 */
  int64Value(x_354) {
    let t_355 = new JsonInt64(x_354);
    this.#storeValue_294(t_355);
    return;
  }
  /** @param {number} x_357 */
  float64Value(x_357) {
    let t_358 = new JsonFloat64(x_357);
    this.#storeValue_294(t_358);
    return;
  }
  /** @param {string} x_360 */
  numericTokenValue(x_360) {
    let t_361 = new JsonNumericToken(x_360);
    this.#storeValue_294(t_361);
    return;
  }
  /** @param {string} x_363 */
  stringValue(x_363) {
    let t_364 = new JsonString(x_363);
    this.#storeValue_294(t_364);
    return;
  }
  /** @returns {JsonSyntaxTree} */
  toJsonSyntaxTree() {
    let t_366;
    if (this.#stack_288.length !== 1) {
      t_366 = true;
    } else {
      t_366 = !(this.#error_289 == null);
    }
    if (t_366) {
      throw Error();
    }
    const ls_367 = listedGet_140(this.#stack_288, 0);
    if (ls_367.length !== 1) {
      throw Error();
    }
    return listedGet_140(ls_367, 0);
  }
  /** @returns {string | null} */
  get jsonError() {
    return this.#error_289;
  }
  /** @returns {JsonParseErrorReceiver} */
  get parseErrorReceiver() {
    return this;
  }
  /** @param {string} error_371 */
  explainJsonError(error_371) {
    this.#error_289 = error_371;
    return;
  }
};
/**
 * @param {string} sourceText_373
 * @param {globalThis.number} i_374
 * @param {JsonProducer} out_375
 * @returns {globalThis.number}
 */
function parseJsonValue_372(sourceText_373, i_374, out_375) {
  let return_376;
  let t_377;
  let t_378;
  let t_379;
  fn_380: {
    t_377 = skipJsonSpaces_381(sourceText_373, i_374);
    i_374 = t_377;
    if (!(sourceText_373.length > i_374)) {
      expectedTokenError_382(sourceText_373, i_374, out_375, "JSON value");
      return_376 = -1;
      break fn_380;
    }
    t_378 = stringGet_383(sourceText_373, i_374);
    if (t_378 === 123) {
      return_376 = parseJsonObject_384(sourceText_373, i_374, out_375);
    } else if (t_378 === 91) {
      return_376 = parseJsonArray_385(sourceText_373, i_374, out_375);
    } else if (t_378 === 34) {
      return_376 = parseJsonString_386(sourceText_373, i_374, out_375);
    } else {
      if (t_378 === 116) {
        t_379 = true;
      } else {
        t_379 = t_378 === 102;
      }
      if (t_379) {
        return_376 = parseJsonBoolean_387(sourceText_373, i_374, out_375);
      } else if (t_378 === 110) {
        return_376 = parseJsonNull_388(sourceText_373, i_374, out_375);
      } else {
        return_376 = parseJsonNumber_389(sourceText_373, i_374, out_375);
      }
    }
  }
  return return_376;
}
/** @template T_390 */
export class JsonAdapter extends type__106() {
  /**
   * @param {T_390} x_392
   * @param {JsonProducer} p_393
   */
  encodeToJson(x_392, p_393) {
    null;
  }
  /**
   * @param {JsonSyntaxTree} t_395
   * @param {InterchangeContext} ic_396
   * @returns {T_390}
   */
  decodeFromJson(t_395, ic_396) {
    null;
  }
};
class BooleanJsonAdapter_397 extends type__106(JsonAdapter) {
  /**
   * @param {boolean} x_399
   * @param {JsonProducer} p_400
   */
  encodeToJson(x_399, p_400) {
    p_400.booleanValue(x_399);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_402
   * @param {InterchangeContext} ic_403
   * @returns {boolean}
   */
  decodeFromJson(t_402, ic_403) {
    let t_404;
    t_404 = requireInstanceOf__320(t_402, JsonBoolean);
    return t_404.content;
  }
  constructor() {
    super ();
    return;
  }
}
class Float64JsonAdapter_405 extends type__106(JsonAdapter) {
  /**
   * @param {number} x_407
   * @param {JsonProducer} p_408
   */
  encodeToJson(x_407, p_408) {
    p_408.float64Value(x_407);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_410
   * @param {InterchangeContext} ic_411
   * @returns {number}
   */
  decodeFromJson(t_410, ic_411) {
    let t_412;
    t_412 = requireInstanceOf__320(t_410, JsonNumeric);
    return t_412.asFloat64();
  }
  constructor() {
    super ();
    return;
  }
}
class Int32JsonAdapter_413 extends type__106(JsonAdapter) {
  /**
   * @param {number} x_415
   * @param {JsonProducer} p_416
   */
  encodeToJson(x_415, p_416) {
    p_416.int32Value(x_415);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_418
   * @param {InterchangeContext} ic_419
   * @returns {number}
   */
  decodeFromJson(t_418, ic_419) {
    let t_420;
    t_420 = requireInstanceOf__320(t_418, JsonNumeric);
    return t_420.asInt32();
  }
  constructor() {
    super ();
    return;
  }
}
class Int64JsonAdapter_421 extends type__106(JsonAdapter) {
  /**
   * @param {bigint} x_423
   * @param {JsonProducer} p_424
   */
  encodeToJson(x_423, p_424) {
    p_424.int64Value(x_423);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_426
   * @param {InterchangeContext} ic_427
   * @returns {bigint}
   */
  decodeFromJson(t_426, ic_427) {
    let t_428;
    t_428 = requireInstanceOf__320(t_426, JsonNumeric);
    return t_428.asInt64();
  }
  constructor() {
    super ();
    return;
  }
}
class StringJsonAdapter_429 extends type__106(JsonAdapter) {
  /**
   * @param {string} x_431
   * @param {JsonProducer} p_432
   */
  encodeToJson(x_431, p_432) {
    p_432.stringValue(x_431);
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_434
   * @param {InterchangeContext} ic_435
   * @returns {string}
   */
  decodeFromJson(t_434, ic_435) {
    let t_436;
    t_436 = requireInstanceOf__320(t_434, JsonString);
    return t_436.content;
  }
  constructor() {
    super ();
    return;
  }
}
/** @template T_438 */
class ListJsonAdapter_437 extends type__106(JsonAdapter) {
  /** @type {JsonAdapter<T_438>} */
  #adapterForT_439;
  /**
   * @param {Array<T_438>} x_441
   * @param {JsonProducer} p_442
   */
  encodeToJson(x_441, p_442) {
    const this445 = this;
    p_442.startArray();
    function fn_443(el_444) {
      this445.#adapterForT_439.encodeToJson(el_444, p_442);
      return;
    }
    x_441.forEach(fn_443);
    p_442.endArray();
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_447
   * @param {InterchangeContext} ic_448
   * @returns {Array<T_438>}
   */
  decodeFromJson(t_447, ic_448) {
    let t_449;
    const b_450 = [];
    let t_451;
    t_451 = requireInstanceOf__320(t_447, JsonArray);
    const elements_452 = t_451.elements;
    const n_453 = elements_452.length;
    let i_454 = 0;
    while (i_454 < n_453) {
      const el_455 = listedGet_140(elements_452, i_454);
      i_454 = i_454 + 1 | 0;
      t_449 = this.#adapterForT_439.decodeFromJson(el_455, ic_448);
      listBuilderAdd_236(b_450, t_449);
    }
    return listBuilderToList_333(b_450);
  }
  /** @param {JsonAdapter<T_438>} adapterForT_456 */
  constructor(adapterForT_456) {
    super ();
    this.#adapterForT_439 = adapterForT_456;
    return;
  }
}
/** @template T_457 */
export class OrNullJsonAdapter extends type__106(JsonAdapter) {
  /** @type {JsonAdapter<T_457>} */
  #adapterForT_458;
  /**
   * @param {T_457 | null} x_460
   * @param {JsonProducer} p_461
   */
  encodeToJson(x_460, p_461) {
    if (x_460 == null) {
      p_461.nullValue();
    } else {
      const x_462 = x_460;
      this.#adapterForT_458.encodeToJson(x_462, p_461);
    }
    return;
  }
  /**
   * @param {JsonSyntaxTree} t_464
   * @param {InterchangeContext} ic_465
   * @returns {T_457 | null}
   */
  decodeFromJson(t_464, ic_465) {
    let return_466;
    if (t_464 instanceof JsonNull) {
      return_466 = null;
    } else {
      return_466 = this.#adapterForT_458.decodeFromJson(t_464, ic_465);
    }
    return return_466;
  }
  /** @param {JsonAdapter<T_457>} adapterForT_467 */
  constructor(adapterForT_467) {
    super ();
    this.#adapterForT_458 = adapterForT_467;
    return;
  }
};
/** @type {Array<string>} */
const hexDigits_468 = Object.freeze(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
/**
 * @param {number} cp_470
 * @param {globalThis.Array<string>} buffer_471
 */
function encodeHex4_469(cp_470, buffer_471) {
  const b0_472 = (cp_470 / 4096 | 0) & 15;
  const b1_473 = (cp_470 / 256 | 0) & 15;
  const b2_474 = (cp_470 / 16 | 0) & 15;
  const b3_475 = cp_470 & 15;
  let t_476 = listedGet_140(hexDigits_468, b0_472);
  buffer_471[0] += t_476;
  let t_477 = listedGet_140(hexDigits_468, b1_473);
  buffer_471[0] += t_477;
  let t_478 = listedGet_140(hexDigits_468, b2_474);
  buffer_471[0] += t_478;
  let t_479 = listedGet_140(hexDigits_468, b3_475);
  buffer_471[0] += t_479;
  return;
}
/**
 * @param {string} x_480
 * @param {globalThis.Array<string>} buffer_481
 */
function encodeJsonString_258(x_480, buffer_481) {
  let t_482;
  let t_483;
  let t_484;
  let t_485;
  buffer_481[0] += '"';
  let i_486 = 0;
  let emitted_487 = i_486;
  while (true) {
    if (!(x_480.length > i_486)) {
      break;
    }
    const cp_488 = stringGet_383(x_480, i_486);
    if (cp_488 === 8) {
      t_485 = "\\b";
    } else if (cp_488 === 9) {
      t_485 = "\\t";
    } else if (cp_488 === 10) {
      t_485 = "\\n";
    } else if (cp_488 === 12) {
      t_485 = "\\f";
    } else if (cp_488 === 13) {
      t_485 = "\\r";
    } else if (cp_488 === 34) {
      t_485 = '\\"';
    } else if (cp_488 === 92) {
      t_485 = "\\\\";
    } else {
      if (cp_488 < 32) {
        t_483 = true;
      } else {
        if (55296 <= cp_488) {
          t_482 = cp_488 <= 57343;
        } else {
          t_482 = false;
        }
        t_483 = t_482;
      }
      if (t_483) {
        t_484 = "\\u";
      } else {
        t_484 = "";
      }
      t_485 = t_484;
    }
    const replacement_489 = t_485;
    const nextI_490 = stringNext_491(x_480, i_486);
    if (replacement_489 !== "") {
      buffer_481[0] += x_480.substring(emitted_487, i_486);
      buffer_481[0] += replacement_489;
      if (replacement_489 === "\\u") {
        encodeHex4_469(cp_488, buffer_481);
      }
      emitted_487 = nextI_490;
    }
    i_486 = nextI_490;
  }
  buffer_481[0] += x_480.substring(emitted_487, i_486);
  buffer_481[0] += '"';
  return;
}
/**
 * @param {JsonProducer} out_493
 * @param {string} explanation_494
 */
function storeJsonError_492(out_493, explanation_494) {
  let t_495 = out_493.parseErrorReceiver;
  if (!(t_495 == null)) {
    t_495.explainJsonError(explanation_494);
  }
  return;
}
/**
 * @param {string} sourceText_496
 * @param {globalThis.number} i_497
 * @param {JsonProducer} out_498
 * @param {string} shortExplanation_499
 */
function expectedTokenError_382(sourceText_496, i_497, out_498, shortExplanation_499) {
  let t_500;
  let t_501;
  let gotten_502;
  if (sourceText_496.length > i_497) {
    t_500 = sourceText_496.length;
    t_501 = sourceText_496.substring(i_497, t_500);
    gotten_502 = "`" + t_501 + "`";
  } else {
    gotten_502 = "end-of-file";
  }
  storeJsonError_492(out_498, "Expected " + shortExplanation_499 + ", but got " + gotten_502);
  return;
}
/**
 * @param {string} sourceText_503
 * @param {globalThis.number} i_504
 * @returns {globalThis.number}
 */
function skipJsonSpaces_381(sourceText_503, i_504) {
  let t_505;
  let t_506;
  let t_507;
  let t_508;
  let t_509;
  while (true) {
    if (!(sourceText_503.length > i_504)) {
      break;
    }
    t_505 = stringGet_383(sourceText_503, i_504);
    if (t_505 === 9) {
      t_509 = true;
    } else {
      if (t_505 === 10) {
        t_508 = true;
      } else {
        if (t_505 === 13) {
          t_507 = true;
        } else {
          t_507 = t_505 === 32;
        }
        t_508 = t_507;
      }
      t_509 = t_508;
    }
    if (! t_509) {
      break;
    }
    t_506 = stringNext_491(sourceText_503, i_504);
    i_504 = t_506;
  }
  return i_504;
}
/**
 * @param {string} sourceText_511
 * @param {globalThis.number} start_512
 * @param {globalThis.number} limit_513
 * @returns {number}
 */
function decodeHexUnsigned_510(sourceText_511, start_512, limit_513) {
  let return_514;
  let t_515;
  let t_516;
  let t_517;
  let t_518;
  let t_519;
  fn_520: {
    let n_521 = 0;
    let i_522 = start_512;
    while (true) {
      if (!(i_522 - limit_513 < 0)) {
        break;
      }
      const cp_523 = stringGet_383(sourceText_511, i_522);
      if (48 <= cp_523) {
        t_516 = cp_523 <= 48;
      } else {
        t_516 = false;
      }
      if (t_516) {
        t_519 = cp_523 - 48 | 0;
      } else {
        if (65 <= cp_523) {
          t_517 = cp_523 <= 70;
        } else {
          t_517 = false;
        }
        if (t_517) {
          t_519 = (cp_523 - 65 | 0) + 10 | 0;
        } else {
          if (97 <= cp_523) {
            t_518 = cp_523 <= 102;
          } else {
            t_518 = false;
          }
          if (t_518) {
            t_519 = (cp_523 - 97 | 0) + 10 | 0;
          } else {
            return_514 = -1;
            break fn_520;
          }
        }
      }
      const digit_524 = t_519;
      n_521 = imul__525(n_521, 16) + digit_524 | 0;
      t_515 = stringNext_491(sourceText_511, i_522);
      i_522 = t_515;
    }
    return_514 = n_521;
  }
  return return_514;
}
/**
 * @param {string} sourceText_527
 * @param {globalThis.number} i_528
 * @param {globalThis.Array<string>} sb_529
 * @param {JsonProducer} errOut_530
 * @returns {globalThis.number}
 */
function parseJsonStringTo_526(sourceText_527, i_528, sb_529, errOut_530) {
  let return_531;
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
  let t_545;
  let t_546;
  let t_547;
  let t_548;
  let t_549;
  let t_550;
  let t_551;
  let t_552;
  let t_553;
  fn_554: {
    if (!(sourceText_527.length > i_528)) {
      t_543 = true;
    } else {
      t_532 = stringGet_383(sourceText_527, i_528);
      t_543 = t_532 !== 34;
    }
    if (t_543) {
      expectedTokenError_382(sourceText_527, i_528, errOut_530, '"');
      return_531 = -1;
      break fn_554;
    }
    t_533 = stringNext_491(sourceText_527, i_528);
    i_528 = t_533;
    let leadSurrogate_555 = -1;
    let consumed_556 = i_528;
    while (true) {
      if (!(sourceText_527.length > i_528)) {
        break;
      }
      const cp_557 = stringGet_383(sourceText_527, i_528);
      if (cp_557 === 34) {
        break;
      }
      t_534 = stringNext_491(sourceText_527, i_528);
      let iNext_558 = t_534;
      const end_559 = sourceText_527.length;
      let needToFlush_560 = false;
      if (cp_557 !== 92) {
        t_549 = cp_557;
      } else {
        needToFlush_560 = true;
        if (!(sourceText_527.length > iNext_558)) {
          expectedTokenError_382(sourceText_527, iNext_558, errOut_530, "escape sequence");
          return_531 = -1;
          break fn_554;
        }
        const esc0_561 = stringGet_383(sourceText_527, iNext_558);
        t_535 = stringNext_491(sourceText_527, iNext_558);
        iNext_558 = t_535;
        if (esc0_561 === 34) {
          t_545 = true;
        } else {
          if (esc0_561 === 92) {
            t_544 = true;
          } else {
            t_544 = esc0_561 === 47;
          }
          t_545 = t_544;
        }
        if (t_545) {
          t_548 = esc0_561;
        } else if (esc0_561 === 98) {
          t_548 = 8;
        } else if (esc0_561 === 102) {
          t_548 = 12;
        } else if (esc0_561 === 110) {
          t_548 = 10;
        } else if (esc0_561 === 114) {
          t_548 = 13;
        } else if (esc0_561 === 116) {
          t_548 = 9;
        } else if (esc0_561 === 117) {
          if (stringHasAtLeast_562(sourceText_527, iNext_558, end_559, 4)) {
            const startHex_563 = iNext_558;
            t_536 = stringNext_491(sourceText_527, iNext_558);
            iNext_558 = t_536;
            t_537 = stringNext_491(sourceText_527, iNext_558);
            iNext_558 = t_537;
            t_538 = stringNext_491(sourceText_527, iNext_558);
            iNext_558 = t_538;
            t_539 = stringNext_491(sourceText_527, iNext_558);
            iNext_558 = t_539;
            t_540 = decodeHexUnsigned_510(sourceText_527, startHex_563, iNext_558);
            t_546 = t_540;
          } else {
            t_546 = -1;
          }
          const hex_564 = t_546;
          if (hex_564 < 0) {
            expectedTokenError_382(sourceText_527, iNext_558, errOut_530, "four hex digits");
            return_531 = -1;
            break fn_554;
          }
          t_547 = hex_564;
          t_548 = t_547;
        } else {
          expectedTokenError_382(sourceText_527, iNext_558, errOut_530, "escape sequence");
          return_531 = -1;
          break fn_554;
        }
        t_549 = t_548;
      }
      let decodedCp_565 = t_549;
      if (leadSurrogate_555 >= 0) {
        needToFlush_560 = true;
        const lead_566 = leadSurrogate_555;
        if (56320 <= decodedCp_565) {
          t_550 = decodedCp_565 <= 57343;
        } else {
          t_550 = false;
        }
        if (t_550) {
          leadSurrogate_555 = -1;
          decodedCp_565 = 65536 +(imul__525(lead_566 - 55296 | 0, 1024) |(decodedCp_565 - 56320 | 0)) | 0;
        }
      } else {
        if (55296 <= decodedCp_565) {
          t_551 = decodedCp_565 <= 56319;
        } else {
          t_551 = false;
        }
        if (t_551) {
          needToFlush_560 = true;
        }
      }
      if (needToFlush_560) {
        sb_529[0] += sourceText_527.substring(consumed_556, i_528);
        if (leadSurrogate_555 >= 0) {
          try {
            stringBuilderAppendCodePoint_567(sb_529, leadSurrogate_555);
          } catch {
            throw Error();
          }
        }
        if (55296 <= decodedCp_565) {
          t_552 = decodedCp_565 <= 56319;
        } else {
          t_552 = false;
        }
        if (t_552) {
          leadSurrogate_555 = decodedCp_565;
        } else {
          leadSurrogate_555 = -1;
          try {
            stringBuilderAppendCodePoint_567(sb_529, decodedCp_565);
          } catch {
            throw Error();
          }
        }
        consumed_556 = iNext_558;
      }
      i_528 = iNext_558;
    }
    if (!(sourceText_527.length > i_528)) {
      t_553 = true;
    } else {
      t_541 = stringGet_383(sourceText_527, i_528);
      t_553 = t_541 !== 34;
    }
    if (t_553) {
      expectedTokenError_382(sourceText_527, i_528, errOut_530, '"');
      return_531 = -1;
    } else {
      if (leadSurrogate_555 >= 0) {
        try {
          stringBuilderAppendCodePoint_567(sb_529, leadSurrogate_555);
        } catch {
          throw Error();
        }
      } else {
        sb_529[0] += sourceText_527.substring(consumed_556, i_528);
      }
      t_542 = stringNext_491(sourceText_527, i_528);
      i_528 = t_542;
      return_531 = i_528;
    }
  }
  return return_531;
}
/**
 * @param {string} sourceText_568
 * @param {globalThis.number} i_569
 * @param {JsonProducer} out_570
 * @returns {globalThis.number}
 */
function parseJsonObject_384(sourceText_568, i_569, out_570) {
  let return_571;
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
  let t_584;
  let t_585;
  let t_586;
  let t_587;
  let t_588;
  let t_589;
  let t_590;
  let t_591;
  let t_592;
  fn_593: {
    try {
      if (!(sourceText_568.length > i_569)) {
        t_585 = true;
      } else {
        t_572 = stringGet_383(sourceText_568, i_569);
        t_585 = t_572 !== 123;
      }
      if (t_585) {
        expectedTokenError_382(sourceText_568, i_569, out_570, "'{'");
        return_571 = -1;
        break fn_593;
      }
      out_570.startObject();
      t_573 = stringNext_491(sourceText_568, i_569);
      t_574 = skipJsonSpaces_381(sourceText_568, t_573);
      i_569 = t_574;
      if (sourceText_568.length > i_569) {
        t_575 = stringGet_383(sourceText_568, i_569);
        t_586 = t_575 !== 125;
      } else {
        t_586 = false;
      }
      if (t_586) {
        while (true) {
          const keyBuffer_594 = [""];
          const afterKey_595 = parseJsonStringTo_526(sourceText_568, i_569, keyBuffer_594, out_570);
          if (!(afterKey_595 >= 0)) {
            return_571 = -1;
            break fn_593;
          }
          t_576 = keyBuffer_594[0];
          out_570.objectKey(t_576);
          try {
            t_587 = requireStringIndex_596(afterKey_595);
            t_588 = t_587;
          } catch {
            t_588 = panic_321();
          }
          t_577 = skipJsonSpaces_381(sourceText_568, t_588);
          i_569 = t_577;
          if (sourceText_568.length > i_569) {
            t_578 = stringGet_383(sourceText_568, i_569);
            t_589 = t_578 === 58;
          } else {
            t_589 = false;
          }
          if (t_589) {
            t_579 = stringNext_491(sourceText_568, i_569);
            i_569 = t_579;
            const afterPropertyValue_597 = parseJsonValue_372(sourceText_568, i_569, out_570);
            if (!(afterPropertyValue_597 >= 0)) {
              return_571 = -1;
              break fn_593;
            }
            t_590 = requireStringIndex_596(afterPropertyValue_597);
            i_569 = t_590;
          } else {
            expectedTokenError_382(sourceText_568, i_569, out_570, "':'");
            return_571 = -1;
            break fn_593;
          }
          t_580 = skipJsonSpaces_381(sourceText_568, i_569);
          i_569 = t_580;
          if (sourceText_568.length > i_569) {
            t_581 = stringGet_383(sourceText_568, i_569);
            t_591 = t_581 === 44;
          } else {
            t_591 = false;
          }
          if (t_591) {
            t_582 = stringNext_491(sourceText_568, i_569);
            t_583 = skipJsonSpaces_381(sourceText_568, t_582);
            i_569 = t_583;
          } else {
            break;
          }
        }
      }
      if (sourceText_568.length > i_569) {
        t_584 = stringGet_383(sourceText_568, i_569);
        t_592 = t_584 === 125;
      } else {
        t_592 = false;
      }
      if (t_592) {
        out_570.endObject();
        return_571 = stringNext_491(sourceText_568, i_569);
      } else {
        expectedTokenError_382(sourceText_568, i_569, out_570, "'}'");
        return_571 = -1;
      }
    } catch {
      return_571 = panic_321();
    }
  }
  return return_571;
}
/**
 * @param {string} sourceText_598
 * @param {globalThis.number} i_599
 * @param {JsonProducer} out_600
 * @returns {globalThis.number}
 */
function parseJsonArray_385(sourceText_598, i_599, out_600) {
  let return_601;
  let t_602;
  let t_603;
  let t_604;
  let t_605;
  let t_606;
  let t_607;
  let t_608;
  let t_609;
  let t_610;
  let t_611;
  let t_612;
  let t_613;
  let t_614;
  let t_615;
  fn_616: {
    try {
      if (!(sourceText_598.length > i_599)) {
        t_611 = true;
      } else {
        t_602 = stringGet_383(sourceText_598, i_599);
        t_611 = t_602 !== 91;
      }
      if (t_611) {
        expectedTokenError_382(sourceText_598, i_599, out_600, "'['");
        return_601 = -1;
        break fn_616;
      }
      out_600.startArray();
      t_603 = stringNext_491(sourceText_598, i_599);
      t_604 = skipJsonSpaces_381(sourceText_598, t_603);
      i_599 = t_604;
      if (sourceText_598.length > i_599) {
        t_605 = stringGet_383(sourceText_598, i_599);
        t_612 = t_605 !== 93;
      } else {
        t_612 = false;
      }
      if (t_612) {
        while (true) {
          const afterElementValue_617 = parseJsonValue_372(sourceText_598, i_599, out_600);
          if (!(afterElementValue_617 >= 0)) {
            return_601 = -1;
            break fn_616;
          }
          t_613 = requireStringIndex_596(afterElementValue_617);
          i_599 = t_613;
          t_606 = skipJsonSpaces_381(sourceText_598, i_599);
          i_599 = t_606;
          if (sourceText_598.length > i_599) {
            t_607 = stringGet_383(sourceText_598, i_599);
            t_614 = t_607 === 44;
          } else {
            t_614 = false;
          }
          if (t_614) {
            t_608 = stringNext_491(sourceText_598, i_599);
            t_609 = skipJsonSpaces_381(sourceText_598, t_608);
            i_599 = t_609;
          } else {
            break;
          }
        }
      }
      if (sourceText_598.length > i_599) {
        t_610 = stringGet_383(sourceText_598, i_599);
        t_615 = t_610 === 93;
      } else {
        t_615 = false;
      }
      if (t_615) {
        out_600.endArray();
        return_601 = stringNext_491(sourceText_598, i_599);
      } else {
        expectedTokenError_382(sourceText_598, i_599, out_600, "']'");
        return_601 = -1;
      }
    } catch {
      return_601 = panic_321();
    }
  }
  return return_601;
}
/**
 * @param {string} sourceText_618
 * @param {globalThis.number} i_619
 * @param {JsonProducer} out_620
 * @returns {globalThis.number}
 */
function parseJsonString_386(sourceText_618, i_619, out_620) {
  let t_621;
  const sb_622 = [""];
  const after_623 = parseJsonStringTo_526(sourceText_618, i_619, sb_622, out_620);
  if (after_623 >= 0) {
    t_621 = sb_622[0];
    out_620.stringValue(t_621);
  }
  return after_623;
}
/**
 * @param {string} string_625
 * @param {globalThis.number} inString_626
 * @param {string} substring_627
 * @returns {globalThis.number}
 */
function afterSubstring_624(string_625, inString_626, substring_627) {
  let return_628;
  let t_629;
  let t_630;
  fn_631: {
    let i_632 = inString_626;
    let j_633 = 0;
    while (true) {
      if (!(substring_627.length > j_633)) {
        break;
      }
      if (!(string_625.length > i_632)) {
        return_628 = -1;
        break fn_631;
      }
      if (stringGet_383(string_625, i_632) !== stringGet_383(substring_627, j_633)) {
        return_628 = -1;
        break fn_631;
      }
      t_629 = stringNext_491(string_625, i_632);
      i_632 = t_629;
      t_630 = stringNext_491(substring_627, j_633);
      j_633 = t_630;
    }
    return_628 = i_632;
  }
  return return_628;
}
/**
 * @param {string} sourceText_634
 * @param {globalThis.number} i_635
 * @param {JsonProducer} out_636
 * @returns {globalThis.number}
 */
function parseJsonBoolean_387(sourceText_634, i_635, out_636) {
  let return_637;
  let t_638;
  fn_639: {
    let ch0_640;
    if (sourceText_634.length > i_635) {
      t_638 = stringGet_383(sourceText_634, i_635);
      ch0_640 = t_638;
    } else {
      ch0_640 = 0;
    }
    const end_641 = sourceText_634.length;
    let keyword_642;
    let n_643;
    if (ch0_640 === 102) {
      keyword_642 = "false";
      n_643 = 5;
    } else if (ch0_640 === 116) {
      keyword_642 = "true";
      n_643 = 4;
    } else {
      keyword_642 = null;
      n_643 = 0;
    }
    if (!(keyword_642 == null)) {
      const keyword_644 = keyword_642;
      if (stringHasAtLeast_562(sourceText_634, i_635, end_641, n_643)) {
        const after_645 = afterSubstring_624(sourceText_634, i_635, keyword_644);
        if (after_645 >= 0) {
          return_637 = requireStringIndex_596(after_645);
          out_636.booleanValue(n_643 === 4);
          break fn_639;
        }
      }
    }
    expectedTokenError_382(sourceText_634, i_635, out_636, "`false` or `true`");
    return_637 = -1;
  }
  return return_637;
}
/**
 * @param {string} sourceText_646
 * @param {globalThis.number} i_647
 * @param {JsonProducer} out_648
 * @returns {globalThis.number}
 */
function parseJsonNull_388(sourceText_646, i_647, out_648) {
  let return_649;
  fn_650: {
    const after_651 = afterSubstring_624(sourceText_646, i_647, "null");
    if (after_651 >= 0) {
      return_649 = requireStringIndex_596(after_651);
      out_648.nullValue();
      break fn_650;
    }
    expectedTokenError_382(sourceText_646, i_647, out_648, "`null`");
    return_649 = -1;
  }
  return return_649;
}
/**
 * @param {string} sourceText_652
 * @param {globalThis.number} i_653
 * @param {JsonProducer} out_654
 * @returns {globalThis.number}
 */
function parseJsonNumber_389(sourceText_652, i_653, out_654) {
  let return_655;
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
  let t_686;
  let t_687;
  let t_688;
  let t_689;
  let t_690;
  let t_691;
  let t_692;
  let t_693;
  let t_694;
  fn_695: {
    let isNegative_696 = false;
    const startOfNumber_697 = i_653;
    if (sourceText_652.length > i_653) {
      t_656 = stringGet_383(sourceText_652, i_653);
      t_674 = t_656 === 45;
    } else {
      t_674 = false;
    }
    if (t_674) {
      isNegative_696 = true;
      t_657 = stringNext_491(sourceText_652, i_653);
      i_653 = t_657;
    }
    let digit0_698;
    if (sourceText_652.length > i_653) {
      t_658 = stringGet_383(sourceText_652, i_653);
      digit0_698 = t_658;
    } else {
      digit0_698 = -1;
    }
    if (digit0_698 < 48) {
      t_675 = true;
    } else {
      t_675 = 57 < digit0_698;
    }
    if (t_675) {
      let error_699;
      if (! isNegative_696) {
        t_676 = digit0_698 !== 46;
      } else {
        t_676 = false;
      }
      if (t_676) {
        error_699 = "JSON value";
      } else {
        error_699 = "digit";
      }
      expectedTokenError_382(sourceText_652, i_653, out_654, error_699);
      return_655 = -1;
      break fn_695;
    }
    t_659 = stringNext_491(sourceText_652, i_653);
    i_653 = t_659;
    let nDigits_700 = 1;
    t_660 = digit0_698 - 48 | 0;
    let tentativeFloat64_701 = t_660;
    t_661 = BigInt(digit0_698 - 48 | 0);
    let tentativeInt64_702 = t_661;
    let overflowInt64_703 = false;
    if (48 !== digit0_698) {
      while (true) {
        if (!(sourceText_652.length > i_653)) {
          break;
        }
        const possibleDigit_704 = stringGet_383(sourceText_652, i_653);
        if (48 <= possibleDigit_704) {
          t_677 = possibleDigit_704 <= 57;
        } else {
          t_677 = false;
        }
        if (t_677) {
          t_662 = stringNext_491(sourceText_652, i_653);
          i_653 = t_662;
          nDigits_700 = nDigits_700 + 1 | 0;
          const nextDigit_705 = possibleDigit_704 - 48 | 0;
          t_678 = tentativeFloat64_701 * 10.0;
          t_663 = nextDigit_705;
          tentativeFloat64_701 = t_678 + t_663;
          const oldInt64_706 = tentativeInt64_702;
          t_679 = clampInt64__707(tentativeInt64_702 * BigInt("10"));
          t_664 = BigInt(nextDigit_705);
          tentativeInt64_702 = clampInt64__707(t_679 + t_664);
          if (tentativeInt64_702 < oldInt64_706) {
            if (clampInt64__707(BigInt("-9223372036854775808") - oldInt64_706) === clampInt64__707(- BigInt(nextDigit_705))) {
              if (isNegative_696) {
                t_680 = oldInt64_706 > BigInt("0");
              } else {
                t_680 = false;
              }
              t_681 = t_680;
            } else {
              t_681 = false;
            }
            if (! t_681) {
              overflowInt64_703 = true;
            }
          }
        } else {
          break;
        }
      }
    }
    let nDigitsAfterPoint_708 = 0;
    if (sourceText_652.length > i_653) {
      t_665 = stringGet_383(sourceText_652, i_653);
      t_682 = 46 === t_665;
    } else {
      t_682 = false;
    }
    if (t_682) {
      t_666 = stringNext_491(sourceText_652, i_653);
      i_653 = t_666;
      const afterPoint_709 = i_653;
      while (true) {
        if (!(sourceText_652.length > i_653)) {
          break;
        }
        const possibleDigit_710 = stringGet_383(sourceText_652, i_653);
        if (48 <= possibleDigit_710) {
          t_683 = possibleDigit_710 <= 57;
        } else {
          t_683 = false;
        }
        if (t_683) {
          t_667 = stringNext_491(sourceText_652, i_653);
          i_653 = t_667;
          nDigits_700 = nDigits_700 + 1 | 0;
          nDigitsAfterPoint_708 = nDigitsAfterPoint_708 + 1 | 0;
          t_684 = tentativeFloat64_701 * 10.0;
          t_668 = possibleDigit_710 - 48 | 0;
          tentativeFloat64_701 = t_684 + t_668;
        } else {
          break;
        }
      }
      if (i_653 === afterPoint_709) {
        expectedTokenError_382(sourceText_652, i_653, out_654, "digit");
        return_655 = -1;
        break fn_695;
      }
    }
    let nExponentDigits_711 = 0;
    if (sourceText_652.length > i_653) {
      t_669 = stringGet_383(sourceText_652, i_653);
      t_685 = 101 ===(t_669 | 32);
    } else {
      t_685 = false;
    }
    if (t_685) {
      t_670 = stringNext_491(sourceText_652, i_653);
      i_653 = t_670;
      if (!(sourceText_652.length > i_653)) {
        expectedTokenError_382(sourceText_652, i_653, out_654, "sign or digit");
        return_655 = -1;
        break fn_695;
      }
      const afterE_712 = stringGet_383(sourceText_652, i_653);
      if (afterE_712 === 43) {
        t_686 = true;
      } else {
        t_686 = afterE_712 === 45;
      }
      if (t_686) {
        t_671 = stringNext_491(sourceText_652, i_653);
        i_653 = t_671;
      }
      while (true) {
        if (!(sourceText_652.length > i_653)) {
          break;
        }
        const possibleDigit_713 = stringGet_383(sourceText_652, i_653);
        if (48 <= possibleDigit_713) {
          t_687 = possibleDigit_713 <= 57;
        } else {
          t_687 = false;
        }
        if (t_687) {
          t_672 = stringNext_491(sourceText_652, i_653);
          i_653 = t_672;
          nExponentDigits_711 = nExponentDigits_711 + 1 | 0;
        } else {
          break;
        }
      }
      if (nExponentDigits_711 === 0) {
        expectedTokenError_382(sourceText_652, i_653, out_654, "exponent digit");
        return_655 = -1;
        break fn_695;
      }
    }
    const afterExponent_714 = i_653;
    if (nExponentDigits_711 === 0) {
      if (nDigitsAfterPoint_708 === 0) {
        t_688 = ! overflowInt64_703;
      } else {
        t_688 = false;
      }
      t_689 = t_688;
    } else {
      t_689 = false;
    }
    if (t_689) {
      let value_715;
      if (isNegative_696) {
        value_715 = clampInt64__707(- tentativeInt64_702);
      } else {
        value_715 = tentativeInt64_702;
      }
      if (BigInt("-2147483648") <= value_715) {
        t_690 = value_715 <= BigInt("2147483647");
      } else {
        t_690 = false;
      }
      if (t_690) {
        t_673 = int64ToInt32Unsafe_716(value_715);
        out_654.int32Value(t_673);
      } else {
        out_654.int64Value(value_715);
      }
      return_655 = i_653;
      break fn_695;
    }
    const numericTokenString_717 = sourceText_652.substring(startOfNumber_697, i_653);
    let doubleValue_718 = NaN;
    if (nExponentDigits_711 !== 0) {
      t_691 = true;
    } else {
      t_691 = nDigitsAfterPoint_708 !== 0;
    }
    if (t_691) {
      try {
        t_692 = stringToFloat64_219(numericTokenString_717);
        doubleValue_718 = t_692;
      } catch {
      }
    }
    if (cmpFloat__719(doubleValue_718, -Infinity) !== 0) {
      if (cmpFloat__719(doubleValue_718, Infinity) !== 0) {
        t_693 = cmpFloat__719(doubleValue_718, NaN) !== 0;
      } else {
        t_693 = false;
      }
      t_694 = t_693;
    } else {
      t_694 = false;
    }
    if (t_694) {
      out_654.float64Value(doubleValue_718);
    } else {
      out_654.numericTokenValue(numericTokenString_717);
    }
    return_655 = i_653;
  }
  return return_655;
}
/**
 * @param {string} sourceText_720
 * @param {JsonProducer} out_721
 */
export function parseJsonToProducer(sourceText_720, out_721) {
  let t_722;
  let t_723;
  let t_724;
  let t_725;
  let t_726;
  let t_727;
  let i_728 = 0;
  const afterValue_729 = parseJsonValue_372(sourceText_720, i_728, out_721);
  if (afterValue_729 >= 0) {
    t_727 = requireStringIndex_596(afterValue_729);
    t_722 = skipJsonSpaces_381(sourceText_720, t_727);
    i_728 = t_722;
    if (sourceText_720.length > i_728) {
      t_723 = out_721.parseErrorReceiver;
      t_726 = !(t_723 == null);
    } else {
      t_726 = false;
    }
    if (t_726) {
      t_724 = sourceText_720.length;
      t_725 = sourceText_720.substring(i_728, t_724);
      storeJsonError_492(out_721, "Extraneous JSON `" + t_725 + "`");
    }
  }
  return;
};
/**
 * @param {string} sourceText_730
 * @returns {JsonSyntaxTree}
 */
export function parseJson(sourceText_730) {
  const p_731 = new JsonSyntaxTreeProducer();
  parseJsonToProducer(sourceText_730, p_731);
  return p_731.toJsonSyntaxTree();
};
/** @returns {JsonAdapter<boolean>} */
export function booleanJsonAdapter() {
  return new BooleanJsonAdapter_397();
};
/** @returns {JsonAdapter<number>} */
export function float64JsonAdapter() {
  return new Float64JsonAdapter_405();
};
/** @returns {JsonAdapter<number>} */
export function int32JsonAdapter() {
  return new Int32JsonAdapter_413();
};
/** @returns {JsonAdapter<bigint>} */
export function int64JsonAdapter() {
  return new Int64JsonAdapter_421();
};
/** @returns {JsonAdapter<string>} */
export function stringJsonAdapter() {
  return new StringJsonAdapter_429();
};
/**
 * @template {unknown} T_733
 * @param {JsonAdapter<T_733>} adapterForT_732
 * @returns {JsonAdapter<Array<T_733>>}
 */
export function listJsonAdapter(adapterForT_732) {
  return new ListJsonAdapter_437(adapterForT_732);
};
