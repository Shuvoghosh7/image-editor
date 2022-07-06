import './App.css';
import MyEditor from './component/MyEditor';
function App() {
  const myTheme = {
    // Theme object to extends default dark theme.
  };
  const props = {
    includeUI: {
      loadImage: {
        path:
          "https://i1.wp.com/www.tor.com/wp-content/uploads/2018/10/Malazan-Kotaki.jpg?fit=740%2C386&type=vertical&quality=100&ssl=1",
        name: "SampleImage",
      },
      uiSize: {
        width: "100%",
        height: "700px",
      },
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "filter",
      ],
      menuBarPosition: "bottom",
      theme: myTheme,
    },
    cssMaxWidth: 1200,
    cssMaxHeight: 800,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };
  return (
    <div className="editor-container">
      <MyEditor {...props} />
    </div>
  );
}

export default App;
