import React from 'react'

export default function Navigator(){


  let Niches=[ 
            'Cities',
            'Culture',
            'Currency',
            'Fashion',
            'Food',
            'Historic Sites'
            ];
 
    
     

let  Niche=Niches.map(el=> 
  
      
             <button id={el} className='niche--tabs'>
                  {el}
             </button> 
     
                   
       )
 
 return(
     <div className="container--niche--navbar"   >
      
           <div className="container--niche--tabs" >               
              {Niche}
          
           </div>
     </div>
 )
}