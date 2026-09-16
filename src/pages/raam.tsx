import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Puja Vishi"
      description="Complete Puja vishi"
    >
      <main>
        <iframe
          src="/byankit/apps/raam/"
          title="Complete Puja vishi"
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