// import React, { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState();

//   // check is user is online or offline
//   useEffect(() => {
//     window.addEventListener("offline", () => {
//       setOnlineStatus(false);
//     });
//     window.addEventListener("online", () => {
//       setOnlineStatus(true);
//     });
//   }, []);
//   return onlineStatus;
// };

// export default useOnlineStatus;



import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Initialize state with the current online status of the browser
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    // Event listener for offline status
    const handleOffline = () => {
      setOnlineStatus(false);
    };

    // Event listener for online status
    const handleOnline = () => {
      setOnlineStatus(true);
    };

    // Add event listeners to window
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup the event listeners when component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
