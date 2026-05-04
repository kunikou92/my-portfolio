import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '80px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        color: '#000000',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#ffffff',
          padding: '60px 40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h1 style={{ margin: '0 0 32px', fontSize: '3.5rem' }}>くにこう</h1>
        <p style={{ margin: '0 0 20px', fontSize: '1.2rem' }}>
          Webを学び中の大学生です
        </p>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          好きなこと：ドラム、吹奏楽、ゲーム
        </p>
      </div>
    </main>
    </>
  );
}
