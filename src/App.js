import SideBar from './components/SideBar/SideBar'

const App = () => {
  return (
    <div className='relative h-full min-h-screen md:flex '>
      <SideBar />

      <div className='flex-1 h-full p-10'>context</div>
    </div>
  )
}

export default App