import Heading from './Heading';
import { benefits } from '../constants/constants';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from '../Components/design/Benefits';
import ClipPath from '../assets/svg/ClipPath';

const Benifits = () => {
  return (
    <section id='features'>
      <div className='container relative z-2'>
        <Heading
          className='md:max-w-md lg:max-w-2xl mt-5'
          title='Chat Smarter, Not Harder with Brainwave'
        />

        <div className='flex flex-wrap gap-10 mb-10'>
          {benefits.map((item) => (
            <div
              className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                <h5 className='h2 mb-5'>{item.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{item.text}</p>

                <div className='flex items-center mt-auto'>
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />

                  <p className='ml-auto text-xs font-bold font-code text-n-1 uppercase tracking-wider '>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className='absolute inset-0.5 bg-n-8'
                style={{ clipPath: 'url(#benefits)' }}
              >
                {/* On hover it applies bg-image */}
                <div
                  className='
                absolute inset-0 opacity-0 transition-opacity hover:opacity-10 duration-500 ease-in-out
                '
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className='w-full h-full object-cover'
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
