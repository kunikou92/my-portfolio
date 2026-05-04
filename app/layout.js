export const metadata = {
  title: 'Portfolio',
  description: 'くにこう の自己紹介ページ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
