import { useNavigate } from "react-router";

export default function NavigateExample() {
    let navigate = useNavigate();

    const handleClick = () => {
        console.log("Clicked");

        navigate("/");
    };

    return(
        <>
            <h1>hello from NavigateExample</h1>
            <button>Click to navigate</button>
        </>
    );
};