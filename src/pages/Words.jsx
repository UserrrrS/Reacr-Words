import { useParams } from "react-router";

export default function Page() {
    const {name} = useParams();
    return (
        <div className="page-center">
            <p>{name}</p>
        </div>
    )
    }