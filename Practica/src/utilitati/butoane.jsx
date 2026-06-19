import { Link } from "react-router-dom";

function AncoraColorata(props) {
    return (
        <Link
            to={props.ancora}
            className="px-10 py-1 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-[20px] text-white">
            {props.title}
        </Link>
    );
}

function AncoraSur(props) {
    return (
        <Link
            to={props.ancora}
            className="px-10 py-1 bg-gray-300 text-black border border-black rounded-[20px]">
            {props.title}
        </Link>
    );
}

export { AncoraColorata, AncoraSur };