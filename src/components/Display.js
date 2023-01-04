import React from 'react'
import countryData from './countryData'
import MyDate from './MyDate'
import Cities from './Cities'



export default function Display(props){
    const {currentCountry,desiredCountry}=props.country ;

    //Generate List of Countries
    let  countryList=countryData.map(el=>{
        return el.country
    })

    //Generate array index of current and desired countries
    const x=countryList.indexOf(currentCountry)
    const y=countryList.indexOf(desiredCountry)

   //Generate GMT difference between your current country and desired country
   var GMTdiff= Number((countryData[y].GMT))-Number((countryData[x].GMT))

    return(
         <div>
               <div className='select--container'>
                        <div className='current--container'>
                                <img className='flag'  src={require(`../data/${currentCountry}/flag.png`)} alt='pics here' />
                                <div>You are in <b>{currentCountry}</b> </div> 
                                <div>
                                Date and time in <b>{currentCountry}</b>  is <MyDate GMTdiff={0} />
                                </div>   
                                <br />
                                <br />
                        </div>
                        <div className='desired--container'>
                                <img className='flag'  src={require(`../data/${desiredCountry}/flag.png`)} alt='pics here' />
                                <div>You want to visit <b>{desiredCountry}</b>? </div>
                                
                                <div> Date and time in <b>{desiredCountry}</b> is 
                                    <MyDate GMTdiff={GMTdiff} />    
                                </div>
                        </div>
               </div>
                      <div className='tour--container'>
                                <div className='flag--anthem'>
                                    <img className=''  src={require(`../data/${desiredCountry}/flag.png`)} alt='pics here' />
                                    <div>click <b>play button</b> to hear <b>{desiredCountry}</b>'s national anthem</div>
                                    <audio className='audio--player'src={require(`../data/${desiredCountry}/anthem.mp3`)}  type='audio/mp3'  controls loop autoplay />
                               </div>
                               <div className='tour-portal'>
                                    
                                     <div> <Cities desiredCountry={desiredCountry} /> </div>
                               </div>
                               

                      </div>
                            

        </div>
    )
}