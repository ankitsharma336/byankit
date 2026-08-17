import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Site Quantity Estimator"
      description="Site Quantity Estimator"
    >
      <main>
        <iframe
          src="/byankit/apps/site-quantity-estimator/"
          title="Site Quantity Estimator"
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