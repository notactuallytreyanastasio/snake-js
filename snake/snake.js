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
 * @param {number} seed_256
 * @returns {SpawnInfo_77}
 */
function spawnPosition_252(width_253, height_254, index_255, seed_256) {
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
  fn_271: {
    const buf_272 = 5;
    const safeW_273 = width_253 - 10 | 0;
    const safeH_274 = height_254 - 10 | 0;
    if (safeW_273 < 1) {
      t_266 = true;
    } else {
      t_266 = safeH_274 < 1;
    }
    if (t_266) {
      t_267 = width_253 / 2 | 0;
      t_268 = t_267;
      t_269 = height_254 / 2 | 0;
      t_270 = t_269;
      t_258 = new Point(t_268, t_270);
      t_259 = new Right();
      return_257 = new SpawnInfo_77(t_258, t_259);
      break fn_271;
    }
    const r1_275 = nextRandom((imul__104(seed_256, 7) + imul__104(index_255, 131) | 0) + 37 | 0, safeW_273);
    const r2_276 = nextRandom(r1_275.nextSeed, safeH_274);
    const x_277 = 5 + r1_275.value | 0;
    const y_278 = 5 + r2_276.value | 0;
    const r3_279 = nextRandom(r2_276.nextSeed, 4);
    t_260 = new Right();
    let dir_280 = t_260;
    if (r3_279.value === 0) {
      t_261 = new Right();
      dir_280 = t_261;
    }
    if (r3_279.value === 1) {
      t_262 = new Left();
      dir_280 = t_262;
    }
    if (r3_279.value === 2) {
      t_263 = new Down();
      dir_280 = t_263;
    }
    if (r3_279.value === 3) {
      t_264 = new Up();
      dir_280 = t_264;
    }
    t_265 = new Point(x_277, y_278);
    return_257 = new SpawnInfo_77(t_265, dir_280);
  }
  return return_257;
}
/**
 * @param {Array<PlayerSnake>} snakes_282
 * @returns {Array<Point>}
 */
function collectAllSegments_281(snakes_282) {
  let t_283;
  let t_284;
  let t_285;
  let t_286;
  let t_287;
  const builder_288 = [];
  let i_289 = 0;
  while (true) {
    t_283 = snakes_282.length;
    if (!(i_289 < t_283)) {
      break;
    }
    t_284 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_290 = listedGetOr_214(snakes_282, i_289, t_284);
    let j_291 = 0;
    while (true) {
      t_285 = snake_290.segments.length;
      if (!(j_291 < t_285)) {
        break;
      }
      t_286 = snake_290.segments;
      t_287 = new Point(0, 0);
      listBuilderAdd_220(builder_288, listedGetOr_214(t_286, j_291, t_287));
      j_291 = j_291 + 1 | 0;
    }
    i_289 = i_289 + 1 | 0;
  }
  return listBuilderToList_224(builder_288);
}
/**
 * @param {number} width_292
 * @param {number} height_293
 * @param {number} numPlayers_294
 * @param {number} seed_295
 * @returns {MultiSnakeGame}
 */
export function newMultiGame(width_292, height_293, numPlayers_294, seed_295) {
  let t_296;
  const snakeBuilder_297 = [];
  let currentSeed_298 = seed_295;
  let i_299 = 0;
  while (i_299 < numPlayers_294) {
    const spawn_300 = spawnPosition_252(width_292, height_293, i_299, currentSeed_298);
    const dir_301 = spawn_300.direction;
    const startX_302 = spawn_300.point.x;
    const startY_303 = spawn_300.point.y;
    const delta_304 = directionDelta(dir_301);
    const segments_305 = Object.freeze([new Point(startX_302, startY_303), new Point(startX_302 - delta_304.x | 0, startY_303 - delta_304.y | 0), new Point(startX_302 - imul__104(delta_304.x, 2) | 0, startY_303 - imul__104(delta_304.y, 2) | 0)]);
    t_296 = new Alive();
    listBuilderAdd_220(snakeBuilder_297, new PlayerSnake(i_299, segments_305, dir_301, 0, t_296));
    i_299 = i_299 + 1 | 0;
  }
  let t_306 = listBuilderToList_224(snakeBuilder_297);
  const allSegments_307 = collectAllSegments_281(t_306);
  const foodResult_308 = placeFood_109(allSegments_307, width_292, height_293, currentSeed_298);
  let t_309 = listBuilderToList_224(snakeBuilder_297);
  let t_310 = foodResult_308.point;
  let t_311 = foodResult_308.seed;
  return new MultiSnakeGame(width_292, height_293, t_309, t_310, t_311, 0);
};
/**
 * @param {MultiSnakeGame} game_312
 * @param {Array<Direction>} directions_313
 * @returns {MultiSnakeGame}
 */
