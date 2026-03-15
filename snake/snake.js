const {
  imul: imul__64
} = globalThis.Math;
import {
  type as type__0, modIntInt as modIntInt_68, divIntInt as divIntInt_88, listedGetOr as listedGetOr_174, listBuilderAdd as listBuilderAdd_180, listBuilderToList as listBuilderToList_184
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
/**
 * @param {Point} head_44
 * @param {Array<Point>} body_45
 * @param {Point} food_46
 * @param {number} width_47
 * @param {number} height_48
 * @returns {Direction}
 */
export function move(head_44, body_45, food_46, width_47, height_48) {
  return new Right();
};
/**
 * @param {Point} a_49
 * @param {Point} b_50
 * @returns {boolean}
 */
export function pointEquals(a_49, b_50) {
  let return_51;
  let t_52;
  let t_53;
  if (a_49.x === b_50.x) {
    t_52 = a_49.y;
    t_53 = b_50.y;
    return_51 = t_52 === t_53;
  } else {
    return_51 = false;
  }
  return return_51;
};
/**
 * @param {Direction} a_54
 * @param {Direction} b_55
 * @returns {boolean}
 */
export function isOpposite(a_54, b_55) {
  let return_56;
  if (a_54 instanceof Up) {
    return_56 = b_55 instanceof Down;
  } else if (a_54 instanceof Down) {
    return_56 = b_55 instanceof Up;
  } else if (a_54 instanceof Left) {
    return_56 = b_55 instanceof Right;
  } else if (a_54 instanceof Right) {
    return_56 = b_55 instanceof Left;
  } else {
    return_56 = false;
  }
  return return_56;
};
/**
 * @param {Direction} dir_57
 * @returns {Point}
 */
export function directionDelta(dir_57) {
  let return_58;
  if (dir_57 instanceof Up) {
    return_58 = new Point(0, -1);
  } else if (dir_57 instanceof Down) {
    return_58 = new Point(0, 1);
  } else if (dir_57 instanceof Left) {
    return_58 = new Point(-1, 0);
  } else if (dir_57 instanceof Right) {
    return_58 = new Point(1, 0);
  } else {
    return_58 = new Point(0, 0);
  }
  return return_58;
};
/**
 * @param {number} seed_59
 * @param {number} max_60
 * @returns {RandomResult}
 */
export function nextRandom(seed_59, max_60) {
  let t_61;
  let t_62;
  const raw_63 = imul__64(seed_59, 1664525) + 1013904223 | 0;
  const masked_65 = raw_63 & 2147483647;
  let posVal_66;
  if (masked_65 < 0) {
    posVal_66 = - masked_65 | 0;
  } else {
    posVal_66 = masked_65;
  }
  let value_67 = 0;
  if (max_60 > 0) {
    try {
      t_61 = modIntInt_68(posVal_66, max_60);
      t_62 = t_61;
    } catch {
      t_62 = 0;
    }
    value_67 = t_62;
  }
  return new RandomResult(value_67, masked_65);
};
/**
 * @param {Array<Point>} snake_70
 * @param {number} width_71
 * @param {number} height_72
 * @param {number} seed_73
 * @returns {FoodPlacement_37}
 */
function placeFood_69(snake_70, width_71, height_72, seed_73) {
  let return_74;
  let t_75;
  let t_76;
  let t_77;
  let t_78;
  let t_79;
  let t_80;
  fn_81: {
    const totalCells_82 = imul__64(width_71, height_72);
    let currentSeed_83 = seed_73;
    let attempt_84 = 0;
    while (attempt_84 < totalCells_82) {
      const result_85 = nextRandom(currentSeed_83, totalCells_82);
      t_75 = result_85.nextSeed;
      currentSeed_83 = t_75;
      let px_86 = 0;
      let py_87 = 0;
      if (width_71 > 0) {
        try {
          t_77 = modIntInt_68(result_85.value, width_71);
          t_78 = t_77;
        } catch {
          t_78 = 0;
        }
        px_86 = t_78;
        try {
          t_79 = divIntInt_88(result_85.value, width_71);
          t_80 = t_79;
        } catch {
          t_80 = 0;
        }
        py_87 = t_80;
      }
      const candidate_89 = new Point(px_86, py_87);
      let occupied_90 = false;
      function fn_91(seg_92) {
        if (pointEquals(seg_92, candidate_89)) {
          occupied_90 = true;
        }
        return;
      }
      snake_70.forEach(fn_91);
      if (! occupied_90) {
        return_74 = new FoodPlacement_37(candidate_89, currentSeed_83);
        break fn_81;
      }
      attempt_84 = attempt_84 + 1 | 0;
    }
    let y_93 = 0;
    while (y_93 < height_72) {
      let x_94 = 0;
      while (x_94 < width_71) {
        const candidate_95 = new Point(x_94, y_93);
        let free_96 = true;
        function fn_97(seg_98) {
          if (pointEquals(seg_98, candidate_95)) {
            free_96 = false;
          }
          return;
        }
        snake_70.forEach(fn_97);
        if (free_96) {
          return_74 = new FoodPlacement_37(candidate_95, currentSeed_83);
          break fn_81;
        }
        x_94 = x_94 + 1 | 0;
      }
      y_93 = y_93 + 1 | 0;
    }
    t_76 = new Point(0, 0);
    return_74 = new FoodPlacement_37(t_76, currentSeed_83);
  }
  return return_74;
}
/**
 * @param {number} width_99
 * @param {number} height_100
 * @param {number} seed_101
 * @returns {SnakeGame}
 */
export function newGame(width_99, height_100, seed_101) {
  let t_102;
  let t_103;
  let t_104;
  let t_105;
  let centerX_106 = 0;
  let centerY_107 = 0;
  if (width_99 > 0) {
    t_102 = width_99 / 2 | 0;
    t_103 = t_102;
    centerX_106 = t_103;
  }
  if (height_100 > 0) {
    t_104 = height_100 / 2 | 0;
    t_105 = t_104;
    centerY_107 = t_105;
  }
  const snake_108 = Object.freeze([new Point(centerX_106, centerY_107), new Point(centerX_106 - 1 | 0, centerY_107), new Point(centerX_106 - 2 | 0, centerY_107)]);
  const foodResult_109 = placeFood_69(snake_108, width_99, height_100, seed_101);
  let t_110 = new Right();
  let t_111 = foodResult_109.point;
  let t_112 = new Playing();
  let t_113 = foodResult_109.seed;
  return new SnakeGame(width_99, height_100, snake_108, t_110, t_111, 0, t_112, t_113);
};
/**
 * @param {SnakeGame} game_114
 * @param {Direction} dir_115
 * @returns {SnakeGame}
 */
export function changeDirection(game_114, dir_115) {
  let return_116;
  let t_117;
  let t_118;
  let t_119;
  let t_120;
  let t_121;
  let t_122;
  let t_123;
  if (isOpposite(game_114.direction, dir_115)) {
    return_116 = game_114;
  } else {
    t_117 = game_114.width;
    t_118 = game_114.height;
    t_119 = game_114.snake;
    t_120 = game_114.food;
    t_121 = game_114.score;
    t_122 = game_114.status;
    t_123 = game_114.rngSeed;
    return_116 = new SnakeGame(t_117, t_118, t_119, dir_115, t_120, t_121, t_122, t_123);
  }
  return return_116;
};
/**
 * @param {SnakeGame} game_124
 * @returns {SnakeGame}
 */
export function tick(game_124) {
  let return_125;
  let t_126;
  let t_127;
  let t_128;
  let t_129;
  let t_130;
  let t_131;
  let t_132;
  let t_133;
  let t_134;
  let t_135;
  let t_136;
  let t_137;
  let t_138;
  let t_139;
  let t_140;
  let t_141;
  let t_142;
  let t_143;
  let t_144;
  let t_145;
  let t_146;
  let t_147;
  let t_148;
  let t_149;
  let t_150;
  let t_151;
  let t_152;
  let t_153;
  let t_154;
  let t_155;
  let t_156;
  let t_157;
  let t_158;
  let t_159;
  let t_160;
  let t_161;
  let t_162;
  let t_163;
  let t_164;
  let t_165;
  let t_166;
  let t_167;
  let t_168;
  let t_169;
  let t_170;
  fn_171: {
    if (game_124.status instanceof GameOver) {
      return_125 = game_124;
      break fn_171;
    }
    const delta_172 = directionDelta(game_124.direction);
    const head_173 = listedGetOr_174(game_124.snake, 0, new Point(0, 0));
    const newHead_175 = new Point(head_173.x + delta_172.x | 0, head_173.y + delta_172.y | 0);
    if (newHead_175.x < 0) {
      t_170 = true;
    } else {
      if (newHead_175.x >= game_124.width) {
        t_169 = true;
      } else {
        if (newHead_175.y < 0) {
          t_168 = true;
        } else {
          t_126 = newHead_175.y;
          t_127 = game_124.height;
          t_168 = t_126 >= t_127;
        }
        t_169 = t_168;
      }
      t_170 = t_169;
    }
    if (t_170) {
      t_128 = game_124.width;
      t_129 = game_124.height;
      t_130 = game_124.snake;
      t_131 = game_124.direction;
      t_132 = game_124.food;
      t_133 = game_124.score;
      t_134 = new GameOver();
      t_135 = game_124.rngSeed;
      return_125 = new SnakeGame(t_128, t_129, t_130, t_131, t_132, t_133, t_134, t_135);
      break fn_171;
    }
    const eating_176 = pointEquals(newHead_175, game_124.food);
    let checkLength_177;
    if (eating_176) {
      t_136 = game_124.snake.length;
      checkLength_177 = t_136;
    } else {
      t_137 = game_124.snake.length;
      checkLength_177 = t_137 - 1 | 0;
    }
    let i_178 = 0;
    while (i_178 < checkLength_177) {
      t_138 = game_124.snake;
      t_139 = new Point(-1, -1);
      if (pointEquals(newHead_175, listedGetOr_174(t_138, i_178, t_139))) {
        t_140 = game_124.width;
        t_141 = game_124.height;
        t_142 = game_124.snake;
        t_143 = game_124.direction;
        t_144 = game_124.food;
        t_145 = game_124.score;
        t_146 = new GameOver();
        t_147 = game_124.rngSeed;
        return_125 = new SnakeGame(t_140, t_141, t_142, t_143, t_144, t_145, t_146, t_147);
        break fn_171;
      }
      i_178 = i_178 + 1 | 0;
    }
    const newSnakeBuilder_179 = [];
    listBuilderAdd_180(newSnakeBuilder_179, newHead_175);
    let keepLength_181;
    if (eating_176) {
      t_148 = game_124.snake.length;
      keepLength_181 = t_148;
    } else {
      t_149 = game_124.snake.length;
      keepLength_181 = t_149 - 1 | 0;
    }
    let i_182 = 0;
    while (i_182 < keepLength_181) {
      t_150 = game_124.snake;
      t_151 = new Point(0, 0);
      listBuilderAdd_180(newSnakeBuilder_179, listedGetOr_174(t_150, i_182, t_151));
      i_182 = i_182 + 1 | 0;
    }
    const newSnake_183 = listBuilderToList_184(newSnakeBuilder_179);
    if (eating_176) {
      const newScore_185 = game_124.score + 1 | 0;
      t_152 = game_124.width;
      t_153 = game_124.height;
      t_154 = game_124.rngSeed;
      const foodResult_186 = placeFood_69(newSnake_183, t_152, t_153, t_154);
      t_155 = game_124.width;
      t_156 = game_124.height;
      t_157 = game_124.direction;
      t_158 = foodResult_186.point;
      t_159 = new Playing();
      t_160 = foodResult_186.seed;
      return_125 = new SnakeGame(t_155, t_156, newSnake_183, t_157, t_158, newScore_185, t_159, t_160);
    } else {
      t_161 = game_124.width;
      t_162 = game_124.height;
      t_163 = game_124.direction;
      t_164 = game_124.food;
      t_165 = game_124.score;
      t_166 = game_124.status;
      t_167 = game_124.rngSeed;
      return_125 = new SnakeGame(t_161, t_162, newSnake_183, t_163, t_164, t_165, t_166, t_167);
    }
  }
  return return_125;
};
/**
 * @param {SnakeGame} game_188
 * @param {Point} p_189
 * @returns {string}
 */
function cellChar_187(game_188, p_189) {
  let return_190;
  let t_191;
  let t_192;
  let t_193;
  let t_194;
  let t_195;
  fn_196: {
    const head_197 = listedGetOr_174(game_188.snake, 0, new Point(-1, -1));
    if (pointEquals(p_189, head_197)) {
      return_190 = "@";
      break fn_196;
    }
    let i_198 = 1;
    while (true) {
      t_191 = game_188.snake.length;
      if (!(i_198 < t_191)) {
        break;
      }
      t_192 = game_188.snake;
      t_193 = new Point(-1, -1);
      t_194 = listedGetOr_174(t_192, i_198, t_193);
      if (pointEquals(p_189, t_194)) {
        return_190 = "o";
        break fn_196;
      }
      i_198 = i_198 + 1 | 0;
    }
    t_195 = game_188.food;
    if (pointEquals(p_189, t_195)) {
      return_190 = "*";
      break fn_196;
    }
    return_190 = " ";
  }
  return return_190;
}
/**
 * @param {SnakeGame} game_199
 * @returns {string}
 */
export function render(game_199) {
  let t_200;
  let t_201;
  let t_202;
  let t_203;
  const sb_204 = [""];
  sb_204[0] += "\x1b[2J\x1b[H";
  sb_204[0] += "#";
  let x_205 = 0;
  while (true) {
    t_200 = game_199.width;
    if (!(x_205 < t_200)) {
      break;
    }
    sb_204[0] += "#";
    x_205 = x_205 + 1 | 0;
  }
  sb_204[0] += "#\r\n";
  let y_206 = 0;
  while (true) {
    t_201 = game_199.height;
    if (!(y_206 < t_201)) {
      break;
    }
    sb_204[0] += "#";
    let x_207 = 0;
    while (true) {
      t_202 = game_199.width;
      if (!(x_207 < t_202)) {
        break;
      }
      const p_208 = new Point(x_207, y_206);
      sb_204[0] += cellChar_187(game_199, p_208);
      x_207 = x_207 + 1 | 0;
    }
    sb_204[0] += "#\r\n";
    y_206 = y_206 + 1 | 0;
  }
  sb_204[0] += "#";
  let x_209 = 0;
  while (true) {
    t_203 = game_199.width;
    if (!(x_209 < t_203)) {
      break;
    }
    sb_204[0] += "#";
    x_209 = x_209 + 1 | 0;
  }
  sb_204[0] += "#\r\n";
  let statusText_210;
  let t_211 = game_199.status;
  if (t_211 instanceof Playing) {
    statusText_210 = "Playing";
  } else if (t_211 instanceof GameOver) {
    statusText_210 = "GAME OVER";
  } else {
    statusText_210 = "";
  }
  sb_204[0] += "Score: " + game_199.score.toString() + "  " + statusText_210 + "\r" + "\n";
  return sb_204[0];
};
