import Draggable from "react-draggable";
import Avatar from "../avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "zmp-ui/icon/styles/icon.css";
import { Icon } from "zmp-ui";
import { getColorForName } from "../../utils/ExtractUsername";
import { setDragableAudioCall } from "../../redux/reducers/dragableReducer";

function CallRequestDragable(props) {
    const [receiver, setReceiver] = useState(props.receiver);
    const windowSize = useSelector(state => state.render.windowSize);
    const chatInfo = useSelector(state => state.message.chatInfo);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dispatch = useDispatch();
    useEffect(() => {
        const dialogWidth = 300; // Chiều rộng cố định của hộp thoại
        const windowWidth = windowSize.width;
        setPosition({
            x: (windowWidth - dialogWidth) / 2, // Căn giữa hộp thoại theo chiều ngang của cửa sổ
            y: windowSize.height / 2 - 100 // Giữ nguyên vị trí của chiều cao
        });
    }, [windowSize]);

    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }
    const baseColor = chatInfo.user ? getColorForName(chatInfo.user?.name) : '#FFFFFF'; // Màu trắng là màu mặc định
    const lighterColor = adjustColor(baseColor, 40); // Làm sáng màu lên một chút
    const darkerColor = adjustColor(baseColor, -40); // Làm tối màu đi một chút
    function hexToRgb(hex) {
        hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }


    return (


        <Draggable
            defaultPosition={position}
        >

            <div style={{
                position: "fixed",
                zIndex: 999,
                cursor: "pointer",
                borderRadius: 10,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
            }}>
                <audio controls autoPlay loop style={{ display: "none" }}>
                    <source src="assets/mp3/nhac_cho.mp3" type="audio/mpeg" />
                </audio>
                <div className="draggable-window" >
                    <div className="header-audio-call">
                        <div>
                            <img src="/assets/icons/iconCall.png" style={{ width: 28, height: 28, marginRight: 10, marginTop: -7 }} alt="" />
                            <span>Zalo Call - name</span>
                        </div>
                        <div onClick={() => dispatch(setDragableAudioCall(false))}>
                            <Icon icon="zi-close" />
                        </div>
                    </div>
                    <div className="content-audio-call" style={{
                        height: "100%",
                        backgroundImage: chatInfo.user.avatar ?
                            `linear-gradient(-45deg,rgba(199, 194, 194, 0.6), rgba(226, 218, 218, 0.7),rgba(169, 149, 149, 0.6)), url(${chatInfo.user.avatar}), linear-gradient(90deg, rgba(${hexToRgb(lighterColor)}, 1) 0%, rgba(${hexToRgb(baseColor)}, 1) 50%, rgba(${hexToRgb(darkerColor)}, 1) 100%)` :
                            `linear-gradient(90deg, rgba(${hexToRgb(lighterColor)}, 0.6) 0%, rgba(${hexToRgb(baseColor)}, 0.6) 50%, rgba(${hexToRgb(darkerColor)}, 0.6) 100%)`,
                        backgroundSize: 'cover', // Set the size for each background
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <Avatar user={receiver.user} width={80} height={80} />
                        <h5>{receiver.name}</h5>
                        <span>Đang đổ chuông</span>
                    </div>
                    <div className="footer-audio-call">
                        <div className="group-btn-audio-call">
                            <button className="btn-audio-call-footer">
                                <Icon style={{ color: '#4f4f4f' }} icon='zi-video-solid' />
                                <Icon style={{ color: '#4f4f4f' }} icon='zi-chevron-up' />
                            </button>
                            <button onClick={props.hiddenDragable}
                                className="btn-audio-call1 btn-reject">
                                <i className="bi bi-telephone-fill"></i>
                            </button>
                            <button className="btn-audio-call-footer">
                                <Icon style={{ color: '#4f4f4f' }} icon='zi-mic' />
                                <Icon style={{ color: '#4f4f4f' }} icon='zi-chevron-up' />
                            </button>

                        </div>
                        <div >
                            <button className="btn-setting" >
                                <Icon style={{ color: 'white' }} icon='zi-setting' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Draggable>

    );
}

export default CallRequestDragable;