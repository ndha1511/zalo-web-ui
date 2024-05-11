import { useEffect, useState } from "react";
import Avatar from "../../../components/avatar/Avatar";
import ButtonGroup from "../../../components/buttons/button-group/ButtonGroup";
import ButtonIcon from "../../../components/buttons/button-icon/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss"
import ChatInfoOffcanvas from "./ChatInfoOffcanvas";
import GroupManagerOffcanvas from "./GroupManagerOffcanvas";
import { callRequest } from "../../../services/MessageService";

import { setMessageCall } from "../../../redux/reducers/messageReducer";

import { Icon } from "zmp-ui"
import Icons from "../../../components/icons/Icons";
import { getGroupById } from "../../../services/GroupService";

import AccountInfor from "../../../components/modal/AccountInfor";
import ChatInfoOffcanvasFriend from "./ChatInfoOffcanvasFriend";

import { setLocalPeer, setLocalStream } from "../../../configs/WebRTCConfig";
import { setDragableCallRequest } from "../../../redux/reducers/dragableReducer";
import HelloMessage from "../../../components/modal/HelloMessage";



function Header(props) {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [isHovered, setIsHovered] = useState(false);
    const [showManager, setShowManager] = useState(false);
    const chatInfo = useSelector(state => state.message.chatInfo);
    const userCurrent = useSelector((state) => state.userInfo.user);
    const [showHelloMessageModal, setShowHelloMessageModal] = useState(false)
    const [showInfor, setshowInfor] = useState(false)
    const dispatch = useDispatch();
    console.log(chatInfo)
    const handleShowHelloMessageModal = () => {
        setshowInfor(false);
        setShowHelloMessageModal(true)

    }

    const handleShowProfile = () => {
        // setFriend(item)
        setshowInfor(true)

    }


    const handleShowManager = () => {
        setShowManager(true);
        handleClose()
    };
    const handleCloseManager = () => {
        setShowManager(false);
    };

    const chatIcon = [
        {
            item:  <Icon icon='zi-search' size={25}/>,
            title: "Tìm kiếm tin nhắn"
        },
        {
            item: <i style={{fontSize:19}} className="bi bi-telephone"></i>,
            title: "Cuộc gọi thoại"
        },
        {
            item: <Icons type="video1"  size={25} />,
            title: "Gọi video"
        },
        {

            item: <><i style={{fontSize:19}} className="bi bi-square-half"></i></>,

            title: "Thông tin hội thoại"
        }
    ]
    const chatIconGroup = [
        {
            item:  <Icon icon='zi-search' size={25}/>,
            title: "Tìm kiếm tin nhắn"
        },
        {
            item: <Icons type="video1"  size={25} />,
            title: "Gọi video"
        },
        {

            item: <><i style={{fontSize:19}} className="bi bi-square-half"></i></>,

            title: "Thông tin hội thoại"
        }
    ]
    const buttons = chatIcon;

    const clickButtonRightGroup = (index) => {
        switch (index) {
            case 0: break;
            case 1:
                const dataVideo = {
                    senderId: userCurrent?.email,
                    receiverId: chatInfo?.user?.id,
                    messageType: "VIDEO_CALL"
                }
                dispatch(setDragableCallRequest(true));
                // call api
                const mediaVideo = { video: true, audio: true };
                handleCallRequest(dataVideo, mediaVideo);
                break;
            case 2:
                handleShow();
                break;
            default: break;

        }
    }

    const clickButtonRight = (index) => {
        switch (index) {
            case 0: break;
            case 1:
                const data = {
                    senderId: userCurrent?.email,
                    receiverId: chatInfo?.user?.email,
                    messageType: "AUDIO_CALL"
                }
                dispatch(setDragableCallRequest(true));

                // call api
                const media = {video: false, audio: true};
                handleCallRequest(data, media);
                break;
            case 2:
                const dataVideo = {
                    senderId: userCurrent?.email,
                    receiverId: chatInfo?.user?.email,
                    messageType: "VIDEO_CALL"
                }
                dispatch(setDragableCallRequest(true));
                // call api
                const mediaVideo = { video: true, audio: true };
                handleCallRequest(dataVideo, mediaVideo);
                break;
            case 3:
                // open offcanvas for user info 
                handleShow1();
                break;
            default: break;

        }
    }

    const handleCallRequest = async (data, media) => {
        setLocalPeer();
        setLocalStream(media);
        try {
            const response = await callRequest(data);
            dispatch(setMessageCall(response));

        } catch (error) {
            console.log(error);
        }
    }

    const renderRight = () => {
        if (chatInfo.room?.roomType === "GROUP_CHAT") {
            if (chatInfo?.user.groupStatus === "INACTIVE") {
                return <></>;
            }
            if (!chatInfo?.user.members.includes(userCurrent.email)) {
                return <></>;
            }
            return <div className="action">
                <ButtonGroup buttons={chatIconGroup} className="btn-hover" width={40} height={40} hoverColor="#f0f0f0" handle={clickButtonRightGroup} />
            </div>
        } else {
            return <div className="action">
                <ButtonGroup buttons={buttons} className="btn-hover" width={40} height={40} hoverColor="#f0f0f0" handle={clickButtonRight} />
            </div>
        }
    }
  
    return (
        <div className="d-flex w-100 p-3 pb-5 pt-4" style={{
            height: "100%",
            justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0f0f0"
        }}>
            <div className="d-flex" style={{ alignItems: "center" }}>
                <button style={{ border: 'none', backgroundColor: 'white' }} onClick={handleShowProfile}><Avatar user={chatInfo.user} /></button>
                <div className="d-flex" style={{
                    marginLeft: 10,
                    alignItems: "center",

                }} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <span
                        style={{ fontWeight: 'bold' }}

                    >
                        {chatInfo.user.name}
                    </span>
                    {isHovered && (
                        <div style={{marginLeft:6}}> <ButtonIcon
                            title="Chỉnh sửa"
                            className="btn-hover"
                            hoverColor="#f0f0f0"
                            borderRadius={50}
                        >
                            <Icon icon="zi-edit-text" size={20} />
                        </ButtonIcon></div>
                    )}
                </div>
            </div>
            {renderRight()}


            {/* Hiển thị Offcanvas 1 */}

            {show && <ChatInfoOffcanvas
                show={show}
                handleClose={handleClose}
                user={chatInfo.user}
                handleShowManager={handleShowManager}
            />}
            {/* Hiển thị Offcanvas 2 */}
            {/* Using the new GroupManagerOffcanvas */}
            {showManager && <GroupManagerOffcanvas
                show={showManager}
                handleClose={handleCloseManager}
            />}
            {/* Hiển thị Offcanvas 3 */}
            {show1 && <ChatInfoOffcanvasFriend
                show={show1}
                handleClose={handleClose1}
                user={props.user}
                handleShowManager={handleShowManager}
            />}
            {/* Modal accontInfor */}
            {
              showInfor &&  <AccountInfor show={showInfor} onClose={() => setshowInfor(false)} user={chatInfo.user} closeBack={2} addFriend={handleShowHelloMessageModal}  />

            }    
              {
              showHelloMessageModal &&  <HelloMessage show={showHelloMessageModal} user={chatInfo.user} onClose={() => setShowHelloMessageModal(false)}  />

            }  

        </div>
    );
}

export default Header;