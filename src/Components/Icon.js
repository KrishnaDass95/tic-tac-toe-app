import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({ user_icon }) => {
    switch(user_icon){
        case "circle": return <FaRegCircle className="icon"></FaRegCircle>;
        case "cross": return <FaTimes className="icon"></FaTimes>;
        default: return <FaPen className="icon"></FaPen>
    }
}

export default Icon;

