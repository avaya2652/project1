import React, { useCallback, useEffect, useState } from "react";
import useHttp from "../../hook/use-http";
import Card from "../UI/Card/Card";
import Item from "./Item/Item";
import classes from './Meal.module.css';

const Meal = () =>{
    const [mealsItems, setMealItems] = useState([]);
    const getMenuItems =useCallback((data) =>{
        let meals = []
        for(let key in data){
            meals.push(data[key])
        }
        setMealItems(meals);
    },[])
    const {errorMessage, isLoading, sendRequest} = useHttp(getMenuItems);

    useEffect(()=>{
        sendRequest({URL:'https://react-food-delivery-3d41f-default-rtdb.firebaseio.com/menuItem.json',method: 'GET'});

    },[sendRequest])


    return(
        <div className={classes['meal_wrapper']}>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading && <p>Loading...</p>}
            <Card>
                {mealsItems.map((item,index)=>{
                    // console.log(item);
                    return <Item name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            id={Math.random()} 
                            key={index}
                            availableQty={+item.availableQty}
                        />
                })}
            </Card>
        </div>
    )
}

export default Meal;