export function multiTick(game_312, directions_313) {
  let t_314;
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
  const newDirs_365 = [];
  let i_366 = 0;
  while (true) {
    t_314 = game_312.snakes.length;
    if (!(i_366 < t_314)) {
      break;
    }
    t_315 = game_312.snakes;
    t_316 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_367 = listedGetOr_214(t_315, i_366, t_316);
    t_317 = snake_367.direction;
    const inputDir_368 = listedGetOr_214(directions_313, i_366, t_317);
    if (isOpposite(snake_367.direction, inputDir_368)) {
      listBuilderAdd_220(newDirs_365, snake_367.direction);
    } else {
      listBuilderAdd_220(newDirs_365, inputDir_368);
    }
    i_366 = i_366 + 1 | 0;
  }
  const newHeads_369 = [];
  let i_370 = 0;
  while (true) {
    t_318 = game_312.snakes.length;
    if (!(i_370 < t_318)) {
      break;
    }
    t_319 = game_312.snakes;
    t_320 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_371 = listedGetOr_214(t_319, i_370, t_320);
    if (snake_371.status instanceof Alive) {
      t_321 = listBuilderToList_224(newDirs_365);
      t_322 = new Right();
      const dir_372 = listedGetOr_214(t_321, i_370, t_322);
      const delta_373 = directionDelta(dir_372);
      const head_374 = listedGetOr_214(snake_371.segments, 0, new Point(0, 0));
      listBuilderAdd_220(newHeads_369, new Point(head_374.x + delta_373.x | 0, head_374.y + delta_373.y | 0));
    } else {
      listBuilderAdd_220(newHeads_369, new Point(-1, -1));
    }
    i_370 = i_370 + 1 | 0;
  }
  const headsList_375 = listBuilderToList_224(newHeads_369);
  const dirsList_376 = listBuilderToList_224(newDirs_365);
  const aliveBuilder_377 = [];
  let i_378 = 0;
  while (true) {
    t_323 = game_312.snakes.length;
    if (!(i_378 < t_323)) {
      break;
    }
    t_324 = game_312.snakes;
    t_325 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_379 = listedGetOr_214(t_324, i_378, t_325);
    if (!(snake_379.status instanceof Alive)) {
      listBuilderAdd_220(aliveBuilder_377, false);
    } else {
      t_326 = new Point(-1, -1);
      const nh_380 = listedGetOr_214(headsList_375, i_378, t_326);
      let dead_381 = false;
      if (nh_380.x < 0) {
        t_362 = true;
      } else {
        if (nh_380.x >= game_312.width) {
          t_361 = true;
        } else {
          if (nh_380.y < 0) {
            t_360 = true;
          } else {
            t_327 = nh_380.y;
            t_328 = game_312.height;
            t_360 = t_327 >= t_328;
          }
          t_361 = t_360;
        }
        t_362 = t_361;
      }
      if (t_362) {
        dead_381 = true;
      }
      if (! dead_381) {
        let s_382 = 0;
        while (true) {
          t_329 = snake_379.segments.length;
          if (!(s_382 <(t_329 - 1 | 0))) {
            break;
          }
          t_330 = snake_379.segments;
          t_331 = new Point(-2, -2);
          if (pointEquals(nh_380, listedGetOr_214(t_330, s_382, t_331))) {
            dead_381 = true;
          }
          s_382 = s_382 + 1 | 0;
        }
      }
      if (! dead_381) {
        let j_383 = 0;
        while (true) {
          t_332 = game_312.snakes.length;
          if (!(j_383 < t_332)) {
            break;
          }
          if (j_383 !== i_378) {
            t_333 = game_312.snakes;
            t_334 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
            const other_384 = listedGetOr_214(t_333, j_383, t_334);
            if (other_384.status instanceof Alive) {
              let s_385 = 0;
              while (true) {
                t_335 = other_384.segments.length;
                if (!(s_385 <(t_335 - 1 | 0))) {
                  break;
                }
                t_336 = other_384.segments;
                t_337 = new Point(-2, -2);
                if (pointEquals(nh_380, listedGetOr_214(t_336, s_385, t_337))) {
                  dead_381 = true;
                }
                s_385 = s_385 + 1 | 0;
              }
            }
          }
          j_383 = j_383 + 1 | 0;
        }
      }
      if (! dead_381) {
        let j_386 = 0;
        while (true) {
          t_338 = game_312.snakes.length;
          if (!(j_386 < t_338)) {
            break;
          }
          if (j_386 !== i_378) {
            t_339 = game_312.snakes;
            t_340 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
            const otherSnake_387 = listedGetOr_214(t_339, j_386, t_340);
            if (otherSnake_387.status instanceof Alive) {
              t_341 = new Point(-3, -3);
              const otherHead_388 = listedGetOr_214(headsList_375, j_386, t_341);
              if (pointEquals(nh_380, otherHead_388)) {
                dead_381 = true;
              }
            }
          }
          j_386 = j_386 + 1 | 0;
        }
      }
      listBuilderAdd_220(aliveBuilder_377, ! dead_381);
    }
    i_378 = i_378 + 1 | 0;
  }
  const aliveList_389 = listBuilderToList_224(aliveBuilder_377);
  let eaterIndex_390 = -1;
  let i_391 = 0;
  while (true) {
    t_342 = game_312.snakes.length;
    if (!(i_391 < t_342)) {
      break;
    }
    if (listedGetOr_214(aliveList_389, i_391, false)) {
      t_343 = new Point(-1, -1);
      const nh_392 = listedGetOr_214(headsList_375, i_391, t_343);
      if (pointEquals(nh_392, game_312.food)) {
        eaterIndex_390 = i_391;
      }
    }
    i_391 = i_391 + 1 | 0;
  }
  const resultSnakes_393 = [];
  let i_394 = 0;
  while (true) {
    t_344 = game_312.snakes.length;
    if (!(i_394 < t_344)) {
      break;
    }
    t_345 = game_312.snakes;
    t_346 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_395 = listedGetOr_214(t_345, i_394, t_346);
    if (!(snake_395.status instanceof Alive)) {
      listBuilderAdd_220(resultSnakes_393, snake_395);
    } else if (! listedGetOr_214(aliveList_389, i_394, false)) {
      listBuilderAdd_220(resultSnakes_393, new PlayerSnake(snake_395.id, snake_395.segments, snake_395.direction, snake_395.score, new Dead()));
    } else {
      t_347 = new Point(0, 0);
      const nh_396 = listedGetOr_214(headsList_375, i_394, t_347);
      t_348 = snake_395.direction;
      const dir_397 = listedGetOr_214(dirsList_376, i_394, t_348);
      const isEating_398 = i_394 === eaterIndex_390;
      if (isEating_398) {
        t_349 = snake_395.segments.length;
        t_363 = t_349;
      } else {
        t_350 = snake_395.segments.length;
        t_363 = t_350 - 1 | 0;
      }
      const keepLen_399 = t_363;
      const newSegs_400 = [];
      listBuilderAdd_220(newSegs_400, nh_396);
      let s_401 = 0;
      while (s_401 < keepLen_399) {
        t_351 = snake_395.segments;
        t_352 = new Point(0, 0);
        listBuilderAdd_220(newSegs_400, listedGetOr_214(t_351, s_401, t_352));
        s_401 = s_401 + 1 | 0;
      }
      if (isEating_398) {
        t_353 = snake_395.score;
        t_364 = t_353 + 1 | 0;
      } else {
        t_354 = snake_395.score;
        t_364 = t_354;
      }
      const newScore_402 = t_364;
      listBuilderAdd_220(resultSnakes_393, new PlayerSnake(snake_395.id, listBuilderToList_224(newSegs_400), dir_397, newScore_402, new Alive()));
    }
    i_394 = i_394 + 1 | 0;
  }
  const resultSnakesList_403 = listBuilderToList_224(resultSnakes_393);
  let t_404 = game_312.food;
  let newFood_405 = t_404;
  let t_406 = game_312.rngSeed;
  let newSeed_407 = t_406;
  if (eaterIndex_390 >= 0) {
    const allSegs_408 = collectAllSegments_281(resultSnakesList_403);
    t_355 = game_312.width;
    t_356 = game_312.height;
    t_357 = game_312.rngSeed;
    const foodResult_409 = placeFood_109(allSegs_408, t_355, t_356, t_357);
    t_358 = foodResult_409.point;
    newFood_405 = t_358;
    t_359 = foodResult_409.seed;
    newSeed_407 = t_359;
  }
  let t_410 = game_312.width;
  let t_411 = game_312.height;
  let t_412 = game_312.tickCount;
  return new MultiSnakeGame(t_410, t_411, resultSnakesList_403, newFood_405, newSeed_407, t_412 + 1 | 0);
};
/**
 * @param {MultiSnakeGame} game_413
 * @param {number} playerId_414
 * @param {Direction} dir_415
 * @returns {MultiSnakeGame}
 */
