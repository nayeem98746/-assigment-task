import axios from "axios";
import { useForm } from "react-hook-form";
import img from '../../Images/illustration.png'
import "./Contact.css";
const Contact = () => {
 

  const { register, handleSubmit , reset} = useForm();
  const onSubmit = (data, e ) =>  {
    console.log(data);
    axios.post('http://localhost:5000/contacts' , data ,e)
    .then(res => {
        console.log(res)
        if(res.data.insertedId){
            alert('added contact successfuly')
            reset()
        }
    })
}
  const onError = (errors, e) => console.log(errors, e);






  return (
    <div className="background-side">
      <div className="main-container">
        <div className=" row contact-second ">
          
          <div className="col-sm-7 contact-info">
                <h2>Get Everything You Need 
                  <br /> For Creating  wordPress <br /><span style={{fontWeight:'100'}}> Websites</span></h2>
                <img src={img} width='300px' style={{marginTop:'-29px'}} alt="" />
                <p>All-in-one Multifunctional Subscribe <br /> 
                   Service Perfect for Launching All Kinds of <br />
                    WordPress Projects!</p>
            </div>
          <div className="col-sm-5 contact-input">
                <h3>SUBSCRIBE AND GET YOUR BONUS!</h3>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("email")} required placeholder="Your Email" /> <br /><br />
      <input {...register("firstName")} required placeholder="First-Name" /><br /><br />
      <input {...register("lastName")} required placeholder="Last-Name" /><br /><br />
      <input {...register("address")} required placeholder="Address" /><br /><br />
      <button type="submit">STAY UPDATED</button>
    </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
