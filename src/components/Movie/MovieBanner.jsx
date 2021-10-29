import './MovieBanner.css';

const MovieBanner = (props) => {
    return (
        <div className="movieBanner" style={props.halfWidth === "1" ? {width: "50%", height: "100%"} : {}}>
            <img src={props.img} alt={props.alt}></img>
            <div className="textWrapper">
                <p className="smallDescription">{props.smallDesc}</p>
                <p className="bigDescription">{props.bigDesc}</p>
            </div>
        </div>
    );
}

export default MovieBanner;