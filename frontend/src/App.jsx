/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx"; // make sure file name matches exactly (capital S)
import "./style.css";
import dannam from "./dannam.png"




export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {!isLoggedIn ? (
                window.location.pathname === "/signup"
                    ? <Signup />
                    : <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
                <MainWebsite setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
function MainWebsite({ setIsLoggedIn }) {
    const handleLogout = () => {
    // ✅ Clear token so session is ended
    localStorage.removeItem("token");
    setIsLoggedIn(false); // ✅ This will switch back to Login.jsx
  };
    return (
        <div className="llogin_">
            <header class="topic"><h2>Back in Time!</h2></header>
            <div class="wrapper">
                <div className="box box1">
                    <h2>Ben10</h2>
                    <img src="https://i.pinimg.com/736x/db/8e/09/db8e09c23f95431cf4c847248fcc7464.jpg" alt="ben10" />
                    <p>Ben 10 is an American animated series (2005) about Ben Tennyson, a 10-year-old boy who discovers the Omnitrix, a device that lets him transform into aliens to fight villains, teaching him lessons of responsibility and heroism. </p>
                </div>
                <div className="box box2">
                    <h2>Shinchan</h2>
                    <img src="https://static.toiimg.com/thumb/105188524/105188524.jpg?height=746&width=420&resizemode=76&imgsize=36562"
                        alt="shinchan" />
                    <p>Shinchan (Crayon Shin-chan, 1992) is a Japanese comedy anime following 5-year-old Shinnosuke Nohara, a mischievous and cheeky boy whose silly and inappropriate antics bring laughter while embarrassing his family and friends.</p>
                </div>
                <div className="box box5">
                    <h2>Doreamon</h2>
                    <img src="https://i.pinimg.com/736x/49/ed/bc/49edbc55f5deddd850d7c4ba97b1e379.jpg" alt="Doreamon" />
                    <p>Doraemon (1973) is a Japanese anime about Doraemon, a robotic cat from the 22nd century, who helps Nobita Nobi with futuristic gadgets, often leading to funny misuses and moral lessons.</p>
                </div>

                <div className="box box4">
                    <h2>Tom & Jerry</h2>
                    <img src="https://m.media-amazon.com/images/I/517yRBCPaGL._UF894,1000_QL80_.jpg" alt="Tom & Jerry" />
                    <p>Tom and Jerry (1940) is a classic American cartoon showing the endless comedic rivalry between Jerry the mouse and Tom the cat, filled with slapstick humor, chases, and clever tricks.</p>
                </div>
                <div className="box box3">
                    <h2>kiterestu</h2>
                    <img src="https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FhdtS7QUX5nX0xjJL9uioodOO3Co.jpg"
                        alt="kiterestu" />
                    <p>Kiteretsu Daihyakka (1988) is a Japanese anime about Kiteretsu, a young genius inventor, who builds useful (and sometimes troublesome) gadgets with the help of his robot friend Korosuke.</p>
                </div>
                <div className="box box6">
                    <h2>Ninja Hattori</h2>
                    <img src="https://images.justwatch.com/poster/323283688/s718/ninja-hattori.jpg" alt="ninja-hattori" />
                    <p>Ninja Hattori (1981) follows a little ninja named Hattori who befriends Kenichi and helps him in school and life, using ninja skills while fighting rival ninja Kemumaki, often with humor and morals</p>
                </div>
                <div className="box box7">
                    <h2>Kick Buttowski</h2>
                    <img src="https://e0.pxfuel.com/wallpapers/589/945/desktop-wallpaper-kick-buttowski-suburban-daredevil-tv-series-2010-2012.jpg"
                        alt="Kick" />
                    <p>Kick Buttowski: Suburban Daredevil (2010) is an American animated series about Clarence “Kick” Buttowski, a fearless boy who dreams of being the world’s greatest daredevil, constantly attempting wild stunts with determination.</p>
                </div>
                <div className="box box8">
                    <h2>Phineas and Ferb</h2>
                    <img src="https://picfiles.alphacoders.com/425/thumb-425963.jpg" alt="Phineas" />
                    <p>Phineas and Ferb (2007) is an American animated series about stepbrothers Phineas and Ferb, who invent amazing projects during summer vacation, while their sister Candace tries to expose them and Perry the Platypus secretly battles the evil Dr. Doofenshmirtz.</p>
                </div>
                <div className="box box9">
                    <h2>Hiedi</h2>
                    <img src="https://wallpapercave.com/wp/wp8747225.jpg" alt="Hiedi" />
                    <p>Heidi, Girl of the Alps (1974) is a Japanese anime based on the novel by Johanna Spyri, telling the story of Heidi, an orphan girl who lives with her grandfather in the Swiss Alps and spreads kindness and love..</p>
                </div>
                <div className="box box10">
                    <h2>Krishna Balram</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaN0FtcIlhGgR7UTvcdc5e30T9I3Xx3QAC6UmCMYji-af384tQUhuJeyT6sGWL99tztkQ&usqp=CAU"
                        alt="Krishna" />
                    <p>Krishna Balram is an Indian animated series that depicts the adventures of Lord Krishna and his brother Balram during their childhood in Vrindavan, highlighting their playful nature, wisdom, and battles against evil.</p>
                </div>
                <div className="box box11">
                    <h2>Chota bheem</h2>
                    <img src="https://w0.peakpx.com/wallpaper/588/228/HD-wallpaper-chota-bheem-run-chota-bheem-cartoon-animation-cute.jpg"
                        alt="Chota" />
                    <p>Chhota Bheem (2008) is an Indian cartoon about Bheem, a brave and strong boy from the fictional kingdom of Dholakpur, who protects his village from villains with the help of his friends.</p>
                </div>
                <div className="box box12">
                    <h2>Jackie chan</h2>
                    <img src="https://m.media-amazon.com/images/M/MV5BMjI1ZTkxMmMtYmZhYS00MjQwLWIyMGUtN2VmMTBkYWRkNmE1XkEyXkFqcGc@._V1_.jpg"
                        alt="Jackie" />
                    <p>Jackie Chan Adventures (2000) is an American animated series where Jackie Chan, an archaeologist and martial artist, battles magical forces, evil organizations, and demons with the help of his niece Jade and Uncle.</p>
                </div>
                <div className="box box13">
                    <h2>Mickey Mouse</h2>
                    <img src="https://i.pinimg.com/474x/95/ec/7d/95ec7d0dedaac7657f42d3aeb1cd9e1c.jpg" alt="Mickey" />
                    <p>Mickey Mouse (1928) is Walt Disney’s iconic character, a cheerful and adventurous mouse who, along with Minnie, Donald, Goofy, and Pluto, became the symbol of Disney and remains a timeless figure of fun and imagination.</p>
                </div>
                <div className="box box14">
                    <h2>Motu Patlu</h2>
                    <img src="https://wallpaperbat.com/img/9670103-motu-patlu-wallpaper-easy-cartoon.jpg" alt="Motu" />
                    <p>Motu Patlu (2012) is an Indian comedy cartoon about Motlu and Patlu, two best friends whose silly adventures in Furfuri Nagar lead to funny problems, often solved with the help of their friends.</p>
                </div>
                <div className="box box15">
                    <h2>Stuart Little</h2>
                    <img src="https://m.media-amazon.com/images/I/51kD5koXXaL._UF1000,1000_QL80_.jpg" alt="Stuart" />
                    <p>Stuart Little (1999, film & animated adaptation) tells the story of Stuart, a kind and intelligent little mouse adopted by the Little family, who goes on heartwarming adventures while learning about love, family, and friendship.</p>
                </div>
                <div className="box box16">
                    <h2>Jungle Book</h2>
                    <img src="https://wallpapers.com/images/featured/the-jungle-book-ejvi9m5tpzyeynbi.jpg" alt="Jungle" />
                    <p>The Jungle Book (1967, Disney adaptation of Rudyard Kipling’s novel) follows Mowgli, a human boy raised by wolves in the jungle, who learns about courage and belonging with the help of Baloo the bear and Bagheera the panther while facing Shere Khan the tiger.</p>
                </div>
            </div>
            <div className="sendoff"><img src={dannam} alt="dan" className="dannam_bg"/></div>
            <div className="statement"><h2>Hope you guys got Back!</h2></div>
            <div class="out"><button className="logout_btn" onClick={handleLogout} >Logout</button></div>
        </div>
    );
}
