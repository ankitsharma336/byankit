import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Concrete Mix Design"
      description="Concrete Mix Design Calculator"
    >
      <main>
        <iframe
          src="/byankit/apps/concrete-mix-design/"
          title="Concrete Mix Design Calculator"
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