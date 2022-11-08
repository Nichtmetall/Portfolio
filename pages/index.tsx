import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Typewriter from 'typewriter-effect';

import Container from '../components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Hei. I'm Anton!
              </h1>
              <h2 className="text-xl text-gray-700 dark:text-gray-200 mb-4">
                <Typewriter
                  options={{
                    strings: [
                      'I build with MS Power Platform.',
                      'I code with React.',
                      'I do WordPress.'
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Helping developers build a faster web. Teaching about web
                development, serverless, and React / Next.js.
              </p>
            </div>
            ∏
            <div className="w-[80px] sm:w-[176px] relative sm:mb-0 mr-auto">
              <Image
                alt="Lee Robinson"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <button
            aria-label="GitHub"
            type="button"
            className="mainbutton mb-32"
            onClick={() =>
              window.open(
                'https://github.com/Nichtmetall',
                '_blank',
                'noopener,noreferrer'
              )
            }
          >
            <div className="flex items-center justify-center">
              <span>Get in contact</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                {' '}
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </div>
          </button>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
