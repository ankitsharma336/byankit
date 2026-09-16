import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="IS 456 Designer"
      description="IS 456 Designer"
    >
      <main>
        <iframe
          src="/byankit/apps/IS456-Structural-Design/"
          title="IS 456 Designer"
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