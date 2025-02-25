import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./teamMemberBlock.module.scss";
import formatText from "../../FormatBlock/FormatBlock.jsx";
import teamMembersData from "../TeamMembersData.js";

const MemberPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id, type } = useParams();
    // возвращает объект в к-р есть информация из УРЛ, там id,
    // по id будет тот, придет id того мембера на кого кликнули
    const member = teamMembersData[type].find((member) => member.id === id);
    // получаем того мембера, у кого такой id тот и мембер придет в нашу константу.
    // функция для обработки многострочных данных

    return (
        <div className={styles.teamMemberPage}>
            <div className={styles.teamMemberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={member.image} alt="memberPageImage" />
                    <h2 className={styles.memberName}>{member.name}</h2>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Опыт работы</div>
                    <div className={styles.memberDataDescription}>
                        {formatText(member.jobExp)}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Образование</div>
                    <div className={styles.memberDataDescription}>
                        {formatText(member.edu)}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Компетенции</div>
                    <div className={styles.memberDataDescription}>
                        {formatText(member.competence)}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Сертификаты</div>
                    <div className={styles.memberDataDescription}>
                        {formatText(member.sertif)}
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>LinkedIn</div>
                    <Link
                        to={"https://kz.linkedin.com/in/kamaldin"}
                        className={styles.memberDataDescription}>
                        {formatText(member.LinkedIn)}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
