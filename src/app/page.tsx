import Image from 'next/image'
import './page.css';
import Navbar from './component/Navbar/Navbar'
import Page from './component/writeplanAi/Page'
import Patner from './component/Patners/Patner';
import Mainpage from './component/Mainpage';

export default function Home() {
  return (
    <main>
      <div className='nav'>
      <Navbar />
      </div>
      <div className='col'>
        <Mainpage />
      

      </div>
          </main>
  )
}
