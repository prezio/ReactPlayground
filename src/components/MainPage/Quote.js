import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState("");
    useEffect(() => {
            const fetchQuote = async () => {
                let response = await axios.get('/cytaty-losowe.php');
                console.log(response);
                let result = response.data.match(/<p class="qt">.*[/]p>/);
                setQuote(result);
            };
            fetchQuote();
        }, []);

    
    return (
        <>
            <h2>Cytat na dziś:</h2> 
            <div className="frecel" dangerouslySetInnerHTML={{__html: quote}}></div>
            <button onClick={() => window.location.reload(false)}>
                Nowy cytat
            </button>
        </>
        );
};

export default Quote;