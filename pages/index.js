import Link from 'next/Link';

const Index = () => (
  <div>
    <Link href="/about" title="About Page">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js </p>
  </div>
);

export default Index;
