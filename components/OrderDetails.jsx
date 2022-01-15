import styles from "../styles/OrderDetails.module.css"
import { useState } from "react"

const OrderDetails = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleClick = () => {
        createOrder({customer, phone, address, total, method: 0 });
    }

    return (
        <div className={styles.container}> 
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Your total payment is $15 with delivery fees.</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Last Name</label>
                    <input 
                        placeholder="John Doe" 
                        type="text" 
                        className={styles.input} 
                        onChange={(e)=> setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input 
                        placeholder="123 456 7890" 
                        type="text" 
                        className={styles.input} 
                        onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea 
                        rows={5}
                        placeholder="4321 Stuffed Crest #231, New York, New York" 
                        type="text" 
                        className={styles.textarea} 
                        onChange={(e)=> setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    )
}

export default OrderDetails
