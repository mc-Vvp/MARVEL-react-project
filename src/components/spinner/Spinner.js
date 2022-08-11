import img from "./Spinner-5.gif";

const Spinner = () => {
    return(
        <img src={img} alt="loading..." style={{margin: "0 auto", background: "none", display: "block"}}/>
    )
}

export default Spinner;