import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {MyContext} from './home.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import {ItemRow} from './item.js'
export default function Main(){
  let hr_info=JSON.parse(localStorage.getItem('hr_info'))
  const [data,setData]=useState(hr_info)
  useEffect(()=>{
    setData(hr_info)
  }, Object.keys(hr_info))
  
  const {name,role,src,item,cost,guide}=data
  return(
  <div className="main_ctn">
    <header>
    <span>Myanmar Mobile Legends Guide</span>
    <FontAwesomeIcon icon={faBars} />
    </header>
    
  <div className="one_st_sec">
  <div className='blur_ele' style={{
    backgroundImage:`url(${src})`
  }}></div>
   <div className="hero_img_con">
   <img className='hero_img'src={src}/>
    <div>
    <span className='hr_name'>{name}</span>
    </div>
   </div>
   
     </div>
    <div className='two_nd_sec'>
    <div className='cost_role_ctn'>
     <div className='cost_row'>
    <img src='https://mobilelegendsbuild.com/images/symbols/coin.png'/>
    <span>{cost.golds}</span>
    <img src='https://mobilelegendsbuild.com/images/symbols/elmas.png'/>
    <span>{cost.diamonds}</span>
    <img src='https://mobilelegendsbuild.com/images/symbols/ticket.png'/>
    <span>{cost.tickets}</span>
   </div>
   <div className='role'>
        Role: <span> {role}</span>
   </div>
    </div>
     <ReactMarkdown className='guideline'>{guide}</ReactMarkdown>
    </div>
    <ItemRow itemName={item} />
    </div>
    )
}