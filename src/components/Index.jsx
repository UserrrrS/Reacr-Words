import "./style.css";

export default function entry({ children, newword, setNewWord}) {
    return (
        <div className="main-wrapper">
            <input
                type="text"
                placeholder="напишите слово (английский алфавит)"
                value={newword}
                onChange={(e) => setNewWord(e.target.value)}
            />
            {children}
        </div>
    )
}