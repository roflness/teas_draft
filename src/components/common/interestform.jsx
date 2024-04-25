import { useState } from "react";
import ReactDOM from "react-dom/client";

import "./styles/interestform.css";


function InterestForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <form className="form-2" action="">
        <input type="text" id="fullName" name="fullName" placeholder=" "/>
        <label for="fullName">Full Name</label>
        <input type="email" id="email" name="email" placeholder=" "/>
        <label for="email">Email</label>
        <input type="password" id="password" name="password" placeholder=" "/>
        <label for="password">Password</label>
        <button type="button">Submit</button>
      </form>

    <form className="form-column" onSubmit={handleSubmit}>
      <label className="form-text-input">Name of Business/Organization
      <input className="input"
        type="text" 
        name="orgname" 
        value={inputs.orgname || ""} 
        onChange={handleChange}
      />
      </label><br></br>
      <label className="form-text-input">First Name
        <input className="input"
          type="text" 
          name="firstname" 
          value={inputs.firstname || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">Last Name
        <input className="input"
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">Phone Number (Business)
        <input className="input"
          type="tel" 
          name="businessPhone" 
          value={inputs.businessPhone || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">Phone Number (Cell)
        <input className="input"
          type="tel" 
          name="cellPhone" 
          value={inputs.cellPhone || ""} 
          onChange={handleChange}
        />
      </label>
      <br></br><br></br>
      <label className="form-text-input">Address
        <input className="input"
          type="text" 
          name="address" 
          value={inputs.address || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">City
        <input className="input"
          type="text" 
          name="city" 
          value={inputs.city || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">State
        <input className="input"
          type="text" 
          name="state" 
          value={inputs.state || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">Zip
        <input className="input"
          type="zipcode" 
          name="zipcode" 
          value={inputs.zipcode || ""} 
          onChange={handleChange}
        />
      </label><br></br>
      <label className="form-text-input">Is your Business Address the same as your project site address?<br></br>
        <input 
          type="radio" 
          id="sameaddress"
          name="sameaddress" 
          value={inputs.sameaddress || ""} 
          onChange={handleChange}
        />
        <label for="sameaddress">Yes</label><br></br>
        <input 
          type="radio" 
          id="differentaddress"
          name="differentaddress" 
          value={inputs.differentaddress || ""} 
          onChange={handleChange}
        />
        <label for="differentaddress">No</label><br></br>
      </label>

      <label className="form-text-input"> Type of Business/Operation <br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="School"/>
        <label for="vehicle1"> School</label><br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Transit Agency"/>
        <label for="vehicle2"> Transit Agency</label><br></br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Municipality"/>
        <label for="vehicle3"> Municipality</label> <br></br>
        <input type="checkbox" id="vehicle4" name="vehicle4" value="Business"/>
        <label for="vehicle4"> Business</label> <br></br>
        <input type="checkbox" id="vehicle5" name="vehicle5" value="Other"/>
        <label for="vehicle5"> Other</label>
      </label>

      <label className="form-text-input"> What type of support are you primarily interested in? <i>Check all that apply</i> <br></br>
        <input type="checkbox" id="1vehicle1" name="1vehicle1" value="School"/>
        <label for="1vehicle1"> Pre-Energization Support</label><br></br>
        <input type="checkbox" id="1vehicle2" name="1vehicle2" value="Transit Agency"/>
        <label for="1vehicle2"> Post-Energization Support</label><br></br>
        <input type="checkbox" id="1vehicle3" name="1vehicle3" value="Municipality"/>
        <label for="1vehicle3"> Fleet Electrification Planning</label> <br></br>
        <input type="checkbox" id="1vehicle4" name="1vehicle4" value="Business"/>
        <label for="1vehicle4"> Emerging Technology</label> <br></br>
      </label>
      <label className="form-text-input">Are you facing any challenges in your current electrification planning? If yes, please explain. <br></br>
        <textarea className="input" name="message" rows="4" cols="60">
          Enter your answer
        </textarea>
      </label>

      <br></br>
      <input className= "form-submit" type="submit" />
    </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestForm />);

export default InterestForm;