import { useState, useEffect } from 'react';


export default function Form(){
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        diet: { nutsFree: false, lactosaFree: false, vegan: false },
    });
    const [submitFormData, setSubmitFormData] = useState(null);

    function handleChange(e){
        const { name, value, type, checked } = e.target;
        if (type === "checkbox"){
            setForm(prev => ({
                ...prev,
                diet: {...prev.diet, [name]: checked },
            }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form)

        const { diet, ...rest } = form;
        const params = new URLSearchParams({ ...rest, ...diet, }).toString();
        window.history.replaceState({}, "", `/?${params}`)
        setSubmitFormData(form);
        resetForm();
    }

    function resetForm(){
        setForm({
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            diet: { nutsFree: false, lactosaFree: false, vegan: false },
        });
    }

    useEffect(() => {
        if (window.location.search) {
            window.history.replaceState({}, "", "/");
        }
    }, []);


    return (
        <>
        <form method="GET" action="http://localhost:5173/" className="myForm container-fluid" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={form.firstName} placeholder="First Name" onChange={handleChange} /><br /><br />
            <input type="text" name="lastName" value={form.lastName} placeholder="Last Name" onChange={handleChange} /><br /><br />
            <input type="text" name="age" value={form.age} placeholder="Age" onChange={handleChange} />
            <br /><br />

            <label style={{ fontWeight: "600" }}>Choose your gender:</label><br />
            <label>
                <input type="radio" name="gender" value="female" checked={form.gender === "female"} onChange={handleChange}/>Female
            </label><br />
            <label>
                <input type="radio" name="gender" value="male" checked={form.gender === "male"} onChange={handleChange}/>Male
            </label>
            <br /><br />

            <label style={{ fontWeight: "600" }}>Select your destination</label><br />
            <select name="destination" value={form.destination} onChange={handleChange}>
                <option value="">Choose a destination</option>
                <option value="thailand">Thailand</option>
                <option value="japan">Japan</option>
                <option value="brazil">Brazil</option>
            </select>
            <br /><br />

            <label style={{ fontWeight: "600" }}>Dietary restrictions:</label><br />
            <label>
                <input type="checkbox" name="nutsFree" checked={form.diet.nutsFree} onChange={handleChange} />Nuts free
            </label><br />
            <label>
                <input type="checkbox" name="lactosaFree" checked={form.diet.lactosaFree} onChange={handleChange} />Lactosa Free
            </label><br />
            <label>
                <input type="checkbox" name="vegan" checked={form.diet.vegan} onChange={handleChange} />Vegan
            </label>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
        
        <hr />

        {submitFormData && (
            <div className="output container-fluid">
                <h2>Entered information: </h2><br />
                <p>Your name: {`${submitFormData.firstName} ${submitFormData.lastName}`}</p>
                <p>Your age: {`${submitFormData.age} years old`}</p>
                <p>Your gender: {submitFormData.gender}</p>
                <p>Your destination: {submitFormData.destination}</p>
                <p>Your dietary restrictions:</p>
                <p>***Nuts free: {(submitFormData.diet) ? "Yes" : "No"}</p>
                <p>***Lactose free: {(submitFormData.diet) ? "Yes" : "No"}</p>
                <p>***Vegan meal: {(submitFormData.diet) ? "Yes" : "No"}</p>
            </div>
        )}
        </>

    );
}