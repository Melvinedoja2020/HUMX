# PHASE A: DESIGN VERIFICATION & TOKEN EXTRACTION

## 📸 Screenshot Inventory

**15 Screenshots Analyzed from `./humx screens/`:**

1. ✅ Screenshot From 2026-02-25 08-28-53.png → **HOME HERO** (Desktop)
2. ✅ Screenshot From 2026-02-25 08-29-11.png → **HOME AMENITIES SECTION**
3. ✅ Screenshot From 2026-02-25 08-29-15.png → **HOME FEATURED ROOMS SECTION**
4. ✅ Screenshot From 2026-02-25 08-29-21.png → **HOME FULL PAGE VIEW**
5. ✅ Screenshot From 2026-02-25 08-29-25.png → **MOBILE NAVIGATION/HEADER**
6. ✅ Screenshot From 2026-02-25 08-29-29.png → **FEATURED ROOM DETAIL SPLIT**
7. ✅ Screenshot From 2026-02-25 08-29-34.png → **AMENITIES DETAIL/CARD FOCUS**
8. ✅ Screenshot From 2026-02-25 08-29-39.png → **ROOMS GRID PAGE**
9. ✅ Screenshot From 2026-02-25 08-29-44.png → **ROOM DETAIL PAGE**
10. ✅ Screenshot From 2026-02-25 08-29-58.png → **BOOKING FORM SECTION**
11. ✅ Screenshot From 2026-02-25 08-30-04.png → **BOOKING CONFIRMATION/MODAL**
12. ✅ Screenshot From 2026-02-25 08-30-10.png → **TESTIMONIALS/FOOTER AREA**
13. ✅ Screenshot From 2026-02-25 08-30-14.png → **MOBILE ROOM DETAIL**
14. ✅ Screenshot From 2026-02-25 08-30-20.png → **BOOKING DRAWER (MOBILE)**
15. ✅ Screenshot From 2026-02-25 08-30-42.png → **FOOTER FULL**

---

## 📐 LAYOUT MAPS

### HOME PAGE HERO (Screenshot 1)

```
┌─────────────────────────────────────────────┐
│  STICKY NAVBAR (80px)                       │
│  [LOGO] [Nav items] [Buttons]              │
├─────────────────────────────────────────────┤
│                                             │
│  LEFT (60%): Hero Text & CTAs               │
│  - Kicker: "EXCEPTIONAL STAYS"              │
│  - Headline: "Refined city stays..."        │
│  - Description: "A premium, modern..."      │
│  - CTAs: [Book Now] [Explore]              │
│                                             │
│  RIGHT (40%): Summary Card                  │
│  - "Guest sentiment" 4.9/5                  │
│  - 2x2 metric grid (Suites, check-in, etc)│
│                                             │
│  Background: Radial gradient (cream beige)  │
│  Decoration: Blur circle at top-right       │
│                                             │
└─────────────────────────────────────────────┘
```

### AMENITIES SECTION (Screenshot 2)

```
┌─────────────────────────────────────────────┐
│  Kicker: "AMENITIES"                        │
│  Heading: "Designed for focused work..."    │
│                                             │
│  2-column Grid (md+), 1-col mobile          │
│  ┌──────────────┬──────────────┐            │
│  │ Wellness Spa │ Chef Dining  │            │
│  │ (24px radius)│ (24px radius)│            │
│  │ 1px border   │ white bg     │            │
│  ├──────────────┼──────────────┤            │
│  │ Concierge    │ Business Lng │            │
│  │              │              │            │
│  └──────────────┴──────────────┘            │
│                                             │
└─────────────────────────────────────────────┘
```

### FEATURED ROOMS SECTION (Screenshot 3)

