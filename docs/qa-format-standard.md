# QA Format Standard

> Format rules for interview Q&A data. Follow when adding or editing questions.

## Data Structure

```ts
{
  id: number,          // Unique, incremental
  category: string,    // Must match a member in category-groups.ts
  subcategory: string,
  level: 'beginner' | 'intermediate' | 'advanced',
  q: string,           // Vietnamese question
  a: string,           // Vietnamese answer
  q_en: string,        // English question
  a_en: string,        // English answer
}
```

## Answer Formats

The renderer auto-detects format from plain text. **Do NOT add HTML or markdown.**

### Numbered List — `(1)`, `(2)`, `(3)`

For 3+ distinct steps/points:

```
"Intro sentence. (1) First point. (2) Second point. (3) Third point."
```

### Summary + Bullets

First sentence as overview, rest become bullet points:

```
"Definition or overview. Detail one. Detail two. Detail three."
```

### Two Paragraphs

Exactly 2 sentences render as 2 paragraphs (not summary + 1 bullet):

```
"Main explanation. Additional note."
```

### Single Paragraph

One sentence or no split points.

## Inline Formatting

| Syntax | Use for |
|--------|---------|
| `` `code` `` | Function names, syntax, CLI commands |
| `**bold**` | Key terms emphasis |

## Rules

**DO:**
- Pair all backticks
- End sentences with `.`
- Keep answers ~200-500 chars
- Provide both VI and EN
- Use `(1)`, `(2)` for ordered steps (not `1.`, `2.`)
- Use `"double quotes"` for string wrapper

**DON'T:**
- Use HTML tags (they get escaped)
- Use `\n` newlines
- Put unescaped `'` outside backticks
- Write more than 5 sentences without numbered format

## Checklist

- [ ] `id` is unique
- [ ] `category` matches a member in `category-groups.ts`
- [ ] Both VI + EN provided
- [ ] All backticks paired
- [ ] Answer ends with `.` or `)` or `` ` ``
- [ ] `pnpm build` passes
