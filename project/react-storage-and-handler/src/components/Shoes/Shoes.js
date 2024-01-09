import React from 'react';
//import { multiply } from '../../utilities/calculate';
//import { add } from '../../utilities/calculate';
import { add , multiply} from '../../utilities/calculate';
const Shoes = () => {
    const first = 55;
    const second = 66;
    const total = multiply(first , second);
    const sum = add(first , second);

    return (
        <div>
            <p> Multiple:{total}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;