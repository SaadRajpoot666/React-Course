 import { useParams } from "react-router-dom";
import db from "../../db.json";

export const TeamMember = () => {
    const { memberId } = useParams();
    const member = db.find((i) => i.id === memberId);

    if (!member) {
        return <h1>Member not found</h1>;
    }

    return <h1>Hi, it's {member.name}!</h1>;
};
