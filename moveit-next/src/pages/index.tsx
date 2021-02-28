import Head from 'next/head';
import {GetServerSideProps} from 'next';

import { ChallengeBox } from '../components/ChallengeBox';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentXp={props.currentXp}
      challengesCompleted={props.challengesCompleted}>
      <div className="h-screen max-w-screen-lg my-0 mx-auto py-10 px-8 flex flex-col">
        <Head>
          <title>Home | move.it</title>
        </Head>
        <ExperienceBar/>

        <CountdownProvider>
          <section className="flex-1 grid grid-cols-2 gap-24 content-center">
            <div className="">
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const { level, currentXp, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}