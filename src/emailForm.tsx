import React from "react"

const EmailForm = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target as HTMLFormElement);
  
      formData.append("access_key", "b1d64ff8-5cce-40d6-b3c1-87e85299f396");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required/>
          <input type="email" name="email" required/>
          <textarea name="message" required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }

  const Label = styled.label`
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: bold;    
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
`

const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
`

const Button = styled.button`
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`




const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
` 

const FormContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 40px; 
`

export default EmailForm
