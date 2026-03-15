const {
  imul: imul__104
} = globalThis.Math;
import {
  type as type__0, modIntInt as modIntInt_108, divIntInt as divIntInt_128, listedGetOr as listedGetOr_214, listBuilderAdd as listBuilderAdd_220, listBuilderToList as listBuilderToList_224
} from "@temperlang/core";
export class Direction extends type__0() {
};
export class Up extends type__0(Direction) {
  constructor() {
    super ();
    return;
  }
};
export class Down extends type__0(Direction) {
  constructor() {
    super ();
    return;
  }
};
export class Left extends type__0(Direction) {
  constructor() {
    super ();
    return;
  }
};
export class Right extends type__0(Direction) {
  constructor() {
    super ();
    return;
  }
};
export class Point extends type__0() {
  /** @type {number} */
  #x_1;
  /** @type {number} */
  #y_2;
  /**
   * @param {{
   *   x: number, y: number
   * }}
   * props
   * @returns {Point}
   */
  static["new"](props) {
    return new Point(props.x, props.y);
  }
  /**
   * @param {number} x_3
   * @param {number} y_4
   */
  constructor(x_3, y_4) {
    super ();
    this.#x_1 = x_3;
    this.#y_2 = y_4;
    return;
  }
  /** @returns {number} */
  get x() {
    return this.#x_1;
  }
  /** @returns {number} */
  get y() {
    return this.#y_2;
  }
};
export class GameStatus extends type__0() {
};
export class Playing extends type__0(GameStatus) {
  constructor() {
    super ();
    return;
  }
};
export class GameOver extends type__0(GameStatus) {
  constructor() {
    super ();
    return;
  }
};
export class RandomResult extends type__0() {
  /** @type {number} */
  #value_7;
  /** @type {number} */
  #nextSeed_8;
  /**
   * @param {{
   *   value: number, nextSeed: number
   * }}
   * props
   * @returns {RandomResult}
   */
  static["new"](props) {
    return new RandomResult(props.value, props.nextSeed);
  }
  /**
   * @param {number} value_9
   * @param {number} nextSeed_10
   */
  constructor(value_9, nextSeed_10) {
    super ();
    this.#value_7 = value_9;
    this.#nextSeed_8 = nextSeed_10;
    return;
  }
  /** @returns {number} */
  get value() {
    return this.#value_7;
  }
  /** @returns {number} */
  get nextSeed() {
    return this.#nextSeed_8;
  }
};
export class SnakeGame extends type__0() {
  /** @type {number} */
  #width_13;
  /** @type {number} */
  #height_14;
  /** @type {Array<Point>} */
  #snake_15;
  /** @type {Direction} */
  #direction_16;
  /** @type {Point} */
  #food_17;
  /** @type {number} */
  #score_18;
  /** @type {GameStatus} */
  #status_19;
  /** @type {number} */
  #rngSeed_20;
  /**
   * @param {{
   *   width: number, height: number, snake: Array<Point>, direction: Direction, food: Point, score: number, status: GameStatus, rngSeed: number
   * }}
   * props
   * @returns {SnakeGame}
   */
  static["new"](props) {
    return new SnakeGame(props.width, props.height, props.snake, props.direction, props.food, props.score, props.status, props.rngSeed);
  }
  /**
   * @param {number} width_21
   * @param {number} height_22
   * @param {Array<Point>} snake_23
   * @param {Direction} direction_24
   * @param {Point} food_25
   * @param {number} score_26
   * @param {GameStatus} status_27
   * @param {number} rngSeed_28
   */
  constructor(width_21, height_22, snake_23, direction_24, food_25, score_26, status_27, rngSeed_28) {
    super ();
    this.#width_13 = width_21;
    this.#height_14 = height_22;
    this.#snake_15 = snake_23;
    this.#direction_16 = direction_24;
    this.#food_17 = food_25;
    this.#score_18 = score_26;
    this.#status_19 = status_27;
    this.#rngSeed_20 = rngSeed_28;
    return;
  }
  /** @returns {number} */
  get width() {
    return this.#width_13;
  }
  /** @returns {number} */
  get height() {
    return this.#height_14;
  }
  /** @returns {Array<Point>} */
  get snake() {
    return this.#snake_15;
  }
  /** @returns {Direction} */
  get direction() {
    return this.#direction_16;
  }
  /** @returns {Point} */
  get food() {
    return this.#food_17;
  }
  /** @returns {number} */
  get score() {
    return this.#score_18;
  }
  /** @returns {GameStatus} */
  get status() {
    return this.#status_19;
  }
  /** @returns {number} */
  get rngSeed() {
    return this.#rngSeed_20;
  }
};
class FoodPlacement_37 extends type__0() {
  /** @type {Point} */
  #point_38;
  /** @type {number} */
  #seed_39;
  /**
   * @param {{
   *   point: Point, seed: number
   * }}
   * props
   * @returns {FoodPlacement_37}
   */
  static["new"](props) {
    return new FoodPlacement_37(props.point, props.seed);
  }
  /**
   * @param {Point} point_40
   * @param {number} seed_41
   */
  constructor(point_40, seed_41) {
    super ();
    this.#point_38 = point_40;
    this.#seed_39 = seed_41;
    return;
  }
  /** @returns {Point} */
  get point() {
    return this.#point_38;
  }
  /** @returns {number} */
  get seed() {
    return this.#seed_39;
  }
}
export class PlayerStatus extends type__0() {
};
export class Alive extends type__0(PlayerStatus) {
  constructor() {
    super ();
    return;
  }
};
export class Dead extends type__0(PlayerStatus) {
  constructor() {
    super ();
    return;
  }
};
export class PlayerSnake extends type__0() {
  /** @type {number} */
  #id_44;
  /** @type {Array<Point>} */
  #segments_45;
  /** @type {Direction} */
  #direction_46;
  /** @type {number} */
  #score_47;
  /** @type {PlayerStatus} */
  #status_48;
  /**
   * @param {{
   *   id: number, segments: Array<Point>, direction: Direction, score: number, status: PlayerStatus
   * }}
   * props
   * @returns {PlayerSnake}
   */
  static["new"](props) {
    return new PlayerSnake(props.id, props.segments, props.direction, props.score, props.status);
  }
  /**
   * @param {number} id_49
   * @param {Array<Point>} segments_50
   * @param {Direction} direction_51
   * @param {number} score_52
   * @param {PlayerStatus} status_53
   */
  constructor(id_49, segments_50, direction_51, score_52, status_53) {
    super ();
    this.#id_44 = id_49;
    this.#segments_45 = segments_50;
    this.#direction_46 = direction_51;
    this.#score_47 = score_52;
    this.#status_48 = status_53;
    return;
  }
  /** @returns {number} */
  get id() {
    return this.#id_44;
  }
  /** @returns {Array<Point>} */
  get segments() {
    return this.#segments_45;
  }
  /** @returns {Direction} */
  get direction() {
    return this.#direction_46;
  }
  /** @returns {number} */
  get score() {
    return this.#score_47;
  }
  /** @returns {PlayerStatus} */
  get status() {
    return this.#status_48;
  }
};
export class MultiSnakeGame extends type__0() {
  /** @type {number} */
  #width_59;
  /** @type {number} */
  #height_60;
  /** @type {Array<PlayerSnake>} */
  #snakes_61;
  /** @type {Point} */
  #food_62;
  /** @type {number} */
  #rngSeed_63;
  /** @type {number} */
  #tickCount_64;
  /**
   * @param {{
   *   width: number, height: number, snakes: Array<PlayerSnake>, food: Point, rngSeed: number, tickCount: number
   * }}
   * props
   * @returns {MultiSnakeGame}
   */
  static["new"](props) {
    return new MultiSnakeGame(props.width, props.height, props.snakes, props.food, props.rngSeed, props.tickCount);
  }
  /**
   * @param {number} width_65
   * @param {number} height_66
   * @param {Array<PlayerSnake>} snakes_67
   * @param {Point} food_68
   * @param {number} rngSeed_69
   * @param {number} tickCount_70
   */
  constructor(width_65, height_66, snakes_67, food_68, rngSeed_69, tickCount_70) {
    super ();
    this.#width_59 = width_65;
    this.#height_60 = height_66;
    this.#snakes_61 = snakes_67;
    this.#food_62 = food_68;
    this.#rngSeed_63 = rngSeed_69;
    this.#tickCount_64 = tickCount_70;
    return;
  }
  /** @returns {number} */
  get width() {
    return this.#width_59;
  }
  /** @returns {number} */
  get height() {
    return this.#height_60;
  }
  /** @returns {Array<PlayerSnake>} */
  get snakes() {
    return this.#snakes_61;
  }
  /** @returns {Point} */
  get food() {
    return this.#food_62;
  }
  /** @returns {number} */
  get rngSeed() {
    return this.#rngSeed_63;
  }
  /** @returns {number} */
  get tickCount() {
    return this.#tickCount_64;
  }
};
class SpawnInfo_77 extends type__0() {
  /** @type {Point} */
  #point_78;
  /** @type {Direction} */
  #direction_79;
  /**
   * @param {{
   *   point: Point, direction: Direction
   * }}
   * props
   * @returns {SpawnInfo_77}
   */
  static["new"](props) {
    return new SpawnInfo_77(props.point, props.direction);
  }
  /**
   * @param {Point} point_80
   * @param {Direction} direction_81
   */
  constructor(point_80, direction_81) {
    super ();
    this.#point_78 = point_80;
    this.#direction_79 = direction_81;
    return;
  }
  /** @returns {Point} */
  get point() {
    return this.#point_78;
  }
  /** @returns {Direction} */
  get direction() {
    return this.#direction_79;
  }
}
/**
 * @param {Point} head_84
 * @param {Array<Point>} body_85
 * @param {Point} food_86
 * @param {number} width_87
 * @param {number} height_88
 * @returns {Direction}
 */
