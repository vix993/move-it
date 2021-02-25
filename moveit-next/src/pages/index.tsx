import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';


export default function Home() {
  return (
    <div className="h-screen max-w-screen-lg my-0 mx-auto py-10 px-8 flex flex-col">
      <Head>
        <title>Home | move.it</title>
      </Head>
      <ExperienceBar/>

      <section className="flex-1 grid grid-cols-2 gap-24 content-center py-10 px-14">
        <div className="">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
