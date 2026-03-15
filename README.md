# Snake (JavaScript)

A terminal snake game written in JavaScript — auto-generated from [Temper](https://temperlang.dev) source code.

## How to Play

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/notactuallytreyanastasio/snake-js.git
cd snake-js
npm install && node snake-game/index.js
```

Use **w/a/s/d** keys to steer the snake. No Enter key needed — input is raw mode.

## What Is This?

This code was not written by a human in JavaScript. It was written once in [Temper](https://temperlang.dev) — a programming language that compiles to JavaScript, Python, Lua, Rust, Java, and C# — and then automatically compiled to JavaScript and published here by CI.

Temper had no way to pause execution or read input. The only I/O was `console.log()`. To play snake, we had to add `sleep(ms)` and `readLine()` to the language itself — modifying the Temper compiler across all six backends.

## What Changed in the Temper Compiler for JavaScript

The JS backend uses the "auto-connected" pattern: connected keys listed in `supportedAutoConnecteds` are automatically mapped to exported functions whose names match the key.

**Compiler changes** (`JsSupportNetwork.kt`): `"stdSleep"` and `"stdReadLine"` added to the auto-connected set.

**Runtime** (`temper-core/io.js`): `stdSleep` uses `setTimeout` wrapped in a native `Promise`. `stdReadLine` uses `process.stdin` with raw mode enabled via `setRawMode(true)` for single-keypress input without requiring Enter. Ctrl+C is detected manually since raw mode bypasses the default signal handler.

JS was the easiest backend — native Promises and a built-in event loop mean `async {}` blocks just work.

## All 6 Backends

The same snake game exists in 6 languages, all generated from [one Temper source](https://github.com/notactuallytreyanastasio/temper_snake):

| Language | Repository |
|----------|------------|
| JavaScript | [snake-js](https://github.com/notactuallytreyanastasio/snake-js) |
| Python | [snake-python](https://github.com/notactuallytreyanastasio/snake-python) |
| Lua | [snake-lua](https://github.com/notactuallytreyanastasio/snake-lua) |
| Rust | [snake-rust](https://github.com/notactuallytreyanastasio/snake-rust) |
| C# | [snake-csharp](https://github.com/notactuallytreyanastasio/snake-csharp) |
| Java | [snake-java](https://github.com/notactuallytreyanastasio/snake-java) |

## Source

- Game source: [notactuallytreyanastasio/temper_snake](https://github.com/notactuallytreyanastasio/temper_snake)
- Compiler branch: [`do-crimes-to-play-snake`](https://github.com/temperlang/temper/tree/do-crimes-to-play-snake) ([PR #376](https://github.com/temperlang/temper/pull/376))

---

*Auto-generated from commit [`a39098b041de1619f89cf75b20e1b9365fc7ee3c`](https://github.com/notactuallytreyanastasio/temper_snake/commit/a39098b041de1619f89cf75b20e1b9365fc7ee3c)*
