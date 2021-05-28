import React from 'react'

const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src="https://raw.githubusercontent.com/briancodex/tailwindcss-react-v1/main/src/images/egg.jpg" className='h-full rounded mb-20 shadow' alt="egg" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Muffin</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>
        <div className='menu-card'>
        <img src="https://raw.githubusercontent.com/briancodex/tailwindcss-react-v1/main/src/images/egg-2.jpg" className='h-full rounded mb-20 shadow' alt="egg" />
        <div className="center-content">
            <h2 className="text-2xl mb-2">Egg Salade</h2>
            <p className="mb-2">Crispy, delicious, and nutritious</p>
            <span>$18</span>
        </div>
    </div>
    </>
    )
}

export default Content