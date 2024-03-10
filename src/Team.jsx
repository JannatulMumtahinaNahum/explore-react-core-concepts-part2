import { useState } from "react"

export default function Team() {
    const [team , setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const HandleRemove = () => {
        // 1st option
        // const newTeam = team - 1;
        // setTeam(newTeam)

        // 2nd option
        setTeam(team - 1)
    }
    const teamStyle = {
        border: '2px solid violet',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd} >Add</button>
            <button onClick={HandleRemove}>Remove</button>
        </div>
    )
}