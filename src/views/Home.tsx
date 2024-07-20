import Preview from "../components/Preview"
import Widget from "../components/Widgets"

function Home() {
    return(
    <>
        <div className="flex w-full">
            <div className="grid flex-grow card place-items-center"><Preview /></div>
            <div className="divider divider-horizontal divider-primary"></div>
            <div className="grid flex-grow card"><Widget /></div>
        </div>
    </>
    )
}

export default Home