export function changePlayerDirection(game_413, playerId_414, dir_415) {
  let t_416;
  let t_417;
  let t_418;
  let t_419;
  let t_420;
  let t_421;
  let t_422;
  let t_423;
  let t_424;
  let t_425;
  const newSnakes_426 = [];
  let i_427 = 0;
  while (true) {
    t_416 = game_413.snakes.length;
    if (!(i_427 < t_416)) {
      break;
    }
    t_417 = game_413.snakes;
    t_418 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_428 = listedGetOr_214(t_417, i_427, t_418);
    if (snake_428.id === playerId_414) {
      if (snake_428.status instanceof Alive) {
        t_419 = snake_428.direction;
        t_424 = ! isOpposite(t_419, dir_415);
      } else {
        t_424 = false;
      }
      t_425 = t_424;
    } else {
      t_425 = false;
    }
    if (t_425) {
      t_420 = snake_428.id;
      t_421 = snake_428.segments;
      t_422 = snake_428.score;
      t_423 = snake_428.status;
      listBuilderAdd_220(newSnakes_426, new PlayerSnake(t_420, t_421, dir_415, t_422, t_423));
    } else {
      listBuilderAdd_220(newSnakes_426, snake_428);
    }
    i_427 = i_427 + 1 | 0;
  }
  return new MultiSnakeGame(game_413.width, game_413.height, listBuilderToList_224(newSnakes_426), game_413.food, game_413.rngSeed, game_413.tickCount);
};
/**
 * @param {MultiSnakeGame} game_429
 * @returns {boolean}
 */
