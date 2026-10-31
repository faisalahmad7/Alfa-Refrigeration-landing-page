# Asset sourcing list

**Current state:** every image on the site is an original vector illustration
(`src/components/ProductArt.jsx`). No photographs were available in the project and the
build environment had no network access to download or generate any. No Blue Star
imagery or logo is used.

## Photos to replace the illustrations (in priority order)

1. **Real photos of the shop / showroom and installed equipment** (owner to supply). Best trust signal.
2. **Blue Star product photos**: only with written permission from Blue Star / the dealer brand guidelines.
3. **Technician at work** photo: only real staff with their consent.
4. **Licensed stock** (e.g. a stock library with a commercial licence): commercial kitchen with ice machine,
   retail glass-door cooler, office water cooler. Keep licence receipts.
5. **Original AI-generated photography** is allowed by the brief for scenes (showroom, kitchen, workplace)
   but must not show fake signage, logos, certifications, or staff/customers presented as real.

## How to swap
`ProductArt` is used in Home, About, Services and PageHero. Replace with `<img>` using `width`/`height`
(to avoid layout shift), `loading="lazy"` below the fold, and WebP/AVIF at 2 sizes via `srcset`.
Record source + licence for each file in this document.
