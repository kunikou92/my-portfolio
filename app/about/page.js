import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color: '#000000',
      }}
    >
      <div style={{ maxWidth: '720px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 24px', fontSize: '2.5rem' }}>About</h1>
        <p style={{ margin: '0 0 24px', fontSize: '1rem', lineHeight: 1.8 }}>
          抹茶系のお菓子が大好きな大学生！将来はプログラミングで年収1000万になっていることを想像してがっつり勉強中。頑張ります。
        </p>
        <div style={{ marginBottom: '32px', textAlign: 'left', display: 'inline-block' }}>
          <p style={{ margin: '0 0 12px', fontWeight: 'bold' }}>趣味・好きなこと：</p>
          <ul style={{ margin: 0, paddingLeft: '20px', textAlign: 'left' }}>
            <li style={{ marginBottom: '8px' }}>ドラム</li>
            <li style={{ marginBottom: '8px' }}>音楽を聴くこと</li>
            <li>ゲーム</li>
          </ul>
        </div>
        <a href="/" style={{ color: '#000000', textDecoration: 'underline', fontSize: '1rem' }}>
          トップへ戻る
        </a>
      </div>
    </main>
    </>
  );
}
