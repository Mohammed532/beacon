
interface Props {
    text?: string;
}

function Header({ text }:Props) {
    return(
        <header className="">
            <h1 className="text-left tracking-widest font-bold">{text ? text : "Header"}</h1>
        </header>
    )
}

export default Header