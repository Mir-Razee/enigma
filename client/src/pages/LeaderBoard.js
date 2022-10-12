import { useState, useEffect, React } from 'react'
import styles from './styles/Leaderboard.css'
import axios from 'axios'

export default function LeaderBoard() {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/leaderboard", { withCredentials: true }).then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
    }, [])

    return (
        <div>

            <div class="header_main">
                <div class="col">ENIGMA</div>
            </div>
            {/* <hr color="white" style="border: 2px solid white;"></hr> */}
            <div class="header_sub">
                LEADERBOARD
            </div>
            {/* <hr color="white" style="border: 2px solid white;"></hr> */}
            <div class="tableFixHead">
                {data ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Username</th>
                                    <th>No. of Questions Solved</th>
                                </tr>
                                <tr>
                                    <th>{data.Rank}(You)</th>
                                    <th>{data.User_Id}</th>
                                    <th>{data.My_score}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.lb_data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <th>{key + 1}</th>
                                            <th>{val.name}</th>
                                            <th>{val.score}</th>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </>
                )
                    : <div>wait lol</div>}
            </div>
            <br></br>
        </div>

    )
}
