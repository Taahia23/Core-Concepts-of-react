import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const teamStyle = {
        border: '5px solid yellow',
        margin: '15px',
        padding : '20px',
        borderRadius: '20px'
    }

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleReduce = () => {
        const newTeam = team -1;
        setTeam(newTeam);
    }
    
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}