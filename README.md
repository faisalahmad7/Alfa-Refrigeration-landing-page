# Alfa Refrigeration and Air Conditioner: website

React + Vite site (Home, Services, About, Contact, 404). Plain JSX and CSS, no backend.

## Run it
Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in /dist
npm run preview
```

## Where to change things
| To change…                                   | Edit                         |
| -------------------------------------------- | ---------------------------- |
| Phone, hours, address, map, reviews          | `src/data/business.js`       |
| Products, services, process, segments        | `src/data/services.js`       |
| WhatsApp messages / validation               | `src/lib/contact.js`         |
| Colours, fonts, spacing                      | top of `src/styles/index.css`|
| Equipment illustrations                      | `src/components/ProductArt.jsx` |
| Logo                                         | `src/components/Logo.jsx`    |
| Search-engine business data (JSON-LD)        | `index.html`                 |

If you change phone, hours or address, also update the JSON-LD in `index.html`.

## How enquiries work
No server. The form validates, then opens WhatsApp with the enquiry pre-filled; it is only sent when
the visitor presses send. The page says so. An email link is offered as a fallback.

## Reviews
Two supplied excerpts are shown as "source pending verification". Set `reviews.verified = true` and
`reviews.source = { name, url }` in `business.js` only once the original listing is confirmed.

## Images
All visuals are original vector illustrations, not photos. See `docs/ASSET_SOURCING.md`.

## Not yet verified
This build was tested with an esbuild bundle and a stand-in router in headless Chromium, because
npm was unavailable. Run `npm install && npm run build` first. Google Fonts, the Google Maps embed,
other browsers, real phones, Lighthouse and screen readers have not been tested.
