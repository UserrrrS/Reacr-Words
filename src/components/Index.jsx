import "./style.css";

export default function Input({ unit, newList, setListWord }) {
    return (
        <div className="main-wrapper">
            <input
                type="text"
                placeholder="Напишите слово (Английский алфавит)"
                value={newList}
                onChange={(e) => setListWord(e.target.value)}
            />
            {unit}
        </div>
    )
}