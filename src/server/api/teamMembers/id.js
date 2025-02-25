import mockMembers from "./mock";

const getMemberById = (id) => {
    return mockMembers.find((member) => {
        return id === member.id;
    });
};

const getMemberPathById = (id) => {
    const foundedMember = getMemberById(id);
    return foundedMember.path;
};

export { getMemberById, getMemberPathById };
