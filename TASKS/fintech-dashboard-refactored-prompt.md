# Reference-Faithful Fintech Dashboard Prompt
_Production-grade, reverse-engineered specification_

---

## Refactored Master Prompt (Exact Build Reference)

```markdown
Create a high-fidelity, enterprise-grade **Financial Transaction Dashboard** for a fictional company named **“Acme Inc.”**.

The application represents an internal **finance & operations SaaS** used to monitor cash flow, review categorized transactions, and validate receipts across multiple accounts.

The UI must closely match modern fintech tools (Brex, Ramp, Stripe internal dashboards) in **density, hierarchy, and restraint**.

---

### Global Layout

- Fixed left sidebar
- Sticky top header
- Scrollable main content
- Desktop-first, responsive down to mobile

---

### Sidebar

- Light neutral background
- Icon + label navigation
- Active item with subtle background + left accent

**Sections**
- Main: Dashboard, Transaction (active), Cash Flow, Analytics, Reports
- Money: Operating Account, Payroll Account, Savings, Cards
- Workflows: Bill Pay, Approvals, Reimbursements, Scheduled & Recurring
- Receivables: Invoices, Subscriptions, Payouts
- Admin: Team & Roles, Integrations, Settings

---

### Header

- Breadcrumb: Home → Transaction
- Title: Transaction
- Subtitle: “Monitor cash flow and net change across your accounts”
- Right side: notification bell, user avatar

---

### Filter Bar

- Data View dropdown
- Filter button
- Date selector
- Keywords selector
- Amount selector
- View toggle (list / grid)
- Search input (right aligned)

Compact, pill-based controls.

---

### Analytics Section

- Net change summary with Daily / Weekly / Monthly toggle
- Dual-line chart (IN / OUT)
- Tooltip on hover
- Legend with totals

---

### Top Categories

- Horizontal segmented bar
- Category list with color dot + label
- Example categories:
  - Google Workspace
  - Mobbin
  - Wise Use INC
  - Internal Transfer
  - AWS

---

### Transaction Table

Dense, finance-grade table with sticky header.

**Columns**
1. Checkbox
2. Date
3. To / From
4. Account (masked)
5. Category (pill)
6. Method (icon + label)
7. Receipt status
8. Amount (+ / −)
9. Status (Done / Pending)

---

### Visual Language

- Off-white / light gray base
- Subtle borders
- Muted accent color (orange)
- Semantic status colors
- Inter or system UI font
- No heavy shadows
- No marketing spacing

---

### Interactions

- Hover states on rows and controls
- Click row → detail view (mock)
- Filters update state (mock)
- Chart updates on time toggle

---

### Constraints

- React + Tailwind CSS
- Component-driven architecture
- Realistic mock financial data
- Fidelity to reference image is mandatory

PROVIDE THE REFERENCE IMAGE TO THE MODEL FOR MAXIMUM ACCURACY
```

---

## Exact Spacing Scale

```
1  = 4px
2  = 8px
3  = 12px
4  = 16px
5  = 20px
6  = 24px
8  = 32px
10 = 40px
```

### Page & Layout

| Area | Value |
|---|---|
Main content padding (L/R) | 24px
Main content padding (Top) | 16px
Main content padding (Bottom) | 32px
Section vertical gap | 24px
Sidebar padding | 16px
Sidebar item gap | 4px
Sidebar group gap | 16px

---

## Header & Filters

```
Header height:              ~64px
Breadcrumb → Title:         8px
Title → Subtitle:           4px
Filter pill padding:        8px 12px
Search input height:        32px
Gap between pills:          8px
```

---

## Transaction Table Metrics

```
Header height:              40px
Row height:                 44px
Cell padding:               8px 12px
Checkbox column:            40px
Badge height:               20px
Badge padding:              2px 8px
```

---

## Mobile Adaptation Rules

### Breakpoints

```
Desktop ≥ 1280px
Tablet  768–1279px
Mobile  ≤ 767px
```

---

### Sidebar

- Desktop: visible (240px)
- Tablet: icon rail (64px)
- Mobile: hidden, slide-in overlay

---

### Header (Mobile)

```
Height: 56px
Breadcrumbs: hidden
Subtitle: hidden
Search: icon-triggered overlay
```

---

### Filters (Mobile)

- Single Filter button
- Opens bottom sheet / full screen
- Vertical stack
- Sticky Apply / Reset

---

### Charts (Mobile)

```
Height: 160px
Legend: stacked below
Tap shows tooltip
```

---

### Transactions (Mobile)

Table transforms into list items.

**Visible**
- To / From
- Amount
- Category
- Date + Account
- Status

**Hidden**
- Receipt
- Method

Accessible via expand / tap.

---

## Non-Negotiables

- No marketing UI
- No oversized typography
- No redesign on mobile
- Preserve density
- Data-first clarity
