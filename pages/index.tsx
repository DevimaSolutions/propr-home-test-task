import type { NextPage } from 'next'
import Stepper from '@/components/Stepper';
import Meta from '@/components/layout/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta /> 
      <Stepper />
    </>
  )
}

export default Home
