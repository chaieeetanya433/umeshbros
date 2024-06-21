import SecondCompo from "@/Components/SecondCompo";
import KeyServices from "@/Components/KeyServices";
import CoreCompetencies from "@/Components/CoreCompetencies";
import KeyProjects from "@/Components/KeyProjects";
import Machinery from "@/Components/Machinery";
import Carousel from '@/Components/(pages)/home/Carousel'
import Counter from '@/Components/(pages)/home/Counter' 
import React from 'react'

const Home = () => {
  return (
    <>
      <Carousel />
      <SecondCompo />
      <KeyServices />
      <Counter />
      <CoreCompetencies />
      <KeyProjects />
      <Machinery />
    </>
  );
}

export default Home