export function move(head_84, body_85, food_86, width_87, height_88) {
  return new Right();
};
/**
 * @param {Point} a_89
 * @param {Point} b_90
 * @returns {boolean}
 */
export function pointEquals(a_89, b_90) {
  let return_91;
  let t_92;
  let t_93;
  if (a_89.x === b_90.x) {
    t_92 = a_89.y;
    t_93 = b_90.y;
    return_91 = t_92 === t_93;
  } else {
    return_91 = false;
  }
  return return_91;
};
/**
 * @param {Direction} a_94
 * @param {Direction} b_95
 * @returns {boolean}
 */
export function isOpposite(a_94, b_95) {
  let return_96;
  if (a_94 instanceof Up) {
    return_96 = b_95 instanceof Down;
  } else if (a_94 instanceof Down) {
    return_96 = b_95 instanceof Up;
  } else if (a_94 instanceof Left) {
    return_96 = b_95 instanceof Right;
  } else if (a_94 instanceof Right) {
    return_96 = b_95 instanceof Left;
  } else {
    return_96 = false;
  }
  return return_96;
};
/**
 * @param {Direction} dir_97
 * @returns {Point}
 */
export function directionDelta(dir_97) {
  let return_98;
  if (dir_97 instanceof Up) {
    return_98 = new Point(0, -1);
  } else if (dir_97 instanceof Down) {
    return_98 = new Point(0, 1);
  } else if (dir_97 instanceof Left) {
    return_98 = new Point(-1, 0);
  } else if (dir_97 instanceof Right) {
    return_98 = new Point(1, 0);
  } else {
    return_98 = new Point(0, 0);
  }
  return return_98;
};
/**
 * @param {number} seed_99
 * @param {number} max_100
 * @returns {RandomResult}
 */
export function nextRandom(seed_99, max_100) {
  let t_101;
  let t_102;
  const raw_103 = imul__104(seed_99, 1664525) + 1013904223 | 0;
  const masked_105 = raw_103 & 2147483647;
  let posVal_106;
  if (masked_105 < 0) {
    posVal_106 = - masked_105 | 0;
  } else {
    posVal_106 = masked_105;
  }
  let value_107 = 0;
  if (max_100 > 0) {
    try {
      t_101 = modIntInt_108(posVal_106, max_100);
      t_102 = t_101;
    } catch {
      t_102 = 0;
    }
    value_107 = t_102;
  }
  return new RandomResult(value_107, masked_105);
};
/**
 * @param {Array<Point>} snake_110
 * @param {number} width_111
 * @param {number} height_112
 * @param {number} seed_113
 * @returns {FoodPlacement_37}
 */