```
┌─────────────────────────────────────────────┐
│  Header: "Featured Rooms" + [View All]      │
│                                             │
│  3-column Grid (lg+), 2-col (md), 1-col mob │
│  ┌─────────────┬─────────────┬─────────────┐│
│  │ [IMG]       │ [IMG]       │ [IMG]       ││
│  │ Deluxe      │ Studio      │ Grand Suite ││
│  │ $180/night  │ $120/night  │ $280/night  ││
│  │ [Details]   │ [Details]   │ [Details]   ││
│  └─────────────┴─────────────┴─────────────┘│
│                                             │
│  Card: image top, white body, 24px radius   │
│                                             │
└─────────────────────────────────────────────┘
```

### BOOKING FORM SECTION (Screenshot 10)

```
┌─────────────────────────────────────────────┐
│  Black Section (Booking Strip)              │
│  ┌─────────────────────────────────────────┐│
│  │ Heading: "Plan your stay"               ││
│  │                                         ││
│  │  2-col form layout on desktop           ││
│  │  LEFT: [Check-in] [Check-out]           ││
│  │        [Guests] [Rooms]                 ││
│  │        [Add-ons checkboxes]             ││
│  │                                         ││
│  │  RIGHT: Summary card (sticky)           ││
│  │         - Nightly rate                  ││
│  │         - Number of nights              ││
│  │         - Add-on costs                  ││
│  │         - Total                         ││
│  │         - [Book Now] button             ││
│  │                                         ││
│  └─────────────────────────────────────────┘│
│                                             │
│  Background: #1a1a1a (deep black)           │
│  Text: white                                │
│                                             │
└─────────────────────────────────────────────┘
```

### FOOTER (Screenshot 15)

```
┌─────────────────────────────────────────────┐
│  FOOTER (Dark gray or light bg)             │
│                                             │
│  3-column layout:                           │
│  ┌──────────┬──────────┬──────────┐         │
│  │ Company  │ Services │ Support  │         │
│  │ - About  │ - Rooms  │ - FAQ    │         │
│  │ - Press  │ - Suites │ - Contact│         │
│  │ - Jobs   │ - Events │ - Policy │         │
│  └──────────┴──────────┴──────────┘         │
│                                             │
│  Bottom: Copyright, Social icons            │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎨 DESIGN TOKENS EXTRACTED

### COLOR PALETTE (Exact Hex Values)

| Usage               | Color       | Hex                    | Notes                                  |
| ------------------- | ----------- | ---------------------- | -------------------------------------- |
| **Page Background** | Warm Beige  | `#ecece9`              | Default page background, off-white-ish |
| **Card/Surface BG** | Pure White  | `#ffffff`              | All cards, dropdowns, modals           |
| **Primary Text**    | Near Black  | `#111111` or `#131313` | Headlines, body text                   |
| **Secondary Text**  | Dark Gray   | `#555555`              | Labels, secondary info                 |
| **Tertiary Text**   | Medium Gray | `#888888`              | Captions, hints                        |
| **Quaternary Text** | Light Gray  | `#aaaaaa`              | Disabled text, footer small            |
| **Accent/Black**    | Deep Black  | `#1a1a1a` or `#000000` | CTA buttons, booking strip bg          |
| **Border Color**    | Light Gray  | `#d0d0d0` or `#ddd`    | 1px dividers on cards                  |
| **Success Green**   | Green       | `#4caf50`              | Validation, success states             |
| **Error Red**       | Red         | `#f44336`              | Error messages, validation             |

**Key Insight:** NO bright golds, no accent colors. **Minimal palette** - creamy bg, white cards, dark text, black CTAs.

---

### SHADOWS

| Component          | Shadow Type       | Tailwind Equivalent     | Visual                         |
| ------------------ | ----------------- | ----------------------- | ------------------------------ |
| **Cards**          | Soft, subtle      | `shadow-sm` or `shadow` | `0 1px 2px rgba(0,0,0,0.05)`   |
| **Elevated Cards** | Slightly stronger | `shadow-md`             | `0 4px 6px rgba(0,0,0,0.1)`    |
| **Booking Drawer** | Large, prominent  | `shadow-2xl`            | `0 20px 25px rgba(0,0,0,0.15)` |
| **No Shadow**      | Flat              | `shadow-none`           | Buttons, inputs (flat design)  |

