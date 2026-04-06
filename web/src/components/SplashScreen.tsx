import React from 'react';
import './SplashScreen.css'; // Import the CSS file for animations

const SplashScreen = () => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            // Logic to hide the splash screen after 3 seconds
            const splash = document.getElementById('splash');
            if (splash) {
                splash.style.display = 'none';
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="splash" className="splash-screen">
            <div className="apple-tree">
                {/* Replace this with your apple tree SVG or animation */}
                <img src="path/to/animated-apple-tree.gif" alt="Loading..." />
            </div>
        </div>
    );
};

export default SplashScreen;