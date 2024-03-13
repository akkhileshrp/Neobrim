import React from 'react';
import "./App.css";

const App = () => {
    return (
        <section className='container'>
            <div className='child-container'>
                <form>
                    <h1 className='prod-title'>Products Section</h1>
                    <input className='prod-inp' type="text" placeholder='Enter product name' />
                    <input className='prod-inp' type="text" placeholder='Enter the product price' />
                    <textarea className='prod-desc' placeholder='Enter product description' />
                    <button className='send-btn'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default App;