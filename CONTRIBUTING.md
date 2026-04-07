# Contributing

Thanks for your interest in contributing! Here's how you can help.

## Ways to Contribute

- **Add questions** — New Q&A for existing or new categories
- **Fix answers** — Correct inaccurate or unclear answers
- **Translate** — Improve English translations
- **Report issues** — Bugs, typos, formatting problems
- **Suggest features** — Via GitHub Issues or the in-app Contribute form

## Quick Start

```bash
git clone https://github.com/dangdinh87/luyen-phong-van-online.git
cd cv-app
pnpm install
pnpm dev
```

## Adding Questions

### 1. Find the right data file

Q&A lives in `app/interview/data/`. Pick the file matching your category:

| File | Categories |
|------|-----------|
| `html-css-data.ts` | HTML, CSS |
| `js-ts-data.ts` | JavaScript, TypeScript |
| `react-nextjs-data.ts` | React, Next.js |
| `golang-data.ts` | Golang |
| `java-data.ts` | Java, Spring Boot |
| `php-laravel-data.ts` | PHP, Laravel |
| `csharp-data.ts` | C#, ASP.NET |
| `flutter-data.ts` | Flutter, Dart |
| `android-data.ts` | Android, Kotlin |
| `tools-misc-data.ts` | DevOps, Testing, Git |
| `system-design-data.ts` | System Design |
| `design-patterns-data.ts` | Design Patterns |

### 2. Add your question

```ts
{
  id: NEXT_ID,
  category: "React",
  subcategory: "Hooks & State",
  level: "intermediate",
  q: "Vietnamese question?",
  a: "Vietnamese answer.",
  q_en: "English question?",
  a_en: "English answer.",
},
```

### 3. Follow format rules

- Both **Vietnamese and English** required
- **Backticks** must be paired: `` `code` ``
- End sentences with `.`
- Use `(1)`, `(2)`, `(3)` for numbered lists
- Use `"double quotes"` for string wrapper

Full format guide: [docs/qa-format-standard.md](docs/qa-format-standard.md)

### 4. Verify

```bash
pnpm build
```

## Adding a New Category

1. Create data file in `app/interview/data/`
2. Import & spread into `QA_DATA` in `app/interview/interview-data.ts`
3. Add group entry in `app/interview/category-groups.ts`
4. Add SVG icon in `public/icons/`

## Pull Request Guidelines

- Keep PRs focused — one category or fix per PR
- Ensure `pnpm build` passes
- Use clear commit messages
