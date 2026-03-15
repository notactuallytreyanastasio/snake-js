# Snake (JavaScript)

A terminal snake game written in JavaScript — auto-generated from [Temper](https://temperlang.dev) source code.

## How to Play

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/notactuallytreyanastasio/snake-js.git
cd snake-js
node snake-game/index.js
```

Use **w/a/s/d** keys to steer the snake. No Enter key needed — input is raw mode.

## The Story

This code was not written by a human in JavaScript. It was written once in [Temper](https://github.com/temperlang/temper) — a programming language that compiles to 6 other languages — and then automatically compiled and published here by CI.

The same snake game exists in 6 languages, all generated from [one Temper source](https://github.com/notactuallytreyanastasio/temper_snake):

| Language | Repository |
|----------|------------|
| **JavaScript** | **snake-js** (you are here) |
| Python | [snake-python](https://github.com/notactuallytreyanastasio/snake-python) |
| Lua | [snake-lua](https://github.com/notactuallytreyanastasio/snake-lua) |
| Rust | [snake-rust](https://github.com/notactuallytreyanastasio/snake-rust) |
| C# | [snake-csharp](https://github.com/notactuallytreyanastasio/snake-csharp) |
| Java | [snake-java](https://github.com/notactuallytreyanastasio/snake-java) |

## What We Had to Do to the Compiler

Temper had no way to pause execution or read user input. The only I/O primitive was `console.log()`. To write a game loop that ticks every 200ms and reads keyboard input, we added `sleep()` and `readLine()` to the language itself — across all six compilation backends.

The compiler changes live on the [`do-crimes-to-play-snake`](https://github.com/temperlang/temper/tree/do-crimes-to-play-snake) branch ([PR #376](https://github.com/temperlang/temper/pull/376)).

### The Temper Declaration

Two new `@connected` primitives were added to `std/io` in commit [`0f31c89`](https://github.com/temperlang/temper/commit/0f31c89fabc1c938c6a4d2e72c80af658034aa17):

```temper
@connected("stdSleep")
export let sleep(ms: Int): Promise<Empty> { panic() }

@connected("stdReadLine")
export let readLine(): Promise<String?> { panic() }
```

The `@connected` decorator tells the compiler to replace the `panic()` body with a backend-specific native implementation at compile time.

### What Changed for JavaScript

The JS backend uses the "auto-connected" pattern: connected keys listed in `supportedAutoConnecteds` are mapped to exported functions with matching names. Three Kotlin compiler files were modified and one new runtime file was added.

**[`JsSupportNetwork.kt`](https://github.com/temperlang/temper/blob/0f31c89fabc1c938c6a4d2e72c80af658034aa17/be-js/src/commonMain/kotlin/lang/temper/be/js/JsSupportNetwork.kt)** — added the keys to the auto-connected set:

```diff
     "String::toInt32",
     "String::toInt64",
     "StringBuilder::appendCodePoint",
+    // std/io
+    "stdSleep",
+    "stdReadLine",
     // std/net
```

**[`JsBackend.kt`](https://github.com/temperlang/temper/blob/0f31c89fabc1c938c6a4d2e72c80af658034aa17/be-js/src/commonMain/kotlin/lang/temper/be/js/JsBackend.kt)** — registered `io.js` as a bundled resource:

```diff
             filePath("interface.js"),
+            filePath("io.js"),
             filePath("listed.js"),
```

**[`temper-core/io.js`](https://github.com/temperlang/temper/blob/0f31c89fabc1c938c6a4d2e72c80af658034aa17/be-js/src/commonMain/resources/lang/temper/be/js/temper-core/io.js)** — the native runtime implementation (this file ships inside `temper-core/` in this repo):

```javascript
import { empty } from "./core.js";

export function stdSleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(empty()), ms));
}

export function stdReadLine() {
  return new Promise(resolve => {
    if (typeof process !== 'undefined' && process.stdin) {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      if (process.stdin.isTTY && process.stdin.setRawMode) {
        process.stdin.setRawMode(true);
      }
      process.stdin.once('data', data => {
        const str = data.toString();
        if (str === '\x03') { process.exit(); }
        resolve(str.trim());
      });
    } else {
      resolve(null);
    }
  });
}
```

`stdSleep` wraps `setTimeout` in a native `Promise`, resolving with the Temper `Empty` singleton. `stdReadLine` enables raw mode on TTY for single-keypress input (no Enter required), handles Ctrl+C gracefully, and falls back to `null` in non-stdin environments.

The raw mode support was added in follow-up commit [`c61b208`](https://github.com/temperlang/temper/commit/c61b208a94917993a8b062712d94bf18bf17faa4).

## How It Works

1. The game logic lives in [`temper_snake`](https://github.com/notactuallytreyanastasio/temper_snake) as `.temper.md` files
2. A custom Temper compiler (branch [`do-crimes-to-play-snake`](https://github.com/temperlang/temper/tree/do-crimes-to-play-snake)) adds the `sleep()` and `readLine()` I/O primitives
3. GitHub Actions builds the compiler, compiles the game for all 6 backends, runs tests
4. If tests pass, the compiled output is automatically pushed to this repo

Every push to the source repo triggers a fresh build. This code is always in sync.

## Source

[notactuallytreyanastasio/temper_snake](https://github.com/notactuallytreyanastasio/temper_snake)
