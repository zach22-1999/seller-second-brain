# Sources

检索日期：2026-05-12；重写补充来源日期：2026-05-13；v0.7 来源刷新日期：2026-05-13；v0.8 结构优化日期：2026-05-13；v0.9 Skill / 企业级接入补充日期：2026-05-14

## Official Sources

| Source | 用途 |
|---|---|
| [garrytan/gbrain](https://github.com/garrytan/gbrain) | 项目定位、安装方式、命令、架构、技能列表、benchmark 声明 |
| [gbrain README](https://github.com/garrytan/gbrain/blob/master/README.md) | PGLite/Postgres、Hybrid Search、Graph、34 skills、MCP、Remote MCP with OAuth 2.1、admin dashboard、scopes、request log、skillpack、book-mirror、media-ingest、brain-pdf、X-to-Brain、Voice-to-Brain 等公开说明 |
| [Y Combinator: Garry Tan](https://www.ycombinator.com/people/garry-tan) | Garry Tan 的公开身份背景，用于解释为什么该项目值得被跨境电商 AI Builder 认真观察 |
| [GBRAIN_SKILLPACK.md](https://github.com/garrytan/gbrain/blob/master/docs/GBRAIN_SKILLPACK.md) | Brain-Agent Loop、Content & Media Ingestion、research / synthesis、operations、20+ recurring jobs、Voice-to-Brain、X-to-Brain、Upgrades & Auto-Update、Skill Development Cycle、架构导读 |
| [CHANGELOG.md](https://github.com/garrytan/gbrain/blob/master/CHANGELOG.md) | 持续维护和功能演进证据，例如 v0.33.1 的 whoknows / find_experts、eval gate、doctor check |
| [GBRAIN_V0.md](https://github.com/garrytan/gbrain/blob/master/docs/GBRAIN_V0.md) | compiled truth + timeline、数据库表、search architecture、v0 产品设计 |
| [GBRAIN_RECOMMENDED_SCHEMA.md](https://github.com/garrytan/gbrain/blob/master/docs/GBRAIN_RECOMMENDED_SCHEMA.md) | LLM-maintained knowledge base、MECE directories、resolver、page templates |
| [THIN_HARNESS_FAT_SKILLS.md](https://github.com/garrytan/gbrain/blob/master/docs/ethos/THIN_HARNESS_FAT_SKILLS.md) | thin harness / fat skills、skill vs code、latent vs deterministic |
| [eval-bench.md](https://github.com/garrytan/gbrain/blob/master/docs/eval-bench.md) | real query replay、LongMemEval、检索变更评测 |
| [takes-vs-facts.md](https://github.com/garrytan/gbrain/blob/master/docs/takes-vs-facts.md) | takes / facts / hot memory / cold storage 的区分 |
| [SECURITY.md](https://github.com/garrytan/gbrain/blob/master/SECURITY.md) | Remote MCP 安全、OAuth client registration 风险、token create/list/revoke/test、Postgres-only、rate limit、CORS、audit log、redacted params |
| [INSTALL_FOR_AGENTS.md](https://github.com/garrytan/gbrain/blob/master/INSTALL_FOR_AGENTS.md) | agent 安装流程、初始化、import、graph backfill、skills、recurring jobs |

## X Sources

| Source | 用途 |
|---|---|
| [Garry Tan: GBrain total recall post](https://x.com/garrytan/status/2042497872114090069) | Garry Tan 公开将 GBrain 放在 OpenClaw / Hermes Agent 长期记忆语境中，涉及 10,000+ Markdown 文件、MIT 开源等表述 |
| [Garry Tan: GBrain voice/context post](https://x.com/garrytan/status/2043103243732226496) | 用于确认 GBrain 进入 voice/context 能力讨论，不把 voice 写成单纯 TTS 功能 |
| [X Trending: Garry Tan Open-Sources GBrain for AI Agent Memory](https://x.com/i/trending/2042548874871513262) | X 对 GBrain 发布、MIT license、agent memory、Postgres/vector search、timeline、skill packs 的公开摘要，只作辅助来源 |
| [Garry Tan: GBrain 主介绍线程（2026/5/16）](https://x.com/garrytan/status/2055670533451366479) | "knowledge system, not RAG in a box"、8 层记忆架构、Personal AI、MIT 开源 |
| [Garry Tan: GBrain 成本对比帖（2026/5/15）](https://x.com/garrytan/status/2055310116325560647) | $100/mo vs $10k/mo 维护者公开表述 |
| [Garry Tan: GBrain 重大更新帖（2026/5/12）](https://x.com/garrytan/status/2054055071017538028) | 72h 14 PRs、hot memory、facts extraction、100k+ takes 生产环境 |
| [Garry Tan: multiplayer/federated repos（2026/5/17）](https://x.com/garrytan/status/2055884666264269177) | 7 人团队多人使用、personal + work repos 并存 |
| [Garry Tan: ZeroEntropy 嵌入默认（2026/5/17）](https://x.com/garrytan/status/2056119107133870149) | 参考来源 |
| [Garry Tan: GBrain 开发哲学（2026/5/12）](https://x.com/garrytan/status/2054036840521342996) | 参考来源 |
| [Garry Tan: SKILLIFY 循环（2026/4/22）](https://x.com/garrytan/status/2046981289031667961) | 参考来源 |
| [Garry Tan: GBrain 早期开源宣告（2026/3/21）](https://x.com/garrytan/status/2035366660451041387) | 参考来源 |

## LLM Wiki Sources

| Source | 用途 |
|---|---|
| [Karpathy LLM Wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) | RAG vs compiled wiki、raw/wiki/schema 三层、ingest/query/lint、index/log |

## Public Commentary

| Source | 用途 |
|---|---|
| [Repo Explainer: GBrain](https://repo-explainer.com/garrytan/gbrain/) | 将 GBrain 解读为面向 Agent 的 memory operating layer，而不是“文件夹 + embedding” |
| [ChooseAI: YC CEO Garry Tan 如何用 Postgres + pgvector 管理个人知识大脑](https://www.chooseai.net/news/3236/) | 中文视角解释 LLM Wiki 到 GBrain 的断裂点、Postgres + pgvector、三层搜索、RRF、风险 |
| [XTrace: Every Tool Solving the AI Memory Problem Is Solving a Different Problem](https://xtrace.ai/blog/every-tool-is-solving-a-different-memory-problem) | 把 Karpathy LLM Wiki、GBrain、Mem0、Zep 等放到 AI memory 工具版图中比较 |

## Public Citation Policy

公开稿只标注可公开访问的来源。作者内部搭建记录、讨论记录和临时判断只作为写作输入，不列入公开引用表，避免把内部来源路径暴露给读者。

本仓库不保存外部原文全文。对 X 推文、README、Skillpack 和公开讨论的二次拆解保存为 source digest，路径为 [`references/source-digests/garrytan-x-gbrain-2026-05-13.md`](source-digests/garrytan-x-gbrain-2026-05-13.md)。v0.9 对 Skill 能力与企业级 Remote MCP 接入的二次拆解保存为 [`references/source-digests/gbrain-skillpack-enterprise-mcp-2026-05-14.md`](source-digests/gbrain-skillpack-enterprise-mcp-2026-05-14.md)。v1.3.1 对 Garry Tan 5/12-5/17 密集更新帖的拆解保存为 [`references/source-digests/garrytan-x-gbrain-2026-05-18.md`](source-digests/garrytan-x-gbrain-2026-05-18.md)。这些 digest 只保存链接、检索日期、事实摘要、分析推断和卖家适用条件。

## Repository Metadata Snapshot

来自 GitHub API，检索时间：2026-05-14。

```json
{
  "full_name": "garrytan/gbrain",
  "description": "Garry's Opinionated OpenClaw/Hermes Agent Brain",
  "stargazers_count": 15507,
  "forks_count": 2065,
  "license": "MIT",
  "default_branch": "master",
  "created_at": "2026-04-05T14:40:56Z",
  "updated_at": "2026-05-14T03:29:59Z",
  "pushed_at": "2026-05-13T17:14:59Z"
}
```

## Notes on X Search

按计划继续检索了 X 上关于 “gbrain / LLM Wiki / best answer” 的公开评价。当前能稳定检索到的是 Garry Tan 关于 GBrain total recall、OpenClaw / Hermes、MIT 开源的原帖，GBrain voice/context 原帖，以及 X trending 对 GBrain 发布的摘要；没有找到可稳定引用的“LLM Wiki 最佳答案”原帖。因此正文没有把这句话写成直接引用，只保留为“方向性判断”，并使用可验证网页作为依据。

## PDF Status

2026-05-13 用户要求生成 PDF 评审稿，`dist/gbrain-orange-book.pdf` 已根据上一版重写稿刷新，适合分发讨论。v0.8 和 v0.9 只刷新 Markdown 和 HTML，不覆盖 PDF；正文最终定稿后可再次刷新。
