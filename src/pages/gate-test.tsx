import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Gate Practice test"
      description="Gate Practice test"
    >
      <main>
        <iframe
          src="/byankit/apps/gate-test/"
          title="Gate Practice test"
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