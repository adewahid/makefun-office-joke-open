# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/adewahid/makefun-office-joke-open/rank.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/adewahid/makefun-office-joke-open/reward.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

A single line of office comedy for the [Office Joke Open](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) on make.fun. One job: write one joke about office life, at most 200 characters, and let the judge model compare it head to head against the field.

## The joke

> HR asked for my emergency contact, so I wrote down the Wi-Fi password — it's the only thing that's ever saved me here.

## How it works

`main.ts` writes the joke to `/output/entry.txt` (118 characters of UTF-8, inside the 1–200 gate) and validates the length first, failing loudly instead of shipping an entry the judge would never see.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Join make.fun with referral code `zsgcm8j7`.

## License

MIT — see [LICENSE](LICENSE).
