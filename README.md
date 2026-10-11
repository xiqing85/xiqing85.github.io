# xiqing85.github.io

Project portal for the **MiBee Eye (蜂眼)** open-source camera family — served by
GitHub Pages at **<https://xiqing85.github.io>**.

The site is a single static page: plain HTML + CSS + one small ES module for the
English / 中文 toggle. No build step, no dependencies, no tracking. Shields.io
badges are the only external requests.

## Family

- [mibee-eye-rs](https://github.com/xiqing85/mibee-eye-rs) — Rust camera service (Raspberry Pi & any Linux board)
- [mibee-eye-go](https://github.com/xiqing85/mibee-eye-go) — Go camera service (same mission, sibling implementation)
- [mibee-eye-notebook](https://github.com/xiqing85/mibee-eye-notebook) — PC-local webcam & microphone agent
- [mibee-eye-webui](https://github.com/xiqing85/mibee-eye-webui) — unified web frontend + SPEC v1 API contract

## Edit

- `index.html` — content; every translatable node carries `data-i18n="key"`
- `assets/style.css` — theme
- `assets/app.js` — bilingual dictionary + toggle (keep the `en` values in sync
  with the HTML: the page ships English and swaps to Chinese via JS)
- `assets/favicon.svg` — hexagon mark

Push to `main` — GitHub Pages serves the root of `main` (`.nojekyll` present).

A custom domain can be attached later by adding a `CNAME` file with the domain
name plus the usual DNS / Pages settings — all links are relative, so nothing
else needs to change.

## 中文说明

MiBee Eye（蜂眼）项目门户——GitHub Pages 托管，纯 HTML/CSS/JS 单页、中英切换、
零构建零依赖。改动推 `main` 即发布（Pages 从 main 根目录出站）。后续绑定自定义
域名时，在仓库根加 `CNAME` 文件写入域名并配置 DNS 即可，站内链接全部为相对路径。

## License

Apache-2.0 — see [LICENSE](LICENSE).
