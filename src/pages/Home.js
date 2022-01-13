import React from 'react';
import { DynamicText } from '../components/DynamicText';
import { Navigation } from '../components/Navigation';
import { NavigationButtons } from '../components/NavigationButtons';
import { SocialNetworks } from '../components/SocialNetworks';

const Home = () => {
  return (
    <div>
        <div className='home'>
            <Navigation></Navigation>
            <SocialNetworks></SocialNetworks>
            <div className='home-main'>
                <div className='main-content'>
                    <h1>GminiPhotography</h1>
                    <h2><DynamicText/></h2>
                </div>
            <NavigationButtons right={'/portraits'}></NavigationButtons>
            </div>
        </div>
    </div>
  );
};
export default Home;