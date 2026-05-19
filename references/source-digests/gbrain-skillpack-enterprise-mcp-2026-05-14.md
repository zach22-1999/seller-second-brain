# GBrain Skillpack 与企业级 Remote MCP 摘要

检索日期：2026-05-14

本文件只保存公开来源链接、事实摘要和二次拆解，不保存 README、Skillpack 或 Security 文档原文全文。

## 来源链接

- GBrain README: https://github.com/garrytan/gbrain
- GBRAIN_SKILLPACK.md: https://github.com/garrytan/gbrain/blob/master/docs/GBRAIN_SKILLPACK.md
- SECURITY.md: https://github.com/garrytan/gbrain/blob/master/SECURITY.md

## 事实摘要

### GBrain README

- README 当前将 GBrain 描述为 Garry Tan 用于 OpenClaw / Hermes 的实际 Agent Brain。
- README 当前写到 GBrain 内置 34 个 skills，并由 `skills/RESOLVER.md` 或 OpenClaw 的 `AGENTS.md` 组织路由。
- README 将 skills 分成 always-on、content ingestion、research and synthesis、identity and setup、conventions 等板块。
- `media-ingest` 覆盖视频、音频、PDF、书、截图和 GitHub repo 等材料入口。
- `book-mirror` 被放在 research and synthesis 里，用于把长内容映射回个人 brain 语境。
- README 提到 Remote MCP with OAuth 2.1：`gbrain serve --http`、admin dashboard、client registration、scopes、request log、credential reveal、revocation 等能力。
- README 提到 Remote MCP operations 有 `read / write / admin` scope，且部分本地维护动作不适合通过 HTTP 远程开放。

### GBRAIN_SKILLPACK.md

- Skillpack 文档把它定位为生产级 Agent 使用 GBrain 的 reference architecture。
- 文档重点不只是列 skill 名，而是讲 Brain-Agent Loop、brain-first lookup、compiled truth + timeline、source attribution、content and media ingestion、recurring jobs、quiet hours、dream cycle、operational disciplines、skill development cycle。
- 文档里的生产经验包括持续摄取、定期维护、自动化任务、原始材料与正式结论分层。

### SECURITY.md

- Security 文档提醒不要开放未认证的 OAuth client registration。
- 推荐通过 `gbrain serve --http` 和受控 token / client 管理方式暴露 Remote MCP。
- 文档包含 `gbrain auth create / list / revoke / test` 等 token 管理命令。
- 文档说明 token 明文只在创建时展示一次，后续以 hash 形式保存。
- HTTP transport 包含 CORS、rate limit、request body size cap、audit log、redacted params 等安全默认值。
- 文档提醒 `gbrain serve --http` 依赖 Postgres；PGLite 更适合本地使用。

## 二次拆解

### 对正文 `17 GBrain 的 Skill 能力` 的支撑

GBrain 的 skillpack 不应该被写成 README 翻译清单。更适合的写法是能力层：

- 内容摄取：把 PDF、图片、会议、网页、长文等材料变成可追溯来源摘要。
- 研究与综合：让 Agent 带着既有 brain 去读行业报告、平台政策、竞品长文。
- Brain 运维：维护 citation、wikilink、stale 页面、resolver 和 skillpack 健康。
- 团队运营：把复盘、briefing、定时维护和 dream cycle 变成节奏。
- Skill 创建与检查：把反复出现的判断流程固化成可执行工作手册。

### 对正文 `26 企业级使用 GBrain` 的支撑

Remote MCP 的重点不是“开一个 key 给大家用”，而是把团队接入拆成角色和权限：

- 每个成员或工具应有独立 client / token。
- 默认 read，谨慎 write，admin 只给维护者。
- 不要把 token 写进 Markdown、团队文档或公开仓库。
- 需要保留 request log、rate limit、redaction 和 revocation 机制。
- 小团队应先只读查询，再开放负责人写入，最后才进入企业治理。

## 卖家适用条件

更适合阅读本章的团队：

- 多产品、多渠道、多数据源；
- 已经有复盘节奏，且希望 Agent 参与复盘；
- 开始让不同 Agent / 工具访问同一套业务知识；
- 有团队成员接入、权限分配、审计和维护需求；
- 愿意把知识写成可读页面，而不是只堆原始资料。

暂时不适合的团队：

- 只做一次性 AI 问答；
- 没有复盘习惯；
- 没有人负责知识维护；
- 希望把完整业务决策直接交给 Agent 自动执行。
