import React from 'react'
import Display from './Display'
import countryData from './countryData'


export default function Countries(){
    const[formData, setFormData]=React.useState({
        currentCountry:'',
        desiredCountry:'',
        displayCurrent:false,
        displayDesired:false
        
    })

    function handleChange(event){
        const {name, value}=event.target
        setFormData(prevData=>({
            ...prevData,
                [name]:value,
                displayCurrent:(prevData.displayCurrent===true)||(name==='currentCountry') ? true:false,
                displayDesired:(prevData.displayDesired===true)||(name==='desiredCountry') ? true:false,         
        }))
    }
              
     function Country(){

    //Extract country names from countryData array of objects
       let  countryList=countryData.map(el=>{
            return el.country
        })
    

     //Generate options of countries for select box  
       let  country=countryList.map(el=>(
            <option>{el}</option>
        ))
        return country
     }

     
    return(
        <div >

                
                 <div className='form--element' >
                            <div>Waka is your favourite tour guide!</div>
                            <form >
                            <label htmlFor='currentCountry'> Select Current Country 
                            </label>
                            <br />
                                 
                                <select name='currentCountry'  id='currentCountry' onChange={handleChange} value={formData.currentCountry}>
                                <option>--select country--</option>
                                    <Country />
                                    
                                </select>
                            
                                <br />

                                <label htmlFor='desiredCountry'> Select Desired Country 
                            </label>
                            <br />
                                <select name='desiredCountry'  id='desiredCountry' onChange={handleChange} value={formData.desiredCountry}>
                                <option>--select country--</option>
                                <Country />
                                    
                                </select>
                                
                            
                        </form>
                 </div>
            {!(formData.displayCurrent && formData.displayDesired) && 
            
             <div className='tour--appeal'> 
             Please select Current country and Desired country to begin tour...
             </div> }
            {(formData.displayCurrent && formData.displayDesired) && <Display country={formData} /> }
            
        </div>
        

    )
   }