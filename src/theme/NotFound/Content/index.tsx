import React from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function NotFoundContent(): JSX.Element {
  return (
    <div
      style={{
        minHeight: '65vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div>
        <Heading as="h1" style={{ fontSize: '3rem', color: '#166534' }}>
          🚧 Page Under Development
        </Heading>

        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          This page is currently under development.
        </p>

        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Please check back later for new notes, tutorials, and learning resources.
          If you think this is not right, Kindly email us. 
        </p>

        <Link className="button button--primary button--lg" to="/">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}