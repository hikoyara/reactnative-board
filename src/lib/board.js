import { auth, db } from "../config";
import { doc, updateDoc } from "firebase/firestore";

export const boardSubmit = (id, board, value) => {
    if (auth.currentUser === null) {
        return;
    }
    const ref = doc(db, "boards", id);
    switch (value) {
        case "participating":
            updateDoc(ref, {
                answered: board.answered.includes(auth.currentUser.uid) ? board.answered : [...board.answered, auth.currentUser.uid],
                notAnswered: board.notAnswered.filter((userId) => userId !== auth.currentUser.uid),
                participating: [...board.participating, auth.currentUser.uid],
                notParticipating: board.notParticipating.filter((userId) => userId !== auth.currentUser.uid),
                undecided: board.undecided.filter((userId) => userId !== auth.currentUser.uid),
            });
            break;
        case "notParticipating":
            updateDoc(ref, {
                answered: board.answered.includes(auth.currentUser.uid) ? board.answered : [...board.answered, auth.currentUser.uid],
                notAnswered: board.notAnswered.filter((userId) => userId !== auth.currentUser.uid),
                participating: board.participating.filter((userId) => userId !== auth.currentUser.uid),
                notParticipating: [...board.notParticipating, auth.currentUser.uid],
                undecided: board.undecided.filter((userId) => userId !== auth.currentUser.uid),
            });
            break;
        case "undecided":
            updateDoc(ref, {
                answered: board.answered.includes(auth.currentUser.uid) ? board.answered : [...board.answered, auth.currentUser.uid],
                notAnswered: board.notAnswered.filter((userId) => userId !== auth.currentUser.uid),
                participating: board.participating.filter((userId) => userId !== auth.currentUser.uid),
                notParticipating: board.notParticipating.filter((userId) => userId !== auth.currentUser.uid),
                undecided: [...board.undecided, auth.currentUser.uid],
            });
            break;
    }
};
