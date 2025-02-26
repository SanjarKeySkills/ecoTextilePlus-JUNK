// import { getMemberPathById } from "../../../server/api/teamMembers/id";

const membersData = [
    {
        id: "1",
        name: "Аскат Мажитов",
        annotation: "Более 15 лет опыта в сфере консаллтинга.",
        // image: getMemberPathById(1),
        image: require("../../../assets/team/sam_black.png"),
        jobExp: "Более 15 лет опыта в сфере консаллтинга. \n Основатель проекта EcotextilePlus",
        edu: "Университет Ала-Тоо, специальность - «экономика» (2010).",
        competence:
            "Финансы; \n Внутренний аудит; \n Стратегическое планирование.",
        sertif: "ESG",
    },
    {
        id: "2",
        name: "Санжар Аманов",
        annotation: "Более 10 лет опыта в сфере производства.",
        // image: getMemberPathById(2),
        image: require("../../../assets/team/sam_black.png"),
        jobExp: "Более 10 лет опыта в сфере производства.",
        edu: "Кыргызский государственный университет строительства, транспорта и архитектуры, специальность - «международные экономические отношения» (1998).",
        competence: "Финансы; \n Внутренний аудит; \n Экология.",
        sertif: "Сертификат: Борьба со смогом",
    },
    {
        id: "3",
        name: "Санжар Абакиров",
        annotation:
            "Более 5 лет опыта в IT сфере и разработке фронтенд проектов.",
        // image: getMemberPathById(3),
        image: require("../../../assets/team/sam_black.png"),
        jobExp: "Более 5 лет опыта в IT сфере и разработке фронтенд проектов.",
        edu: "КРСУ им Е. Б. Н.",
        competence:
            "Программирование; \n Веб дизайн; \n Стратегическое планирование.",
        sertif: "Экология и Айти",
    },
];

export default membersData;