export function isMultiGameOver(game_429) {
  let return_430;
  let t_431;
  let t_432;
  let t_433;
  let aliveCount_434 = 0;
  let i_435 = 0;
  while (true) {
    t_431 = game_429.snakes.length;
    if (!(i_435 < t_431)) {
      break;
    }
    t_432 = game_429.snakes;
    t_433 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_436 = listedGetOr_214(t_432, i_435, t_433);
    if (snake_436.status instanceof Alive) {
      aliveCount_434 = aliveCount_434 + 1 | 0;
    }
    i_435 = i_435 + 1 | 0;
  }
  if (game_429.snakes.length === 0) {
    return_430 = false;
  } else if (game_429.snakes.length === 1) {
    return_430 = aliveCount_434 === 0;
  } else {
    return_430 = aliveCount_434 <= 1;
  }
  return return_430;
};
/**
 * @param {MultiSnakeGame} game_437
 * @param {number} seed_438
 * @returns {MultiSnakeGame}
 */
export function addPlayer(game_437, seed_438) {
  let t_439;
  let t_440;
  let t_441;
  const newId_442 = game_437.snakes.length;
  const spawn_443 = spawnPosition_252(game_437.width, game_437.height, newId_442, seed_438);
  const dir_444 = spawn_443.direction;
  const delta_445 = directionDelta(dir_444);
  const startX_446 = spawn_443.point.x;
  const startY_447 = spawn_443.point.y;
  const segments_448 = Object.freeze([new Point(startX_446, startY_447), new Point(startX_446 - delta_445.x | 0, startY_447 - delta_445.y | 0), new Point(startX_446 - imul__104(delta_445.x, 2) | 0, startY_447 - imul__104(delta_445.y, 2) | 0)]);
  const newSnake_449 = new PlayerSnake(newId_442, segments_448, dir_444, 0, new Alive());
  const builder_450 = [];
  let i_451 = 0;
  while (true) {
    t_439 = game_437.snakes.length;
    if (!(i_451 < t_439)) {
      break;
    }
    t_440 = game_437.snakes;
    t_441 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    listBuilderAdd_220(builder_450, listedGetOr_214(t_440, i_451, t_441));
    i_451 = i_451 + 1 | 0;
  }
  listBuilderAdd_220(builder_450, newSnake_449);
  let t_452 = listBuilderToList_224(builder_450);
  const allSegs_453 = collectAllSegments_281(t_452);
  let t_454 = game_437.width;
  let t_455 = game_437.height;
  const foodResult_456 = placeFood_109(allSegs_453, t_454, t_455, seed_438);
  return new MultiSnakeGame(game_437.width, game_437.height, listBuilderToList_224(builder_450), foodResult_456.point, foodResult_456.seed, game_437.tickCount);
};
/**
 * @param {MultiSnakeGame} game_457
 * @param {number} playerId_458
 * @returns {MultiSnakeGame}
 */
