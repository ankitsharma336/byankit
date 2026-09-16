import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="IS 456 Column Designer"
      description="IS 456 Column Designer"
    >
      <main>
        <iframe
          src="/byankit/apps/IS456-column-design/"
          title="IS 456 Column Design"
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