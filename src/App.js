import React from 'react';
import './App.css';
import Fruit from './components/fruit/Fruit';
import Form from './components/form/Form';



function App() {
    return (
        <>
            <main>
                <h1>Fruitmand bezorgservice</h1>
                <Fruit
                    emoji='🍓'
                    fruitName='aardbeien'
                />
                <Fruit
                    emoji='🍌'
                    fruitName='bananen'
                />
                <Fruit
                    emoji='🍏'
                    fruitName='appels'
                />
                <Fruit
                    emoji='🥝'
                    fruitName="kiwi's"
                />
                <Fruit
                    reset={true}
                />
            </main>
            <footer>
                <Form/>
            </footer>
        </>
    );
}

export default App;