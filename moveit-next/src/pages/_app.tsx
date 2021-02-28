import { useState } from 'react';

import 'tailwindcss/tailwind.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )

}

export default MyApp