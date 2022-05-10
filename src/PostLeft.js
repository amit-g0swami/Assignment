import { Avatar } from "@material-ui/core";
import React from "react";
import "./PostLeft.css";

function PostLeft({ username, profileUrl, name }) {
    return (
        <div className="rightcard">
            <div className="rightcard__card">
                <div className="profilebg__image">
                    <img
                        src="https://www.technistone.com/color-range/image-slab/Starlight%20Black_SLAB_web.jpg"
                        alt=""
                    />
                </div>

                <div className="profile__userimage">
                    <div className="profile__userdp">
                        <Avatar className="post__avatarleftsection" alt="" src={profileUrl} sx={{ width: 56, height: 56 }}>
                            {username?.[0]?.toUpperCase()}
                        </Avatar>
                    </div>
                    <div className="profile__username">
                        {username ? (
                            <div className="usernamestyle">
                                <h4>{username}</h4>
                            </div>
                        ) : (
                            <div className="usernamestyle">
                                <h4>{name}</h4>
                            </div>
                        )}
                    </div>
                </div>


                {/* <div style={{ justifyContent: "space-around", flexDirection: "row" }} className="profile__userinfo">

                    <div style={{}}>
                        <div style={{ color: "white" }}>Connect</div>
                        <h3 style={{ color: "white", fontWeight: "700", fontSize: 20, textAlign: "center" }}>
                            0
                        </h3>
                    </div>

                    <div style={{}}>
                        <div style={{ color: "white" }}>Posts</div>
                        <h3 style={{ color: "white", fontWeight: "700", fontSize: 20, textAlign: "center" }}>
                            0
                        </h3>
                    </div>

                    <div style={{}}>
                        <div style={{ color: "white" }}>Score</div>
                        <h3 style={{ color: "white", fontWeight: "700", fontSize: 20, textAlign: "center" }}>
                            0
                        </h3>
                    </div>

                </div> */}

            </div>

            {/* <div className="profile__assissment">
                <h4>Assignment</h4>
            </div> */}
        </div>
    );
}

export default PostLeft;