export function removePlayer(game_457, playerId_458) {
  let t_459;
  let t_460;
  let t_461;
  const builder_462 = [];
  let i_463 = 0;
  while (true) {
    t_459 = game_457.snakes.length;
    if (!(i_463 < t_459)) {
      break;
    }
    t_460 = game_457.snakes;
    t_461 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_464 = listedGetOr_214(t_460, i_463, t_461);
    if (snake_464.id !== playerId_458) {
      listBuilderAdd_220(builder_462, snake_464);
    }
    i_463 = i_463 + 1 | 0;
  }
  return new MultiSnakeGame(game_457.width, game_457.height, listBuilderToList_224(builder_462), game_457.food, game_457.rngSeed, game_457.tickCount);
};
/**
 * @param {number} id_465
 * @returns {string}
 */
export function playerHeadChar(id_465) {
  let return_466;
  if (id_465 === 0) {
    return_466 = "@";
  } else if (id_465 === 1) {
    return_466 = "#";
  } else if (id_465 === 2) {
    return_466 = "$";
  } else if (id_465 === 3) {
    return_466 = "%";
  } else {
    return_466 = "&";
  }
  return return_466;
};
/**
 * @param {number} id_467
 * @returns {string}
 */
export function playerBodyChar(id_467) {
  let return_468;
  if (id_467 === 0) {
    return_468 = "o";
  } else if (id_467 === 1) {
    return_468 = "+";
  } else if (id_467 === 2) {
    return_468 = "~";
  } else if (id_467 === 3) {
    return_468 = "=";
  } else {
    return_468 = ".";
  }
  return return_468;
};
/**
 * @param {MultiSnakeGame} game_470
 * @param {Point} p_471
 * @returns {string}
 */
function multiCellChar_469(game_470, p_471) {
  let return_472;
  let t_473;
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
  fn_486: {
    let i_487 = 0;
    while (true) {
      t_473 = game_470.snakes.length;
      if (!(i_487 < t_473)) {
        break;
      }
      t_474 = game_470.snakes;
      t_475 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
      const snake_488 = listedGetOr_214(t_474, i_487, t_475);
      if (snake_488.segments.length > 0) {
        const head_489 = listedGetOr_214(snake_488.segments, 0, new Point(-1, -1));
        if (pointEquals(p_471, head_489)) {
          t_476 = snake_488.id;
          return_472 = playerHeadChar(t_476);
          break fn_486;
        }
      }
      i_487 = i_487 + 1 | 0;
    }
    let i_490 = 0;
    while (true) {
      t_477 = game_470.snakes.length;
      if (!(i_490 < t_477)) {
        break;
      }
      t_478 = game_470.snakes;
      t_479 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
      const snake_491 = listedGetOr_214(t_478, i_490, t_479);
      let j_492 = 1;
      while (true) {
        t_480 = snake_491.segments.length;
        if (!(j_492 < t_480)) {
          break;
        }
        t_481 = snake_491.segments;
        t_482 = new Point(-1, -1);
        t_483 = listedGetOr_214(t_481, j_492, t_482);
        if (pointEquals(p_471, t_483)) {
          t_484 = snake_491.id;
          return_472 = playerBodyChar(t_484);
          break fn_486;
        }
        j_492 = j_492 + 1 | 0;
      }
      i_490 = i_490 + 1 | 0;
    }
    t_485 = game_470.food;
    if (pointEquals(p_471, t_485)) {
      return_472 = "*";
      break fn_486;
    }
    return_472 = " ";
  }
  return return_472;
}
/**
 * @param {MultiSnakeGame} game_493
 * @returns {string}
 */
