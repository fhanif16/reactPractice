import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({meal}) => {
    console.log(meal)
    return (
        <div>
            <Link to="/menu"> Show</Link>
        </div>
    );
};

export default Details;