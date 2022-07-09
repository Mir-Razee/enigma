import React from 'react'

const Home = () => {
    return (
        <div style={{ "max-width": "780px", "display": "block", "width": "100%", "margin": "auto", "font-family": "'Bubblegum Sans', cursive", "font-size": "23px" }}>
            <dl className="responsive-tabs">
                <dt className="active">Description</dt>
                <dd >
                    <p className="left">Enigma is an incredibly engaging, completely online treasure hunt where participants will have to solvedifferent puzzles to make their way to the top of the leaderboard. It is being organized by The Quiz
                        Club, IIT Indore under the banner of Cultural Mela.
                        The questions can involve making the connections between different images to cracking ciphers and
                        steganography, with difficulties ranging from Piece of Cake, solvable in a few minutes to Liquid
                        Nitrogen Cooled Banana, which might take hours of active participation. While most of the questions can
                        be solved from effective Googling and a bit of smart thinking, but this might not necessarily be the
                        case, as while each piece of the puzzle is important, it might as well be a red herring.
                        Prizes worth ₹8,000 are waiting for you on the other side!
                        For more details of Cultural Mela, visit:
                        <a href="http://gymkhana.iiti.ac.in//culturalsmela/"
                            className="social">http://gymkhana.iiti.ac.in//culturalsmela/</a>
                        Follow The Quiz Club, IIT Indore on Instagram:
                        <a href="https://www.instagram.com/thequizclub_iiti/"
                            className="social">https://www.instagram.com/thequizclub_iiti/</a>
                    </p>
                    <dt>Rules</dt>
                    <dd />
                    <ol className="left">
                        <li> Enigma 2021 consists of multiple questions of generally increasing difficulty. You will receive
                            successive questions upon solving and entering each level’s answer and/or completing the task
                            involved.</li>
                        <li>Some of the usernames such as Admin are blocked for usage on the Enigma website.</li>
                        <li> The winner will be the first person to complete all the levels. In case no one finishes Enigma
                            before 23:59 IST 25th April 2021, the person occupying the first position on the leaderboard will be
                            declared the winner.</li>
                        <li>Anyone can take part in this competition. Yes, even your dog.</li>
                        <li>We will provide you with a discord server to contact the moderators and ask for hints. Revealing
                            questions/solutions/hints at any platform(including discord forum) before the event officially ends
                            will lead to instant disqualification.</li>
                        <li>Use of abusive language, bullying, discrimination, and polarised discussions are strictly
                            discouraged and will not be tolerated.</li>
                        <li> If a question involves typing answers in an answer box, the answers should be typed entirely in
                            lowercase, without any spaces, punctuation, special characters, or numerals.
                            <br />
                            The only exception to this is when the answer is a numeral greater than 1000 or when the answer is a
                            special character.
                            <br />
                            Examples:<br />
                            - If your answer is The Undertaker, type theundertaker<br />
                            - If your answer is Takeshi’s Castle, type takeshiscastle <br />
                            - If your answer is 69696969, type 69696969. (Sadly, “nice” will not be considered a valid answer
                            for this case)
                        </li>
                        <li>If you are close to the correct answer, you may, but not always, get a 'close answer' message.</li>
                        <li>Clues are hidden all around you. Some will not be in plain sight. You may need to interact with the
                            portal, search the source code, follow hyperlinks, etc.</li>
                        <li>Any form of meddling with the website to gain an unfair advantage over others or performing any form
                            of attack on the servers will lead to instant disqualification.</li>
                        <li>
                            Brute Forcing the solution using software is not an option. Your IP will be blocked if found doing
                            so.
                        </li>
                        <li>The decision taken by organizers in any scenario will be final and binding.</li>
                    </ol>
                    <br />
                    <b>TL;DR:</b> Write the answer in lower-case. Your dog can participate. Annoy the moderators for clues
                    on the Discord server.
                </dd>
                <dt>Guidelines</dt>
                <dd>
                    <ol className="left">
                        <li> Enigma is best played when on a laptop. You can also solve it on any mobile device, but sometimes,
                            it may be possible that questions are not rendered correctly, and you may miss some information.
                        </li>
                        <li>Use the internet as much as you want. Remember, Google is your best friend.</li>
                        <li> Reverse searching images can be very helpful. Some of the tools for reverse searching images can be
                            Google Image Search, Tiny Eye Image Search, and Yandex Image Search.</li>
                        <li> Remember to check your sound settings. Some questions are audio-based.</li>
                        <li>Solving some of the questions may require basic knowledge of cryptography and steganography.</li>
                        <li>The questions in Enigma are open-ended. Do consider approaching a question with multiple angles. If
                            you are stuck with an approach to a question, it might be possible that you are thinking the wrong
                            way to solve that problem.</li>
                        <li> If you feel 'flavour' is the answer to a question, then try typing many variations to it, like
                            different spellings, forms, etc too. Examples could be 'flavor', 'flavored', 'flavoring' etc. </li>
                        <li>The moderators (whom we shall affectionately call Mods) will release hints to the questions on the
                            Discord server at their discretion. We plan on releasing hints every half hour, but this won’t
                            always be the case.</li>
                    </ol>
                </dd>
                <dt onclick="forum()">Forum</dt>
                <dd>
                    Discord Server Invite link: <br />
                    <a href="https://discord.gg/Q5fNttK9gT" target="_blank" className="social">https://discord.gg/Q5fNttK9gT</a>
                </dd>
                <dt>Contact</dt>
                <dd>
                    <p className="left">
                        Kartik Garg (+91 6265597550) <br />
                        Krishna Bhanushali (+91 8767771025)<br /><br />
                        Mail id: <a href="mailto:quizclub@iiti.ac.in" className="social">quizclub@iiti.ac.in</a><br /><br />
                        Technical:<br />
                        Rahul Kumar (+91 9992865729)
                    </p>
                </dd>
            </dl>
        </div >


    )
}

export default Home