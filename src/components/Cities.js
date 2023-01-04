import {useState, useEffect} from'react'
import countryData from './countryData'
export default function Cities({desiredCountry}){
  
     //Extract country names from countryData array of objects
     let  countryList=countryData.map(el=>{
        return el.country
    })

    //Generate array of cities in desired country
     let countryIndex=countryList.indexOf(desiredCountry)
     let cityNames=countryData[countryIndex].cities.map(el=>el.name)

      //set state to change cities
    const [cityIndex,setCityIndex]=useState(0)
    
     
     //Generate array for city images
     var cityImages=countryData[countryIndex].cities.map(el=>el.image)

     //Set state to make pictures display automatically
 
   const [count, setCount]=useState(1) ;
   //Set state for play/pause controls
   const [status,setStatus]=useState(false)

  
   

   var play_pause_toggle=()=>{
    setStatus(prevStatus=>!prevStatus)
   }

   var numberOfCityImages=countryData[countryIndex].cities[0].imageqty;

   useEffect(()=>{
    let t;
   if (!status){
     t=setTimeout(()=>{
      setCount(prevCount=> {
          return (prevCount+1)%(numberOfCityImages+1)===0? 1: (prevCount+1)% (numberOfCityImages+1)
      }         
      )}, 3000)
   }
    

   //Clear interval...this stabilizes the animation
        return (()=>{ return clearTimeout(t) })      
  
   },[count,countryIndex,numberOfCityImages,status]) ;


    

     
  return (


    <div className='city--container'>
         <h3> {cityNames[cityIndex] } </h3><h5>{desiredCountry}</h5>
         <div className='portal--image--base'> 
         <img className='portal--image'  src={require(`../data/${desiredCountry}/${cityNames[cityIndex] }/${cityImages[cityIndex] }${count}.jpg`)} alt='pics here' />
         </div>
           A journey through {cityNames.length} major cities in {desiredCountry}
          <div className='portal--image--controls'> 
                     
                    
                    
                    {(cityIndex>0) && 
                    <span id='play--pause--skip'>
                    <i className='fas fa-step-backward'onClick={()=>{setCityIndex(cityIndex-1)}}></i>
                    </span>}
                    <span id='play--pause--skip'>
                       <i className={status?'fas fa-play':'fas fa-pause'}   onClick={play_pause_toggle}></i>
                    </span>
                    
                    {(cityIndex<cityNames.length-1) && 
                    <span id='play--pause--skip'>
                     <i className='fas fa-step-forward' onClick={()=>{ setCityIndex(cityIndex+1)}}></i>
                    </span>}
                    
                   
                
          </div>
    </div>
  )
}