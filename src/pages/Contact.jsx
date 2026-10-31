import { useState } from 'react';
import { LuClock, LuExternalLink, LuMapPin, LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { business, fullAddress } from '../data/business.js';
import { serviceOptions } from '../data/services.js';
import {
  buildEnquiryMessage,
  isValidIndianMobile,
  mailtoLink,
  whatsappLink,
} from '../lib/contact.js';
import { usePageMeta } from '../lib/usePageMeta.js';

const EMPTY = { name: '', phone: '', service: '', message: '' };

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!isValidIndianMobile(v.phone)) errors.phone = 'Please enter a valid 10-digit mobile number.';
  if (!v.service) errors.service = 'Please choose what you need.';
  return errors;
}

function Field({ id, label, error, required, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">{error}</p>
      )}
    </div>
  );
}

export default function Contact() {
  usePageMeta(
    'Contact Alfa Refrigeration | New Nana Peth, Pune',
    'Call +91 98812 56922, WhatsApp or visit Alfa Refrigeration and Air Conditioner, near Kirad Hospital, New Nana Peth, Pune 411002. Open Monday to Saturday, 10 AM to 8 PM.',
  );

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [prepared, setPrepared] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    const clean = { ...values, name: values.name.trim(), message: values.message.trim() };
    const text = buildEnquiryMessage(clean);
    const waUrl = whatsappLink(text);
    const mailUrl = mailtoLink(`Enquiry: ${clean.service}`, text);
    setPrepared({ waUrl, mailUrl });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const a11y = (id) => ({
    id,
    name: id,
    value: values[id],
    onChange,
    'aria-invalid': errors[id] ? 'true' : undefined,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  });

  return (
    <>
      <PageHero
        title="Let’s talk about your refrigeration."
        crumb="Contact"
        lead="Call, message or visit. If you have already decided to enquire, everything you need is on this page."
        art="cooler"
        artLabel="Illustration of a floor-standing water cooler"
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <Reveal className="contact-primary">
              <h2>Fastest way to reach us</h2>
              <a className="contact-big" href={business.phoneHref}>
                <LuPhone size={26} aria-hidden="true" /> {business.phoneDisplay}
              </a>
              <div className="contact-actions">
                <a className="btn btn-primary" href={business.phoneHref}>
                  <LuPhone size={18} aria-hidden="true" /> Call now
                </a>
                <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={19} aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal className="contact-card" delay={60}>
              <h2><LuClock size={20} aria-hidden="true" /> Working hours</h2>
              <dl className="hours">
                {business.hours.map((h) => (
                  <div key={h.day} className={h.time === 'Closed' ? 'is-closed' : undefined}>
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="contact-card" delay={100}>
              <h2><LuMapPin size={20} aria-hidden="true" /> Visit us</h2>
              <address>
                {business.address.lines.map((l) => (<span className="block" key={l}>{l}</span>))}
                <span className="block">{business.address.city}, {business.address.state} {business.address.pin}</span>
              </address>
              <a className="text-link" href={business.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                Get directions in Google Maps <LuExternalLink size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal className="form-card" delay={80}>
            <h2>Send an enquiry</h2>
            <p className="form-intro">
              Tell us what you need. When you continue, your details open in WhatsApp as a ready-to-send
              message to our team. <strong>It is only sent when you press send in WhatsApp.</strong>
            </p>
            <form onSubmit={onSubmit} noValidate>
              <Field id="name" label="Your name" required error={errors.name}>
                <input type="text" autoComplete="name" {...a11y('name')} />
              </Field>
              <Field id="phone" label="Phone number" required error={errors.phone}>
                <input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" {...a11y('phone')} />
              </Field>
              <Field id="service" label="What do you need?" required error={errors.service}>
                <select {...a11y('service')}>
                  <option value="">Select an option</option>
                  {serviceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
              </Field>
              <Field id="message" label="Equipment or requirement details">
                <textarea rows="4" placeholder="e.g. deep freezer not cooling, or looking for a visi cooler for a shop" {...a11y('message')} />
              </Field>
              <button type="submit" className="btn btn-whatsapp btn-block contact-send-btn" aria-label="Send enquiry using WhatsApp">
                <FaWhatsapp size={19} aria-hidden="true" /> Send enquiry
              </button>
            </form>

            {prepared && (
              <div className="form-status" role="status">
                <p>
                  <strong>Your enquiry is ready in WhatsApp.</strong> It has not been sent yet:
                  please press send in WhatsApp to reach us.
                </p>
                <p>
                  Nothing opened?{' '}
                  <a href={prepared.waUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>{' '}
                  or <a href={prepared.mailUrl}>send by email</a>.
                </p>
              </div>
            )}
            <p className="form-alt">Prefer to talk? Call <a href={business.phoneHref}>{business.phoneDisplay}</a>.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="map-head">
            <h2>Find us in New Nana Peth, Pune</h2>
            <a className="text-link" href={business.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <LuExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="map-address">{fullAddress()}</p>
          <div className="map-frame">
            <p className="map-fallback">Map unavailable? Use “Open in Google Maps” above.</p>
            <iframe
              title="Map showing the location of Alfa Refrigeration in New Nana Peth, Pune"
              src={business.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeader eyebrow="Next steps" title="What happens after you get in touch" />
          <ol className="next-steps">
            <Reveal as="li"><h3>You tell us what you need</h3><p>Equipment, installation, servicing or a general question: share the details by call, WhatsApp or the form.</p></Reveal>
            <Reveal as="li" delay={60}><h3>We talk it through</h3><p>We discuss the requirement with you and confirm what the next step is.</p></Reveal>
            <Reveal as="li" delay={120}><h3>We arrange it with you</h3><p>The right product or service is arranged, onsite where that applies.</p></Reveal>
          </ol>
        </div>
      </section>

    </>
  );
}
