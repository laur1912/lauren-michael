'use client';

import { useState } from 'react';
import Entrance from './Entrance';
import Gallery from './Gallery';
import AboutButton from './AboutButton';
import AboutDialog from './AboutDialog';

export default function Experience() {
  const [entered, setEntered] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const returnToEntrance = () => {
    window.scrollTo(0, 0);
    setEntered(false);
  };

  return (
    <>
      <Gallery hidden={!entered} onReturn={returnToEntrance} />
      {!entered && <Entrance paused={aboutOpen} onEntered={() => setEntered(true)} />}
      <AboutButton onOpen={() => setAboutOpen(true)} />
      {aboutOpen && <AboutDialog onClose={() => setAboutOpen(false)} />}
    </>
  );
}