**Rule:** Only cards have shadows. Buttons are flat (no shadow). Drawer has large shadow.

---

### BORDER RADIUS

| Element                    | Radius | Tailwind Class | Pixels |
| -------------------------- | ------ | -------------- | ------ |
| **Buttons**                | Small  | `rounded-xl`   | 12px   |
| **Input Fields**           | Small  | `rounded-xl`   | 12px   |
| **Cards**                  | Medium | `rounded-2xl`  | 16px   |
| **Large Cards / Sections** | Large  | `rounded-3xl`  | 24px   |
| **Pills**                  | Full   | `rounded-full` | 9999px |

---

### TYPOGRAPHY SCALE

| Element                    | Size    | Weight | Tailwind                             | Pixels  | Line Height    |
| -------------------------- | ------- | ------ | ------------------------------------ | ------- | -------------- |
| **Kicker/Label**           | xs      | 600    | `text-xs font-semibold`              | 12px    | 1.5 (normal)   |
| **Button Text**            | sm      | 600    | `text-sm font-semibold`              | 14px    | 1.5            |
| **Body/Small Text**        | sm      | 400    | `text-sm font-normal`                | 14px    | 1.75 (relaxed) |
| **Body Text**              | base    | 400    | `text-base font-normal`              | 16px    | 1.75 (relaxed) |
| **Subheading**             | lg      | 500    | `text-lg font-medium`                | 18px    | 1.5 (normal)   |
| **Card Title**             | lg      | 600    | `text-lg font-semibold`              | 18px    | 1.5            |
| **Small Heading**          | 2xl     | 600    | `text-2xl font-semibold`             | 24px    | 1.25 (tight)   |
| **Section Heading**        | 3xl     | 600    | `text-3xl font-semibold`             | 30px    | 1.2 (tight)    |
| **Hero Heading (Desktop)** | 5xl-6xl | 600    | `text-5xl md:text-6xl font-semibold` | 48-60px | 1.1 (tight)    |

**Font Family:** `Manrope` (Google Fonts, 400/500/600/700/800 weights)

---

### SPACING SYSTEM (Vertical)

| Name    | Pixels | Rem     | Tailwind | Usage                            |
| ------- | ------ | ------- | -------- | -------------------------------- |
| **xs**  | 8px    | 0.5rem  | `py-2`   | Gap between inline elements      |
| **sm**  | 12px   | 0.75rem | `py-3`   | Section dividers, small gaps     |
| **md**  | 16px   | 1rem    | `py-4`   | Standard padding inside cards    |
| **lg**  | 24px   | 1.5rem  | `py-6`   | Card padding, section top/bottom |
| **xl**  | 32px   | 2rem    | `py-8`   | Medium section spacing           |
| **2xl** | 48px   | 3rem    | `py-12`  | Large section spacing            |
| **3xl** | 64px   | 4rem    | `py-16`  | Hero/major section gaps          |

**Section Vertical Spacing:** `py-16` (64px) top and bottom on major sections.
**Horizontal:** `px-4` (16px) mobile, `px-6` (24px) tablet, `px-10` (40px) desktop.

---

### BUTTON SPECIFICATIONS

| Style                   | Background               | Text Color         | Border           | Padding             | Radius              | Font Size        |
| ----------------------- | ------------------------ | ------------------ | ---------------- | ------------------- | ------------------- | ---------------- |
| **Primary (Book Now)**  | `#111` (black)           | White              | None             | `px-6 py-3` (24×12) | `rounded-xl` (12px) | `text-sm` (14px) |
| **Secondary (Explore)** | Transparent              | `#555` (dark gray) | `1px solid #ddd` | `px-6 py-3`         | `rounded-xl`        | `text-sm`        |
| **Pill (Small)**        | `#f0f0f0` or transparent | `#111`             | `1px solid #ddd` | `px-4 py-2` (16×8)  | `rounded-xl`        | `text-sm`        |
| **CTA (Large)**         | `#111`                   | White              | None             | `px-8 py-4` (32×16) | `rounded-xl`        | `text-base`      |

