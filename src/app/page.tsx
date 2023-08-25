import NavWrapper from './navWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baby Express | Home Page',
  description: 'Find a range of baby products!',
}

export default function Home() {
  return (
    <NavWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome To Baby Express!</h1>
      </main>
    </NavWrapper>
  )
}
