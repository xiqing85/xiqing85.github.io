/* MiBee Eye portal — bilingual toggle (zero dependencies).
 * The HTML ships with English content; this script swaps translatable
 * nodes to Chinese and back. All strings are static and trusted. */

const DICT = {
  en: {
    "a11y.skip": "Skip to content",
    "nav.projects": "Projects",
    "nav.capabilities": "Capabilities",
    "nav.choose": "Rust or Go?",
    "nav.libraries": "Libraries",

    "hero.eyebrow": "Open-source camera software family",
    "hero.lead":
      'Turn any Linux board — or the PC on your desk — into a standards-compliant smart IP camera. ONVIF Profile&nbsp;S, GB/T&nbsp;28181-2022, RTSP/RTMP, on-device AI, and one unified web UI.',
    "hero.cta1": "Meet the family",
    "hero.cta2": "Which one fits me?",
    "hero.svg.source": "Camera source",
    "hero.svg.platform": "GB28181 platform",
    "hero.svg.browser": "Browser",
    "hero.svg.cloud": "RTMP cloud",

    "projects.title": "One family, four projects",
    "projects.lead":
      "Three device services — Go, Rust, and a PC-local agent — plus the shared web frontend &amp; API spec that keeps them one product.",

    "card.rs.tag": "The in-process build",
    "card.rs.desc":
      "Native V4L2 capture and fully in-process encoding — V4L2&nbsp;M2M hardware with automatic openh264 fallback, zero subprocesses. A ~2&nbsp;MB static binary for the most constrained boards, OSD watermark burned into every output, and an optional GB&nbsp;35114 A-level security build.",
    "card.go.tag": "The quickest path",
    "card.go.desc":
      'Pure Go, zero CGO — stock cross-compilation out of the box. Three capture profiles: libcamera CSI on Raspberry&nbsp;Pi, generic V4L2 / USB-UVC on any board, and <code>rtsp</code> gateway mode that re-publishes an existing stream as an ONVIF/GB28181 device from any box. HLS browser playback and an i18n web UI included.',
    "card.nb.tag": "The PC-local agent",
    "card.nb.desc":
      "Turns the webcam and microphone of the PC in front of you into a privacy-first local capture agent: a TLS-gated web UI as the primary control surface, outbound streaming default-off. On-device intelligence — a voice assistant (wake word → transcription → local LLM → TTS), object &amp; sound-event detection, OCR, and VLM alarm descriptions.",
    "card.ui.tag": "The shared frontend &amp; spec",
    "card.ui.desc":
      "One zero-build, zero-dependency ES-module frontend and one SPEC&nbsp;v1 API contract shared by the whole family. The UI renders panels from each device's announced capabilities; a spec-conformant mock server lets you develop the frontend without any hardware.",
    "card.visit": "View on GitHub",

    "cap.title": "What every MiBee Eye camera speaks",
    "cap.lead":
      "One capture pipeline fans out to every standard a camera is asked to speak — NVRs discover it, platforms register it, browsers manage it.",
    "cap.gb28181.t": "GB/T 28181-2022 device",
    "cap.gb28181.d":
      "SIP registration (UDP/TCP), Catalog / DeviceInfo / RecordInfo queries, live / playback / download RTP·PS streaming, SIP&nbsp;INFO playback control, alarm NOTIFY with rising-edge + cooldown, and graceful deregistration (Expires:0) on shutdown.",
    "cap.gb35114.t": "GB 35114 A-level, opt-in",
    "cap.gb35114.d":
      "SM2 certificate REGISTER authentication plus keyed-SM3 integrity — the 35114 security profile rides the same GB28181 stack as a build feature.",
    "cap.onvif.t": "ONVIF Profile S + Media2",
    "cap.onvif.d":
      "Device / Media / Imaging / PTZ SOAP services, Media2, Pull-Point &amp; push events, WS-Discovery auto-discovery. Tested against Synology Surveillance Station, Blue Iris, Scrypted — and any ONVIF NVR.",
    "cap.stream.t": "RTSP · RTMP · substream",
    "cap.stream.d":
      "H.264 RTSP server (RTP over TCP or UDP), a low-bitrate substream for narrow links, RTMP push to cloud services, and HLS browser playback in the Go build — all tapping the same encoded frames.",
    "cap.rec.t": "Recording &amp; playback",
    "cap.rec.d":
      "Continuous segments with an index, retention and storage caps, and the archive doubles as the GB28181 playback source — the platform can seek your local history.",
    "cap.ai.t": "On-device AI, fail-open",
    "cap.ai.d":
      "NanoDet object detection taps shared pre-encode frames and never blocks the pipeline; a missing model honestly degrades the capability instead of fabricating detections. The notebook agent adds sound events, OCR, VLM descriptions and a voice assistant.",

    "choose.title": "Rust or Go — which one should I use?",
    "choose.lead":
      "Same protocols, same SPEC v1 web UI, same NVR interoperability — pick by deployment profile.",
    "choose.thGo": "Pick the Go build when…",
    "choose.thRs": "Pick the Rust build when…",
    "choose.r1a": "You want the quickest path: zero-CGO build, stock cross-compile",
    "choose.r1b": "The board is memory / flash constrained (~2 MB binary)",
    "choose.r2a": "You want HLS browser playback out of the box",
    "choose.r2b": "You want the OSD watermark burned into every output",
    "choose.r3a": "You need the i18n UI or the runtime metrics API",
    "choose.r3b": "You want capture + encode fully in-process (no subprocesses)",
    "choose.r4a": "You prefer hacking on a Go codebase",
    "choose.r4b": "You prefer hacking on a Rust codebase",
    "choose.both":
      'Both ship AI detection (NanoDet, opt-in), GB 35114 A-level (opt-in), continuous recording with GB28181 playback, imaging controls and snapshots. And when the "camera" is simply the PC on your desk — that\'s <a href="https://github.com/xiqing85/mibee-eye-notebook" target="_blank" rel="noopener">mibee-eye-notebook</a>.',

    "lib.title": "Powered by open protocol libraries",
    "lib.lead":
      "The protocol heavy lifting is extracted into reusable libraries — wire formats pinned by golden tests, built test-first, and available for your next device.",
    "lib.rs1.d":
      "GB/T 28181 device-side library — SIP REGISTER/INVITE, MANSCDP XML, RTP·PS, subscriptions &amp; NOTIFY, 35114 auth.",
    "lib.go1.d":
      "GB/T 28181 in Go — the device/ UAC consumed by the camera, plus the MANSCDP codec ready for platform-side projects.",
    "lib.rs2.d": "ONVIF Device service in Rust — SOAP/XML, WS-Discovery, Profile S surface.",
    "lib.go2.d":
      "ONVIF client + server in Go — the same engine behind the Go camera's device service.",

    "cta.title": "Open your camera",
    "cta.lead":
      "Flash a board, point it at your NVR, and manage it from the browser. Star the repos, open issues, send PRs — contributions welcome.",
    "cta.btn": "Browse on GitHub",

    "foot.note":
      "A family of Apache-2.0 open-source projects. This site is plain HTML/CSS/JS — no build step, no tracking.",
  },

  zh: {
    "a11y.skip": "跳到主要内容",
    "nav.projects": "项目",
    "nav.capabilities": "能力",
    "nav.choose": "选型指南",
    "nav.libraries": "协议库",

    "hero.eyebrow": "开源摄像头软件家族",
    "hero.lead":
      "把任意 Linux 板卡——或你桌上的电脑——变成一台符合行业标准的智能 IP 摄像头：ONVIF Profile&nbsp;S、GB/T&nbsp;28181-2022、RTSP/RTMP、端侧 AI，外加一套统一的 Web 管理界面。",
    "hero.cta1": "认识项目家族",
    "hero.cta2": "我该选哪个？",
    "hero.svg.source": "画面来源",
    "hero.svg.platform": "GB28181 平台",
    "hero.svg.browser": "浏览器",
    "hero.svg.cloud": "RTMP 云端",

    "projects.title": "一个家族，四个项目",
    "projects.lead":
      "三个设备服务——Go、Rust 与 PC 本地代理——加上让它们始终保持同一产品体验的共享前端与 API 规范。",

    "card.rs.tag": "进程内实现",
    "card.rs.desc":
      "原生 V4L2 采集、全程进程内编码——V4L2&nbsp;M2M 硬编 + openh264 自动回退，零子进程。约 2&nbsp;MB 静态二进制，适配最紧张的板卡；OSD 水印烧进每一路输出；另可选 GB&nbsp;35114 A 级安全构建。",
    "card.go.tag": "最快上手",
    "card.go.desc":
      "纯 Go、零 CGO——原生交叉编译开箱即用。三种采集画像：树莓派上的 libcamera CSI、任意板卡的通用 V4L2 / USB-UVC，以及把既有流重新发布为 ONVIF/GB28181 设备的 <code>rtsp</code> 网关模式。自带 HLS 浏览器播放与中英文界面。",
    "card.nb.tag": "PC 本地代理",
    "card.nb.desc":
      "把眼前这台电脑的摄像头与麦克风变成隐私优先的本地采集代理：以 TLS 门禁的 Web 界面为主控制面，外发流默认关闭。端侧智能——语音助手（唤醒词 → 转写 → 本地 LLM → 语音合成）、视觉与声音事件检测、OCR、VLM 告警描述。",
    "card.ui.tag": "共享前端与规范",
    "card.ui.desc":
      "一套零构建、零依赖的 ES Modules 前端 + 一份 SPEC&nbsp;v1 API 契约，全家共享。界面按各设备通告的 capabilities 门控渲染；随附符合规范的 mock 服务器，没有实机也能开发前端。",
    "card.visit": "前往 GitHub",

    "cap.title": "每个 MiBee Eye 摄像头都会说的事",
    "cap.lead":
      "一条采集管线，扇出到摄像头被要求讲述的每一门标准——NVR 能发现它，平台能注册它，浏览器能管理它。",
    "cap.gb28181.t": "GB/T 28181-2022 设备侧",
    "cap.gb28181.d":
      "SIP 注册（UDP/TCP）、目录 / 设备信息 / 录像信息查询、实时 / 回放 / 下载 RTP·PS 流、SIP&nbsp;INFO 回放控制、上升沿 + 冷却的告警 NOTIFY，以及停机时的优雅注销（Expires:0）。",
    "cap.gb35114.t": "GB 35114 A 级（可选）",
    "cap.gb35114.d":
      "SM2 证书注册认证 + keyed-SM3 完整性——35114 安全画像作为构建特性，与 GB28181 同栈启用。",
    "cap.onvif.t": "ONVIF Profile S + Media2",
    "cap.onvif.d":
      "Device / Media / Imaging / PTZ SOAP 服务、Media2、Pull-Point 与推送事件、WS-Discovery 自动发现。已在与 Synology Surveillance Station、Blue Iris、Scrypted 及任意 ONVIF NVR 的对接中验证。",
    "cap.stream.t": "RTSP · RTMP · 子码流",
    "cap.stream.d":
      "H.264 RTSP 服务（RTP over TCP/UDP）、窄带宽低码率子码流、RTMP 推流到云端服务，Go 版另有 HLS 浏览器播放——全部取自同一份编码帧。",
    "cap.rec.t": "录像与回放",
    "cap.rec.d":
      "连续分段录像 + 索引、保留天数与容量上限；本地档案同时是 GB28181 回放源——平台可以直接检索你的本地历史。",
    "cap.ai.t": "端侧 AI，fail-open",
    "cap.ai.d":
      "NanoDet 目标检测复用编码前共享帧、绝不阻塞管线；模型缺失时诚实地降级能力，而不是伪造检测结果。PC 代理还加入声音事件、OCR、VLM 描述与语音助手。",

    "choose.title": "Rust 还是 Go，我该用哪个？",
    "choose.lead": "协议相同、SPEC v1 界面相同、可对接的 NVR 相同——按部署画像选择即可。",
    "choose.thGo": "这些情况选 Go 版……",
    "choose.thRs": "这些情况选 Rust 版……",
    "choose.r1a": "想最快上手：零 CGO 构建、原生交叉编译",
    "choose.r1b": "板子内存 / 闪存紧张（约 2 MB 二进制）",
    "choose.r2a": "要开箱即用的 HLS 浏览器播放",
    "choose.r2b": "要 OSD 水印烧进每一路输出",
    "choose.r3a": "需要中英文界面或运行时指标 API",
    "choose.r3b": "要采集 + 编码全程进程内（零子进程）",
    "choose.r4a": "更喜欢折腾 Go 代码库",
    "choose.r4b": "更喜欢折腾 Rust 代码库",
    "choose.both":
      '两者都提供：AI 检测（NanoDet，可选）、GB 35114 A 级（可选）、连续录像 + GB28181 回放、图像调节与快照。而当“摄像头”就是桌上的电脑时——那就是 <a href="https://github.com/xiqing85/mibee-eye-notebook" target="_blank" rel="noopener">mibee-eye-notebook</a>。',

    "lib.title": "由开源协议库驱动",
    "lib.lead":
      "协议重活被抽成可复用的协议库——线格式由 golden 测试钉板、测试先行开发，也欢迎你的下一个设备来用。",
    "lib.rs1.d":
      "GB/T 28181 设备侧库——SIP REGISTER/INVITE、MANSCDP XML、RTP·PS、订阅与 NOTIFY、35114 认证。",
    "lib.go1.d":
      "Go 版 GB/T 28181——摄像头在用的 device/ UAC，外加面向平台侧项目的 MANSCDP 编解码。",
    "lib.rs2.d": "Rust 版 ONVIF Device 服务——SOAP/XML、WS-Discovery、Profile S 能力面。",
    "lib.go2.d": "Go 版 ONVIF 客户端 + 服务端——Go 摄像头设备服务背后的同一引擎。",

    "cta.title": "打开你的摄像头",
    "cta.lead":
      "刷一块板子，对准你的 NVR，再用浏览器管理它。欢迎 Star、提 issue、发 PR——期待你的贡献。",
    "cta.btn": "到 GitHub 看看",

    "foot.note":
      "一组 Apache-2.0 开源项目。本站为纯 HTML/CSS/JS——零构建、无跟踪。",
  },
};

const STORAGE_KEY = "mibee-eye-portal-lang";

function applyLang(lang) {
  const dict = DICT[lang] || DICT.en;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    const value = dict[key] != null ? dict[key] : DICT.en[key];
    if (value == null) continue;
    if (el instanceof SVGElement) el.textContent = value;
    else el.innerHTML = value;
  }
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
}

function detectLang() {
  // ?lang=zh|en forces the language for that view (shareable links)
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "en" || param === "zh") return param;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch (_e) {
    /* private mode — fall through */
  }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}

const current = detectLang();
applyLang(current);

const toggle = document.getElementById("lang-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "zh-CN" ? "en" : "zh";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_e) {
      /* private mode — session-only toggle */
    }
    applyLang(next);
  });
}
