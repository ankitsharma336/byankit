import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Transportation Engineering Lab"
      description="Transportation Lab Manual"
    >
      <main>
        <iframe
          src="/byankit/apps/bbs-generator/"
          title="Bar Bending Schedule Generator"
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