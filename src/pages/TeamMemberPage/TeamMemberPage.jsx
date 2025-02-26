import React, { useEffect } from "react";
import styles from "./teamMemberBlock.module.scss";
import { useParams } from "react-router-dom";
import teamMembersData from "../../components/Widgets/OurTeamBlock/TeamMembersData.js";

const MemberPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const member = teamMembersData.find((member) => member.id === id);
    // возвращает объект в к-р есть информация из УРЛ, id,
    // придет тот id того мембера на кого кликнули
    // получаем того мембера, у кого такой id тот и мембер придет в нашу константу.
    // вместо type -  встанет массив teamMembersData
    return (
        <div className={styles.teamMemberPage}>
            <div key={member.id} className={styles.teamMemberPageWrapper}>
                <div className={styles.memberTitle}>
                    <img src={member.image} alt="memberPageImage" />
                    <h2 className={styles.memberName}>{member.name}</h2>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Опыт работы</div>
                    <div className={styles.memberDataDescription}>
                        <p>{member.jobExp}</p>
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Образование</div>
                    <div className={styles.memberDataDescription}>
                        <p>{member.edu}</p>
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Компетенции</div>
                    <div className={styles.memberDataDescription}>
                        <p>{member.competence}</p>
                    </div>
                </div>
                <div className={styles.memberData}>
                    <div className={styles.memberDataTitle}>Сертификаты</div>
                    <div className={styles.memberDataDescription}>
                        <p>{member.sertif}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPage;
