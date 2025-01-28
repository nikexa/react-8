import React, { useState, useEffect } from 'react';
import '../__Atoms/RightSideTexts.css';
import axios from 'axios';
import up from '../__Atoms/IMAGES/up.svg';
import down from '../__Atoms/IMAGES/down.svg';

const RightSideTexts = () => {
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(null);

    const limit = 5;

    async function FetchProducts() {
        try {
            const res = await axios.get(`https://dummyjson.com/quotes?limit=${limit}`);
            const data = res.data.quotes;
            setProducts(data);
            console.log(data);
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        FetchProducts();
    }, []);

    function handleClick(i) {
        setVisible((visible) => (visible === i ? null : i));
    };

    return (
        <>
            <p className="MainText">FAQ</p>

            {products.map((product, i) => {
                return (
                    <div onClick={() => handleClick(i)} className="qvedaDiv" key={i} style={{cursor:"pointer"}}>
                        <div className="chandes">
                        {visible ===i ? <p style={{fontWeight:"700",fontSize:"14px",color:"#1E1F36"}} className="author">{product.author}</p> : <p className="author">{product.author}</p>}
                        {visible ===i ? <img src={up} alt="" /> : <img src={down} alt="" />}
                        </div>
                        {visible === i && <p className="quote">{product.quote}</p>}
                        <div className="line"></div>
                    </div>
                );
            })}
        </>
    );
};

export default RightSideTexts;
