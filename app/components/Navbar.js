import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#1a2b4b',
        color: '#ffffff',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          Home
        </Link>
        <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          About
        </Link>
        <Link href="/works" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
          Works
        </Link>
      </div>
    </nav>
  );
}
