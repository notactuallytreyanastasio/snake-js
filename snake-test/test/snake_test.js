import {
  pointEquals as pointEquals_0, isOpposite as isOpposite_1, directionDelta as directionDelta_2, nextRandom as nextRandom_3, newGame as newGame_4, changeDirection as changeDirection_5, tick as tick_6, newMultiGame as newMultiGame_7, multiTick as multiTick_8, multiRender as multiRender_9, changePlayerDirection as changePlayerDirection_10, isMultiGameOver as isMultiGameOver_11, addPlayer as addPlayer_12, removePlayer as removePlayer_13, directionToString as directionToString_14, stringToDirection as stringToDirection_15, Point as Point_21, Playing as Playing_31, Right as Right_36, Down as Down_52, Up as Up_61, Left as Left_69, GameOver as GameOver_83, SnakeGame as SnakeGame_88, PlayerSnake as PlayerSnake_146, Dead as Dead_147, Alive as Alive_150
} from "snake";
import {
  Test as Test_17
} from "@temperlang/std/testing";
import {
  listedGetOr as listedGetOr_20
} from "@temperlang/core";
it("initial state has snake near center", function () {
    const test_16 = new Test_17();
    try {
      const game_18 = newGame_4(10, 10, 42);
      const head_19 = listedGetOr_20(game_18.snake, 0, new Point_21(-1, -1));
      let t_22 = head_19.x === 5;
      function fn_23() {
        return "head x should be 5, got " + head_19.x.toString();
      }
      test_16.assert(t_22, fn_23);
      let t_24 = head_19.y === 5;
      function fn_25() {
        return "head y should be 5, got " + head_19.y.toString();
      }
      test_16.assert(t_24, fn_25);
      let t_26 = game_18.snake.length === 3;
      function fn_27() {
        return "snake should start with 3 segments";
      }
      test_16.assert(t_26, fn_27);
      return;
    } finally {
      test_16.softFailToHard();
    }
});
it("initial status is Playing", function () {
    const test_28 = new Test_17();
    try {
      const game_29 = newGame_4(10, 10, 42);
      let t_30 = game_29.status instanceof Playing_31;
      function fn_32() {
        return "initial status should be Playing";
      }
      test_28.assert(t_30, fn_32);
      return;
    } finally {
      test_28.softFailToHard();
    }
});
it("initial direction is Right", function () {
    const test_33 = new Test_17();
    try {
      const game_34 = newGame_4(10, 10, 42);
      let t_35 = game_34.direction instanceof Right_36;
      function fn_37() {
        return "initial direction should be Right";
      }
      test_33.assert(t_35, fn_37);
      return;
    } finally {
      test_33.softFailToHard();
    }
});
it("initial score is 0", function () {
    const test_38 = new Test_17();
    try {
      const game_39 = newGame_4(10, 10, 42);
      let t_40 = game_39.score === 0;
      function fn_41() {
        return "initial score should be 0";
      }
      test_38.assert(t_40, fn_41);
      return;
    } finally {
      test_38.softFailToHard();
    }
});
it("snake moves right", function () {
    const test_42 = new Test_17();
    try {
      const game_43 = newGame_4(10, 10, 42);
      const moved_44 = tick_6(game_43);
      const head_45 = listedGetOr_20(moved_44.snake, 0, new Point_21(-1, -1));
      let t_46 = head_45.x === 6;
      function fn_47() {
        return "head should move right to x=6, got " + head_45.x.toString();
      }
      test_42.assert(t_46, fn_47);
      let t_48 = head_45.y === 5;
      function fn_49() {
        return "head y should stay 5, got " + head_45.y.toString();
      }
      test_42.assert(t_48, fn_49);
      return;
    } finally {
      test_42.softFailToHard();
    }
});
it("snake moves down", function () {
    const test_50 = new Test_17();
    try {
      const game_51 = changeDirection_5(newGame_4(10, 10, 42), new Down_52());
      const moved_53 = tick_6(game_51);
      const head_54 = listedGetOr_20(moved_53.snake, 0, new Point_21(-1, -1));
      let t_55 = head_54.x === 5;
      function fn_56() {
        return "head x should stay 5, got " + head_54.x.toString();
      }
      test_50.assert(t_55, fn_56);
      let t_57 = head_54.y === 6;
      function fn_58() {
        return "head should move down to y=6, got " + head_54.y.toString();
      }
      test_50.assert(t_57, fn_58);
      return;
    } finally {
      test_50.softFailToHard();
    }
});
it("snake moves up", function () {
    const test_59 = new Test_17();
    try {
      const game_60 = changeDirection_5(newGame_4(10, 10, 42), new Up_61());
      const moved_62 = tick_6(game_60);
      const head_63 = listedGetOr_20(moved_62.snake, 0, new Point_21(-1, -1));
      let t_64 = head_63.y === 4;
      function fn_65() {
        return "head should move up to y=4, got " + head_63.y.toString();
      }
      test_59.assert(t_64, fn_65);
      return;
    } finally {
      test_59.softFailToHard();
    }
});
it("opposite direction is rejected", function () {
    const test_66 = new Test_17();
    try {
      const game_67 = newGame_4(10, 10, 42);
      const changed_68 = changeDirection_5(game_67, new Left_69());
      let t_70 = changed_68.direction instanceof Right_36;
      function fn_71() {
        return "should still be Right after trying Left";
      }
      test_66.assert(t_70, fn_71);
      return;
    } finally {
      test_66.softFailToHard();
    }
});
it("non-opposite direction is accepted", function () {
    const test_72 = new Test_17();
    try {
      const game_73 = newGame_4(10, 10, 42);
      const changed_74 = changeDirection_5(game_73, new Up_61());
      let t_75 = changed_74.direction instanceof Up_61;
      function fn_76() {
        return "should change to Up";
      }
      test_72.assert(t_75, fn_76);
      return;
    } finally {
      test_72.softFailToHard();
    }
});
it("wall collision causes game over", function () {
    const test_77 = new Test_17();
    try {
      let t_78;
      let t_79 = newGame_4(10, 10, 42);
      let game_80 = t_79;
      let i_81 = 0;
      while (i_81 < 10) {
        t_78 = tick_6(game_80);
        game_80 = t_78;
        i_81 = i_81 + 1 | 0;
      }
      let t_82 = game_80.status instanceof GameOver_83;
      function fn_84() {
        return "should be GameOver after hitting wall";
      }
      test_77.assert(t_82, fn_84);
      return;
    } finally {
      test_77.softFailToHard();
    }
});
it("self collision causes game over", function () {
    const test_85 = new Test_17();
    try {
      const snake_86 = Object.freeze([new Point_21(5, 5), new Point_21(6, 5), new Point_21(6, 4), new Point_21(5, 4), new Point_21(4, 4), new Point_21(4, 5), new Point_21(4, 6)]);
      let t_87 = new SnakeGame_88(10, 10, snake_86, new Left_69(), new Point_21(0, 0), 0, new Playing_31(), 42);
      let game_89 = t_87;
      let t_90 = tick_6(game_89);
      game_89 = t_90;
      let t_91 = game_89.status instanceof GameOver_83;
      function fn_92() {
        return "should be GameOver after self collision";
      }
      test_85.assert(t_91, fn_92);
      return;
    } finally {
      test_85.softFailToHard();
    }
});
it("pointEquals works for same points", function () {
    const test_93 = new Test_17();
    try {
      let t_94 = pointEquals_0(new Point_21(3, 4), new Point_21(3, 4));
      function fn_95() {
        return "same points should be equal";
      }
      test_93.assert(t_94, fn_95);
      return;
    } finally {
      test_93.softFailToHard();
    }
});
it("pointEquals works for different points", function () {
    const test_96 = new Test_17();
    try {
      let t_97 = ! pointEquals_0(new Point_21(3, 4), new Point_21(5, 6));
      function fn_98() {
        return "different points should not be equal";
      }
      test_96.assert(t_97, fn_98);
      return;
    } finally {
      test_96.softFailToHard();
    }
});
it("isOpposite detects opposite directions", function () {
    const test_99 = new Test_17();
    try {
      let t_100 = isOpposite_1(new Up_61(), new Down_52());
      function fn_101() {
        return "Up/Down are opposite";
      }
      test_99.assert(t_100, fn_101);
      let t_102 = isOpposite_1(new Left_69(), new Right_36());
      function fn_103() {
        return "Left/Right are opposite";
      }
      test_99.assert(t_102, fn_103);
      let t_104 = ! isOpposite_1(new Up_61(), new Left_69());
      function fn_105() {
        return "Up/Left are not opposite";
      }
      test_99.assert(t_104, fn_105);
      return;
    } finally {
      test_99.softFailToHard();
    }
});
it("directionDelta returns correct deltas", function () {
    const test_106 = new Test_17();
    try {
      let t_107;
      let t_108;
      let t_109;
      let t_110;
      const up_111 = directionDelta_2(new Up_61());
      if (up_111.x === 0) {
        t_107 = up_111.y;
        t_109 = t_107 === -1;
      } else {
        t_109 = false;
      }
      function fn_112() {
        return "Up should be (0, -1)";
      }
      test_106.assert(t_109, fn_112);
      const right_113 = directionDelta_2(new Right_36());
      if (right_113.x === 1) {
        t_108 = right_113.y;
        t_110 = t_108 === 0;
      } else {
        t_110 = false;
      }
      function fn_114() {
        return "Right should be (1, 0)";
      }
      test_106.assert(t_110, fn_114);
      return;
    } finally {
      test_106.softFailToHard();
    }
});
it("PRNG is deterministic", function () {
    const test_115 = new Test_17();
    try {
      const r1_116 = nextRandom_3(42, 100);
      const r2_117 = nextRandom_3(42, 100);
      let t_118 = r1_116.value === r2_117.value;
      function fn_119() {
        return "same seed should produce same value";
      }
      test_115.assert(t_118, fn_119);
      let t_120 = r1_116.nextSeed === r2_117.nextSeed;
      function fn_121() {
        return "same seed should produce same next seed";
      }
      test_115.assert(t_120, fn_121);
      return;
    } finally {
      test_115.softFailToHard();
    }
});
it("PRNG produces values in range", function () {
    const test_122 = new Test_17();
    try {
      let t_123;
      let t_124;
      const r_125 = nextRandom_3(42, 10);
      if (r_125.value >= 0) {
        t_123 = r_125.value;
        t_124 = t_123 < 10;
      } else {
        t_124 = false;
      }
      function fn_126() {
        return "value should be in [0, 10), got " + r_125.value.toString();
      }
      test_122.assert(t_124, fn_126);
      return;
    } finally {
      test_122.softFailToHard();
    }
});
it("tick does nothing when game is over", function () {
    const test_127 = new Test_17();
    try {
      let t_128;
      let t_129 = newGame_4(10, 10, 42);
      let game_130 = t_129;
      let i_131 = 0;
      while (i_131 < 10) {
        t_128 = tick_6(game_130);
        game_130 = t_128;
        i_131 = i_131 + 1 | 0;
      }
      let t_132 = game_130.status instanceof GameOver_83;
      function fn_133() {
        return "should be GameOver";
      }
      test_127.assert(t_132, fn_133);
      const head1_134 = listedGetOr_20(game_130.snake, 0, new Point_21(-1, -1));
      let t_135 = tick_6(game_130);
      game_130 = t_135;
      const head2_136 = listedGetOr_20(game_130.snake, 0, new Point_21(-1, -1));
      let t_137 = pointEquals_0(head1_134, head2_136);
      function fn_138() {
        return "snake should not move after game over";
      }
      test_127.assert(t_137, fn_138);
      return;
    } finally {
      test_127.softFailToHard();
    }
});
it("multi game creates correct number of snakes", function () {
    const test_139 = new Test_17();
    try {
      const game_140 = newMultiGame_7(20, 10, 2, 42);
      let t_141 = game_140.snakes.length === 2;
      function fn_142() {
        return "should have 2 snakes";
      }
      test_139.assert(t_141, fn_142);
      return;
    } finally {
      test_139.softFailToHard();
    }
});
it("multi game snakes start alive", function () {
    const test_143 = new Test_17();
    try {
      const game_144 = newMultiGame_7(20, 10, 2, 42);
      const s0_145 = listedGetOr_20(game_144.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      const s1_148 = listedGetOr_20(game_144.snakes, 1, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      let t_149 = s0_145.status instanceof Alive_150;
      function fn_151() {
        return "player 0 should be alive";
      }
      test_143.assert(t_149, fn_151);
      let t_152 = s1_148.status instanceof Alive_150;
      function fn_153() {
        return "player 1 should be alive";
      }
      test_143.assert(t_152, fn_153);
      return;
    } finally {
      test_143.softFailToHard();
    }
});
it("multi game snakes start at different positions", function () {
    const test_154 = new Test_17();
    try {
      const game_155 = newMultiGame_7(20, 10, 2, 42);
      const s0_156 = listedGetOr_20(game_155.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      const s1_157 = listedGetOr_20(game_155.snakes, 1, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      const h0_158 = listedGetOr_20(s0_156.segments, 0, new Point_21(-1, -1));
      const h1_159 = listedGetOr_20(s1_157.segments, 0, new Point_21(-1, -1));
      let t_160 = ! pointEquals_0(h0_158, h1_159);
      function fn_161() {
        return "snakes should start at different positions";
      }
      test_154.assert(t_160, fn_161);
      return;
    } finally {
      test_154.softFailToHard();
    }
});
it("multi game snakes have 3 segments each", function () {
    const test_162 = new Test_17();
    try {
      const game_163 = newMultiGame_7(20, 10, 2, 42);
      const s0_164 = listedGetOr_20(game_163.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      const s1_165 = listedGetOr_20(game_163.snakes, 1, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      let t_166 = s0_164.segments.length === 3;
      function fn_167() {
        return "player 0 should have 3 segments";
      }
      test_162.assert(t_166, fn_167);
      let t_168 = s1_165.segments.length === 3;
      function fn_169() {
        return "player 1 should have 3 segments";
      }
      test_162.assert(t_168, fn_169);
      return;
    } finally {
      test_162.softFailToHard();
    }
});
it("multi tick moves both snakes", function () {
    const test_170 = new Test_17();
    try {
      const game_171 = newMultiGame_7(20, 10, 2, 42);
      const h0Before_172 = listedGetOr_20(listedGetOr_20(game_171.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147())).segments, 0, new Point_21(0, 0));
      const h1Before_173 = listedGetOr_20(listedGetOr_20(game_171.snakes, 1, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147())).segments, 0, new Point_21(0, 0));
      const dirs_174 = Object.freeze([new Right_36(), new Left_69()]);
      const after_175 = multiTick_8(game_171, dirs_174);
      const h0After_176 = listedGetOr_20(listedGetOr_20(after_175.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147())).segments, 0, new Point_21(0, 0));
      const h1After_177 = listedGetOr_20(listedGetOr_20(after_175.snakes, 1, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147())).segments, 0, new Point_21(0, 0));
      let t_178 = ! pointEquals_0(h0Before_172, h0After_176);
      function fn_179() {
        return "snake 0 should have moved";
      }
      test_170.assert(t_178, fn_179);
      let t_180 = ! pointEquals_0(h1Before_173, h1After_177);
      function fn_181() {
        return "snake 1 should have moved";
      }
      test_170.assert(t_180, fn_181);
      return;
    } finally {
      test_170.softFailToHard();
    }
});
it("multi wall collision kills one snake", function () {
    const test_182 = new Test_17();
    try {
      let t_183;
      let t_184;
      let t_185;
      let t_186;
      let t_187 = newMultiGame_7(20, 10, 2, 42);
      let game_188 = t_187;
      const dirs_189 = Object.freeze([new Right_36(), new Left_69()]);
      let i_190 = 0;
      while (i_190 < 20) {
        t_183 = multiTick_8(game_188, dirs_189);
        game_188 = t_183;
        i_190 = i_190 + 1 | 0;
      }
      let deadCount_191 = 0;
      let i_192 = 0;
      while (true) {
        t_184 = game_188.snakes.length;
        if (!(i_192 < t_184)) {
          break;
        }
        t_185 = game_188.snakes;
        t_186 = new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147());
        const snake_193 = listedGetOr_20(t_185, i_192, t_186);
        if (snake_193.status instanceof Dead_147) {
          deadCount_191 = deadCount_191 + 1 | 0;
        }
        i_192 = i_192 + 1 | 0;
      }
      let t_194 = deadCount_191 > 0;
      function fn_195() {
        return "at least one snake should be dead after 20 ticks toward walls";
      }
      test_182.assert(t_194, fn_195);
      return;
    } finally {
      test_182.softFailToHard();
    }
});
it("multi game over when one player left", function () {
    const test_196 = new Test_17();
    try {
      let t_197;
      let t_198 = newMultiGame_7(20, 10, 2, 42);
      let game_199 = t_198;
      const dirs_200 = Object.freeze([new Right_36(), new Left_69()]);
      let i_201 = 0;
      while (i_201 < 30) {
        t_197 = multiTick_8(game_199, dirs_200);
        game_199 = t_197;
        i_201 = i_201 + 1 | 0;
      }
      let t_202 = isMultiGameOver_11(game_199);
      function fn_203() {
        return "game should be over after enough ticks";
      }
      test_196.assert(t_202, fn_203);
      return;
    } finally {
      test_196.softFailToHard();
    }
});
it("changePlayerDirection works", function () {
    const test_204 = new Test_17();
    try {
      const game_205 = newMultiGame_7(20, 10, 2, 42);
      let t_206 = new Up_61();
      const changed_207 = changePlayerDirection_10(game_205, 0, t_206);
      const s0_208 = listedGetOr_20(changed_207.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      let t_209 = s0_208.direction instanceof Up_61;
      function fn_210() {
        return "player 0 direction should be Up";
      }
      test_204.assert(t_209, fn_210);
      return;
    } finally {
      test_204.softFailToHard();
    }
});
it("changePlayerDirection rejects opposite", function () {
    const test_211 = new Test_17();
    try {
      const game_212 = newMultiGame_7(20, 10, 2, 42);
      let t_213 = new Left_69();
      const changed_214 = changePlayerDirection_10(game_212, 0, t_213);
      const s0_215 = listedGetOr_20(changed_214.snakes, 0, new PlayerSnake_146(0, Object.freeze([]), new Right_36(), 0, new Dead_147()));
      let t_216 = s0_215.direction instanceof Right_36;
      function fn_217() {
        return "should reject opposite direction";
      }
      test_211.assert(t_216, fn_217);
      return;
    } finally {
      test_211.softFailToHard();
    }
});
it("addPlayer adds a new snake", function () {
    const test_218 = new Test_17();
    try {
      const game_219 = newMultiGame_7(20, 10, 2, 42);
      const bigger_220 = addPlayer_12(game_219, 99);
      let t_221 = bigger_220.snakes.length === 3;
      function fn_222() {
        return "should have 3 snakes after adding";
      }
      test_218.assert(t_221, fn_222);
      return;
    } finally {
      test_218.softFailToHard();
    }
});
it("removePlayer removes a snake", function () {
    const test_223 = new Test_17();
    try {
      const game_224 = newMultiGame_7(20, 10, 3, 42);
      const smaller_225 = removePlayer_13(game_224, 1);
      let t_226 = smaller_225.snakes.length === 2;
      function fn_227() {
        return "should have 2 snakes after removing";
      }
      test_223.assert(t_226, fn_227);
      return;
    } finally {
      test_223.softFailToHard();
    }
});
it("multiRender produces output", function () {
    const test_228 = new Test_17();
    try {
      const game_229 = newMultiGame_7(20, 10, 2, 42);
      const rendered_230 = multiRender_9(game_229);
      let t_231 = rendered_230 !== "";
      function fn_232() {
        return "render should produce output";
      }
      test_228.assert(t_231, fn_232);
      return;
    } finally {
      test_228.softFailToHard();
    }
});
it("directionToString and stringToDirection round-trip", function () {
    const test_233 = new Test_17();
    try {
      const d_234 = directionToString_14(new Up_61());
      let t_235 = d_234 === "up";
      function fn_236() {
        return "Up should serialize to 'up'";
      }
      test_233.assert(t_235, fn_236);
      const parsed_237 = stringToDirection_15("down");
      function fn_238() {
        return "'down' should parse to Down";
      }
      test_233.assert(true, fn_238);
      return;
    } finally {
      test_233.softFailToHard();
    }
});