function placeFood_109(snake_110, width_111, height_112, seed_113) {
  let return_114;
  let t_115;
  let t_116;
  let t_117;
  let t_118;
  let t_119;
  let t_120;
  fn_121: {
    const totalCells_122 = imul__104(width_111, height_112);
    let currentSeed_123 = seed_113;
    let attempt_124 = 0;
    while (attempt_124 < totalCells_122) {
      const result_125 = nextRandom(currentSeed_123, totalCells_122);
      t_115 = result_125.nextSeed;
      currentSeed_123 = t_115;
      let px_126 = 0;
      let py_127 = 0;
      if (width_111 > 0) {
        try {
          t_117 = modIntInt_108(result_125.value, width_111);
          t_118 = t_117;
        } catch {
          t_118 = 0;
        }
        px_126 = t_118;
        try {
          t_119 = divIntInt_128(result_125.value, width_111);
          t_120 = t_119;
        } catch {
          t_120 = 0;
        }
        py_127 = t_120;
      }
      const candidate_129 = new Point(px_126, py_127);
      let occupied_130 = false;
      function fn_131(seg_132) {
        if (pointEquals(seg_132, candidate_129)) {
          occupied_130 = true;
        }
        return;
      }
      snake_110.forEach(fn_131);
      if (! occupied_130) {
        return_114 = new FoodPlacement_37(candidate_129, currentSeed_123);
        break fn_121;
      }
      attempt_124 = attempt_124 + 1 | 0;
    }
    let y_133 = 0;
    while (y_133 < height_112) {
      let x_134 = 0;
      while (x_134 < width_111) {
        const candidate_135 = new Point(x_134, y_133);
        let free_136 = true;
        function fn_137(seg_138) {
          if (pointEquals(seg_138, candidate_135)) {
            free_136 = false;
          }
          return;
        }
        snake_110.forEach(fn_137);
        if (free_136) {
          return_114 = new FoodPlacement_37(candidate_135, currentSeed_123);
          break fn_121;
        }
        x_134 = x_134 + 1 | 0;
      }
      y_133 = y_133 + 1 | 0;
    }
    t_116 = new Point(0, 0);
    return_114 = new FoodPlacement_37(t_116, currentSeed_123);
  }
  return return_114;
}
/**
 * @param {number} width_139
 * @param {number} height_140
 * @param {number} seed_141
 * @returns {SnakeGame}
 */
export function newGame(width_139, height_140, seed_141) {
  let t_142;
  let t_143;
  let t_144;
  let t_145;
  let centerX_146 = 0;
  let centerY_147 = 0;
  if (width_139 > 0) {
    t_142 = width_139 / 2 | 0;
    t_143 = t_142;
    centerX_146 = t_143;
  }
  if (height_140 > 0) {
    t_144 = height_140 / 2 | 0;
    t_145 = t_144;
    centerY_147 = t_145;
  }
  const snake_148 = Object.freeze([new Point(centerX_146, centerY_147), new Point(centerX_146 - 1 | 0, centerY_147), new Point(centerX_146 - 2 | 0, centerY_147)]);
  const foodResult_149 = placeFood_109(snake_148, width_139, height_140, seed_141);
  let t_150 = new Right();
  let t_151 = foodResult_149.point;
  let t_152 = new Playing();
  let t_153 = foodResult_149.seed;
  return new SnakeGame(width_139, height_140, snake_148, t_150, t_151, 0, t_152, t_153);
};
/**
 * @param {SnakeGame} game_154
 * @param {Direction} dir_155
 * @returns {SnakeGame}
 */
export function changeDirection(game_154, dir_155) {
  let return_156;
  let t_157;
  let t_158;
  let t_159;
  let t_160;
  let t_161;
  let t_162;
  let t_163;
  if (isOpposite(game_154.direction, dir_155)) {
    return_156 = game_154;
  } else {
    t_157 = game_154.width;
    t_158 = game_154.height;
    t_159 = game_154.snake;
    t_160 = game_154.food;
    t_161 = game_154.score;
    t_162 = game_154.status;
    t_163 = game_154.rngSeed;
    return_156 = new SnakeGame(t_157, t_158, t_159, dir_155, t_160, t_161, t_162, t_163);
  }
  return return_156;
};
/**
 * @param {SnakeGame} game_164
 * @returns {SnakeGame}
 */
