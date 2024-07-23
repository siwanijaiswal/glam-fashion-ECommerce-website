// import HatImg from './assets/Hat-Collection.webp'
import HatImg from '../../assets/Hat-Collection.webp'
import jacketImg from '../../assets/jacket.webp'
import Sneakers from '../../assets/sneakers.jpg'
import womens from '../../assets/womens.jpg'
import mens from '../../assets/mes.webp'
import Directory from '../../components/directory/directory'
import '../../index.scss'
import { Outlet } from 'react-router-dom'

const Home=()=>{
  const categories=[
    {
      id:1,
      title:'Hats',
      Image:HatImg
    },    {
      id:2,
      title:'Jackets',
      Image:jacketImg
    },
    {
      id:3,
      title:'Sneakers',
      Image:Sneakers
    },
    {
      id:4,
      title:'Womens',
      Image:womens
    },
    {
      id:5,
      title:'Mens',
      Image:mens
    },

  ]

  return (<>
    <Outlet />
    <Directory categories={categories} />
    </>
  );
}

export default Home;
