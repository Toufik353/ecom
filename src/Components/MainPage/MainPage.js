import React,{useState} from 'react'
import classes from "./MainPage.module.css"
import productData from "../ProductData/ProductData.json"
import {connect} from "react-redux"

function MainPage(props) {
const [addItem,setAddItem]=useState([])


    const handleClick=(id)=>{
alert(id)
var dataFromLocalStore=localStorage.getItem("cartItems") === null ? [] : JSON.parse(localStorage.getItem("cartItems"))

if(dataFromLocalStore.length === 0){

    var addToCartData=productData.filter(item=>item.id === id)
    
    console.log(addToCartData)
  addToCartData[0].qty = 1
}else{

    var addToCartData=productData.filter(item=>item.id === id)
    console.log(addToCartData)
    var isExist = false
    for(var i = 0; i < dataFromLocalStore.length; i++){
            if(dataFromLocalStore[i].id === addToCartData[0].id){
                console.log(dataFromLocalStore[i])
                dataFromLocalStore[i].qty= dataFromLocalStore[i].qty + 1
                console.log(dataFromLocalStore[i])
isExist = true
break
            }else{
                isExist = false
            }
    }
    
}
if(!isExist){

addToCartData[0].qty = 1
    dataFromLocalStore.push(...addToCartData)
    console.log(dataFromLocalStore)
    localStorage.setItem("cartItems",JSON.stringify(dataFromLocalStore))
}else{
    localStorage.setItem("cartItems",JSON.stringify(dataFromLocalStore))

}

    }












    return (
        <div className={classes.MainPage}>

            {
                productData.map((item,index)=>{
                    return(
                     <div className={classes.ProductCard}>
                      <img className={classes.ProductImage} src={item.preview} alt="img"/>
          
                     <p className={classes.ProductName}>{item.name}</p>

                    <div className={classes.Wrapper}>
              < p className={classes.ProductPrice}>{item.price}</p>
              < button className={classes.Button} onClick={()=>handleClick(item.id)}>Add To Cart</button>
                    </div>

          </div>
                    )
                })
            }

          
 
        </div>
   
           
    
        )
    }
    




export default MainPage