export function tick(game_164) {
  let return_165;
  let t_166;
  let t_167;
  let t_168;
  let t_169;
  let t_170;
  let t_171;
  let t_172;
  let t_173;
  let t_174;
  let t_175;
  let t_176;
  let t_177;
  let t_178;
  let t_179;
  let t_180;
  let t_181;
  let t_182;
  let t_183;
  let t_184;
  let t_185;
  let t_186;
  let t_187;
  let t_188;
  let t_189;
  let t_190;
  let t_191;
  let t_192;
  let t_193;
  let t_194;
  let t_195;
  let t_196;
  let t_197;
  let t_198;
  let t_199;
  let t_200;
  let t_201;
  let t_202;
  let t_203;
  let t_204;
  let t_205;
  let t_206;
  let t_207;
  let t_208;
  let t_209;
  let t_210;
  fn_211: {
    if (game_164.status instanceof GameOver) {
      return_165 = game_164;
      break fn_211;
    }
    const delta_212 = directionDelta(game_164.direction);
    const head_213 = listedGetOr_214(game_164.snake, 0, new Point(0, 0));
    const newHead_215 = new Point(head_213.x + delta_212.x | 0, head_213.y + delta_212.y | 0);
    if (newHead_215.x < 0) {
      t_210 = true;
    } else {
      if (newHead_215.x >= game_164.width) {
        t_209 = true;
      } else {
        if (newHead_215.y < 0) {
          t_208 = true;
        } else {
          t_166 = newHead_215.y;
          t_167 = game_164.height;
          t_208 = t_166 >= t_167;
        }
        t_209 = t_208;
      }
      t_210 = t_209;
    }
    if (t_210) {
      t_168 = game_164.width;
      t_169 = game_164.height;
      t_170 = game_164.snake;
      t_171 = game_164.direction;
      t_172 = game_164.food;
      t_173 = game_164.score;
      t_174 = new GameOver();
      t_175 = game_164.rngSeed;
      return_165 = new SnakeGame(t_168, t_169, t_170, t_171, t_172, t_173, t_174, t_175);
      break fn_211;
    }
    const eating_216 = pointEquals(newHead_215, game_164.food);
    let checkLength_217;
    if (eating_216) {
      t_176 = game_164.snake.length;
      checkLength_217 = t_176;
    } else {
      t_177 = game_164.snake.length;
      checkLength_217 = t_177 - 1 | 0;
    }
    let i_218 = 0;
    while (i_218 < checkLength_217) {
      t_178 = game_164.snake;
      t_179 = new Point(-1, -1);
      if (pointEquals(newHead_215, listedGetOr_214(t_178, i_218, t_179))) {
        t_180 = game_164.width;
        t_181 = game_164.height;
        t_182 = game_164.snake;
        t_183 = game_164.direction;
        t_184 = game_164.food;
        t_185 = game_164.score;
        t_186 = new GameOver();
        t_187 = game_164.rngSeed;
        return_165 = new SnakeGame(t_180, t_181, t_182, t_183, t_184, t_185, t_186, t_187);
        break fn_211;
      }
      i_218 = i_218 + 1 | 0;
    }
    const newSnakeBuilder_219 = [];
    listBuilderAdd_220(newSnakeBuilder_219, newHead_215);
    let keepLength_221;
    if (eating_216) {
      t_188 = game_164.snake.length;
      keepLength_221 = t_188;
    } else {
      t_189 = game_164.snake.length;
      keepLength_221 = t_189 - 1 | 0;
    }
    let i_222 = 0;
    while (i_222 < keepLength_221) {
      t_190 = game_164.snake;
      t_191 = new Point(0, 0);
      listBuilderAdd_220(newSnakeBuilder_219, listedGetOr_214(t_190, i_222, t_191));
      i_222 = i_222 + 1 | 0;
    }
    const newSnake_223 = listBuilderToList_224(newSnakeBuilder_219);
    if (eating_216) {
      const newScore_225 = game_164.score + 1 | 0;
      t_192 = game_164.width;
      t_193 = game_164.height;
      t_194 = game_164.rngSeed;
      const foodResult_226 = placeFood_109(newSnake_223, t_192, t_193, t_194);
      t_195 = game_164.width;
      t_196 = game_164.height;
      t_197 = game_164.direction;
      t_198 = foodResult_226.point;
      t_199 = new Playing();
      t_200 = foodResult_226.seed;
      return_165 = new SnakeGame(t_195, t_196, newSnake_223, t_197, t_198, newScore_225, t_199, t_200);
    } else {
      t_201 = game_164.width;
      t_202 = game_164.height;
      t_203 = game_164.direction;
      t_204 = game_164.food;
      t_205 = game_164.score;
      t_206 = game_164.status;
      t_207 = game_164.rngSeed;
      return_165 = new SnakeGame(t_201, t_202, newSnake_223, t_203, t_204, t_205, t_206, t_207);
    }
  }
  return return_165;
};
/**
 * @param {SnakeGame} game_228
 * @param {Point} p_229
 * @returns {string}
 */
function cellChar_227(game_228, p_229) {
  let return_230;
  let t_231;
  let t_232;
  let t_233;
  let t_234;
  let t_235;
  fn_236: {
    const head_237 = listedGetOr_214(game_228.snake, 0, new Point(-1, -1));
    if (pointEquals(p_229, head_237)) {
      return_230 = "@";
      break fn_236;
    }
    let i_238 = 1;
    while (true) {
      t_231 = game_228.snake.length;
      if (!(i_238 < t_231)) {
        break;
      }
      t_232 = game_228.snake;
      t_233 = new Point(-1, -1);
      t_234 = listedGetOr_214(t_232, i_238, t_233);
      if (pointEquals(p_229, t_234)) {
        return_230 = "o";
        break fn_236;
      }
      i_238 = i_238 + 1 | 0;
    }
    t_235 = game_228.food;
    if (pointEquals(p_229, t_235)) {
      return_230 = "*";
      break fn_236;
    }
    return_230 = " ";
  }
  return return_230;
}
/**
 * @param {SnakeGame} game_239
 * @returns {string}
 */
export function render(game_239) {
  let t_240;
  let t_241;
  let t_242;
  let t_243;
  const sb_244 = [""];
  sb_244[0] += "\x1b[2J\x1b[H";
  sb_244[0] += "#";
  let x_245 = 0;
  while (true) {
    t_240 = game_239.width;
    if (!(x_245 < t_240)) {
      break;
    }
    sb_244[0] += "#";
    x_245 = x_245 + 1 | 0;
  }
  sb_244[0] += "#\r\n";
  let y_246 = 0;
  while (true) {
    t_241 = game_239.height;
    if (!(y_246 < t_241)) {
      break;
    }
    sb_244[0] += "#";
    let x_247 = 0;
    while (true) {
      t_242 = game_239.width;
      if (!(x_247 < t_242)) {
        break;
      }
      const p_248 = new Point(x_247, y_246);
      sb_244[0] += cellChar_227(game_239, p_248);
      x_247 = x_247 + 1 | 0;
    }
    sb_244[0] += "#\r\n";
    y_246 = y_246 + 1 | 0;
  }
  sb_244[0] += "#";
  let x_249 = 0;
  while (true) {
    t_243 = game_239.width;
    if (!(x_249 < t_243)) {
      break;
    }
    sb_244[0] += "#";
    x_249 = x_249 + 1 | 0;
  }
  sb_244[0] += "#\r\n";
  let statusText_250;
  let t_251 = game_239.status;
  if (t_251 instanceof Playing) {
    statusText_250 = "Playing";
  } else if (t_251 instanceof GameOver) {
    statusText_250 = "GAME OVER";
  } else {
    statusText_250 = "";
  }
  sb_244[0] += "Score: " + game_239.score.toString() + "  " + statusText_250 + "\r" + "\n";
  return sb_244[0];
};
/**
 * @param {number} width_253
 * @param {number} height_254
 * @param {number} index_255
 * @param {number} total_256
 * @returns {SpawnInfo_77}
 */
