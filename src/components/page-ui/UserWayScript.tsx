import { useEffect } from 'react';

const UserWayScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.userway.org/widget.js";
        script.setAttribute("data-account", "39DZpuk6hD");
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default UserWayScript;
