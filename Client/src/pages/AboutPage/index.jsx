import React from 'react'
import OurStory from '../../components/AboutPageComponents/OurStory'
import OurAchievementsSection from '../../components/AboutPageComponents/OurAchievementsSection'
import OurBenefits from '../../components/homePageComponents/OurBenefits'
import TeamMembersSection from '../../components/AboutPageComponents/TeamMembersSection'

const AboutPage = () => {
  return (
    <section id='About-page' className='py-14'>
        <OurStory/>
        <OurAchievementsSection/>
        <TeamMembersSection/>
        <OurBenefits wrapper />
    </section>
  )
}

export default AboutPage