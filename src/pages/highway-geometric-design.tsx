import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Highway Geometric Designer"
      description="Highway Geometric Designer"
    >
      <main>
        <iframe
          src="/byankit/apps/highway-geometric-design/"
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