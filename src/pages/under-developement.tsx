import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function UnderDevelopment() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div>
        <Heading as="h1" style={{ color: '#166534' }}>
          🚧 Page Under Development
        </Heading>

        <p>This section is currently under development.</p>

        <p>Please check back later for new content.</p>

        <Link className="button button--primary" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}   