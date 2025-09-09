
import Video from '../components/home/Video'
import HomeTopText from '../components/home/HomeTopText'
import HomeBottomLinks from '../components/home/HomeBottomLinks'


const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className=' h-screen w-screen relative flex flex-col justify-between overflow-hidden'>
        <HomeTopText />
        <HomeBottomLinks />
      </div>
    </div>
  )
}

export default Home
