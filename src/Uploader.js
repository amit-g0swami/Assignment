import React from 'react'
import "./Uploader.css";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImageUpload from './ImageUpload';

function Uploader({ username, profileUrl, realname }) {
    return (
        <div className="uploader" >

            <div className="uploaderb">
                <Avatar className="post__avatar" alt="" src={profileUrl}> {username?.[0]?.toUpperCase()}</Avatar>
                <h3>What's on your mind , {username}</h3>
                <ImageUpload realname={realname} username={username} />
            </div>

            {/* <div className="additionalsection">
                <div className="additionalsectionb" style={{ color: "white" }}>
                    <div className="additionalsectionl">
                        <h3>Latest</h3>
                    </div>
                    <div className="additionalsectionp" style={{ color: "#7b5ce0", marginLeft: "10px" }}>
                        <h3>Popular</h3>
                    </div>
                </div>

                <div className="saved">
                    <h3>Saved</h3>
                    <ExitToAppIcon className="toggleicon" />
                </div>

            </div> */}
        </div>
    )
}

export default Uploader