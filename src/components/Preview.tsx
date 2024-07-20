import { motion } from "framer-motion"
import { useRef } from "react"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';

function Preview() {
    const constraintsRef = useRef(null)
    
    return(
        <>
            <div className="card mb-5 w-full bg-primary shadow-xl">
                <motion.div className="card-body" ref={constraintsRef}>
                    <motion.div draggable drag dragConstraints={constraintsRef} dragElastic={false} dragMomentum={false} className="card glass w-20 bg-amber-800 shadow-xl"/>
                </motion.div>
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