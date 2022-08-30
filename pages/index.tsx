import OptionsStep from '@/components/OptionsStep'
import type { NextPage } from 'next'
import Stepper from '@/components/Stepper';
import Meta from '@/components/layout/Meta';
import BasicLayout from '@/components/layout/BasicLayout';

const Home: NextPage = () => {
  return (
    <BasicLayout>
      <Meta /> 
      <Stepper />
    </BasicLayout>
  )
}

export default Home
