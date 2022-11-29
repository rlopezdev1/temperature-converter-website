
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSnowflake } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
    return(
        <div className="heading">
            <h1><FontAwesomeIcon icon={faFire} /> Temperature Converter <FontAwesomeIcon icon={faSnowflake}/></h1>
        </div>
    )
}

export default Header;