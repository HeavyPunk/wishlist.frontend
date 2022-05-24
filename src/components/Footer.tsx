import React from "react";
import styles from "./styles/Footer.module.css";

export class Footer extends React.Component<any, any>{
    render() {
        return (
            <div className={styles.footer}>
                <p className={styles.footerText}>Сила в котах!</p>
            </div>
        )
    }
}
