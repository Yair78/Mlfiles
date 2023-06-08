import React,{useEffect, useState, useCallback} from 'react'
const myPromise = new Promise((resolve, reject) => {
  const newObj = {};

  fetch('https://raw.githubusercontent.com/Yair78/mlbbmm/main/mlbbitems.json')
    .then(response => response.json())
    .then((data) => {
      

      for (let key in data) {
        const items = data[key];
        for (let innerKey in items) {
          newObj[innerKey] = items[innerKey];

        if(60 <= Object.keys(newObj).length){
            resolve(newObj)
          }
            
        }}}).catch((err)=>{reject(err)})
      
});


let count=0
function ItemRow({itemName}){
 
 let forItem={}
const[Item,setItem]=useState()
useEffect(() => {
    myPromise.then((result) => {
      setItem(result);
    });
  }, []); // Empty dependency array ensures the effect runs only once
count++
const itemArr= Object.keys(itemName)
console.log(Item)
if(!Item){
  //console.log('it is undefined ')
  return
}

 return(
   <div className='item_row'>
    {
      itemArr.map((key,index)=>{
     return<img key={index} src={Item[itemName[key]].image} />
      })
    }
   </div>
 )
}
export {ItemRow}