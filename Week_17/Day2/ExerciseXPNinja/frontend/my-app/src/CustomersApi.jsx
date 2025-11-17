import { useState, useEffect } from "react";

export default function CustomersApi(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchApi(){
            try{
                const res = await fetch("http://localhost:5000/api/customers");
                if (!res.ok) throw new Error(`Failed request: ${res.status}`);

                const data = await res.json();
                setCustomers(data);
            }catch(err){
                console.log(err);
            }
        }

        fetchApi();
    }, []);

    return(
        <div>
            <img src="https://daveceddia.com/images/react-and-express-twitter.png" alt="reactAndExpress" />
            <h1>Customers: </h1>
            {customers.map(c => (
                <div key={c.id}>
                    <h3>{c.firstName} {c.lastName}</h3>
                    <hr />
                </div>
            ))}
        </div>
    );

}