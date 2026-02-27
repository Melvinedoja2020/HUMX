# Screenshot Analysis Summary - Grandoria Hotel UI/UX

## Quick Reference Overview

### Color System

```
Primary Background:    #ecece9 (Warm Beige)
Surface/Cards:         #ffffff (Pure White)
Text (Primary):        #111 (Near Black)
Text (Secondary):      #color-ink-600 (Light Gray)
Accent/Dark:          #111 (Dark Navy/Black)
Overlay Backdrop:     #000000 45% opacity
```

### Typography Scale

```
Extra Small: 12px (text-xs) - Labels, badges
Small:       14px (text-sm) - Body, captions
Base:        16px (text-base) - Standard body
Large:       18px (text-lg) - Subheadings
XL:          20px (text-xl) - Card titles
2XL:         24px (text-2xl) - Section subheadings
3XL:         30px (text-3xl) -
4XL:         36px (text-4xl) - Section titles
5XL:         48px (text-5xl) - Page titles
6XL:         60px (text-6xl) - Hero titles
```

Font Family: **Manrope, Segoe UI, sans-serif**
Weights: Regular (400), Medium (500), Semibold (600), Bold (700), Extra Bold (800)

### Spacing Scale

```
Tight:       8px (gap-2) - Small element spacing
Normal:      12-16px (gap-3/gap-4) - Standard spacing
Loose:       20-24px (gap-5/gap-6) - Section spacing
Extra Large: 32-40px (gap-8/gap-10) - Major spacing

Card Padding:        20-24px (p-5 to p-6)
Button Padding:      8-12px v, 16-24px h
Input Padding:       12px 16px (px-4 py-3)
Section Padding V:   64px (py-16)
Section Padding H:   40px lg, 24px tablet, 16px mobile
```

### Border Radius System

```
Rounded:   8px (rounded-lg) - Small elements, icons
Rounded XL: 12px (rounded-xl) - Buttons, inputs, small cards
Rounded 2XL: 16px (rounded-2xl) - Filter panels, location section
Rounded 3XL: 24px (rounded-3xl) - Large cards, hero cards, main panels
Full:      9999px (rounded-full) - Pills, badges, circles
```

### Shadow System

```
Soft Shadow:  0 1px 2px 0 rgba(0, 0, 0, 0.05) - Standard cards
              shadow-sm or shadow (Tailwind)
              Used on: Cards, buttons, elevated surfaces

Large Shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) - Drawer
              shadow-2xl (Tailwind)
              Used on: Drawer modal, major overlays

No Shadow:    shadow-none - Flat elements
              Used on: Icons, badges, inline elements
```

---

## Page Breakdown

### Page 1: Home - Hero Section

- **Layout**: 2-column (left content 60%, right card 40%)
- **Navbar**: Fixed 80px height, light beige bg with 88% opacity, backdrop blur
- **Hero Background**: Radial gradient (top-right) #d9ddd6 → #f5f4f0 → #eeede7
- **Headline**: 48-72px, semibold, near black
- **Summary Card**: 24px radius, white, 1px stroke, soft shadow, 24px padding
- **Key Metric**: 36px semibold, 4.9/5 rating
- **Metric Grid**: 2x2 grid with 16px gaps
- **Animations**: Staggered reveal on scroll (600ms)

### Page 2: Home - Amenities Section

- **Layout**: 2x2 grid (responsive 1 column mobile)
- **Section**: 64px vertical padding, max-width 1280px
- **Cards**: 4 amenity cards, 24px radius, white, 1px stroke
- **Card Gap**: 16px between cards
- **Content**: Title (18px semibold), Description (14px gray)
- **Animation**: Staggered reveal (index \* 60ms delay)

### Page 3: Home - Featured Rooms