function spawnPosition_252(width_253, height_254, index_255, total_256) {
  let return_257;
  let t_258;
  let t_259;
  let t_260;
  let t_261;
  let t_262;
  let t_263;
  let t_264;
  let t_265;
  let t_266;
  let t_267;
  let t_268;
  let t_269;
  let t_270;
  let t_271;
  let t_272;
  let t_273;
  let t_274;
  let t_275;
  fn_276: {
    let cx_277 = 0;
    let cy_278 = 0;
    if (width_253 > 0) {
      t_266 = width_253 / 2 | 0;
      t_267 = t_266;
      cx_277 = t_267;
    }
    if (height_254 > 0) {
      t_268 = height_254 / 2 | 0;
      t_269 = t_268;
      cy_278 = t_269;
    }
    let qx_279 = 0;
    let qy_280 = 0;
    if (width_253 > 0) {
      t_270 = width_253 / 4 | 0;
      t_271 = t_270;
      qx_279 = t_271;
    }
    if (height_254 > 0) {
      t_272 = height_254 / 4 | 0;
      t_273 = t_272;
      qy_280 = t_273;
    }
    let slot_281 = 0;
    if (total_256 > 0) {
      t_274 = modIntInt_108(index_255, 4);
      t_275 = t_274;
      slot_281 = t_275;
    }
    if (slot_281 === 0) {
      t_258 = new Point(qx_279, cy_278);
      t_259 = new Right();
      return_257 = new SpawnInfo_77(t_258, t_259);
      break fn_276;
    }
    if (slot_281 === 1) {
      t_260 = new Point((width_253 - qx_279 | 0) - 1 | 0, cy_278);
      t_261 = new Left();
      return_257 = new SpawnInfo_77(t_260, t_261);
      break fn_276;
    }
    if (slot_281 === 2) {
      t_262 = new Point(cx_277, qy_280);
      t_263 = new Down();
      return_257 = new SpawnInfo_77(t_262, t_263);
      break fn_276;
    }
    t_264 = new Point(cx_277, (height_254 - qy_280 | 0) - 1 | 0);
    t_265 = new Up();
    return_257 = new SpawnInfo_77(t_264, t_265);
  }
  return return_257;
}
/**
 * @param {Array<PlayerSnake>} snakes_283
 * @returns {Array<Point>}
 */
function collectAllSegments_282(snakes_283) {
  let t_284;
  let t_285;
  let t_286;
  let t_287;
  let t_288;
  const builder_289 = [];
  let i_290 = 0;
  while (true) {
    t_284 = snakes_283.length;
    if (!(i_290 < t_284)) {
      break;
    }
    t_285 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_291 = listedGetOr_214(snakes_283, i_290, t_285);
    let j_292 = 0;
    while (true) {
      t_286 = snake_291.segments.length;
      if (!(j_292 < t_286)) {
        break;
      }
      t_287 = snake_291.segments;
      t_288 = new Point(0, 0);
      listBuilderAdd_220(builder_289, listedGetOr_214(t_287, j_292, t_288));
      j_292 = j_292 + 1 | 0;
    }
    i_290 = i_290 + 1 | 0;
  }
  return listBuilderToList_224(builder_289);
}
/**
 * @param {number} width_293
 * @param {number} height_294
 * @param {number} numPlayers_295
 * @param {number} seed_296
 * @returns {MultiSnakeGame}
 */
export function newMultiGame(width_293, height_294, numPlayers_295, seed_296) {
  let t_297;
  const snakeBuilder_298 = [];
  let currentSeed_299 = seed_296;
  let i_300 = 0;
  while (i_300 < numPlayers_295) {
    const spawn_301 = spawnPosition_252(width_293, height_294, i_300, numPlayers_295);
    const dir_302 = spawn_301.direction;
    const startX_303 = spawn_301.point.x;
    const startY_304 = spawn_301.point.y;
    const delta_305 = directionDelta(dir_302);
    const segments_306 = Object.freeze([new Point(startX_303, startY_304), new Point(startX_303 - delta_305.x | 0, startY_304 - delta_305.y | 0), new Point(startX_303 - imul__104(delta_305.x, 2) | 0, startY_304 - imul__104(delta_305.y, 2) | 0)]);
    t_297 = new Alive();
    listBuilderAdd_220(snakeBuilder_298, new PlayerSnake(i_300, segments_306, dir_302, 0, t_297));
    i_300 = i_300 + 1 | 0;
  }
  let t_307 = listBuilderToList_224(snakeBuilder_298);
  const allSegments_308 = collectAllSegments_282(t_307);
  const foodResult_309 = placeFood_109(allSegments_308, width_293, height_294, currentSeed_299);
  let t_310 = listBuilderToList_224(snakeBuilder_298);
  let t_311 = foodResult_309.point;
  let t_312 = foodResult_309.seed;
  return new MultiSnakeGame(width_293, height_294, t_310, t_311, t_312, 0);
};
/**
 * @param {MultiSnakeGame} game_313
 * @param {Array<Direction>} directions_314
 * @returns {MultiSnakeGame}
 */
