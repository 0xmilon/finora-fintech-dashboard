
Create a high-fidelity, enterprise-grade **Financial Transaction Dashboard** for a fictional company named **“Acme Inc.”**.  
The interface must visually and structurally match a modern fintech SaaS product used for **cash flow monitoring, transaction reconciliation, and expense categorization**.

The goal is **pixel-faithful density, layout hierarchy, and interaction patterns** comparable to Brex, Ramp, or Stripe internal dashboards.

---

## 1. Product Context & Purpose

This application is a **Transaction Monitoring & Cash Flow Analysis System** designed for finance and operations teams.

Primary user goals:
- Monitor net cash flow over time
- Review categorized transactions
- Validate receipts and payment methods
- Identify pending, missing, or failed items quickly

---

## 2. Global Layout Architecture

### Layout Structure
- **Fixed left sidebar**
- **Sticky top header**
- **Scrollable main content area**
- **Right-aligned contextual widgets inside main content (not a right sidebar)**

Desktop-first, responsive down to tablet and mobile.

---

## 3. Sidebar (Left Navigation)

**Style**
- Light gray / off-white background
- Icon + label navigation
- Minimal contrast, professional, understated
- No heavy shadows

**Structure**
- Company switcher at top: `Acme Inc`
- Global search input under company name

### Navigation Groups

**Main**
- Dashboard
- Transaction (active)
- Cash Flow
- Analytics
- Reports

**Money**
- Operating Account
- Payroll Account
- Savings
- Cards (expandable)

**Workflows**
- Bill Pay
- Approvals
- Reimbursements
- Scheduled & Recurring

**Receivables**
- Invoices
- Subscriptions
- Payouts

**Admin**
- Team & Roles
- Integrations
- Settings

Active item must have:
- Subtle background highlight
- Accent color indicator on the left edge

---

## 4. Top Header (Sticky)

**Elements**
- Breadcrumb navigation  
  `Home → Transaction`
- Page title: **Transaction**
- Subtitle: *“Monitor cash flow and net change across your accounts”*
- Right side:
  - Notification bell
  - User avatar

No heavy borders. Use subtle separators.

---

## 5. Filter & Control Bar

Directly below the header:

- `Data View` dropdown
- `Filter` button
- `Date` selector
- `Keywords` dropdown
- `Amount` dropdown
- View toggle (list / grid icon)
- Search input (right-aligned)

**Behavior**
- Filters look like compact pills
- Neutral borders
- Hover → slight background change
- No dramatic animations

---

## 6. Summary & Analytics Section

### Net Change Overview (Left)

- Label: **Net change this period**
- Value: `$230.00`
- Toggle buttons:
  - Daily (active)
  - Weekly
  - Monthly

### Line Chart

- Dual-line chart:
  - **IN** (green)
  - **OUT** (red)
- Soft grid lines
- No chart borders
- Hover tooltip showing:
  - Date
  - IN amount
  - OUT amount

Legend below chart:
- IN total
- OUT total

---

### Top Categories Widget (Right)

- Title: **Top Categories**
- Horizontal segmented bar showing category distribution
- Category list with:
  - Color dot
  - Category name

Examples:
- Google Workspace
- Mobbin
- Wise Use INC
- Internal Transfer
- AWS

---

## 7. Transaction Table (Primary Focus)

### Table Characteristics

- Dense, readable, finance-grade
- Sticky table header
- Row hover highlight
- Checkbox selection on left

### Columns (Exact Order)

1. Checkbox
2. Date
3. To / From
4. Account (masked digits)
5. Category (colored pill)
6. Method (icon + label)
7. Receipt status (pill)
8. Amount (color-coded)
9. Status (pill)

---

### Visual Conventions

**Category Pills**
- Software (blue)
- Transfer (orange)
- Service (yellow)
- Cloud (teal)
- Revenue (green)

**Receipt Status**
- Missing (orange)
- Attached (green)
- N/A (gray)

**Amount**
- Positive: green + sign
- Negative: red − sign

**Status**
- Done (green)
- Pending (orange)

---

## 8. Interaction Design

- Hover states on:
  - Sidebar items
  - Table rows
  - Filter controls
- Clicking a transaction row opens a mock detail view
- Filter changes update table state (mocked)
- Toggle Daily / Weekly / Monthly animates chart update
- No modal overload — interactions feel calm and professional

---

## 9. Visual Style & Design System

**Color Palette**
- Background: off-white / light gray
- Borders: subtle neutral gray
- Accent: muted orange (not saturated)
- Status colors: semantic but soft

**Typography**
- Font: Inter (or system-UI equivalent)
- Compact line height
- Financial dashboard density
- No oversized headings

**Depth**
- Very subtle elevation only
- No neumorphism
- No heavy drop shadows
- Emphasis through spacing, not decoration

---

## 10. Implementation Constraints

- React + Tailwind CSS
- Component-driven architecture
- Reusable table, filter, pill, and chart components
- Mock data must feel realistic (finance-grade)

---

## 11. Reference Fidelity Rule

⚠️ **UI density, spacing, and hierarchy must closely match the provided reference image.**  
Avoid:
- Marketing-style layouts
- Oversized cards
- Excessive whitespace
- Flat mobile-app design language

This is a **serious internal financial operations tool**, not a landing page.

---

PROVIDE THE REFERENCE IMAGE TO THE MODEL FOR MAXIMUM VISUAL ACCURACY
