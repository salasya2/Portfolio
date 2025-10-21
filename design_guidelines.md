# Portfolio Website Design Guidelines

## Design Approach: Technical Professional Hybrid
**Selected System**: Hybrid approach combining Linear's minimalist professionalism, Notion's content organization, and Material Design's interactive components

**Rationale**: This portfolio showcases advanced technical expertise in AI/ML and software engineering. The design should communicate competence through clarity, precision, and modern professional aesthetics rather than flashy marketing elements.

**Key Principles**:
- Clean, data-driven presentation
- Immediate credibility through content hierarchy
- Functional sophistication over decorative elements
- Technical precision in every detail

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**:
- Background: 220 20% 8% (deep slate, almost black)
- Surface: 220 18% 12% (elevated elements)
- Surface Elevated: 220 16% 16% (cards, modals)
- Text Primary: 220 10% 95% (high contrast)
- Text Secondary: 220 8% 65% (muted information)
- Border: 220 15% 20% (subtle dividers)

**Accent Colors**:
- Primary: 260 80% 65% (vibrant purple - AI/tech association)
- Primary Hover: 260 85% 70%
- Success: 142 70% 50% (appointment confirmations)
- Warning: 45 95% 60% (chat notifications)

**Light Mode** (secondary priority):
- Background: 0 0% 100%
- Surface: 220 15% 97%
- Text Primary: 220 20% 12%
- Primary: 260 70% 50%

---

### B. Typography

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' (body text, UI elements) - weights 400, 500, 600
- Headings: 'Cal Sans' or 'Inter' - weight 700
- Code/Technical: 'JetBrains Mono' - weight 400, 500

**Type Scale**:
- Hero/H1: text-6xl (3.75rem) font-bold tracking-tight
- H2: text-4xl (2.25rem) font-bold
- H3: text-2xl (1.5rem) font-semibold
- H4: text-xl (1.25rem) font-semibold
- Body: text-base (1rem) font-normal leading-relaxed
- Small: text-sm (0.875rem)
- Technical Labels: text-xs (0.75rem) font-mono uppercase tracking-wide

---

### C. Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing (internal components): p-2, p-4
- Component spacing: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Container gaps: gap-4, gap-6, gap-8

**Grid System**:
- Max container width: max-w-7xl
- Content width: max-w-5xl
- Text-optimal width: max-w-3xl
- Two-column layout: grid-cols-1 lg:grid-cols-2 gap-8
- Project grid: grid-cols-1 md:grid-cols-2 gap-6

---

### D. Component Library

**Navigation**:
- Fixed top navigation with glass-morphism backdrop blur
- Logo/name on left, nav links center, CTA (Book Appointment) + search icon right
- Smooth scroll behavior with active section highlighting
- Mobile: hamburger menu with slide-in drawer

**Hero Section** (Non-Traditional):
- Split layout: Left 60% - Large name/title with animated gradient text effect on "AI/ML Engineer"
- Right 40%: Floating card showing live stats (Projects completed, Technologies, Current role)
- Below: Single line tagline with tech stack icons (AWS, Python, Kubernetes, etc.)
- Prominent search bar integrated into hero ("Search my portfolio...")
- NO background image - pure gradient from background to surface color

**Experience/Projects Cards**:
- Elevated surface cards with subtle border
- Header: Company/Project name + date range
- Icon/logo placeholder on left (64px circle)
- Bullet points with custom purple dot markers
- Tech stack pills at bottom (rounded-full badges)
- Hover: subtle lift (translate-y-1) + border glow

**Appointment Booking Interface**:
- Material Design calendar component
- Month view with available dates highlighted in primary color
- Time slot selection: grid of buttons (30-min intervals)
- Booking form: name, email, phone, purpose (textarea)
- Confirmation modal with calendar invite download
- Status indicators: available (primary), selected (primary-dark), booked (muted)

**Live Chat Widget**:
- Fixed bottom-right floating button (60px circle) with chat icon
- Notification badge for new messages
- Expandable chat panel (400px width, 600px height)
- Message bubbles: user (primary color, right-aligned), support (surface, left-aligned)
- Input field with send button at bottom
- Glass-morphism header with "Live Support" + online indicator

**Search Interface**:
- Prominent search bar in hero and navigation
- Modal overlay for search results
- Real-time results as user types
- Result cards showing: title, excerpt, relevance score, section tag
- Keyboard navigation support (↑↓ to navigate, Enter to select)

**Contact Section**:
- Two-column layout: Left - contact form, Right - info + quick book button
- Form fields: name, email, subject, message
- Dual CTA: "Send Message" + "Or Book a Call Instead" button
- Contact info: email, phone, location, social links (LinkedIn, GitHub)

**Skills Display**:
- Grouped by category (Programming Languages, Frameworks, Cloud & DevOps, Domains)
- Each category in its own surface card
- Skills as pills with proficiency indicator (filled percentage)
- Visual clustering, not just lists

**Footer**:
- Three-column layout: About (short bio), Quick Links, Connect
- Newsletter signup (optional)
- Social media icons
- Copyright + "Built with [tech stack]" note

---

### E. Animations

**Minimal, Purposeful Motion**:
- Page transitions: None (instant navigation)
- Hover states: transform translate-y-1, duration-200
- Search modal: fade + scale entrance (duration-300)
- Chat widget: slide-up from bottom-right (duration-400)
- Form submission: button loading spinner only
- NO scroll animations, parallax, or continuous motion

---

## Images

**No Hero Image**: This portfolio uses a gradient-based hero with dynamic text and floating stats card
**Profile Image**: Professional headshot (200px circle) in About/Contact section - placeholder silhouette initially
**Project Thumbnails**: Optional 16:9 screenshots for each project card (if available, otherwise use gradient backgrounds with project icons)
**Company Logos**: Small circular logos (40px) for experience section next to each role

---

## Page Structure

1. **Navigation** (sticky, glass-morphism)
2. **Hero Section** (split layout, search integration, no background image)
3. **About/Description** (single column, max-w-3xl, with profile image)
4. **Experience Timeline** (vertical, card-based)
5. **Projects Showcase** (2-column grid, detailed cards)
6. **Skills Matrix** (grouped category cards)
7. **Contact + Appointment** (two-column, dual-purpose)
8. **Footer** (three-column)

**Floating Elements**:
- Chat widget (bottom-right)
- Search modal (triggered from nav/hero)
- Appointment booking modal (triggered from hero CTA/contact section)

---

## Accessibility & Technical Notes

- WCAG AA contrast ratios maintained
- All interactive elements have focus states (ring-2 ring-primary)
- Form inputs: proper labels, error states (border-red-500)
- Dark mode consistency across all inputs, textareas, and form fields
- Semantic HTML (header, nav, main, section, article, footer)
- Keyboard navigation fully supported for booking calendar and chat