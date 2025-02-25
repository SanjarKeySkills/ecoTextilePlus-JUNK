import mockMembers from "./mock";

const getMemberList = (ids) => {
    return mockMembers.filter((member) => {
        return ids.includes(member.id);
    });
};

export { getMemberList };
// потому что может быть несколько реализаций по какому списку
