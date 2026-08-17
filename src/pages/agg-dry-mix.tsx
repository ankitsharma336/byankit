import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Aggregate Dry Mix Design"
      description="Aggregate Mix Design Calculator"
    >
      <main>
        <iframe
          src="/byankit/apps/aggregate-dry-mix-design/"
          title="Aggregate Dry Mix Design"
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