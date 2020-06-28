import Head from 'next/head';

export default function Protected({ hasReadPermission }) {
  if (!hasReadPermission) {
    return <div>Access denied.</div>;
  }

  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <main>I am supposed to be protected.</main>
    </div>
  );
}
