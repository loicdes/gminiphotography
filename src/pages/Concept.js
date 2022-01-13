import React from 'react';
import { Navigation } from '../components/Navigation';
import { SocialNetworks } from '../components/SocialNetworks';
import { NavigationButtons } from '../components/NavigationButtons';

const Concept = () => {
  return (
    <div>
    <Navigation></Navigation>
    <SocialNetworks></SocialNetworks>
    <NavigationButtons right={'/portraits'} left={'/'}></NavigationButtons>
    </div>
  );
};
export default Concept;