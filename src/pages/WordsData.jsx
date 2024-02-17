import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function List() {
    const words = useSelector(state => state.words)
    const { term } = useParams();
    return (
        <>
            <h1 className="title">{`Буква "${term}"`}</h1>
            <ul className="title-wrapper">
                {words.data
                    .filter(el => el[0]?.toLowerCase() === term?.toLowerCase()).sort().map((el, i) =><li key={i}>
                            <Link to={`/word/${el}`}>{el}</Link>
                        </li>)}
                <h2 className="bord">{`Ниже привидены слова которые включают в себя букву "${term}"`}</h2>
                {words.data.filter(el => el[0]?.toLowerCase() !== term?.toLowerCase()).filter(el => typeof el === 'string' && el.toLowerCase().includes(term?.toLowerCase())).sort()
                .map((el, i) =>
                        <li key={i}>
                            <Link to={`/word/${el}`}>{el}</Link>
                        </li>
                    )}
                {words.data
                    .filter(el => el[0]?.toLowerCase() !== term?.toLowerCase()).filter(el => typeof el === 'string' && el.toLowerCase().includes(term?.toLowerCase())).length === 0 && <span className="none">none</span>}
            </ul>
        </>
    )
}