import React,{useEffect,useState} from 'react'
import classes from "./CartPage.module.css"
import {Link,useParams} from "react-router-dom"


function CartPage(props) {
    const [data,setData] = useState([])
    const { testvalue } = useParams();

function fetchDat(){
    var dataFromLocal = localStorage.getItem("cartItems") === null ? [] : JSON.parse(localStorage.getItem("cartItems"))
setData(dataFromLocal)

}

    useEffect(()=>{
fetchDat()
    },[])


    const handleDelete = (id)=>{
        alert( "Delet item ? " +id)

        var afterDeletData=data.filter(item=>item.id!=id)
localStorage.setItem("cartItems",JSON.stringify(afterDeletData))
// fetchDat()
        setData(afterDeletData)
    }


    const handleAllDelete = ()=>{
        alert("Delete the cart")
        var deletAll = localStorage.clear("cartItems")
        fetchDat()
        props.location.fet()

    }

    {
       if( data.length === 0 ){
           return(
               <>
               <Link to="/">Home</Link>
               <h1>Empty Cart</h1>
               </>
           )
       }  else
       
       return (
           <div className={classes.CartPage}>
           <p><Link to="/">Home</Link></p> 
           <button className={classes.Btn} onClick={handleAllDelete}>Delete cart</button>

           <div className={classes.CartItem}>
           {
               data.map((item,index)=>{
                   return(
                       <div className={classes.Wrapper}>
                       <img src={item.preview} className={classes.ItemImage}/>
                       <p>{item.qty}</p>
                       <p>{item.name}</p>
                       <div className={classes.Continer}>
                        <p>Without Tax</p>
                       <p>{item.price}</p>
                       </div>

                       <div className={classes.Continer}>
                        <p>With Tax</p>
                       <p>{item.price * 0.0123 * item.qty + item.price}</p>
                       </div>
                       <button onClick={()=>handleDelete(item.id)}>Delete</button>

                       
                       </div>
                   )
                })
           }
           </div>

           <h3>Order summary</h3>
               <p>items price :{data.reduce((acc,item)=>{return(acc+item.qty * item.price * 0.0123 * item.qty + item.price)},0).toFixed(2)}</p>
               <p>Delivery charge: 500</p>
               <p>Total price:  {+(data.reduce((acc,item)=>{return(acc+item.qty * item.price * 0.0123 * item.qty + item.price)},0).toFixed(2) )+ parseInt(500)}</p>
               <button><Link to="/orderConfirmPage/">Buy Now</Link></button>
           
        </div>
    )
}
}
export default CartPage