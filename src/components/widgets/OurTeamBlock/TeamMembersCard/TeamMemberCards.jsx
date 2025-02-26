import React from "react";
import styles from "./teamMembersCard.module.scss";
import TeamMembersGenerator from "../TeamMembersGenerator/TeamMembersGenerator.jsx";
import TeamMembersData from "../TeamMembersData.js";

const TeamMemberCards = () => {
    return (
        <div className={styles.membersItem}>
            <div className={styles.membersItemContainer}>
                <div className={styles.membersItemWrapper}>
                    <h4>Эксперты компании</h4>
                    <p>
                        Здесь размещены сведения об экспертах комапнии,
                        отражающие их профессиональный опыт и свежие взгляды в
                        области переработки отходов швейной отрасли.
                    </p>
                    <TeamMembersGenerator data={TeamMembersData} type="type" />
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCards;
