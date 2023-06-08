import React,{useEffect, useState,createContext}from "react"
import ReactDOM from "react-dom"
import {Link} from 'react-router-dom'
import Main from './main.js'
export let hr_info={}
export let MyContext;
export default function Home(){
  const [data,setData]=useState(null)
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Yair78/mlbbmm/main/mlbbheros.json").then(respond => respond.json()
    .then(data=> setData(data)) )
  },[])
  
  
  return(
   <div className='home_ctn'>
    <div className='hm_head'>
    <span>Myanmar Mobile Legends Guide</span>
    </div>
    <div className="hr_dsp_con">
      {data===null?<div>loading...</div>:
      //mapping for showing hero list on the screen 
        Object.keys(data).map((nkn,index)=>{
   return(<div key={index} className='hr_ls'>
           <div className='left_h'>
            <div className='img_ctn'>
             <img src={data[nkn].src}/>
            </div>
            <span>{data[nkn].name}</span>
           </div>
           <span className='btn btn-info' onClick={()=>{
             localStorage.setItem('hr_info',JSON.stringify(data[nkn]))
           }}>
           
           <Link style={{textDecoration:'none',color:'white'}} to="/main?">View</Link></span>
          </div>)
        })
      }
    </div>
   </div>
    )
}

