import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Septic Tank Design"
      description="Septic Tank Design"
    >
      <main>
        <iframe
          src="/byankit/apps/septic-tank-design/"
          title="Septic Tank Design"
          style={{
            width: '100%',
            height: 'calc(100vh - 60px)',
            minHeight: '800px',
            border: 'none',
            display: 'block',
          }}
        />
      </main>
    </Layout>
  );
}