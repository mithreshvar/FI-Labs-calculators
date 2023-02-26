import styles from '@/styles/Input.module.css'
export default function Input({ id, type = '', min = 0, max, step = 1, value, setValue }) {

    const handleValue = (event) => {
        if (!(isNaN(event.target.value)) && event.target.value.charAt(0) != '-') {
            if (event.target.value == "") {
                setValue(0);
            }
            else if (event.target.value.length == 2 && event.target.value.charAt(0) == '0') {
                setValue(Number(event.target.value.charAt(1)));
            }
            else {
                setValue(Number(event.target.value));
            }
        }

    };

    return (
        <div className={styles.inputBox}>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                id={id}
                onChange={handleValue}
            />

            <input
                type="text"
                value={((type === 'rupees') ? '\u20B9' : '') + value.toLocaleString("en-In")}
                id={`${id}Label`}
                min={min}
                max={max}
                className={styles.input}
                onChange={handleValue}
            />

        </div>
    )
}