import "./youtube.css";
import ReactPlayer from "react-player/youtube";
import { TitleComponent } from "../../components/index";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const YouTube = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="youtube-parent">
      <TitleComponent primary="featured video" secondary="youtube" />
      <div className="youtube">
        <div className="youtube-left">
          <p className="youtube-title">
            Checkout my{" "}
            <span style={{ color: darkMode && "#3aafa9", fontWeight: "bold" }}>
              YouTube
            </span>{" "}
            channel
          </p>
          <p className="youtube-description">
            I have tutorials for frontend and backend web development. I cover
            concepts in JavaScript, ReactJS, NodeJS, WordPress, HTML and CSS. I
            also give tips and tricks and also talk about where to find
            resources to be a better web developer.
          </p>
        </div>
        <div className="youtube-right">
          <ReactPlayer
            className="youtube-video"
            controls
            url="https://youtu.be/oszUqCqTGHo"
          />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
