import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import { Level } from '../App';

import WaldoModeTooltip from './WaldoModeTooltip';

import {
  MainContainer,
  HomeContainer,
  LevelContainer,
  CharacterContainer,
  // ItemContainer,
  DifficultyGrid,
  SwitchContainer,
} from './styles/HomeContainer.styled';

import WheresWaldo from "../assets/Where'sWaldo.png";

import Odlaw from '../assets/characters/Odlaw.png';
import Waldo from '../assets/characters/Waldo.png';
import Wenda from '../assets/characters/Wenda.png';
import Wizard from '../assets/characters/WizardWhitebeard.png';
import Woof from '../assets/characters/Woof.png';

// import Binoculars from '../assets/items/Binoculars.png';
// import Bone from '../assets/items/Bone.png';
// import Camera from '../assets/items/Camera.png';
// import Key from '../assets/items/Key.png';
// import Scroll from '../assets/items/Scroll.png';

interface HomePageProps {
  levelList: Level[];
  waldoMode: boolean;
  setWaldoMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePage(props: HomePageProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const checkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkRef.current) {
      if (props.waldoMode) {
        checkRef.current.checked = false;
      } else {
        checkRef.current.checked = true;
      }
    }
  }, []);

  function handleClick() {
    props.setWaldoMode(!props.waldoMode);
  }

  function toggleTooltip() {
    setIsTooltipOpen(!isTooltipOpen);
  }

  return (
    <MainContainer waldoMode={props.waldoMode}>
      <figure id='homeLogo'>
        <img src={WheresWaldo} alt="Where's Waldo?" />
      </figure>

      <HomeContainer>
        <DifficultyGrid>
          <h3>Choose a level!</h3>

          <SwitchContainer
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            waldoMode={props.waldoMode}
          >
            <WaldoModeTooltip
              isTooltipOpen={isTooltipOpen}
              waldoMode={props.waldoMode}
            />
            <label htmlFor='checkbox'>
              {props.waldoMode ? 'Waldo' : 'Challenge'} Mode
            </label>
            <label className='switch'>
              <input
                ref={checkRef}
                onClick={handleClick}
                type='checkbox'
                id='checkbox'
              />
              <span></span>
            </label>
          </SwitchContainer>
        </DifficultyGrid>

        <LevelContainer>
          {props.levelList.map((level: any, index) => {
            return (
              <figure key={index}>
                <Link to={level.path}>
                  <figcaption>
                    <b>{level.name}</b>
                  </figcaption>
                  <img src={level.img} alt={level.name} />
                </Link>
              </figure>
            );
          })}
        </LevelContainer>
      </HomeContainer>

      <HomeContainer>
        <h3>Look for these characters!</h3>

        <CharacterContainer>
          <figure>
            <figcaption>
              <b>Waldo</b>
            </figcaption>
            <img src={Waldo} alt='Waldo' />
          </figure>

          <figure>
            <figcaption>
              <b>Wenda</b>
            </figcaption>
            <img src={Wenda} alt='Wenda' />
          </figure>

          <figure>
            <figcaption>
              <b>Wizard</b>
            </figcaption>
            <img src={Wizard} alt='Wizard' />
          </figure>

          <figure>
            <figcaption>
              <b>Odlaw</b>
            </figcaption>
            <img src={Odlaw} alt='Odlaw' />
          </figure>

          <figure>
            <figcaption>
              <b>Woof</b>
            </figcaption>
            <img src={Woof} alt='Woof' />
          </figure>
        </CharacterContainer>
      </HomeContainer>

      {/* <HomeContainer>
        <h3>Find these items!</h3>

        <ItemContainer>
          <figure>
            <figcaption>
              <b>Binoculars</b>
            </figcaption>
            <img src={Binoculars} alt='Binoculars' />
          </figure>

          <figure>
            <figcaption>
              <b>Bone</b>
            </figcaption>
            <img src={Bone} alt='Bone' />
          </figure>

          <figure>
            <figcaption>
              <b>Camera</b>
            </figcaption>
            <img src={Camera} alt='Camera' />
          </figure>

          <figure>
            <figcaption>
              <b>Key</b>
            </figcaption>
            <img src={Key} alt='Key' />
          </figure>

          <figure>
            <figcaption>
              <b>Scroll</b>
            </figcaption>
            <img src={Scroll} alt='Scroll' />
          </figure>
        </ItemContainer>
      </HomeContainer> */}
    </MainContainer>
  );
}