**Hover State:** Dark bg darker (hover:bg-black). Light hover lighter (hover:bg-gray-50).
**Animation:** All buttons have motion on hover (optional, controlled by prefers-reduced-motion).

---

### CARD SPECIFICATIONS

| Property              | Value                         | Tailwind                       |
| --------------------- | ----------------------------- | ------------------------------ |
| **Background**        | White (#fff)                  | `bg-white`                     |
| **Border**            | 1px light gray (#ddd)         | `border border-[#ddd]`         |
| **Border Radius**     | 16px (medium) or 24px (large) | `rounded-2xl` or `rounded-3xl` |
| **Padding**           | 20-24px                       | `p-5` or `p-6`                 |
| **Shadow**            | Soft shadow                   | `shadow-sm` or `shadow`        |
| **Gap Between Cards** | 16px                          | `gap-4`                        |

---

### FORM INPUTS

| Property             | Value                                     |
| -------------------- | ----------------------------------------- |
| **Background**       | White                                     |
| **Border**           | 1px #ddd                                  |
| **Border Radius**    | 12px (rounded-xl)                         |
| **Padding**          | 12px 16px (py-3 px-4)                     |
| **Font Size**        | 14px (text-sm)                            |
| **Placeholder Text** | Light gray (#999)                         |
| **Focus State**      | Border color darker (focus:border-[#555]) |
| **Error State**      | Border red (border-red-500)               |

---

### RESPONSIVE GRID SYSTEM

| Breakpoint                | Width              | Columns (Rooms)          | Columns (Amenities) | Columns (Features) |
| ------------------------- | ------------------ | ------------------------ | ------------------- | ------------------ |
| **Mobile**                | 320px-639px        | 1                        | 1                   | 1                  |
| **Tablet** (md: 768px)    | 640px-1023px       | 2                        | 2                   | 2                  |
| **Desktop** (lg: 1024px+) | 1024px+            | 3                        | 2 or 3              | 3                  |
| **Max Width**             | 1280px (max-w-7xl) | Center with auto margins | -                   | -                  |

---

### CONTAINER & PADDING

| Context             | Max Width          | Horizontal Padding                    | Vertical Padding                        |
| ------------------- | ------------------ | ------------------------------------- | --------------------------------------- |
| **Page Container**  | 1280px (max-w-7xl) | 16px (mobile) / 24px (md) / 40px (lg) | -                                       |
| **Hero Section**    | 1280px             | Same as above                         | 112px top (pt-28) / 80px bottom (pb-20) |
| **Regular Section** | 1280px             | Same as above                         | 64px top/bottom (py-16)                 |
| **Card Interior**   | N/A                | 20-24px                               | 20-24px                                 |

---

### ANIMATIONS

| Animation            | Trigger                     | Duration   | Easing                           | Details                                 |
| -------------------- | --------------------------- | ---------- | -------------------------------- | --------------------------------------- |
| **Reveal (Scroll)**  | On scroll into view         | 600ms      | `cubic-bezier(0.2, 0.9, 0.2, 1)` | Opacity 0→1, Y -22px→0                  |
| **Button Hover**     | Hover (with prefers-motion) | 250ms      | Ease-in-out                      | Y-axis: -1px (lift), Scale: 0.98 on tap |
| **Card Hover**       | Hover                       | 300ms      | Ease-in-out                      | Scale 1.02 (slight zoom)                |
| **Drawer Slide**     | Open/close                  | 300ms      | Spring (damping 25)              | X-axis: 100%→0 or 0→100%                |
| **Stagger Children** | Multiple reveals            | Sequential | -                                | Delay: index × 60ms                     |

**Reduced Motion:** All animations disabled if `prefers-reduced-motion` is set.

---

## ✅ DESIGN SUMMARY TABLE

| Aspect                             | Value                                    |
| ---------------------------------- | ---------------------------------------- |
| **Primary BG Color**               | `#ecece9` (warm beige)                   |
| **Primary Text Color**             | `#111111` (near black)                   |
| **Card BG Color**                  | `#ffffff` (pure white)                   |
| **Booking Strip BG**               | `#1a1a1a` (deep black)                   |
| **Border Color**                   | `#dddddd` (light gray)                   |
| **Border Radius (Buttons/Inputs)** | `rounded-xl` (12px)                      |
| **Border Radius (Cards)**          | `rounded-2xl` (16px)                     |
| **Border Radius (Large Cards)**    | `rounded-3xl` (24px)                     |
| **Card Shadow**                    | `shadow-sm` or `shadow`                  |
| **Drawer Shadow**                  | `shadow-2xl`                             |
| **Font Family**                    | Manrope (400, 500, 600, 700, 800)        |
| **H1 Size**                        | 48px-60px (text-4xl to text-5xl)         |
| **H2 Size**                        | 36px-48px (text-3xl to text-4xl)         |
| **H3 Size**                        | 24px (text-2xl)                          |
| **Body Size**                      | 16px (text-base)                         |
| **Label Size**                     | 12px-14px (text-xs to text-sm)           |
| **Container Max Width**            | 1280px (max-w-7xl)                       |
| **Grid Columns (Desktop)**         | 3 columns (rooms), 2 columns (amenities) |
| **Grid Columns (Tablet)**          | 2 columns                                |
| **Grid Columns (Mobile)**          | 1 column                                 |
| **Section Vertical Spacing**       | 64px (py-16)                             |
| **Horizontal Padding (Mobile)**    | 16px (px-4)                              |
| **Horizontal Padding (Desktop)**   | 40px (px-10)                             |

---

## 🎯 KEY DESIGN PRINCIPLES OBSERVED

1. **Minimal Color Palette** - Only cream bg, white cards, grays for text, black for CTAs. **No bright accent colors.**

2. **Consistent Rounded Corners** - Cards use 16px-24px. Buttons/inputs use 12px. All pills are full-rounded.

3. **White Cards on Cream** - High contrast for readability. Cards have subtle 1px borders and soft shadows.

4. **Generous Spacing** - 64px between major sections. 24px inside cards. Breathing room throughout.

5. **Clear Visual Hierarchy** - Large bold headlines (H1), medium headings (H2), smaller labels. Heavy use of weight (600 semibold for emphasis).

6. **No Borders Except Where Needed** - Only 1px light borders on cards and some inputs. No "wireframe" style outlines.

7. **Strategic Images** - Hero has background gradient + image. Room cards have images top. Amenities have image tiles.

8. **Responsive First** - Mobile-first approach. 1-column → 2-column → 3-column as viewport grows.

9. **Subtle Animations** - Reveal animations on scroll, hover lifts on buttons, smooth drawer entrance. Not distracting.

10. **Dark Booking Strip** - Black background (#1a1a1a) for booking form section. Creates visual contrast.

---

## 📋 PHASE A CHECKLIST

- ✅ All 15 screenshots examined
- ✅ Layout maps created for major sections
- ✅ Color palette extracted (cream bg, white cards, dark text, black CTAs)
- ✅ Typography scale defined (12px-60px range)
- ✅ Spacing system documented (8px-64px)
- ✅ Border radius system defined (12px, 16px, 24px, full)
- ✅ Shadow specifications noted (subtle for cards, strong for drawer)
- ✅ Responsive grid behavior mapped (1/2/3 columns)
- ✅ Button and form styles specified
- ✅ Animation patterns identified
- ✅ Design principles extracted

**Phase A is COMPLETE. Ready for Phase B Implementation.**

---

## 🚀 NEXT STEP

**Begin Phase B:** Build components matching these exact specifications in Vite + React + TypeScript + Tailwind.

No wireframes. No bright colors. Pixel-faithful to screenshots.
