# Loop

> Plataforma moderna para gestão de relacionamento com clientes (CRM), automação de processos e colaboração entre equipes.

## 📖 Visão Geral

O **Loop** é um sistema desenvolvido como um **monorepo**, com foco em escalabilidade, organização e produtividade. A arquitetura separa claramente frontend, backend e pacotes compartilhados, permitindo evolução independente de cada módulo.

## 🏗️ Arquitetura

```
loop/
├── .github/                # Workflows e automações
├── apps/
│   ├── api/                # Backend ASP.NET Core (.NET 10)
│   └── web/                # Frontend Next.js
│
├── docs/                   # Documentação
├── infra/                  # Docker, scripts e infraestrutura
│
├── packages/               # Pacotes compartilhados
│   ├── design-system/
│   ├── eslint-config/
│   ├── prettier-config/
│   └── tsconfig/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── Loop.slnx
```

---

# 🚀 Stack Tecnológica

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- ASP.NET Core (.NET 10)
- C#

## Banco de Dados

- PostgreSQL

## Ferramentas

- pnpm Workspaces
- Turborepo
- Git

---

# 📋 Requisitos

- Node.js 24+
- pnpm 11+
- .NET SDK 10+
- Git

---

# ▶️ Executando o projeto

## Frontend

```bash
pnpm dev:web
```

## Backend

```bash
pnpm dev:api
```

---

# 📂 Estrutura do Monorepo

- **apps/** → aplicações
- **packages/** → bibliotecas compartilhadas
- **infra/** → infraestrutura
- **docs/** → documentação

---

# 📄 Licença

Projeto privado.
