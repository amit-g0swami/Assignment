import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({ username, caption, imageUrl, timeStamp, profileUrl, title }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="" src={profileUrl}>
                    {username?.[0]?.toUpperCase()}
                </Avatar>
                <div className="post__user">
                    <h3 className="post__userName">{username}</h3>
                    {/* <h5 className="post__userTimestamp"><span>
                        {new Date(timeStamp).toString()}
                    </span></h5> */}
                </div>
                {/* <div className="post__option">
                    <MoreHorizIcon className="post__options" />
                </div> */}
            </div>
            <h4 className="post__text">{title}</h4>
            {!imageUrl ? (
                <div className="post__noImage"></div>
            ) : (
                <div className="post__images">
                    <img className="post__image" src={imageUrl} alt="" />
                </div>
            )}
            <h4 className="post__text">{caption}</h4>
            {/* <div className="post__footer">
                <div className="post__footerEmoji">
                    <div className="post__footerEmojitype">
                        <ThumbUpOutlinedIcon className="post__footerEmojitypes" />
                        <p>
                            1<span> Like</span>
                        </p>
                    </div>
                </div>

                <div className="post__footerEmoji">
                    <div className="post__footerEmojitype">
                        <ChatBubbleOutlineOutlinedIcon className="post__footerEmojitypes" />
                        <p>
                            0<span> Comment</span>
                        </p>
                    </div>
                </div>

                <div className="post__footerEmoji">
                    <div className="post__footerEmojitype">
                        <BookmarkBorderOutlinedIcon className="post__footerEmojitypes" />
                        <p>
                            <span> Save</span>
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Post;