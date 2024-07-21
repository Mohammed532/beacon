import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';

function Preview() {
    const [gridList, setGridList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        let gridBtn: JSX.Element[] = [<div><button className="btn btn-outline btn-secondary text-3xl" onClick={()=>(document!.getElementById('my_modal_1')!.showModal())}>+</button></div>]
        let gridBlocks: JSX.Element[] = Array.from( {length: 19}, (_, idx) => <div key={idx} className='invisible text-5xl'>{idx+1}</div>)
        setGridList(gridBtn.concat(gridBlocks))
    })

    const updateGrid = () => {

    }
    
    return(
        <>
            <div className="card mb-5 w-full bg-primary shadow-xl grid grid-cols-5 gap-4 place-items-stretch">
                {gridList}
            </div>
            <div className="place-self-stretch flex flex-row">
                <p className="text-left basis-1/2">Preview</p>
                <p className="text-right basis-1/2">
                    <button className="btn btn-square"><PlayArrowIcon/></button>
                    <button className="btn btn-square ml-2"><SettingsIcon/></button>
                </p>
            </div>
        </>
    )
}

export default Preview