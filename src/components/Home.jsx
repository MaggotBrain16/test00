import { motion } from "framer-motion";
import background from "../img/bg.jpg";
import shi from "../img/001.png";
import fu from "../img/002.png";
import mi from "../img/003.png";
import {Counter} from "./Counter";
import {useState} from "react";
import {ResultGame} from "./ResultGame";



export const Home = () =>{

    const shiFuMi = [{icon: shi, value: 0}, {icon: fu, value: 1}, {icon: mi, value: 2}];

    const [scoreUser, setScoreUser] = useState(0);
    const [scoreMachine, setScoreMachine] = useState(0);
    const [userRes, setUserRes] = useState(0);
    const [machineRes, setMachineRes] = useState(0);
    const [isPlay, setIsPlay] = useState(true);
    const [winner, setWinner] = useState("");

    const playGame = (value) => {
        let machineP = Math.floor(Math.random() * 3)
        setUserRes(value);
        setMachineRes(machineP);

        switch (value){
            case 0:
                if (machineP === 2){
                    setWinner("You Win");
                  setScoreUser(scoreUser+1);
                }
                if (machineP === 1){
                    setWinner("You Lose");
                    setScoreMachine(scoreMachine+1);
                }
                if (machineP === 0){
                    setWinner("Ex Aequo");
                }
                break;
            case 1: if (machineP === 0){
                setWinner("You Win");
                setScoreUser(scoreUser+1);
            }
                if (machineP === 2){
                    setWinner("You Lose");
                    setScoreMachine(scoreMachine+1);
                }
                if (machineP === 1){
                    setWinner("Ex Aequo");
                }
                break;
            case 2: if (machineP === 1){
                setWinner("You Win");
                setScoreUser(scoreUser+1);
            }
                if (machineP === 0){
                    setWinner("You Lose");
                    setScoreMachine(scoreMachine+1);
                }
                if (machineP === 2){
                    setWinner("Ex Aequo");
                }
                break;


        }

        setIsPlay(false);
    }
    return(
        <div className="flex flex-col justify-between h-full w-full bg-cover overflow-hidden" style={{ backgroundImage: `url(${background})` }}>

            <Counter scoreUser={scoreUser} scoreMachine={scoreMachine}/>

            <div className="flex justify-center mb-60 w-full">

            {
                isPlay ?
                shiFuMi.map((sfm)=>{
                    return(
                        <motion.button
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{
                                scale: 3,
                                rotate: -10,
                                borderRadius: "100%",
                            }}
                            key={sfm.value}
                            className="flex justify-center h-72 w-72 p-4 ml-2 mr-2 rounded-full"
                            onClick={()=>playGame(sfm.value)}
                        >
                            <img src={sfm.icon} alt="icon of pokemon" />
                        </motion.button>
                    )
                })
                    :
                    <ResultGame shiFuMi={shiFuMi} userRes={userRes} machineRes={machineRes} setIsPlay={setIsPlay} winner={winner}/>
            }
            </div>

        </div>
    )
}