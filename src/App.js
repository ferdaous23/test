
import { useMediaQuery } from 'react-responsive'
import './App.css';
import React,{useState, Component} from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Select from 'react-select'

function App() {
    const[Like ,setLike] =useState(1)
    const[DisLike ,setDisLike] =useState(1)

    const[Likeactive ,setLikeactive] =useState(false)
    const[DisLikeactive ,setDisLikeactive] =useState(false)

function likes(){
if(Likeactive){
    setLikeactive(false)
    setLike(Like-1)
}else{
    setLikeactive(true)
    setLike(Like+1)
    if(DisLikeactive){
        setDisLikeactive(false)
        setLike(Like+1)
        setDisLike(DisLike-1)
    }
}
    }

function Dislikes(){

    setLikeactive(false)
    setLike(Like-1)

        if(DisLikeactive){
            setDisLikeactive(false)
            setDisLike(Like-1)
        }else{
            
            setDisLikeactive(true)
            setDisLike(Like+1)
            if(DisLikeactive){
                setLikeactive(false)
                setDisLike(DisLike+1)
                setLike(Like-1)
            }
        }
            }

    const plantList = [
        {
            id: '1',
            title: 'Oceans 8',
            label: 'Oceans 8',
            category: 'Comedy',
            likes: 4,
            dislikes: 1
          }, {
            id: '2',
            title: 'Midnight Sun',
            label: 'Midnight Sun',
            category: 'Comedy',
            likes: 2,
            dislikes: 0
          }, {
            id: '3',
            title: 'Les indestructibles 2',
            label: 'Les indestructibles 2',
            category: 'Animation',
            likes: 3,
            dislikes: 1
          }, {
            id: '4',
            title: 'Sans un bruit',
            label: 'Sans un bruit',
            category: 'Thriller',
            likes: 6,
            dislikes: 6
          }, {
            id: '5',
            title: 'Creed II',
            label: 'Creed II',
            category: 'Drame',
            likes: 16,
            dislikes: 2
          }, {
            id: '6',
            title: 'Pulp Fiction',
            label: 'Pulp Fiction',
            category: 'Thriller',
            likes: 11,
            dislikes: 3
          }, {
            id: '7',
            title: 'Pulp Fiction',
            label: 'Pulp Fiction',
            category: 'Thriller',
            likes: 12333,
            dislikes: 32
          }, {
            id: '8',
            title: 'Seven',
            label: 'Seven',
            category: 'Thriller',
            likes: 2,
            dislikes: 1
          }, {
            id: '9',
            title: 'Inception',
            label: 'Inception',
            category: 'Thriller',
            likes: 2,
            dislikes: 1
          }, {
            id: '10',
            title: 'Gone Girl',
            label: 'Gone Girl',
            category: 'Thriller',
            likes: 22,
            dislikes: 12
          },
    ]
     {
      const isDesktopOrLaptop = useMediaQuery(
         { minDeviceWidth: 1224 },
         { deviceWidth: 1600 } 
      )
      function handleRemove() {
        // remove item
  
      }
     
  return (
    
    <div className="App">
        {isDesktopOrLaptop &&
      <div className='style-generale'>
      {plantList.map((plant) => (
    <div  key={ plant.id} >
  
         <span className='style-title'>{plant.title}&nbsp;&nbsp; &nbsp;
        <span className='style-button'>
        <button onClick={likes} className={[Likeactive ? 'active-like':null,].join('')}>like{Like}</button>&nbsp;
         <button  onClick={Dislikes} className={[DisLikeactive ? 'active-dislike':null,].join('')}>DisLike{DisLike}</button>&nbsp;
         <button type="button"onClick={handleRemove(plant.id)} className='button-delete' ><DeleteOutlinedIcon /></button>
         </span>
        
 

         </span>
         

    </div>
      
    
      
    
))}

         <Select options={plantList} className='select-button' />
    </div>
}

    </div>
  );
  
}
}
export default App;