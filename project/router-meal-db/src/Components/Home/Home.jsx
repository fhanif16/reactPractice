import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello this is from home</h1>
            {
               data.meals.map(meal => <Menu
               key={meal.idMeal}
               
               meal={meal}
               
               >

               </Menu>)
            }

        </div>
    );
};

export default Home;