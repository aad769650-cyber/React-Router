import "./styles.css"
export const Footer=()=>{
    return(
        <>
        
      <footer className="Footer">
        <div className="para">Welcome to Mahr Ecomm.Your Ultimate destination</div>
<div className="Shopping">
        <div style={{color:"White",marginBottom:".2rem"}}>Shopping</div>
       <ul>
        <li>Computer Store</li>
        <li>Laptop Store</li>
        <li>Accessories</li>
        
        <li>Sales and Discount</li>
    </ul>
</div>
<div className="experience">
    <div style={{color:"White",marginBottom:".2rem"}}>Experiences</div>
    <ul>
        <li>Contact us</li>
        <li>Delivery</li>
        <li>Payment Method</li>
        
        <li>Return and Exchange</li>
    </ul>
</div>

<div className="NewsLetter">
      <div style={{color:"White",marginBottom:"2rem"}}>NewsLetter</div>
  
    <p>The First to Know About News arrivals</p>
    <input type="text" placeholder="Share Your Experience" />
</div>
      </footer>
        </>
    )
}