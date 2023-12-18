import React from 'react'

const WindowTracker = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            console.log('window resized');
        }
        window.addEventListener('resize', handleResize)
        return () => {
            //cleanup function to prevent memory leaks
            //the cleanup function will be called when the component is unmounted
            //now the console.log with the message "window resized" will not be printed when the component is hidden with the button (unmounted)
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <div>
        <h2>useEffect hook and cleanup</h2>
        <p>Window width: {windowWidth}</p>
    </div>
  )
}

export default WindowTracker