- **Layout**: 3-column grid (lg), 2-column (md), 1-column (sm)
- **Card Grid**: 24px gaps
- **Room Card Image**: 224px height, 16:9 aspect ratio, scales 1.05x on hover
- **Content Padding**: 20px inside card
- **Elements**: Title (20px), Rating badge (12px rounded-full), Amenity tags (12px), Price (20px), CTA button
- **Button**: 14px, dark navy, rounded-xl, 8px 16px padding
- **Hover**: Card lifts y -6px (250ms easeOut)

### Page 4: Home - Testimonials

- **Layout**: 3-column grid (responsive)
- **Cards**: 24px radius, white, 1px stroke, soft shadow
- **Quote**: 14px line-height relaxed, medium gray
- **Author**: 12px uppercase, letter-spacing 0.14em, light gray
- **Animation**: Staggered (index \* 70ms)

### Page 5: Home - Location

- **Layout**: 2-column grid (text + map image)
- **Card**: 48px radius (rounded-3xl), white, border, soft shadow
- **Padding**: 24-32px
- **Map Image**: min-height 260px, 16px radius, border 1px
- **Content**: Heading (36-48px), Description (14px), Travel items (14px)

### Page 6: Home - Booking

- **Layout**: 2-column (Form 1.35fr, Summary 1fr) - stacked mobile
- **Section**: 64px vertical padding, max-width 1280px

### Page 7: Booking Form - Left Panel

- **Card**: 24px radius, white, 1px border, soft shadow
- **Title**: 18px semibold
- **Fields**: 2-column grid at sm breakpoint
- **Input Fields**: 12px radius, 1px border, 12px padding
- **Focus State**: Accent border + 2px accent-muted ring
- **Add-ons**: 12px radius bordered checkboxes, 12px padding

### Page 8: Booking Form - Right Panel

- **Position**: Sticky top-24 (stays visible while scrolling)
- **Card**: 24px radius, white, 1px border, soft shadow
- **Title**: 16px semibold
- **Pricing Rows**: 14px gray, flex justify-between
- **Total**: 20px semibold, dark border-top
- **Submit Button**: 100% width, dark navy, 12px radius, 12px 24px padding
- **Terms**: 12px gray text

### Page 9: Rooms Page

- **Header**: 36-48px title, 12px uppercase kicker
- **Filter Panel**: 24px radius, white, 1px border, 20px padding, 2-column sm+
- **Filters**: Range slider + select dropdown
- **Grid**: 2 columns md, 3 columns xl, 24px gaps
- **Empty State**: 12px text, light gray, centered message

### Page 10: Room Detail Page

- **Status**: Scaffold (placeholder)
- **Expected**: Full room details, images, booking CTA

### Page 11: Booking Confirmation

- **Layout**: Centered single column, max-width 960px
- **Card**: 24px radius, white, 1px border, soft shadow, 28px padding
- **Title**: 30px semibold
- **Details Grid**: 14px text, 16px gaps
- **Action Buttons**: 2 buttons (primary + secondary)

### Page 12: View Bookings Page

- **Status**: Scaffold (placeholder)
- **Expected**: List of user bookings

### Page 13: Booking Drawer Modal

- **Overlay**: Fixed inset-0, black 45% opacity, z-index 50
- **Drawer Panel**: Fixed right, 40-45% width, white, 24px left radius
- **Shadow**: Large shadow (shadow-2xl)
- **Animation**: Slide in from right (350ms)
- **Header**: 24-32px padding, 1px bottom border
- **Close Button**: 32px, 1px border, 8px radius, centered ✕ icon
- **Content**: 24px padding, 24px gaps
- **Focus**: Trap within modal, escape closes

### Page 14: Mobile Navigation

