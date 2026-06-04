import { setRequestLocale } from 'next-intl/server';
import { getAvailableImages } from '@/src/images';
import { MediaProvider } from '@/components/MediaProvider';
import IntroCurtain from '@/components/IntroCurtain';
import ExtractionMeter from '@/components/ExtractionMeter';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import Work from '@/components/Work';
import Approach from '@/components/Approach';
import Teaching from '@/components/Teaching';
import About from '@/components/About';
import Craft from '@/components/Craft';
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
      <IntroCurtain />
      <ExtractionMeter />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <Marquee />
        <Work />
        <Approach />
        <Teaching />
        <About />
        <Craft />
        <Store />
        <Contact />
      </main>
      <Footer />
      <div className="grain-veil" aria-hidden />
    </MediaProvider>
  );
}
