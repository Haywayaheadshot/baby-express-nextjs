import NavWrapper from './navWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baby Express | Home Page',
  description: 'Find a range of baby products!',
}

export default function Home() {
  return (
    <NavWrapper>
      <main className="flex min-h-screen flex-col items-center justify-strart gap-5 p-20">
        <h1>Welcome To NASSY BABY EXPRESS & TRADING!</h1>
        <p>
            Get quality and affordable for babies and pregnant mothers.
            Our products are sourced from United States, Turkey and in some cases
            China.
        </p>
      </main>
    </NavWrapper>
  )
}
