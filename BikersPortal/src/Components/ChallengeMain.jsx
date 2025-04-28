import React from 'react'
import ChallengeInformation from './ChallengeInformation'
import ChallengeCards from './ChallengeCards';
import ChallengeDiscordInfo from './ChallengeDiscordInfo';

const ChallengeMain = () => {
  return (
    <div>
        <ChallengeInformation/>
        <ChallengeDiscordInfo/>
        <ChallengeCards/>
    </div>
  )
}

export default ChallengeMain;