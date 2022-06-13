import BrandTitle from "./BrandTitle";
import Menu from "./Menu";

export default function Header() {
    return(
        <header className="App-header flex justify-between">
            <BrandTitle />
            <Menu  />
        </header>
    )
}