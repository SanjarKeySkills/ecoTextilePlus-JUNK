import React from "react";
import styles from "./teamMembersCard.module.scss";
import TeamMembersGenerator from "../TeamMembersGenerator/TeamMembersGenerator.jsx";
import TeamMembersData from "../TeamMembersData.js";

const TeamMemberCards = () => {
    return (
        <div className={styles.teamMemberCards}>
            <div className={styles.memberCardsWrapper}>
                <div className={styles.membersItemContainer}>
                    <h4>КОМАНДА ПРОЕКТА</h4>
                    <p>
                        Для успешной реализации проетка была создана команда из
                        профессионалов с глубокими компетенциями в области
                        переработки отходов швейной отрасли, защиты окружающей
                        среды, менеджмента и IT. <br /> На данной странице
                        отображены портфолио, отражающие профессиональный опыт
                        экспертов команды в области переработки отходов швейной
                        отрасли и ESG.
                    </p>
                    {/* <TeamMembersGenerator data={TeamMembersData} type="type" /> */}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCards;
