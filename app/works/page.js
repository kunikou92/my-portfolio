'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function WorksPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const works = [
    {
      title: 'ポートフォリオサイト',
      description: 'Next.jsとインラインスタイルで構築した自己紹介サイト。ページごとに異なる情報を表示する構成を学べました。',
      tech: 'Next.js / React / JavaScript',
    },
    {
      title: 'TODOアプリ',
      description: 'シンプルなタスク管理アプリ。ローカルストレージを使ってデータを保存できます。',
      tech: 'HTML / CSS / JavaScript',
    },
    {
      title: 'クイズアプリ',
      description: 'JavaScriptで作られた3択クイズゲーム。正解数をカウントして最後に結果を表示します。',
      tech: 'HTML / CSS / JavaScript',
    },
  ];

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
        backgroundColor: '#f5f5f5',
        color: '#000000',
      }}
    >
      <div style={{ maxWidth: '720px', width: '100%' }}>
        <h1 style={{ margin: '0 0 32px', fontSize: '2.5rem', textAlign: 'center' }}>Works</h1>

        <div style={{ marginBottom: '32px' }}>
          {works.map((work, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '28px',
                boxShadow: hoveredIndex === index ? '0 8px 20px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <h2 style={{ margin: '0 0 12px', fontSize: '1.3rem' }}>{work.title}</h2>
              <p style={{ margin: '0 0 16px', fontSize: '1rem', lineHeight: 1.6 }}>{work.description}</p>
              <div style={{ margin: 0 }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {work.tech.split(' / ').map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#e0e0e0',
                        color: '#333',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/" style={{ color: '#000000', textDecoration: 'underline', fontSize: '1rem' }}>
            トップへ戻る
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
