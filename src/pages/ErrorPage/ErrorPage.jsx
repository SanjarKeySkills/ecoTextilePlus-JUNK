import React from "react"; //  { useEffect }
import errorImg from "../../assets/ui/404-error.avif";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
    //     useEffect(() => {
    //         window.scrollTo(0, 0);
    //     }, []);

    return (
        <div className={styles.errorPageWrapper}>
            <div className={styles.errorImg}>
                <img src={errorImg} alt="errorImg" />
            </div>
        </div>
    );
};

export default ErrorPage;