export function multiRender(game_493) {
  let t_494;
  let t_495;
  let t_496;
  let t_497;
  let t_498;
  let t_499;
  let t_500;
  let t_501;
  let t_502;
  const sb_503 = [""];
  sb_503[0] += "\x1b[2J\x1b[H";
  sb_503[0] += "#";
  let x_504 = 0;
  while (true) {
    t_494 = game_493.width;
    if (!(x_504 < t_494)) {
      break;
    }
    sb_503[0] += "#";
    x_504 = x_504 + 1 | 0;
  }
  sb_503[0] += "#\r\n";
  let y_505 = 0;
  while (true) {
    t_495 = game_493.height;
    if (!(y_505 < t_495)) {
      break;
    }
    sb_503[0] += "#";
    let x_506 = 0;
    while (true) {
      t_496 = game_493.width;
      if (!(x_506 < t_496)) {
        break;
      }
      const p_507 = new Point(x_506, y_505);
      sb_503[0] += multiCellChar_469(game_493, p_507);
      x_506 = x_506 + 1 | 0;
    }
    sb_503[0] += "#\r\n";
    y_505 = y_505 + 1 | 0;
  }
  sb_503[0] += "#";
  let x_508 = 0;
  while (true) {
    t_497 = game_493.width;
    if (!(x_508 < t_497)) {
      break;
    }
    sb_503[0] += "#";
    x_508 = x_508 + 1 | 0;
  }
  sb_503[0] += "#\r\n";
  let i_509 = 0;
  while (true) {
    t_498 = game_493.snakes.length;
    if (!(i_509 < t_498)) {
      break;
    }
    t_499 = game_493.snakes;
    t_500 = new PlayerSnake(0, Object.freeze([]), new Right(), 0, new Dead());
    const snake_510 = listedGetOr_214(t_499, i_509, t_500);
    t_501 = snake_510.status;
    if (t_501 instanceof Alive) {
      t_502 = "Playing";
    } else if (t_501 instanceof Dead) {
      t_502 = "DEAD";
    } else {
      t_502 = "";
    }
    const statusText_511 = t_502;
    const symbol_512 = playerHeadChar(snake_510.id);
    sb_503[0] += "P" + snake_510.id.toString() + " " + symbol_512 + ": " + snake_510.score.toString() + "  " + statusText_511 + "\r" + "\n";
    i_509 = i_509 + 1 | 0;
  }
  return sb_503[0];
};
/**
 * @param {Direction} dir_513
 * @returns {string}
 */
export function directionToString(dir_513) {
  let return_514;
  if (dir_513 instanceof Up) {
    return_514 = "up";
  } else if (dir_513 instanceof Down) {
    return_514 = "down";
  } else if (dir_513 instanceof Left) {
    return_514 = "left";
  } else if (dir_513 instanceof Right) {
    return_514 = "right";
  } else {
    return_514 = "right";
  }
  return return_514;
};
/**
 * @param {string} s_515
 * @returns {Direction | null}
 */
export function stringToDirection(s_515) {
  let return_516;
  fn_517: {
    if (s_515 === "up") {
      return_516 = new Up();
      break fn_517;
    }
    if (s_515 === "down") {
      return_516 = new Down();
      break fn_517;
    }
    if (s_515 === "left") {
      return_516 = new Left();
      break fn_517;
    }
    if (s_515 === "right") {
      return_516 = new Right();
      break fn_517;
    }
    return_516 = null;
  }
  return return_516;
};