export function multiTick(game_313, directions_314) {
  let t_315;
  let t_316;
  let t_317;
  let t_318;
  let t_319;
  let t_320;
  let t_321;
  let t_322;
  let t_323;
  let t_324;
  let t_325;
  let t_326;
  let t_327;
  let t_328;
  let t_329;
  let t_330;
  let t_331;
  let t_332;
  let t_333;
  let t_334;
  let t_335;
  let t_336;
  let t_337;
  let t_338;
  let t_339;
  let t_340;
  let t_341;
  let t_342;
  let t_343;
  let t_344;
  let t_345;
  let t_346;
  let t_347;
  let t_348;
  let t_349;
  let t_350;
  let t_351;
  let t_352;
  let t_353;
  let t_354;
  let t_355;
  let t_356;
  let t_357;
  let t_358;
  let t_359;
  let t_360;
  let t_361;
  let t_362;
  let t_363;
  let t_364;
  let t_365;
  const newDirs_366 = [];
  let i_367 = 0;
  while (true) {
    t_315 = game_313.snakes.length;
    if (!(i_367 < t_315)) {
      break;
    }
    t_316 = game_313.snakes;
    t_317 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_368 = listedGetOr_214(t_316, i_367, t_317);
    t_318 = snake_368.direction;
    const inputDir_369 = listedGetOr_214(directions_314, i_367, t_318);
    if (isOpposite(snake_368.direction, inputDir_369)) {
      listBuilderAdd_220(newDirs_366, snake_368.direction);
    } else {
      listBuilderAdd_220(newDirs_366, inputDir_369);
    }
    i_367 = i_367 + 1 | 0;
  }
  const newHeads_370 = [];
  let i_371 = 0;
  while (true) {
    t_319 = game_313.snakes.length;
    if (!(i_371 < t_319)) {
      break;
    }
    t_320 = game_313.snakes;
    t_321 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_372 = listedGetOr_214(t_320, i_371, t_321);
    if (snake_372.status instanceof Alive) {
      t_322 = listBuilderToList_224(newDirs_366);
      t_323 = new Right();
      const dir_373 = listedGetOr_214(t_322, i_371, t_323);
      const delta_374 = directionDelta(dir_373);
      const head_375 = listedGetOr_214(snake_372.segments, 0, new Point(0, 0));
      listBuilderAdd_220(newHeads_370, new Point(head_375.x + delta_374.x | 0, head_375.y + delta_374.y | 0));
    } else {
      listBuilderAdd_220(newHeads_370, new Point(-1, -1));
    }
    i_371 = i_371 + 1 | 0;
  }
  const headsList_376 = listBuilderToList_224(newHeads_370);
  const dirsList_377 = listBuilderToList_224(newDirs_366);
  const aliveBuilder_378 = [];
  let i_379 = 0;
  while (true) {
    t_324 = game_313.snakes.length;
    if (!(i_379 < t_324)) {
      break;
    }
    t_325 = game_313.snakes;
    t_326 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_380 = listedGetOr_214(t_325, i_379, t_326);
    if (!(snake_380.status instanceof Alive)) {
      listBuilderAdd_220(aliveBuilder_378, false);
    } else {
      t_327 = new Point(-1, -1);
      const nh_381 = listedGetOr_214(headsList_376, i_379, t_327);
      let dead_382 = false;
      if (nh_381.x < 0) {
        t_363 = true;
      } else {
        if (nh_381.x >= game_313.width) {
          t_362 = true;
        } else {
          if (nh_381.y < 0) {
            t_361 = true;
          } else {
            t_328 = nh_381.y;
            t_329 = game_313.height;
            t_361 = t_328 >= t_329;
          }
          t_362 = t_361;
        }
        t_363 = t_362;
      }
      if (t_363) {
        dead_382 = true;
      }
      if (! dead_382) {
        let s_383 = 0;
        while (true) {
          t_330 = snake_380.segments.length;
          if (!(s_383 <(t_330 - 1 | 0))) {
            break;
          }
          t_331 = snake_380.segments;
          t_332 = new Point(-2, -2);
          if (pointEquals(nh_381, listedGetOr_214(t_331, s_383, t_332))) {
            dead_382 = true;
          }
          s_383 = s_383 + 1 | 0;
        }
      }
      if (! dead_382) {
        let j_384 = 0;
        while (true) {
          t_333 = game_313.snakes.length;
          if (!(j_384 < t_333)) {
            break;
          }
          if (j_384 !== i_379) {
            t_334 = game_313.snakes;
            t_335 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
            const other_385 = listedGetOr_214(t_334, j_384, t_335);
            if (other_385.status instanceof Alive) {
              let s_386 = 0;
              while (true) {
                t_336 = other_385.segments.length;
                if (!(s_386 <(t_336 - 1 | 0))) {
                  break;
                }
                t_337 = other_385.segments;
                t_338 = new Point(-2, -2);
                if (pointEquals(nh_381, listedGetOr_214(t_337, s_386, t_338))) {
                  dead_382 = true;
                }
                s_386 = s_386 + 1 | 0;
              }
            }
          }
          j_384 = j_384 + 1 | 0;
        }
      }
      if (! dead_382) {
        let j_387 = 0;
        while (true) {
          t_339 = game_313.snakes.length;
          if (!(j_387 < t_339)) {
            break;
          }
          if (j_387 !== i_379) {
            t_340 = game_313.snakes;
            t_341 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
            const otherSnake_388 = listedGetOr_214(t_340, j_387, t_341);
            if (otherSnake_388.status instanceof Alive) {
              t_342 = new Point(-3, -3);
              const otherHead_389 = listedGetOr_214(headsList_376, j_387, t_342);
              if (pointEquals(nh_381, otherHead_389)) {
                dead_382 = true;
              }
            }
          }
          j_387 = j_387 + 1 | 0;
        }
      }
      listBuilderAdd_220(aliveBuilder_378, ! dead_382);
    }
    i_379 = i_379 + 1 | 0;
  }
  const aliveList_390 = listBuilderToList_224(aliveBuilder_378);
  let eaterIndex_391 = -1;
  let i_392 = 0;
  while (true) {
    t_343 = game_313.snakes.length;
    if (!(i_392 < t_343)) {
      break;
    }
    if (listedGetOr_214(aliveList_390, i_392, false)) {
      t_344 = new Point(-1, -1);
      const nh_393 = listedGetOr_214(headsList_376, i_392, t_344);
      if (pointEquals(nh_393, game_313.food)) {
        eaterIndex_391 = i_392;
      }
    }
    i_392 = i_392 + 1 | 0;
  }
  const resultSnakes_394 = [];
  let i_395 = 0;
  while (true) {
    t_345 = game_313.snakes.length;
    if (!(i_395 < t_345)) {
      break;
    }
    t_346 = game_313.snakes;
    t_347 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_396 = listedGetOr_214(t_346, i_395, t_347);
    if (!(snake_396.status instanceof Alive)) {
      listBuilderAdd_220(resultSnakes_394, snake_396);
    } else if (! listedGetOr_214(aliveList_390, i_395, false)) {
      listBuilderAdd_220(resultSnakes_394, new PlayerSnake(snake_396.id, snake_396.segments, snake_396.direction, snake_396.score, new Dead()));
    } else {
      t_348 = new Point(0, 0);
      const nh_397 = listedGetOr_214(headsList_376, i_395, t_348);
      t_349 = snake_396.direction;
      const dir_398 = listedGetOr_214(dirsList_377, i_395, t_349);
      const isEating_399 = i_395 === eaterIndex_391;
      if (isEating_399) {
        t_350 = snake_396.segments.length;
        t_364 = t_350;
      } else {
        t_351 = snake_396.segments.length;
        t_364 = t_351 - 1 | 0;
      }
      const keepLen_400 = t_364;
      const newSegs_401 = [];
      listBuilderAdd_220(newSegs_401, nh_397);
      let s_402 = 0;
      while (s_402 < keepLen_400) {
        t_352 = snake_396.segments;
        t_353 = new Point(0, 0);
        listBuilderAdd_220(newSegs_401, listedGetOr_214(t_352, s_402, t_353));
        s_402 = s_402 + 1 | 0;
      }
      if (isEating_399) {
        t_354 = snake_396.score;
        t_365 = t_354 + 1 | 0;
      } else {
        t_355 = snake_396.score;
        t_365 = t_355;
      }
      const newScore_403 = t_365;
      listBuilderAdd_220(resultSnakes_394, new PlayerSnake(snake_396.id, listBuilderToList_224(newSegs_401), dir_398, newScore_403, new Alive()));
    }
    i_395 = i_395 + 1 | 0;
  }
  const resultSnakesList_404 = listBuilderToList_224(resultSnakes_394);
  let t_405 = game_313.food;
  let newFood_406 = t_405;
  let t_407 = game_313.rngSeed;
  let newSeed_408 = t_407;
  if (eaterIndex_391 >= 0) {
    const allSegs_409 = collectAllSegments_282(resultSnakesList_404);
    t_356 = game_313.width;
    t_357 = game_313.height;
    t_358 = game_313.rngSeed;
    const foodResult_410 = placeFood_109(allSegs_409, t_356, t_357, t_358);
    t_359 = foodResult_410.point;
    newFood_406 = t_359;
    t_360 = foodResult_410.seed;
    newSeed_408 = t_360;
  }
  let t_411 = game_313.width;
  let t_412 = game_313.height;
  let t_413 = game_313.tickCount;
  return new MultiSnakeGame(t_411, t_412, resultSnakesList_404, newFood_406, newSeed_408, t_413 + 1 | 0);
};
/**
 * @param {MultiSnakeGame} game_414
 * @param {number} playerId_415
 * @param {Direction} dir_416
 * @returns {MultiSnakeGame}
 */
