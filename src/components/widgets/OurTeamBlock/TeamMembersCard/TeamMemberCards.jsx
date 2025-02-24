import React from "react";
import styles from "./ourTeamBlock.module.scss";
import TeamMembersGenerator from "../TeamMembersGenerator/TeamMembersGenerator.jsx";
import TeamMemberData from "../TeamMembersData.js";

const TeamMemberCards = () => {
    return (
        <>
            <div className={styles.membersItem}>
                <h4 className={styles.membersItemWrapper}>ДЕЙСТВИТЕЛЬНЫЕ</h4>
                <div className={styles.cardList}>
                    <TeamMembersGenerator data={TeamMemberData} type="Team" />
                </div>
            </div>
        </>
    );
};

export default TeamMemberCards;
