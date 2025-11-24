import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Opportunities from '@/components/Opportunities';
import Speakers from '@/components/Speakers';
import Registration from '@/components/Registration';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <EventInfo />
      <Opportunities />
      <Speakers />
      <Registration />
      <Partners />
    </>
  );
}
