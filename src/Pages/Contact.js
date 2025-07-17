import "../Css/Contact.css"
import { useEffect, useState } from "react"
const Contact = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [load, setLoad] = useState(false)
    const [alert, setAlert] = useState("")


    useEffect(()=>{
        if(alert){
            setTimeout(()=>{
                setAlert("");
            },3000)
        }
    },[alert])
    async function checkInput() {
        console.log("Input")
        if (!Name || !Email || !Message) {
            console.log("Err")
            console.log(Email, Name, Message)
            setAlert({type:false,text:"❌ All Fields Required"})
        }
        else {
            setLoad(true)
            const data = {
                Name: Name,
                Email: Email,
                Message: Message
            }
            console.log("Success")
            const responce = await fetch("http://localhost:5000/sendMessage", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            const datas = await responce.json();
            console.log(datas)
            if (datas.status === 200) {
                setEmail("")
                setName("")
                setMessage("")
                setAlert({type:true,text:"📨 Message Sent Successfully!"})
            }
            else{
                setAlert({type:false,text:"❌ Something went wrong!"})
            }
            setLoad(false)
        }
    }
    return (
        <>
            <section id="contact" className="Contact">
                {alert &&
                    <div className={alert.type ? "parallelogram-alert":"parallelogram-alert-error"}>
                        <p>{alert.text}</p>
                    </div>
                }

                <div className="leftContact">
                    <div className="Primary">
                        <div className="rotating"></div>
                        <div className="ContactForm">

                            <div className="ContactTitle">Contact Us</div>
                            <div className="section">
                                <div className="s1">
                                    <label>Name</label>
                                    <input value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" />
                                </div>
                                <div className="s1">
                                    <label>Email</label>
                                    <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                                </div>

                            </div>
                            <label className="contactL">Message</label>
                            <textarea spellCheck="false" value={Message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                            <button disabled={load} onClick={checkInput} >{load ? "Sending." : "Submit"}</button>

                        </div>
                    </div>
                </div>
                <div className="rightContact">
                    <img src="https://i.postimg.cc/NF717TLT/Chat-GPT-Image-Jul-16-2025-01-14-29-PM.png" alt="Contact" />
                </div>
            </section>
        </>
    )
}
export default Contact