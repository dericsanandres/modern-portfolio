import { Footer, MainInfo } from '@/components';
import { About, Experience, Projects, TechStack, Certifications } from '@/components/Sections';
import ParticlesBackground from '@/components/ParticlesBackground';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import BackToTopButton from '@/components/BackToTopButton';

export default async function Home(): Promise<React.JSX.Element> {
  return (
    <>
      <ParticlesBackground />
      <ScrollProgressIndicator />
      <BackToTopButton />
      <main className='max-w-[1300px] mx-auto h-auto lg:h-full relative px-6 sm:px-12 md:px-16 lg:px-20 py-[50px] md:py-[90px] z-10'>
        <MainInfo />
        <div className='w-full lg:w-1/2 ml-0 lg:ml-auto relative pb-20 sm:pb-0'>
          <AnimatedSection animation="slideUp" delay={100}>
            <About />
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <TechStack />
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={300}>
            <Certifications />
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={400}>
            <Experience />
          </AnimatedSection>
          <Projects />
          <AnimatedSection animation="fadeIn" delay={600}>
            <Footer />
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
