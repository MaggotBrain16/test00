import {motion} from "framer-motion";
import pokeball from "../img/pkb.png"

export const ResultGame = ({shiFuMi, userRes, machineRes,setIsPlay,winner}) =>{

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return(
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid-rows-2 items-center justify-center"
        >
            <div className="flex flex-wrap items-center justify-center">
                <motion.div variants={item} className="flex h-60 w-60 p-10 bg-red-50/50 rounded-xl">
                    <img src={shiFuMi[userRes].icon} alt="icon of pokemon" />
                </motion.div>
                <h1 className="m-10 text-2xl">VS</h1>
                <motion.div variants={item} className="flex h-60 w-60 p-10 bg-red-50/50 rounded-xl">
                    <img src={shiFuMi[machineRes].icon} alt="icon of pokemon" />
                </motion.div>
            </div>

            <div><p>{winner}</p></div>
            <div>
                <motion.button
                    onClick={()=>setIsPlay(true)}
                    className="bg-red-50/80 p-5 rounded-full mt-10 self-center"
                    variants={item}
                    whileHover={{ scale: 1.2, rotate: 82 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%"
                    }}

                >
                    <img src={pokeball} className="h-10 w-10" alt="icon of pokemon" />
                </motion.button>
            </div>

        </motion.div>

    )
}