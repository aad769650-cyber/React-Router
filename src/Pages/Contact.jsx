import { Form } from "react-router"
import "../AppLayout/LAyout/UI/styles.css"




export const Contact=()=>{



    
    return(
        <>
       <div className="contact-container">

<h3 className="contact-para">

Contact us: For Better Experience

</h3>



<Form method="POST" action="/contact">
    <label htmlFor="text">Name:
        <input 
        type="text"
name="text"
        id="emailText"
        required
        placeholder="Enter Your name ..."
        
        
        
        ></input>
    </label>
     <label htmlFor="email">Email:
        <input 
        type="email"
name="email"
        id="inputText"
        required
        placeholder="Enter Your email ..."
        
        
        
        ></input>
    </label>
     <label htmlFor="textArea">
TextArea:
   <textarea name="textArea" id="textArea" rows={10} cols={30} placeholder="Share Your Experience..."></textarea>
    </label>

    <button type="submit" className="contact-btn">Send Message</button>
</Form>




       </div>
        </>
    )
}