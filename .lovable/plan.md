## Plan: Aapka Munshi Professional Website

Build a polished single-page website for **Aapka Munshi (आपका मुंशी®)** using the full content and interaction requirements from your prompt.

### What will be built

1. **Replace the placeholder home page**
   - Remove the current blank placeholder from the homepage.
   - Build the full one-page Aapka Munshi site directly on `/`.
   - Update page metadata from the default Lovable values to Aapka Munshi branding.

2. **Apply the provided design system**
   - Use the specified green, white, off-white, and near-black palette.
   - Use Poppins typography via Google Fonts.
   - Match the requested spacing, rounded cards, shadows, button styles, and responsive layout.
   - Keep the overall feel clean, trustworthy, professional, and approachable.

3. **Create all requested sections**
   - Fixed navbar with logo, tagline, links, CTA, and mobile menu.
   - Hero section with animated gradient, headline, CTAs, and trust indicators.
   - About section with CA-led positioning and animated counters.
   - Services section with two tabs: Housing Societies and Companies & Individuals.
   - Why Choose Us card grid with line-style icons and scroll fade-in animation.
   - Our Software section with feature list and CSS-drawn device mockup.
   - Clients section with dark green background and client cards.
   - Testimonials slider with autoplay, arrows, dots, fade transitions, and hover pause.
   - Contact section with details, office hours card, and validated static form.
   - Footer with brand, quick links, contact details, and copyright bar.

4. **Add the specified interactions**
   - Navbar changes from transparent to white after scrolling.
   - Smooth scrolling for internal navigation links.
   - Mobile hamburger dropdown menu.
   - Active nav underline behavior.
   - Hero fade-up entrance animations.
   - Service card hover lift, border, shadow, and icon scale.
   - IntersectionObserver fade-in for Why Choose Us cards.
   - Count-up stats animation when the About section enters view.
   - Services tab switch with fade transition.
   - Testimonial carousel with autoplay and manual controls.
   - Contact form inline validation and success state.
   - Phone number numeric filtering and basic formatting.
   - Back-to-top button after scrolling down.

5. **Make it fully responsive**
   - Mobile-first layout with careful testing targets around 375px width.
   - Stack sections cleanly on small screens.
   - Ensure buttons, cards, tabs, form fields, and the navbar work well on mobile.

### Technical approach

- Implement within the existing TanStack Start structure.
- Keep routing simple: the homepage route will contain the landing page sections.
- Use React state/effects for interactive behavior instead of external JavaScript dependencies.
- Use Tailwind utility classes plus updates to `src/styles.css` for global tokens, fonts, smooth scrolling, and custom animations where helpful.
- Use inline/simple SVG icons and CSS shapes rather than image dependencies.
- Do not add extra sections or unrelated content beyond the provided prompt.

### Validation before finishing

- Confirm the placeholder content is fully removed.
- Check responsive behavior for desktop, tablet, and mobile layouts.
- Verify nav links, tabs, testimonial controls, counters, form validation, success state, and back-to-top interaction.
- Run the project checks available after implementation to catch TypeScript/build issues.