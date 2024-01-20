import React from 'react'

const Home = ({ name, setRedirectToHome }) => {
    const handleReturn = (event) => {
        event.preventDefault()
        setRedirectToHome(false)
    }

    console.log("home page", name);
    return (
        <div>
            <button onClick={handleReturn}>Return</button>
            <h2>{name.name}</h2>
        </div>
    )
}

export default Home