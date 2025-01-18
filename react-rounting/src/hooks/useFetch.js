<<<<<<< HEAD
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React

function useFetch(url) {
    let [data, setData] = useState(null); // State to store fetched data, initially null
    let [loading, setLoading] = useState(false); // State to track loading status, initially false
    let [error, setError] = useState(null); // State to store any error message, initially null

    useEffect(() => {
        let abortController = new AbortController(); // Create an AbortController to handle fetch cancellation
        let signal = abortController.signal; // Get the signal from the AbortController

        setLoading(true); // Set loading state to true before starting the fetch

        
        
        // Perform the fetch request with the provided URL and signal
            .then(res => {
                if (!res.ok) { // Check if the response is not ok (status code not in the range 200-299)
                    throw Error('something went wrong'); // Throw an error if response is not ok
                }
                return res.json(); // Parse the response as JSON
            })
            .then(data => {
                setData(data); // Set the fetched data to state
                setError(null); // Clear any previous error
                setLoading(false); // Set loading state to false as fetch is complete
            })
            .catch(e => {
                setError(e.message); // Set the error message if fetch fails
                setLoading(false); // Set loading state to false as fetch is complete
            });

        // Cleanup function to abort the fetch request if the component unmounts or URL changes
        return () => {
            abortController.abort(); // Abort the fetch request
        };
    }, [url]); // Dependency array with url, useEffect will run when url changes

    return { data, loading, error }; // Return the data, loading, and error states
}

export default useFetch; // Export the custom hook
=======
import { useEffect, useState } from "react";

function useFetch(url) {
    let [data,setData] = useState(null);
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    useEffect(() => {
      let abortController = new AbortController();
      let signal = abortController.signal;

        setLoading(true);
        fetch(url , {
          signal
        })
        .then(res => {
          if(!res.ok) {
            throw Error('something went wrong');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
        })

        //cleanup function
        return () => {
          abortController.abort();
        }
      },[url]);
    return { data , loading , error };
}

export default useFetch;
>>>>>>> 40e7b82d390ad94adf1ee9d0ecc5f95d4cd861c3
