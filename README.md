# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/keigorou1999-arch-ai/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/keigorou1999-arch-ai/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A newspaper front page for Wednesday, 25 November 2026: nine stories of the day on one sheet, each numbered on a
hand-drawn world map and repeated below as a card with a line icon and a short headline.

1. World stocks tumble as US proposes sweeping tariffs
2. China launches crew with first Pakistani astronaut
3. Houthis claim strike on Saudi oil refinery
4. Fuel tanker fire near Cairo kills dozens
5. Colombian troops free supermarket hostages
6. Merz: Russia "wants more than Ukraine"
7. Australia, Solomon Islands sign security treaty
8. North Korea orders Swiss office shut
9. Israeli air strike kills four in Gaza

The page is plain HTML and SVG in `source/page.html` (the map is a list of longitude and latitude corners drawn by a
few lines of script). `entry.png` is a 1024 by 1024 photograph of that page taken with headless Chrome, and `main.ts`
copies it to the output folder.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To retake the picture after editing the page:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1024,1024 --screenshot=entry.png "file://$PWD/source/page.html"
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