export function changePlayerDirection(game_414, playerId_415, dir_416) {
  let t_417;
  let t_418;
  let t_419;
  let t_420;
  let t_421;
  let t_422;
  let t_423;
  let t_424;
  let t_425;
  let t_426;
  const newSnakes_427 = [];
  let i_428 = 0;
  while (true) {
    t_417 = game_414.snakes.length;
    if (!(i_428 < t_417)) {
      break;
    }
    t_418 = game_414.snakes;
    t_419 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_429 = listedGetOr_214(t_418, i_428, t_419);
    if (snake_429.id === playerId_415) {
      if (snake_429.status instanceof Alive) {
        t_420 = snake_429.direction;
        t_425 = ! isOpposite(t_420, dir_416);
      } else {
        t_425 = false;
      }
      t_426 = t_425;
    } else {
      t_426 = false;
    }
    if (t_426) {
      t_421 = snake_429.id;
      t_422 = snake_429.segments;
      t_423 = snake_429.score;
      t_424 = snake_429.status;
      listBuilderAdd_220(newSnakes_427, new PlayerSnake(t_421, t_422, dir_416, t_423, t_424));
    } else {
      listBuilderAdd_220(newSnakes_427, snake_429);
    }
    i_428 = i_428 + 1 | 0;
  }
  return new MultiSnakeGame(game_414.width, game_414.height, listBuilderToList_224(newSnakes_427), game_414.food, game_414.rngSeed, game_414.tickCount);
};
/**
 * @param {MultiSnakeGame} game_430
 * @returns {boolean}
 */
export function isMultiGameOver(game_430) {
  let return_431;
  let t_432;
  let t_433;
  let t_434;
  let aliveCount_435 = 0;
  let i_436 = 0;
  while (true) {
    t_432 = game_430.snakes.length;
    if (!(i_436 < t_432)) {
      break;
    }
    t_433 = game_430.snakes;
    t_434 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_437 = listedGetOr_214(t_433, i_436, t_434);
    if (snake_437.status instanceof Alive) {
      aliveCount_435 = aliveCount_435 + 1 | 0;
    }
    i_436 = i_436 + 1 | 0;
  }
  if (game_430.snakes.length === 0) {
    return_431 = false;
  } else if (game_430.snakes.length === 1) {
    return_431 = aliveCount_435 === 0;
  } else {
    return_431 = aliveCount_435 <= 1;
  }
  return return_431;
};
/**
 * @param {MultiSnakeGame} game_438
 * @param {number} seed_439
 * @returns {MultiSnakeGame}
 */
export function addPlayer(game_438, seed_439) {
  let t_440;
  let t_441;
  let t_442;
  const newId_443 = game_438.snakes.length;
  const spawn_444 = spawnPosition_252(game_438.width, game_438.height, newId_443, newId_443 + 1 | 0);
  const dir_445 = spawn_444.direction;
  const delta_446 = directionDelta(dir_445);
  const startX_447 = spawn_444.point.x;
  const startY_448 = spawn_444.point.y;
  const segments_449 = Object.freeze([new Point(startX_447, startY_448), new Point(startX_447 - delta_446.x | 0, startY_448 - delta_446.y | 0), new Point(startX_447 - imul__104(delta_446.x, 2) | 0, startY_448 - imul__104(delta_446.y, 2) | 0)]);
  const newSnake_450 = new PlayerSnake(newId_443, segments_449, dir_445, 0, new Alive());
  const builder_451 = [];
  let i_452 = 0;
  while (true) {
    t_440 = game_438.snakes.length;
    if (!(i_452 < t_440)) {
      break;
    }
    t_441 = game_438.snakes;
    t_442 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    listBuilderAdd_220(builder_451, listedGetOr_214(t_441, i_452, t_442));
    i_452 = i_452 + 1 | 0;
  }
  listBuilderAdd_220(builder_451, newSnake_450);
  let t_453 = listBuilderToList_224(builder_451);
  const allSegs_454 = collectAllSegments_282(t_453);
  let t_455 = game_438.width;
  let t_456 = game_438.height;
  const foodResult_457 = placeFood_109(allSegs_454, t_455, t_456, seed_439);
  return new MultiSnakeGame(game_438.width, game_438.height, listBuilderToList_224(builder_451), foodResult_457.point, foodResult_457.seed, game_438.tickCount);
};
/**
 * @param {MultiSnakeGame} game_458
 * @param {number} playerId_459
 * @returns {MultiSnakeGame}
 */
export function removePlayer(game_458, playerId_459) {
  let t_460;
  let t_461;
  let t_462;
  const builder_463 = [];
  let i_464 = 0;
  while (true) {
    t_460 = game_458.snakes.length;
    if (!(i_464 < t_460)) {
      break;
    }
    t_461 = game_458.snakes;
    t_462 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_465 = listedGetOr_214(t_461, i_464, t_462);
    if (snake_465.id !== playerId_459) {
      listBuilderAdd_220(builder_463, snake_465);
    }
    i_464 = i_464 + 1 | 0;
  }
  return new MultiSnakeGame(game_458.width, game_458.height, listBuilderToList_224(builder_463), game_458.food, game_458.rngSeed, game_458.tickCount);
};
/**
 * @param {number} id_466
 * @returns {string}
 */
