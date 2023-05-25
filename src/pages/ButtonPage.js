import { GoBell, GoStop, GoAlert, GoClippy, GoSearch } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {};
    return (
        <div>
            <div>
                <Button
                    secondary
                    outline
                    className="mb-5"
                    rounded
                    onClick={handleClick}
                >
                    <GoBell />
                    Click Me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoStop />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoAlert />
                    See Deals!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoClippy />
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoSearch />
                    Search!
                </Button>
            </div>
        </div>
    );

}

export default ButtonPage;