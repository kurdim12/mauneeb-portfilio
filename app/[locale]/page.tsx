import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Work from '@/components/Work';
import Teaching from '@/components/Teaching';
import About from '@/components/About';
import Store from '@/components/Store';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Teaching />
        <About />
        <Store />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
