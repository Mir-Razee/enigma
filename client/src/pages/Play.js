import { React, useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles/Question.css'
import Question from './Question'

const End = () => {
    return <div>Hunt ended lol</div>
}

const Countdown = () => {
    return <div>Hunt countdowning lol</div>
}

const Complete = () => {
    return <div>Hunt completed lol</div>
}

export default function Play() {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/play", { withCredentials: true }).then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
    }, [])

    if (!data) return (<div>Welcome!</div>)
    else if (data === "end") return <End />;
    else if (data === "countdown") return <Countdown />;
    else if (data === "complete") return <Complete />;
    else {
        return (
            <>
                <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        {data.active.q1 ?
                            <>
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">{data.q1.q_no} {data.done.q1 ? <i className="fa fa-check" style="color: green;"></i> : <></>}</a>
                                <a className="nav-item nav-link " id="nav-profile-tab" data-toggle="tab" role="tab" aria-controls="nav-profile" aria-selected="false">{data.q2.q_no} {data.done.q2 ? <i className="fa fa-check" style="color: green;"></i> : <></>}</a>
                            </>
                            :
                            <>
                                <a className="nav-item nav-link" id="nav-home-tab"
                                    data-toggle="tab" role="tab" aria-controls="nav-home"
                                    aria-selected="true">{data.q1.q_no} {data.done.q1 ? <i className="fa fa-check" ></i> : <></>}</a>
                                <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab"
                                    role="tab" aria-controls="nav-profile"
                                    aria-selected="false">{data.q2.q_no} {data.done.q2 ? <i className="fa fa-check"></i> : <></>}</a>
                            </>
                        }
                    </div>
                </nav>

                <Question data={data.q1} />
            </>
        )
    }
}

