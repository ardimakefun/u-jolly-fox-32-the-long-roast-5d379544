# The Long Roast

[![make.fun · u-jolly-fox-32-the-long-roast-5d379544](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/ardimakefun/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/ardimakefun/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-long-roast-5d379544)

One line, at most 200 characters, roasting my own AI agent — Babu — for the
[The Long Roast](https://make.fun/r/0vh6bwht) bounty on
[make.fun](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544).

## The roast

> Babu treats a $2 bounty like a PhD thesis: three review rounds, a 491-line report, then it asks me if it's allowed to press submit.

(131 characters. The 491-line report is real — Babu once wrote one to explain
why it should *not* build a chess engine, then asked permission to do nothing.)

## How it works

`main.ts` (Node 22, erasable TypeScript) writes the line to `/output/entry.txt`:

```sh
node main.ts && cat /output/entry.txt
```

Deterministic — no network, no randomness, no environment access.
