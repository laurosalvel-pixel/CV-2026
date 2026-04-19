# AI Development Rules

These rules apply to all AI interactions in this project.

The goal is to maintain a clean architecture,
reduce token usage and ensure predictable development.

---

# 1. File Scope Discipline

Never analyse the entire repository unless explicitly required.

Always work only with the minimal number of files needed.

Prefer small scoped changes.

---

# 2. Output Discipline

Return only modified files.

Do not repeat unchanged files.

Avoid long explanations unless requested.

---

# 3. Simplicity First

Prefer simple readable code.

Avoid overengineering.

Avoid unnecessary abstractions.

Avoid premature optimization.

---

# 4. Component Size

Large files should be split.

Prefer small components with clear responsibility.

Target:

- components under 200 lines
- utilities under 100 lines

---

# 5. Folder Structure

Prefer clear logical grouping.

Example:

/components
/features
/hooks
/layouts
/utils
/styles
/assets

Avoid deep nesting.

---

# 6. Naming Consistency

Use clear descriptive names.

Avoid abbreviations unless common.

Examples:

good:
UserProfileCard

bad:
UsrPrfCrd

---

# 7. Avoid Duplicate Logic

If logic appears multiple times:

Extract a helper or hook.

---

# 8. Predictable State Management

State should be local when possible.

Avoid global state unless necessary.

---

# 9. Token Efficiency Mode

When responding:

- avoid long explanations
- avoid repeating large code blocks
- show only relevant code changes
- summarise architecture changes

---

# 10. Refactoring Mode

If code becomes complex:

Prefer refactoring over adding new layers.

---

# 11. Design Integrity

Do not change UI or UX without instruction.

Refactoring must preserve behavior.

---

# 12. Performance Discipline

Avoid unnecessary rerenders.

Avoid heavy computations inside render functions.

---

# 13. Clean Baseline Principle

After major development steps:

Perform a project cleanup and reorganization
before implementing new features.