import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Item from "./Item/Item";
import classes from './Meal.module.css';

const Meal = () =>{
    const [mealsItems, setMealItems] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/7cc40522-db6d-4229-996e-562a1195e532',
        {
            methid:'GET',
            headers:{
                'Content-Type':'application/JSON'
            }
        }).then(response=> response.json())
        .then(data=>{
            setMealItems(data)
        })
    },[])
    return(
        <div className={classes['meal_wrapper']}>
            <Card>
                {mealsItems.map((item,index)=>{
                    // console.log(item);
                    return <Item name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            id={item.id} 
                            key={item.id}
                            availableQty={+item.availableQty}
                        />
                })}
            </Card>
        </div>
    )
}

export default Meal;