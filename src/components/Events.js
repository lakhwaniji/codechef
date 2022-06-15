import React from "react";
import poster from '../IconsImages/coderscook.webp';
import codechef from '../IconsImages/codechef.png';
import './Events.css';
import charge from '../IconsImages/charge.png';
import dates from '../IconsImages/dates.png';
import mode from '../IconsImages/mode.png';
import participation from '../IconsImages/participation.png';
import prize from '../IconsImages/prize.png';
import rounds from '../IconsImages/rounds.png';

function Events(){
    return(
        <div>
            <nav className="navigation">
                <img src={codechef} alt="clublogo"/>
            </nav>
            <div className="title">
                Events
            </div>
            <div className="eventbox">
                <div className="content">
                    <div className="eventposter">
                        <img src={poster} alt="eventposter"/>
                    </div>
                    <div className="eventdescription">
                    The IEEE SB MUJ & CodeChef MUJ SC presents "Coders Cook," a two-day coding event in which you will go deep into and solve coding problems based on the Netflix series "Stranger Things." It won't just be an event; it will be much more than that. Be ready to explore the Upside Down!
                    <div>
                        <div className="linetags">
                            <div className="prize tag">
                                <img src={prize} alt="prize"/>
                                <div className="tagswritten">Certificate&Goodies</div>
                            </div>
                            <div className="rounds tag">
                                <img src={rounds} alt="round"/>
                                <div className="tagswritten">2-3Rounds</div>
                            </div>
                            <div className="rounds tag">
                                <img src={dates} alt="dates"/>
                                <div className="tagswritten">18-19July</div>
                            </div>
                            <div className="charge tag">
                                <img src={charge} alt="charge"/>
                                <div className="tagswritten">Free</div>
                            </div>
                            <div className="participation tag">
                                <img src={participation} alt="participation"/>
                                <div className="tagswritten">Individual</div>
                            </div>
                            <div className="modes tag">
                                <img src={mode} alt="mode"/>
                                <div className="tagswritten">Online</div>
                            </div>
                            <div></div>
                            <div className="button grow pointer">
                                <a href="www.google.com">Registration Open</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Events;