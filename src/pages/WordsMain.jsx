import { Link } from "react-router-dom";
import { DestrWord , AddSome } from "../store/Filter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alphabet from "../assets/data/Alphabet.json";
import Input from "../components/Index";
import trash from "../assets/images/trash.svg";
import edit from "../assets/images/pen.svg";
import add from "../assets/images/add.svg";
import check from "../assets/images/check.svg";
import cancel from "../assets/images/cross.svg";

export default function Page() {
    const [dynamicLine, setDynamicLine] = useState(false);
    const [earlierWord, setEarlierWord] = useState("");
    const [newWord, setNewWord] = useState("");
    const words = useSelector(state => state.words);
    const send = useDispatch();

    const addWords = () => {
        const concl = words.data.filter(el => el.toLowerCase() === newWord.toLowerCase())
        if (earlierWord.length > 0) {
            if (earlierWord !== newWord && !concl.length) {
                send(AddSome([earlierWord, newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()]));
                Close();
            }
        } else if (/^[A-Za-z]/g.test(newWord) && !concl.length) {
            send(AddSome(newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()));
            Close();
        }
    }
    const Close = () => {
        setDynamicLine(false);
        setEarlierWord("");
        setNewWord("");
    }
    
    const delAlpha = (el) => {
        send(DestrWord(el))
    }

    const changeWord = (el) => {
        setEarlierWord(el);
        setNewWord(el);
        setDynamicLine(true);
    }


    return (
        <>
            <ul className="title-wrapper title-wrapper_alphabet">
                {Alphabet.map((el, i) =>
                    <li key={i}>
                        <Link to={`/letter/${el}`}>{el}</Link>
                    </li>
                )}
            </ul>
            {!dynamicLine && <span className="title-btn title-btn_add" onClick={() => setDynamicLine(true)}><img src={add} alt="Add" /></span>}
            {dynamicLine && <Input
                newWord={newWord}
                setNewWord={setNewWord}
            >
                <span className="title-btn"><img src={check} alt="check" onClick={() => addWords()} /></span>
                <span className="title-btn"><img src={cancel} alt="Cancel" onClick={() => Close()} /></span>
            </Input>}
            <ul className="title-wrapper">
                {words.data.map((el, i) =>
                    <li key={i}>
                        <span className="title-btn" onClick={() => changeWord(el)}><img src={edit} alt="Edit" /></span>
                        <span className="title-btn" onClick={() => delAlpha(el)}><img src={trash} alt="Delete" /></span>
                        <Link to={`/word/${el}`}>{el}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}