export function playerHeadChar(id_466) {
  let return_467;
  if (id_466 === 0) {
    return_467 = "@";
  } else if (id_466 === 1) {
    return_467 = "#";
  } else if (id_466 === 2) {
    return_467 = "$";
  } else if (id_466 === 3) {
    return_467 = "%";
  } else {
    return_467 = "&";
  }
  return return_467;
};
/**
 * @param {number} id_468
 * @returns {string}
 */
export function playerBodyChar(id_468) {
  let return_469;
  if (id_468 === 0) {
    return_469 = "o";
  } else if (id_468 === 1) {
    return_469 = "+";
  } else if (id_468 === 2) {
    return_469 = "~";
  } else if (id_468 === 3) {
    return_469 = "=";
  } else {
    return_469 = ".";
  }
  return return_469;
};
/**
 * @param {MultiSnakeGame} game_471
 * @param {Point} p_472
 * @returns {string}
 */
function multiCellChar_470(game_471, p_472) {
  let return_473;
  let t_474;
  let t_475;
  let t_476;
  let t_477;
  let t_478;
  let t_479;
  let t_480;
  let t_481;
  let t_482;
  let t_483;
  let t_484;
  let t_485;
  let t_486;
  fn_487: {
    let i_488 = 0;
    while (true) {
      t_474 = game_471.snakes.length;
      if (!(i_488 < t_474)) {
        break;
      }
      t_475 = game_471.snakes;
      t_476 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
      const snake_489 = listedGetOr_214(t_475, i_488, t_476);
      if (snake_489.segments.length > 0) {
        const head_490 = listedGetOr_214(snake_489.segments, 0, new Point(-1, -1));
        if (pointEquals(p_472, head_490)) {
          t_477 = snake_489.id;
          return_473 = playerHeadChar(t_477);
          break fn_487;
        }
      }
      i_488 = i_488 + 1 | 0;
    }
    let i_491 = 0;
    while (true) {
      t_478 = game_471.snakes.length;
      if (!(i_491 < t_478)) {
        break;
      }
      t_479 = game_471.snakes;
      t_480 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
      const snake_492 = listedGetOr_214(t_479, i_491, t_480);
      let j_493 = 1;
      while (true) {
        t_481 = snake_492.segments.length;
        if (!(j_493 < t_481)) {
          break;
        }
        t_482 = snake_492.segments;
        t_483 = new Point(-1, -1);
        t_484 = listedGetOr_214(t_482, j_493, t_483);
        if (pointEquals(p_472, t_484)) {
          t_485 = snake_492.id;
          return_473 = playerBodyChar(t_485);
          break fn_487;
        }
        j_493 = j_493 + 1 | 0;
      }
      i_491 = i_491 + 1 | 0;
    }
    t_486 = game_471.food;
    if (pointEquals(p_472, t_486)) {
      return_473 = "*";
      break fn_487;
    }
    return_473 = " ";
  }
  return return_473;
}
/**
 * @param {MultiSnakeGame} game_494
 * @returns {string}
 */
export function multiRender(game_494) {
  let t_495;
  let t_496;
  let t_497;
  let t_498;
  let t_499;
  let t_500;
  let t_501;
  let t_502;
  let t_503;
  const sb_504 = [""];
  sb_504[0] += "\x1b[2J\x1b[H";
  sb_504[0] += "#";
  let x_505 = 0;
  while (true) {
    t_495 = game_494.width;
    if (!(x_505 < t_495)) {
      break;
    }
    sb_504[0] += "#";
    x_505 = x_505 + 1 | 0;
  }
  sb_504[0] += "#\r\n";
  let y_506 = 0;
  while (true) {
    t_496 = game_494.height;
    if (!(y_506 < t_496)) {
      break;
    }
    sb_504[0] += "#";
    let x_507 = 0;
    while (true) {
      t_497 = game_494.width;
      if (!(x_507 < t_497)) {
        break;
      }
      const p_508 = new Point(x_507, y_506);
      sb_504[0] += multiCellChar_470(game_494, p_508);
      x_507 = x_507 + 1 | 0;
    }
    sb_504[0] += "#\r\n";
    y_506 = y_506 + 1 | 0;
  }
  sb_504[0] += "#";
  let x_509 = 0;
  while (true) {
    t_498 = game_494.width;
    if (!(x_509 < t_498)) {
      break;
    }
    sb_504[0] += "#";
    x_509 = x_509 + 1 | 0;
  }
  sb_504[0] += "#\r\n";
  let i_510 = 0;
  while (true) {
    t_499 = game_494.snakes.length;
    if (!(i_510 < t_499)) {
      break;
    }
    t_500 = game_494.snakes;
    t_501 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_511 = listedGetOr_214(t_500, i_510, t_501);
    t_502 = snake_511.status;
    if (t_502 instanceof Alive) {
      t_503 = "Playing";
    } else if (t_502 instanceof Dead) {
      t_503 = "DEAD";
    } else {
      t_503 = "";
    }
    const statusText_512 = t_503;
    const symbol_513 = playerHeadChar(snake_511.id);
    sb_504[0] += "P" + snake_511.id.toString() + " " + symbol_513 + ": " + snake_511.score.toString() + "  " + statusText_512 + "\r" + "\n";
    i_510 = i_510 + 1 | 0;
  }
  return sb_504[0];
};
/**
 * @param {Direction} dir_514
 * @returns {string}
 */
export function directionToString(dir_514) {
  let return_515;
  if (dir_514 instanceof Up) {
    return_515 = "up";
  } else if (dir_514 instanceof Down) {
    return_515 = "down";
  } else if (dir_514 instanceof Left) {
    return_515 = "left";
  } else if (dir_514 instanceof Right) {
    return_515 = "right";
  } else {
    return_515 = "right";
  }
  return return_515;
};
/**
 * @param {string} s_516
 * @returns {Direction | null}
 */
export function stringToDirection(s_516) {
  let return_517;
  fn_518: {
    if (s_516 === "up") {
      return_517 = new Up();
      break fn_518;
    }
    if (s_516 === "down") {
      return_517 = new Down();
      break fn_518;
    }
    if (s_516 === "left") {
      return_517 = new Left();
      break fn_518;
    }
    if (s_516 === "right") {
      return_517 = new Right();
      break fn_518;
    }
    return_517 = null;
  }
  return return_517;
};