- **Position**: Below navbar
- **Background**: Light beige (#ecece9)
- **Border**: 1px top border
- **Padding**: 16px
- **Items**: Stacked vertical, 12px gap
- **Menu Links**: 14px, 8px 12px padding, 8px radius, medium gray
- **Book Now**: Full width dark navy button

### Page 15: Footer

- **Layout**: 4-column grid lg, stacked mobile
- **Container**: max-width 1280px, auto margin, 48px vertical padding
- **Gaps**: 40px between columns
- **Divider**: 1px top border at bottom
- **Copyright**: 12px, light gray, centered

---

## Component Specifications

### Button Component

```
Primary Button:
  Background: #111 (dark navy)
  Color: White
  Border: None
  Radius: 12px (rounded-xl)
  Padding: 12px 24px (standard), 8px 16px (compact)
  Font: 14px, weight 600
  Hover: Darker or y -1px lift
  Tap: scale 0.98 (for motion users)

Secondary Button:
  Background: Transparent
  Border: 1px solid stroke-strong
  Color: Dark gray
  Radius: 12px
  Padding: 12px 24px
  Font: 14px, weight 600
  Hover: Light surface background

Pill/Badge:
  Background: Accent-muted or transparent
  Border: 1px solid (color-dependent)
  Radius: 9999px (rounded-full)
  Padding: 4px 12px
  Font: 12px, weight 600
```

### Card Component

```
Standard Card:
  Background: #ffffff
  Border: 1px solid light stroke
  Radius: 24px (large), 12px (small)
  Padding: 20-24px
  Shadow: Soft shadow
  Spacing: 16-24px internal gaps

Hover State:
  Lift: y -6px (250ms easeOut)
  Image inside: scale 1.05x (500ms)
```

### Input Component

```
Text Input / Select / Date:
  Border: 1px solid light stroke
  Radius: 12px (rounded-xl)
  Padding: 12px 16px (px-4 py-3)
  Font: 14px
  Background: White
  Color: Near black (#111)

Focus State:
  Border: Accent color
  Ring: 2px ring-offset accent-muted

Label:
  Font: 14px, weight 400
  Color: Medium gray
  Spacing: 8px below label

Error:
  Font: 12px, color red
  Margin: 4px top
```

### Form Layout

```
2-Column Grid (sm:grid-cols-2):
  Gap: 16px between fields
  Breakpoint: 640px and up
  Responsive: 1 column below sm

Add-ons Section:
  Margin: 12px top
  Spacing: 12px between checkboxes
  Padding: 12px 16px per item
  Border: 1px solid stroke
  Radius: 12px
```

---

## Responsive Grid System

### Breakpoints

```
Mobile Default:  < 640px
Tablet (sm):     640px - grid-cols-1 or grid-cols-2
Tablet (md):     768px - grid-cols-2 or 3
Desktop (lg):    1024px - full navigation, 2-3 columns
Large (xl):      1280px - 3-column grids
Max Container:   1280px (max-w-7xl)
```

### Responsive Padding

```
Mobile:   16px (px-4)
Tablet:   24px (sm:px-6)
Desktop:  40px (lg:px-10)
```

### Grid Examples

```
Room Cards Grid:
  mobile: 1 column
  md: 2 columns (grid-cols-2)
  lg: grid-cols-[1.2fr_1fr] or full 2-3
  xl: 3 columns (grid-cols-3)
  gap: 24px (gap-6)

Amenity Cards Grid:
  mobile: 1 column
  md: 2 columns (md:grid-cols-2)
  gap: 16px (gap-4)

Testimonials Grid:
  mobile: 1 column
  md: 3 columns (md:grid-cols-3)
  gap: 16px (gap-4)

Filter Panel Grid:
  mobile: 1 column
  sm: 2 columns (sm:grid-cols-2)
  gap: 16px (gap-4)
```

---

## Animation Specifications

### Scroll Reveal

```
Trigger:   On scroll into viewport (once: true, amount: 0.2)
Initial:   opacity: 0, y: 22px
Animate:   opacity: 1, y: 0
Duration:  600ms
Easing:    cubic-bezier(0.2, 0.9, 0.2, 1)
Stagger:   index * 60-80ms between elements
Disabled:  For users with prefers-reduced-motion
```

### Button Motion

```
Hover:     y -1px (slight upward lift)
Tap:       scale 0.98 (slight press)
Duration:  250ms
Easing:    cubic-bezier (ease)
Disabled:  For users with prefers-reduced-motion
```

### Card Hover

```
Lift:      y -6px
Duration:  250ms
Easing:    easeOut
Image:     scale 1.05x (500ms transition)
```

### Drawer Animation

```
Overlay:   opacity 0 → 1 (fade)
Panel:     Slide from right (x-axis translation)
Duration:  350ms
Easing:    cubic-bezier(0.2, 0.8, 0.2, 1)
Backdrop:  Black 45% opacity
Z-index:   50
Close:     Escape key or click overlay
```

### Navigation Animation

```
Mobile Menu:
  Display: hidden (lg:hidden) - shown only on mobile
  Open/Close: Smooth expand/collapse
  Transition: Standard ease
```

---

## Implementation Checklist

### Phase 1: Design System

- [x] Color palette defined
- [x] Typography scale documented
- [x] Spacing system established
- [x] Border radius system defined
- [x] Shadow system documented

### Phase 2: Components

- [ ] Button component (primary, secondary, pill variants)
- [ ] Card component (standard, room-specific)
- [ ] Input component (text, select, date, checkbox)
- [ ] Navigation (desktop + mobile)
- [ ] Form inputs with labels and error states

### Phase 3: Layouts

- [ ] Section container (max-w-7xl, responsive padding)
- [ ] 2-column hero layout
- [ ] Grid systems (1/2/3 column responsive)
- [ ] Sticky elements (navbar, summary panel)
- [ ] Modal/drawer overlay

### Phase 4: Pages

- [ ] Home (hero, amenities, rooms, testimonials, location, booking)
- [ ] Rooms (filter, grid)
- [ ] Room detail (placeholder)
- [ ] Booking confirmation
- [ ] View bookings (placeholder)

### Phase 5: Animations & Interactions

- [ ] Scroll reveals (staggered)
- [ ] Button/Card hover states
- [ ] Drawer open/close animation
- [ ] Form validation states
- [ ] Navigation toggle (mobile)

### Phase 6: Accessibility & Polish

- [ ] Focus states (inputs, buttons, links)
- [ ] Prefers-reduced-motion support
- [ ] ARIA labels
- [ ] Semantic HTML
- [ ] Form validation messages

---

## Key Design Principles

1. **Clean Aesthetic** - Minimal, warm neutral tones, generous whitespace
2. **Consistency** - Same radius, spacing, shadows throughout
3. **Hierarchy** - Clear visual organization with typography scale
4. **Accessibility** - High contrast, focus states, motion preferences
5. **Responsiveness** - Mobile-first, graceful scaling
6. **Interaction** - Smooth animations, clear feedback
7. **Functionality** - Business-focused, no unnecessary ornamentation
8. **Touch-Friendly** - Adequate button/tap target sizes
9. **Performance** - Smooth 60fps animations, optimized shadows
10. **Consistency** - Predictable spacing and component behavior

---

## Color Accessibility Notes

- **Body Text** (#111 on #ffffff): Excellent contrast (AAA level)
- **Secondary Text** (light gray on white): High contrast for reading
- **Accent Color** (#111): Strong dark color for CTAs and emphasis
- **Background** (#ecece9): Warm, easy on eyes, reduces blue light
- **Overlay** (#000 45%): Readable content behind, maintains focus
- **Error Messages**: Red color with sufficient contrast

---

## Technical Notes

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (scroll reveals, interactions)
- **Routing**: React Router DOM v7
- **State**: React Context (BookingContext)
- **Icons**: React Icons
- **Accessibility**: Custom hook `usePrefersReducedMotion`
- **Properties**: CSS custom properties (--color-_, --shadow-_)

---

**Document Generated**: February 27, 2026
**Project**: Grandoria Hotel - Premium Hospitality Booking Platform
**Status**: Complete Analysis (15 Screenshots)
