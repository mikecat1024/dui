# Project Commands

- `pnpm check`
- `pnpm storybook`

## Required Workflow

- Align implementation and variable naming with the contents of `specs.md`.
- Implement components to be fully compliant with Material Design 3 (MD3).
- In `specs.md`, only use items and naming that appear on the corresponding m3.material.io spec page.
- Ignore the MD3 Expressive updates; follow the original M3 spec naming and sizing.
- Do not introduce or use variables/tokens that are not defined in `specs.md`.
- Use camelCase for variable and token keys (no hyphens).

## Implementation Checklist

- Confirm the component exists in `specs.md` and matches the official M3 spec item names.
- Map every visual token used in code to an existing `specs.md` token (no extras).
- Keep sizing, spacing, elevation, and typography aligned to the M3 spec values in `specs.md`.
- Avoid ad-hoc styling; prefer tokens and spec-driven values.
- For chips, selected/unselected state handling can be deferred unless explicitly requested.

## Naming and Tokens

- Use camelCase for all tokens, variables, and config keys.
- Do not alias or rename tokens beyond what appears in `specs.md`.
- If a required token is missing, update `specs.md` first using the official M3 naming.
- Avoid introducing alias variables solely to shorten nested token access (keep direct references).

## Verification

- Run `pnpm check` before sharing changes.
- Use `pnpm storybook` to visually confirm MD3 compliance when working on components.
