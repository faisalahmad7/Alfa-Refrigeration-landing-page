export default function SectionHeader({ eyebrow, title, lead, align = 'left', as: Tag = 'h2', light = false }) {
  return (
    <div className={`section-header section-header--${align}${light ? ' is-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="section-title">{title}</Tag>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
