import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Puja Vidhi"
      description="Complete Puja vidhi"
    >
      <main>
        <iframe
          src="/byankit/apps/puja-vidhi/"
          title="Complete Puja vidhi"
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