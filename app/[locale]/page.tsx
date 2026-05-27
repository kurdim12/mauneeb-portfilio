import { setRequestLocale } from 'next-intl/server';
import { getAvailableImages } from '@/src/images';
import { MediaProvider } from '@/components/MediaProvider';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Work from '@/components/Work';
import Teaching from '@/components/Teaching';
import About from '@/components/About';
import Store from '@/components/Store';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const available = await getAvailableImages();

  return (
    <MediaProvider available={available}>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Work />
        <Teaching />
        <About />
        <Store />
        <Contact />
      </main>
      <Footer />
      <div className="grain-veil" aria-hidden />
    </MediaProvider>
  );
}
