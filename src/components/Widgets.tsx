import { useEffect, useRef, useState } from "react"
import { widgetConfig } from "./widgets/widgetConfig"
import { useAnimate } from "framer-motion";

function Widgets() {
    const modalRef = useRef<HTMLDivElement>();
    const [mWidth, setMWidth] = useState(0);
    const [configList, setConfigList] = useState<string[]>([]);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate('section', {x: 500})
        setConfigList(Object.keys(widgetConfig).sort())
        if (modalRef.current) {
            setMWidth(modalRef.current.offsetWidth)
        }   
    })

    const handleClick = (e: any) => {
        animate('ul', {x: -(mWidth)})
    }

    return(
        <div>
            <h2 className="text-left pb-4">Widgets</h2>
            <div className="card mb-5 w-full border-primary border-4 shadow-xl">
                <button className="btn text-3xl" onClick={()=>(document!.getElementById('my_modal_1')!.showModal())}>+</button>
                <dialog id="my_modal_1" className="modal" ref={scope}>
                    <div className="modal-box bg-[#2A2A2A]" ref={modalRef}>
                        <div className="flex justify-between">
                            <h3 className="text-left text-lg mb-5">Choose Widget</h3>
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form> 
                        </div>
                        <div className="overflow-auto overflow-x-hidden">
                            <ul>
                                {configList.map((widget, i) => (<li key={i}><button className="btn btn-block m-2 ml-0" onClick={handleClick}><p className="font-left">{widget}</p></button></li>))}
                            </ul>
                            <section>
                                <p>hi :)</p>
                            </section>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}




export default Widgets