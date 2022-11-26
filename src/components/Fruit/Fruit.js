import React, {useEffect, useState} from 'react';
import Button from "../button/Button";
import './Fruit.css';



const Fruit = ({fruitName, emoji, reset}) => {
    const [count, setCount] = useState( 0);

    function addOne() {
        return setCount(count + 1);
    }

    function subtractOne() {
        if(count === 0) {return}
        return setCount( count - 1);
    }

    function resetCount() {
        setCount( 0)
    }

    useEffect(() => {
        const resetter = document.getElementById('reset-trigger');
        resetter.addEventListener('click', resetCount);
    });

    if(reset) {
        return (
            <div className='reset-fruit'>
                <Button
                    id='reset-trigger'
                    type='button'
                >
                    Reset
                </Button>
            </div>
        );
    }

    return (
        <div className='fruit'>
            <p>{emoji}</p>
            <p>{fruitName}</p>
            <Button
                type='button'
                className={count === 0 ? 'subtract' : null}
                clickHandler={subtractOne}
            >
                -
            </Button>

            <p> <strong>{count}</strong></p>

            <Button
                type='button'
                className={count > 1 ? 'add' : null}
                clickHandler={addOne}
            >
                +
            </Button>
        </div>
    );
};

export default Fruit;