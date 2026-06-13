import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: '80px 48px 0',
      fontSize: 12,
      color: 'var(--text-3)',
      flexWrap: 'wrap',
    }}>
      <Link to="/" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>
        Accueil
      </Link>
      {items.map((item, i) => (
        <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>/</span>
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} style={{ color: 'var(--text-3)', textDecoration: 'none' }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: 'var(--text-1)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  )
}
