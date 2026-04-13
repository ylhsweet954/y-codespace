# y-codespace

基于 `pnpm workspace` 的多包项目示例。

## 目录结构

```text
.
├── apps/
│   └── web
└── packages/
    └── shared
```

## 工作区

- `apps/web`: `Vite + TypeScript` Web 应用
- `packages/shared`: 共享代码包

## 开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```