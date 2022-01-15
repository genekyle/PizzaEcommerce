import styles from "../styles/Add.module.css"

function AddButton({ setClose }) {
    return (
        <div onClick={() => setClose(false)} className={styles.mainAddButton}>
            Add New Pizza
        </div>
    )
}

export default AddButton
