import './App.css';
import MyEditor from './component/MyEditor';
import './component/MyEditor.css'

function App() {
  const myTheme = {
    "common.bisize.width": "0",
    "common.bisize.height": "0",

    // header
    "header.backgroundImage": "none",
    "header.backgroundColor": "transparent",
    "header.border": "0px",
  };
  const props = {
    includeUI: {
      loadImage: {
        path:
          "",
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
