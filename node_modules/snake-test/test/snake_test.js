import {
  pointEquals as pointEquals_0, isOpposite as isOpposite_1, directionDelta as directionDelta_2, nextRandom as nextRandom_3, newGame as newGame_4, changeDirection as changeDirection_5, tick as tick_6, Point as Point_12, Playing as Playing_22, Right as Right_27, Down as Down_43, Up as Up_52, Left as Left_60, GameOver as GameOver_74, SnakeGame as SnakeGame_79
} from "snake";
import {
  Test as Test_8
} from "@temperlang/std/testing";
import {
  listedGetOr as listedGetOr_11
} from "@temperlang/core";
it("initial state has snake near center", function () {
    const test_7 = new Test_8();
    try {
      const game_9 = newGame_4(10, 10, 42);
      const head_10 = listedGetOr_11(game_9.snake, 0, new Point_12(-1, -1));
      let t_13 = head_10.x === 5;
      function fn_14() {
        return "head x should be 5, got " + head_10.x.toString();
      }
      test_7.assert(t_13, fn_14);
      let t_15 = head_10.y === 5;
      function fn_16() {
        return "head y should be 5, got " + head_10.y.toString();
      }
      test_7.assert(t_15, fn_16);
      let t_17 = game_9.snake.length === 3;
      function fn_18() {
        return "snake should start with 3 segments";
      }
      test_7.assert(t_17, fn_18);
      return;
    } finally {
      test_7.softFailToHard();
    }
});
it("initial status is Playing", function () {
    const test_19 = new Test_8();
    try {
      const game_20 = newGame_4(10, 10, 42);
      let t_21 = game_20.status instanceof Playing_22;
      function fn_23() {
        return "initial status should be Playing";
      }
      test_19.assert(t_21, fn_23);
      return;
    } finally {
      test_19.softFailToHard();
    }
});
it("initial direction is Right", function () {
    const test_24 = new Test_8();
    try {
      const game_25 = newGame_4(10, 10, 42);
      let t_26 = game_25.direction instanceof Right_27;
      function fn_28() {
        return "initial direction should be Right";
      }
      test_24.assert(t_26, fn_28);
      return;
    } finally {
      test_24.softFailToHard();
    }
});
it("initial score is 0", function () {
    const test_29 = new Test_8();
    try {
      const game_30 = newGame_4(10, 10, 42);
      let t_31 = game_30.score === 0;
      function fn_32() {
        return "initial score should be 0";
      }
      test_29.assert(t_31, fn_32);
      return;
    } finally {
      test_29.softFailToHard();
    }
});
it("snake moves right", function () {
    const test_33 = new Test_8();
    try {
      const game_34 = newGame_4(10, 10, 42);
      const moved_35 = tick_6(game_34);
      const head_36 = listedGetOr_11(moved_35.snake, 0, new Point_12(-1, -1));
      let t_37 = head_36.x === 6;
      function fn_38() {
        return "head should move right to x=6, got " + head_36.x.toString();
      }
      test_33.assert(t_37, fn_38);
      let t_39 = head_36.y === 5;
      function fn_40() {
        return "head y should stay 5, got " + head_36.y.toString();
      }
      test_33.assert(t_39, fn_40);
      return;
    } finally {
      test_33.softFailToHard();
    }
});
it("snake moves down", function () {
    const test_41 = new Test_8();
    try {
      const game_42 = changeDirection_5(newGame_4(10, 10, 42), new Down_43());
      const moved_44 = tick_6(game_42);
      const head_45 = listedGetOr_11(moved_44.snake, 0, new Point_12(-1, -1));
      let t_46 = head_45.x === 5;
      function fn_47() {
        return "head x should stay 5, got " + head_45.x.toString();
      }
      test_41.assert(t_46, fn_47);
      let t_48 = head_45.y === 6;
      function fn_49() {
        return "head should move down to y=6, got " + head_45.y.toString();
      }
      test_41.assert(t_48, fn_49);
      return;
    } finally {
      test_41.softFailToHard();
    }
});
it("snake moves up", function () {
    const test_50 = new Test_8();
    try {
      const game_51 = changeDirection_5(newGame_4(10, 10, 42), new Up_52());
      const moved_53 = tick_6(game_51);
      const head_54 = listedGetOr_11(moved_53.snake, 0, new Point_12(-1, -1));
      let t_55 = head_54.y === 4;
      function fn_56() {
        return "head should move up to y=4, got " + head_54.y.toString();
      }
      test_50.assert(t_55, fn_56);
      return;
    } finally {
      test_50.softFailToHard();
    }
});
it("opposite direction is rejected", function () {
    const test_57 = new Test_8();
    try {
      const game_58 = newGame_4(10, 10, 42);
      const changed_59 = changeDirection_5(game_58, new Left_60());
      let t_61 = changed_59.direction instanceof Right_27;
      function fn_62() {
        return "should still be Right after trying Left";
      }
      test_57.assert(t_61, fn_62);
      return;
    } finally {
      test_57.softFailToHard();
    }
});
it("non-opposite direction is accepted", function () {
    const test_63 = new Test_8();
    try {
      const game_64 = newGame_4(10, 10, 42);
      const changed_65 = changeDirection_5(game_64, new Up_52());
      let t_66 = changed_65.direction instanceof Up_52;
      function fn_67() {
        return "should change to Up";
      }
      test_63.assert(t_66, fn_67);
      return;
    } finally {
      test_63.softFailToHard();
    }
});
it("wall collision causes game over", function () {
    const test_68 = new Test_8();
    try {
      let t_69;
      let t_70 = newGame_4(10, 10, 42);
      let game_71 = t_70;
      let i_72 = 0;
      while (i_72 < 10) {
        t_69 = tick_6(game_71);
        game_71 = t_69;
        i_72 = i_72 + 1 | 0;
      }
      let t_73 = game_71.status instanceof GameOver_74;
      function fn_75() {
        return "should be GameOver after hitting wall";
      }
      test_68.assert(t_73, fn_75);
      return;
    } finally {
      test_68.softFailToHard();
    }
});
it("self collision causes game over", function () {
    const test_76 = new Test_8();
    try {
      const snake_77 = Object.freeze([new Point_12(5, 5), new Point_12(6, 5), new Point_12(6, 4), new Point_12(5, 4), new Point_12(4, 4), new Point_12(4, 5), new Point_12(4, 6)]);
      let t_78 = new SnakeGame_79(10, 10, snake_77, new Left_60(), new Point_12(0, 0), 0, new Playing_22(), 42);
      let game_80 = t_78;
      let t_81 = tick_6(game_80);
      game_80 = t_81;
      let t_82 = game_80.status instanceof GameOver_74;
      function fn_83() {
        return "should be GameOver after self collision";
      }
      test_76.assert(t_82, fn_83);
      return;
    } finally {
      test_76.softFailToHard();
    }
});
it("pointEquals works for same points", function () {
    const test_84 = new Test_8();
    try {
      let t_85 = pointEquals_0(new Point_12(3, 4), new Point_12(3, 4));
      function fn_86() {
        return "same points should be equal";
      }
      test_84.assert(t_85, fn_86);
      return;
    } finally {
      test_84.softFailToHard();
    }
});
it("pointEquals works for different points", function () {
    const test_87 = new Test_8();
    try {
      let t_88 = ! pointEquals_0(new Point_12(3, 4), new Point_12(5, 6));
      function fn_89() {
        return "different points should not be equal";
      }
      test_87.assert(t_88, fn_89);
      return;
    } finally {
      test_87.softFailToHard();
    }
});
it("isOpposite detects opposite directions", function () {
    const test_90 = new Test_8();
    try {
      let t_91 = isOpposite_1(new Up_52(), new Down_43());
      function fn_92() {
        return "Up/Down are opposite";
      }
      test_90.assert(t_91, fn_92);
      let t_93 = isOpposite_1(new Left_60(), new Right_27());
      function fn_94() {
        return "Left/Right are opposite";
      }
      test_90.assert(t_93, fn_94);
      let t_95 = ! isOpposite_1(new Up_52(), new Left_60());
      function fn_96() {
        return "Up/Left are not opposite";
      }
      test_90.assert(t_95, fn_96);
      return;
    } finally {
      test_90.softFailToHard();
    }
});
it("directionDelta returns correct deltas", function () {
    const test_97 = new Test_8();
    try {
      let t_98;
      let t_99;
      let t_100;
      let t_101;
      const up_102 = directionDelta_2(new Up_52());
      if (up_102.x === 0) {
        t_98 = up_102.y;
        t_100 = t_98 === -1;
      } else {
        t_100 = false;
      }
      function fn_103() {
        return "Up should be (0, -1)";
      }
      test_97.assert(t_100, fn_103);
      const right_104 = directionDelta_2(new Right_27());
      if (right_104.x === 1) {
        t_99 = right_104.y;
        t_101 = t_99 === 0;
      } else {
        t_101 = false;
      }
      function fn_105() {
        return "Right should be (1, 0)";
      }
      test_97.assert(t_101, fn_105);
      return;
    } finally {
      test_97.softFailToHard();
    }
});
it("PRNG is deterministic", function () {
    const test_106 = new Test_8();
    try {
      const r1_107 = nextRandom_3(42, 100);
      const r2_108 = nextRandom_3(42, 100);
      let t_109 = r1_107.value === r2_108.value;
      function fn_110() {
        return "same seed should produce same value";
      }
      test_106.assert(t_109, fn_110);
      let t_111 = r1_107.nextSeed === r2_108.nextSeed;
      function fn_112() {
        return "same seed should produce same next seed";
      }
      test_106.assert(t_111, fn_112);
      return;
    } finally {
      test_106.softFailToHard();
    }
});
it("PRNG produces values in range", function () {
    const test_113 = new Test_8();
    try {
      let t_114;
      let t_115;
      const r_116 = nextRandom_3(42, 10);
      if (r_116.value >= 0) {
        t_114 = r_116.value;
        t_115 = t_114 < 10;
      } else {
        t_115 = false;
      }
      function fn_117() {
        return "value should be in [0, 10), got " + r_116.value.toString();
      }
      test_113.assert(t_115, fn_117);
      return;
    } finally {
      test_113.softFailToHard();
    }
});
it("tick does nothing when game is over", function () {
    const test_118 = new Test_8();
    try {
      let t_119;
      let t_120 = newGame_4(10, 10, 42);
      let game_121 = t_120;
      let i_122 = 0;
      while (i_122 < 10) {
        t_119 = tick_6(game_121);
        game_121 = t_119;
        i_122 = i_122 + 1 | 0;
      }
      let t_123 = game_121.status instanceof GameOver_74;
      function fn_124() {
        return "should be GameOver";
      }
      test_118.assert(t_123, fn_124);
      const head1_125 = listedGetOr_11(game_121.snake, 0, new Point_12(-1, -1));
      let t_126 = tick_6(game_121);
      game_121 = t_126;
      const head2_127 = listedGetOr_11(game_121.snake, 0, new Point_12(-1, -1));
      let t_128 = pointEquals_0(head1_125, head2_127);
      function fn_129() {
        return "snake should not move after game over";
      }
      test_118.assert(t_128, fn_129);
      return;
    } finally {
      test_118.softFailToHard();
    }
});
