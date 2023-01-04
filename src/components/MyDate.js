import React, { useEffect } from 'react'

export default function MyDate({GMTdiff}){

    const [second, setSecond]=React.useState(new Date().getSeconds())

    useEffect(()=>{

    let t= setTimeout(()=>{
            setSecond(new Date().getSeconds())
        },1000)

    return (()=>{ return clearTimeout(t) }) 
      
    },[second])
    
    let hour=new Date().getHours()+GMTdiff;
    let minute=new Date().getMinutes();
    

    let x=new Date();
    let day=x.getDay();
    let dayOfMonth=x.getDate();
    let month=x.getMonth();
    let Year=x.getFullYear();
   

    let Day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] ;
    let Month=['January','February','March','April','May','June','July','August','September','October','November','December'];
     
    return(
        <div >
                     
                <div style={{fontSize:'13px'}}  className="date--container"> 
                     <div> {Day[day] } {dayOfMonth +"-"}{Month[month] +"-"}{Year} </div>
                        
                    <div> {hour >12 ? hour-12: hour} : {minute<9? `0${minute}`:minute}:{second<9? `0${second}`: second} {hour>=12 && minute>0 ? "PM": "AM"} </div>
                </div> 
        </div>
    )
   }