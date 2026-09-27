import React from 'react';
import Layout from '@theme/Layout';

export default function MixDesign(): React.ReactNode {
  return (
    <Layout
      title="Traffic Signal Design"
      description="Complete Traffic Signal Design"
    >
      <main>
        <iframe
          src="/byankit/apps/irc-93-traffic-signal-design/"
          title="Complete Traffic Signal design"
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