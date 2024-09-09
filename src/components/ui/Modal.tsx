import React, { useEffect, useRef } from "react"

interface ChildrenProp extends React.JSX.Element {
    next?: React.JSX.Element
}

type ModalProp = {
    children: ChildrenProp,
    id: string,
    action?: React.JSX.Element,
}

// TODO: fix visual modal bug
function Modal({ children, id, action }: ModalProp) {

    function nextMPage(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(e.target);
        
    }

    return(
        <>
            <dialog id={id} className="modal bg-primary">
                {action ? (
                <div className="modal-box bg-primary" onMouseOver={(e) => {console.log('hit');
                }}> 
                    {children}
                    <div className="modal-action">
                        <form method="dialog">
                            {action}
                        </form>
                    </div>
                </div>
                ) : (
                <div className="modal-box bg-primary border-4 border-primary">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {children}
                </div>
                )}
            </dialog>
        </>
    )
}

export default Modal