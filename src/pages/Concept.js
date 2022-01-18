import React from 'react';
import { Navigation } from '../components/Navigation';
import { SocialNetworks } from '../components/SocialNetworks';
import { NavigationButtons } from '../components/NavigationButtons';

const Concept = () => {
  return (
    <main>
      <div className='project'>
        <div className='project-main'>
          <div className='project-content'>
            <h1>Concept</h1>
          </div>
          <div className='text'>
            <p>Dans un monde où nous sommes constamment en concurrence, comparés aux autres voire rabaissés, il est important de <b>prendre confiance en soi !</b></p>
            <p>"Gmini" est la tournure anglaise de "gémeaux" qui lui même est relatif à "jumeaux". L'objectif recherché est que les modèles puissent se voir <b>tels qu'ils sont réellement</b>, au travers d'un oeil extérieur.</p>
            <p>Un shooting réussi, pour moi, comprend <b>4 réactions</b> : </p>
            <ul>
              <li><p>⭐ Waouh !</p><p className='end'>- Se découvrir</p></li>
              <li><p>⭐ C'est moi ça ?</p><p className='end'>- S'accepter</p></li>
              <li><p>⭐ C'est moi ça !</p><p className='end'>- S'inculquer cette vision</p></li>
              <li><p>⭐ J'ai de la valeur !</p><p className='end'>- Repartir confiant en sa personne</p></li>
            </ul>
          </div>
        </div>
        <Navigation></Navigation>
        <SocialNetworks></SocialNetworks>
        <NavigationButtons right={'/portraits'} left={'/'}></NavigationButtons>
      </div>
    </main>
  );
};
export default Concept;