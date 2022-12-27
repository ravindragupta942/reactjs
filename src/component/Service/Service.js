import { useState } from 'react';
import Header from '../Header/Header';
import './Service.css';

function Service() {

    let [count, upCount] = useState(0);

    const add = () => {
        count = count + 1;
        upCount(count);
    }

    const sub = () => {
        if (count) {
            count = count - 1;
            upCount(count);
        } else {
            return;
        }
    }

    return (
        <div className="service">
            <Header />
            <h1>service Component likes : {count}</h1>
            <button onClick={add}>Like</button>
            <button onClick={sub}>Dislike</button>
        </div>
    );
}

export default Service;