// <>
//                 <div>Play begins</div>
//                 <div>Question
//                     <section id="tabs" className="project-tab">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-12">
//                                     <br />
//                                     <div className="tab-content" id="nav-tabContent">
//                                         <div className="tab-pane fade {data.active.q1?show active}" id="nav-{{ data.q1.q_no }}"
//                                             role="tabpanel" aria-labelledby="nav-home-tab">
//                                             <center>
//                                                 <p id="question_description">
//                                                     {/* {{ #if(eq q1.link '#')}}
//                                             <a id="text_hyper">
//                                                 {{ q1.q_des }}
//                                             </a>
//                                             {{ else}}
//                                             <a href="{{q1.link}}" id="text_hyper" target='_blank'>{{ q1.q_des }}</a>
//                                             {{/if}} */}
//                                                 </p>
//                                                 {/* <!-- {{ q1.comment }} --> */}
//                                                 <div className="img_container">
//                                                     <div className="imagebox">
//                                                         {/* {{ #if(eq q1.res1_type 'youtube')}}
//                                                 <iframe width="420" height="345" src="{{q1.res1_link}}"></iframe>
//                                                 {{ else if(eq q1.res1_type 'video')}}
//                                                 <video width="320" height="240" controls>
//                                                     <source src="{{q1.res1_link}}" type="video/mp4">
//                                                         Your browser does not support the video tag.
//                                                 </video>
//                                                 {{ else if(eq q1.res1_type 'audio')}}
//                                                 <audio controls>
//                                                     <source src="{{q1.res1_link}}" type="audio/mpeg">
//                                                         Your browser does not support the audio element.
//                                                 </audio>
//                                                 {{ else}}
//                                                 {{ #if(eq q1.res1_split 'true')}}
//                                                 <div style="width: 200px; height: 300px; overflow: hidden;">
//                                                     <img src="{{ q1.res1_link }}" width="400px" height="300px">
//                                                 </div>
//                                                 {{ else}}
//                                                 <img src="{{ q1.res1_link }}" width="{{q1.res1_width}}"
//                                                     height="{{q1.res1_height}}">
//                                                     {{/if}}
//                                                     {{/if}} */}
//                                                     </div>
//                                                     {/* {{ #if(eq q1.res2_present true)}} */}
//                                                     <br />
//                                                     <div className="imagebox">
//                                                         {/* {{ #if(eq q1.res2_type 'youtube')}}
//                                                     <iframe width="420" height="345" src="{{q1.res2_link}}"></iframe>
//                                                     {{ else if(eq q1.res2_type 'video')}}
//                                                     <video width="320" height="240" controls>
//                                                         <source src="{{q1.res2_link}}" type="video/mp4">
//                                                             Your browser does not support the video tag.
//                                                     </video>
//                                                     {{ else if(eq q1.res2_type 'audio')}}
//                                                     <audio controls>
//                                                         <source src="{{q1.res2_link}}" type="audio/mpeg">
//                                                             Your browser does not support the audio element.
//                                                     </audio>
//                                                     {{ else}}
//                                                     <img src="{{ q1.res2_link }}" width="{{q1.res2_width}}"
//                                                         height="{{q1.res2_height}}">
//                                                         {{/if}}
//                                                     {{/if}} */}
//                                                     </div>
//                                                 </div>
//                                             </center>
//                                             <br />
//                                             <form>
//                                                 <center>
//                                                     <input type="text" value={q1no} name="qno" hidden />
//                                                     <input type="text" className="input" name="answer" autoComplete="off" />
//                                                     <br />
//                                                     <input type="submit" name="submit" className="submit_custom" />
//                                                 </center>
//                                             </form>
//                                         </div>
//                                         <div className="tab-pane fade {{#if (ne active.q1 true) }}show active{{/if}}" id="nav-{{ q2.q_no }}"
//                                             role="tabpanel" aria-labelledby="nav-profile-tab">
//                                             <center>
//                                                 <p id="question_description">
//                                                     {/* {{ #if(eq q2.link '#')}}
//                                                                 <a id="text_hyper">
//                                                                     {{ q2.q_des }}
//                                                                 </a>
//                                                                 {{ else}}
//                                                                 <a href="{{q2.link}}" id="text_hyper" target='_blank'>{{ q2.q_des }}</a>
//                                                                 {{/if}} */}
//                                                 </p>
//                                                 {/* <!-- {{ q2.comment }} --> */}
//                                                 <div className="img_container">
//                                                     <div className="imagebox">
//                                                         {/* {{ #if(eq q2.res1_type 'youtube')}}
//                                                                     <iframe width="420" height="345" src="{{q2.res1_link}}"></iframe>
//                                                                     {{ else if(eq q2.res1_type 'video')}}
//                                                                     <video width="320" height="240" controls>
//                                                                         <source src="{{q2.res1_link}}" type="video/mp4">
//                                                                             Your browser does not support the video tag.
//                                                                     </video>
//                                                                     {{ else if(eq q2.res1_type 'audio')}}
//                                                                     <audio controls>
//                                                                         <source src="{{q2.res1_link}}" type="audio/mpeg">
//                                                                             Your browser does not support the audio element.
//                                                                     </audio>
//                                                                     {{ else}}
//                                                                     <img src="{{ q2.res1_link }}" width="{{q2.res1_width}}"
//                                                                         height="{{q2.res1_height}}">
//                                                                         {{/if}} */}
//                                                     </div>
//                                                     {/* {{ #if(eq q2.res2_present true)}}
//                                                                 <br/>
//                                                                     <div className="imagebox">
//                                                                         {{ #if(eq q2.res2_type 'youtube')}}
//                                                                         <iframe width="420" height="345" src="{{q2.res2_link}}"></iframe>
//                                                                         {{ else if(eq q2.res2_type 'video')}}
//                                                                         <video width="320" height="240" controls>
//                                                                             <source src="{{q2.res2_link}}" type="video/mp4">
//                                                                                 Your browser does not support the video tag.
//                                                                         </video>
//                                                                         {{ else if(eq q2.res2_type 'audio')}}
//                                                                         <audio controls>
//                                                                             <source src="{{q2.res2_link}}" type="audio/mpeg">
//                                                                                 Your browser does not support the audio element.
//                                                                         </audio>
//                                                                         {{ else}}
//                                                                         <img src="{{ q2.res2_link }}" width="{{q2.res2_width}}"
//                                                                             height="{{q2.res2_height}}">
//                                                                             {{/if}}
//                                                                     </div>
//                                                                     {{/if}} */}
//                                                 </div>
//                                             </center>
//                                             <br />
//                                             <form>
//                                                 <center>
//                                                     <input type="text" value={q2no} name="qno" hidden />
//                                                     <input type="text" className="input" name="answer" autoComplete="off" />
//                                                     <br />
//                                                     <input type="submit" name="submit" className="submit_custom" />
//                                                 </center>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     <div id="overlay">
//                         <div className="cv-spinner">
//                             <span className="spinner"></span>
//                         </div>
//                     </div>
//                 </div>
//             </>

