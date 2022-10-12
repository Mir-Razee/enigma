import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './styles/Profile.css'

export default function Profile() {

    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/profile", { withCredentials: true }).then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
    }, [])

    return (
        <>
            <div className="row header_main">
                <div className="col">
                    {/* <a onClick="history.back()">
                        <i className="fa fa-arrow-circle-left" style="font-size:60px; color:#f4511e; float:left; margin:20px 0px 0px 15px;"></i>
                    </a> */}
                </div>
                <div className="col">ENIGMA</div>
                <div className="col"></div>
            </div>
            {/* <hr color="white" style="border: 2px solid;"> */}
            <div className="header_sub">
                Your Profile
            </div>
            {/* <hr color="white" style="border: 2px solid;"> */}
            <br />
            <div className="container">
                {data ? (
                    <>
                        <div className="row">
                            <div className="col">
                                <div className="title1">
                                    NAME
                                </div>
                                <div>
                                    {data.Name}
                                </div>
                            </div>
                            <div className="col">
                                <div className="title1">
                                    E-MAIL
                                </div>
                                <div>
                                    {data.Email}
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="title1">
                                    USERNAME
                                </div>
                                <div>
                                    {data.User_Id}
                                </div>
                            </div>
                            <div className="col">
                                <div className="title1">
                                    RANK
                                </div>
                                <div>
                                    {data.Rank}
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="title1">
                                    NO. OF QUESTIONS SOLVED
                                </div>
                                <div>
                                    {data.Score}
                                </div>
                            </div>
                        </div>
                    </>) : <>wait lol</>}
            </div>
        </>
    )
}
