---
name: Modern Nusantara Digital Architecture
colors:
  surface: '#0c1320'
  surface-dim: '#0c1320'
  surface-bright: '#323947'
  surface-container-lowest: '#070e1a'
  surface-container-low: '#151c28'
  surface-container: '#19202c'
  surface-container-high: '#232a37'
  surface-container-highest: '#2e3542'
  on-surface: '#dce2f4'
  on-surface-variant: '#c4c8b9'
  inverse-surface: '#dce2f4'
  inverse-on-surface: '#2a313e'
  outline: '#8e9285'
  outline-variant: '#44483d'
  surface-tint: '#b0d18d'
  primary: '#d3f5ae'
  on-primary: '#1e3704'
  primary-container: '#b7d894'
  on-primary-container: '#435f28'
  inverse-primary: '#4a662f'
  secondary: '#bbc6e5'
  on-secondary: '#253048'
  secondary-container: '#3e4962'
  on-secondary-container: '#adb8d6'
  tertiary: '#daf2c1'
  on-tertiary: '#233514'
  tertiary-container: '#bed5a6'
  on-tertiary-container: '#495d38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cceda7'
  primary-fixed-dim: '#b0d18d'
  on-primary-fixed: '#0e2000'
  on-primary-fixed-variant: '#344e19'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#bbc6e5'
  on-secondary-fixed: '#101b32'
  on-secondary-fixed-variant: '#3c4760'
  tertiary-fixed: '#d2eaba'
  tertiary-fixed-dim: '#b7cea0'
  on-tertiary-fixed: '#0f2003'
  on-tertiary-fixed-variant: '#394c29'
  background: '#0c1320'
  on-background: '#dce2f4'
  surface-variant: '#2e3542'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 68px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system reflects a high-end, forward-thinking digital agency standard built for technology products, web architectures, and client conversions in Indonesia. The personality balances enterprise rigor with contemporary, energetic creative presence.

The aesthetic blends **Modern Tech Minimalism** with subtle **Frosted Depth & Tonal Layering**. It achieves impact through high-contrast pairing between deep slate backgrounds and fresh pistachio accents, confident geometric type scaling, precise linear containment, and generous structural whitespace.

## Colors
The palette is built around deep, atmospheric slate backgrounds punctured by luminous pistachio lime accents to focus user attention and accelerate conversion paths:

- **Primary Accent (`#B7D894`):** Primary actions, active indicators, and high-priority interactive touchpoints.
- **Secondary Base (`#36415A`):** Card elevated surfaces, container fills, and secondary interactive framing.
- **Tertiary Tint (`#E0F8C7`):** Hover highlights, focus glow effects, badge fills, and status highlights.
- **Neutral Dark Canvas (`#202734`):** Base canvas background for dark-mode interfaces.
- **Supporting Contrast:** Pure White (`#FFFFFF`) and Off-White (`#F8FAFC`) for maximum typography legibility; Ink Navy (`#0F172A`) reserved for light surface fills or text inverted on bright accent buttons.

## Typography
Plus Jakarta Sans delivers structural confidence and modern Indonesian tech optimism across all headings and interactive markers. Inter powers paragraph blocks and data interfaces for high-density legibility and optical neutrality.

Heading styles use tight negative letter-spacing for punchy impact, while metadata tags and labels maintain open tracking for clarity at compact dimensions.

## Layout & Spacing
The layout follows a 12-column fluid grid system on desktop (max width 1280px) transitioning to a 6-column grid on tablet (768px - 1024px) and a 4-column layout on mobile (<768px).

Section structures must maintain breathing room with vertical section padding scaled from `space-xl` on mobile to twice `margin` on desktop. Grid units snap strictly to an 8px base rhythm (`0.5rem` steps) with nested component padding handled by `space-sm` and `space-md`.

## Elevation & Depth
Visual hierarchy is constructed via tonal layering augmented by ambient lime-tinted shadows and fine linear borders:

- **Level 0 (Base Canvas):** `#202734` flat backdrop.
- **Level 1 (Card & Content Surface):** `#36415A` with a 1px border of `rgba(255, 255, 255, 0.08)` and subtle diffuse drop-shadow (`0 12px 32px -8px rgba(0, 0, 0, 0.35)`).
- **Level 2 (Active & Popover Elements):** `rgba(54, 65, 90, 0.95)` with backdrop blur filter (12px), bordered with `rgba(183, 216, 148, 0.25)`, and shadow `0 20px 40px -12px rgba(15, 23, 42, 0.5)`.
- **Level 3 (Focused & Interactive Accents):** Pistachio glow casting an atmospheric halo of `0 0 24px rgba(183, 216, 148, 0.28)`.

## Shapes
Geometry uses clean, balanced curvature:
- Standard containers, cards, and modal sheets use 16px radius (`rounded-lg` / `1rem`).
- Form inputs, buttons, and badges utilize 8px to 12px curvature (`rounded` / `0.5rem` to `0.75rem`).
- Chips, operational status pills, and toggle indicators use full pill curvature (`rounded-full`).

## Components

### Tombol (Buttons)
- **Utama (Primary):** Solid `#B7D894` fill, `#0F172A` bold typography. Hover state transitions to `#E0F8C7` with ambient glow (`0 0 20px rgba(183, 216, 148, 0.4)`). Active state applies subtle 0.98 scale compression.
- **Sekunder (Secondary):** Surface `#36415A` with 1px border `rgba(183, 216, 148, 0.3)` and `#F8FAFC` text. Hover adds surface brightness and `#B7D894` text transition.
- **Tersier / Tautan (Ghost/Link):** Transparent background, `#B7D894` text with subtle underline animation on hover.

### Kartu Layanan & Portofolio (Cards)
- Background `#36415A` at 70% opacity with backdrop blur (8px). 1px border in `rgba(255, 255, 255, 0.08)`.
- Internal padding using `space-lg`.
- Hover behavior: Y-axis lift of -4px and border illumination transitioning to `rgba(183, 216, 148, 0.4)`.

### Bidang Input (Form Fields)
- Background `#202734` enclosed within a 1px border of `rgba(255, 255, 255, 0.12)`. Text in `#FFFFFF` with placeholder copy in `rgba(248, 250, 252, 0.45)`.
- Focus state activates an outline border of `#B7D894` accompanied by a 2px outer ring in `rgba(183, 216, 148, 0.15)`.

### Lencana & Tag Status (Badges & Chips)
- Background `rgba(183, 216, 148, 0.12)` with solid text `#B7D894` and 1px border `rgba(183, 216, 148, 0.25)`.
- Fully rounded pill radius, padding `0.25rem 0.75rem`, label-md typography.

### Pilihan Interaktif (Checkboxes & Radios)
- Base unselected state: `#202734` background with `rgba(255, 255, 255, 0.2)` border.
- Selected state: Solid `#B7D894` fill with `#0F172A` checkmark or center pip.

### Navigasi & App Header
- Floating docked panel style featuring `#202734` fill at 85% opacity, backdrop blur 16px, bottom border `rgba(255, 255, 255, 0.06)`, and sticky top positioning.