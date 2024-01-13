export const Counter = ({scoreUser, scoreMachine}) =>{

    return(
        <div className="bg-red-50/80 rounded-md">
            <h1 className="text-2xl text-[#ED1B24] flex items-center justify-evenly justify-items-center">
                User: <span className="text-4xl text-white">{scoreUser}</span>
                <span className="text-6xl text-black">VS</span>
                Machine: <span className="text-4xl text-white">{scoreMachine}</span>
            </h1>
        </div>
    )
}