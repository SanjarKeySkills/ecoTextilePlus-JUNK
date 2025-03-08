// import React, { useState } from "react";
// import styles from "./contactBlock.module.scss";
// import { Link } from "react-router-dom";
// import Button from "../../ui/Button/Button.jsx";
// import instLogo from "../../../assets/social/instagram-logo.svg";
// import facebookLogo from "../../../assets/social/facebook-logo.svg";

// const ContactBlock = () => {
//     // Начальные значения формы
//     const initialFormData = {
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//         request: "resycle", // Значение по умолчанию
//     };

//     const [formData, setFormData] = useState(initialFormData);
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     //   const scriptURL =
//     //       "https://script.google.com/macros/s/AKfycbxyDZ4BqVFkBH_zOrX91ELD35BdjCQYoEivM1V1AK_WbPmqmgkBCeuKcfI3U2y6vu0R/exec";

//     // Обработчик изменений в форме
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Обработчик отправки формы
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setErrorMessage("");
//         setSuccessMessage("");

//         // Создание объекта FormData для отправки
//         const form = new FormData();
//         Object.keys(formData).forEach((key) => {
//             form.append(key, formData[key]);
//         });

//         // Отправка данных через fetch
//         fetch(scriptURL, { method: "POST", body: form })
//             .then((response) => {
//                 setLoading(false);
//                 if (response.ok) {
//                     setSuccessMessage("Ваше сообщение успешно отправлено!");
//                     alert("Success! Ваше сообщение успешно отправлено!");
//                 } else {
//                     setErrorMessage("Что-то пошло не так. Попробуйте снова.");
//                     alert("Error! Что-то пошло не так.");
//                 }
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 setErrorMessage("Ошибка при отправке данных!");
//                 alert("Error! Ошибка при отправке данных.");
//             })
//             .finally(() => {
//                 // После отправки сбрасываем форму
//                 setFormData(initialFormData);
//             });
//     };

//     scriptURL;

//     return (
//         <div className={styles.contactBlock}>
//             <div className={styles.contactBlockWrapper}>
//                 <div className={styles.contactForm}>
//                     <h2>
//                         форма заявки <br /> на переработку отходов швейной
//                         отрасли
//                     </h2>
//                     <p>
//                         Кыргызская Республика г.Бишкек,
//                         <br /> ул. Токтоналиева дом 44 - 63
//                     </p>
//                     <p>+996 700 840 099, san4s_47@mail.ru</p>
//                 </div>

//                 <div className={styles.contactFormButtonsAndSocial}>
//                     <Link to="/invoice" className={styles.sDarkLink}>
//                         Реквизиты
//                     </Link>
//                     <Link to="/about" className={styles.sDarkLink}>
//                         Миссия
//                     </Link>
//                 </div>
//                 <div className={styles.contactSocial}>
//                     <Link to="https://www.instagram.com/">
//                         <img
//                             src={instLogo}
//                             alt="Instagram"
//                             className={styles.socialLogo}
//                         />
//                     </Link>
//                     <Link to="https://www.facebook.com/">
//                         <img
//                             src={facebookLogo}
//                             alt="Facebook"
//                             className={styles.socialLogo}
//                         />
//                     </Link>
//                 </div>

//                 <div className={styles.contactInput}>
//                     <form
//                         method="post"
//                         name="submit-to-google-sheet"
//                         onSubmit={handleSubmit}>
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>
//                                 Наименование компании
//                             </span>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="ФИО"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>
//                                 Электронная почта
//                             </span>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="электронная почта"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className={styles.inputBox}>
//                             <span className={styles.details}>
//                                 Номер телефона
//                             </span>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 placeholder="Телефон"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className={styles.textareaBox}>
//                             <span>Комментарий</span>
//                             <textarea
//                                 name="message"
//                                 cols="30"
//                                 rows="10"
//                                 placeholder="Комментарий"
//                                 value={formData.message}
//                                 onChange={handleInputChange}></textarea>
//                         </div>
//                         <p>ЗАКАЗАТЬ</p>
//                         <div className={styles.inputContainer}>
//                             <div className={styles.inputWrapper}>
//                                 <input
//                                     type="radio"
//                                     id="resycle"
//                                     name="request"
//                                     value="resycle"
//                                     checked={formData.request === "resycle"}
//                                     onChange={handleInputChange}
//                                 />
//                                 <label htmlFor="resycle">
//                                     Переработка отходов
//                                 </label>
//                             </div>
//                             <div className={styles.inputWrapper}>
//                                 <input
//                                     type="radio"
//                                     id="product"
//                                     name="request"
//                                     value="product"
//                                     checked={formData.membership === "product"}
//                                     onChange={handleInputChange}
//                                 />
//                                 <label htmlFor="product">
//                                     Поставка продукции
//                                 </label>
//                             </div>
//                         </div>
//                         <div className={styles.buttonWrapper}>
//                             <Button size="s" variant="outlined" type="submit">
//                                 {loading ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
//                             </Button>
//                         </div>
//                     </form>
//                     {errorMessage && (
//                         <p className={styles.error}>{errorMessage}</p>
//                     )}
//                     {successMessage && (
//                         <p className={styles.success}>{successMessage}</p>
//                     )}
//                     <div className={styles.contactOfficial}>
//                         <span>
//                             Для заказа на переработку отходов швейной отрасли
//                             необходимо предоставить заявление, а также иные
//                             документы, которые заявитель считает нужным
//                             приложить.
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactBlock;
