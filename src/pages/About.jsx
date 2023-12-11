import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

function About() {

    useEffect(() => {
        console.log('Component About mounted');
        return () => {
            console.log('Component About will unmount');
            // Cleanup logic here
        };
    }, []); // Empty dependency array

    return (
        <div>
            <h1>About us</h1>

            <nav>
                <ul className="flex gap-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bot">Bots</Link></li>
                    <li><Link to="/bot/create">Create bot</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default React.memo(About);