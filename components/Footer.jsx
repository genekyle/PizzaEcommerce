import Image from "next/image"
import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" objectFit="cover" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES WE DID. GINO`S PIZZA, ALL NATURAL INGREDIENTS.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1234 W. Cheese Lane #304.
                        <br /> New York, 85022
                        <br /> (012)345-6789
                    </p>
                    <p className={styles.text}>
                        4321 Stuffed Crest #231.
                        <br /> New York, 85022
                        <br /> (012)345-6789
                    </p>
                    <p className={styles.text}>
                        5678 Ovenbake Street #125.
                        <br /> New York, 85022
                        <br /> (012)345-6789
                    </p>
                    <p className={styles.text}>
                        235 Burnt Ridge #222.
                        <br /> New York, 85022
                        <br /> (012)345-6789
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>RESTAURANT HOURS</h1>
                    <p className={styles.text}>
                        MONDAY TO FRIDAY
                        <br /> 9:00am - 10:00pm
                    </p>
                    <p className={styles.text}>
                        SATURDAY TO SUNDAY
                        <br /> 12:00pm - 12:00am
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
