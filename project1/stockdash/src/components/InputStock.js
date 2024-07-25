// inputStock.js
import styles from "./inputStock.module.css";

function InputStock({stockName, setStockName, newsFinResponse, sentimentScore}) {
    const handleChange = (event) => {
        setStockName(event.target.value.toUpperCase());
    };
    return (

        <div>
            <label className={styles.inputLabel}><b>Ticker: </b></label>
            <input className={styles.inputBox} value={stockName} onChange={handleChange} />
            <button onClick={newsFinResponse}>
                Search
            </button>
            <div className={styles.scoreBox}>
                ↗️ {(sentimentScore/50).toFixed(3)}
            </div>

        </div>
    );
};

export default InputStock;