import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";



const SketchCanvas = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeWidthValue: 1,
      strokeColorValue: "black",
      completeSketchSvg: null,
      completeSketchImg: null
    };
    this.canvas = React.createRef();
  }

  saveSketch = () => {
    const inputs_title = document.getElementById('inputs_title').value;
    const inputs_painter = document.getElementById('inputs_painter').value;

    if (inputs_title === "" || inputs_painter === "" ) {
      alert("빈칸을 채워주세요.");
    } else {
      const blob = new Blob([this.state.completeSketchSvg], { type: "image/svg+xml" });
      const formData = new FormData();
      formData.append('painter', encodeURIComponent(inputs_painter));
      formData.append('title', encodeURIComponent(inputs_title));
      formData.append('file', blob, encodeURIComponent(inputs_painter+'.svg'));

      fetch('/quiz/painter/api/saveSketch', {
        method: 'POST',
        body: formData
      }).then(response => {
        return response.json();
      }).then(data => {
        if (data.success === 1) {
          location.href = "/quiz/painter/exhibition";
        } else {
          alert("그림을 저장하지 못하였습니다. 다시 시도해주세요.");
          location.href = "/quiz/painter";
        }
      });
    }
  }

  strokeColorChange = (e) => {
    // console.log(e.target.innerText);
    this.setState({ strokeColorValue: e.target.alt });
  }
  strokeWidthChange = (e) => {
    // console.log(e.target.alt);
    this.setState({ strokeWidthValue: e.target.alt });
  }


  render() {
    const { staticPath } = this.props;
    return (
      <>
        {this.state.completeSketchSvg === null ?

        <div className="paint">
          <div className="paint_tool">
            <strong>Tool</strong>
            <div className="controls">
              <button onClick={() => {this.canvas.current.undo()}} className="undo">되돌리기</button>
              <button onClick={() => {this.canvas.current.redo()}} className="redo">다시 실행</button>
              <button onClick={() => {this.canvas.current.clearCanvas()}} className="clear">초기화</button>
              <button
                className="complete2"
                onClick={() => {
                  this.canvas.current.exportSvg()
                    .then(data => {
                      // console.log(data);
                      this.setState({ completeSketchSvg: data });
                    })
                    .catch(e => {
                      console.log(e);
                    });
                }}
              >
                완료(svg)
              </button>
            </div>
            <div className="tools">
              <span>
                브러쉬/지우개 영역
                <div>
                  <button onClick={() => {this.canvas.current.eraseMode(false)}}><img src={staticPath + "/assets/img/painter/canvas_pen.png"} alt="Pen" /></button>
                  <button onClick={() => {this.canvas.current.eraseMode(true)}}><img src={staticPath + "/assets/img/painter/canvas_eraser.png"} alt="Eraser" /></button>
                </div>
              </span>
              <span>
                두께 조절 영역
                <div>
                  <button onClick={this.strokeWidthChange}><img src={staticPath + "/assets/img/painter/canvas_width_1.png"} alt="1" /></button>
                  <button onClick={this.strokeWidthChange}><img src={staticPath + "/assets/img/painter/canvas_width_2.png"} alt="5" /></button>
                  <button onClick={this.strokeWidthChange}><img src={staticPath + "/assets/img/painter/canvas_width_3.png"} alt="10" /></button>
                  <button onClick={this.strokeWidthChange}><img src={staticPath + "/assets/img/painter/canvas_width_4.png"} alt="20" /></button>
                </div>
              </span>
              <span>
                색상 조절 영역
                <div>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_1.png"} alt="red" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_2.png"} alt="orange" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_3.png"} alt="yellow" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_4.png"} alt="green" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_5.png"} alt="blue" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_6.png"} alt="navy" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_7.png"} alt="black" /></button>
                  <button onClick={this.strokeColorChange}><img src={staticPath + "/assets/img/painter/canvas_color_8.png"} alt="gray" /></button>
                </div>
              </span>
            </div>
          </div>
          <div className="paint_canvas">
            <strong>Canvas</strong>
            <ReactSketchCanvas
              ref={this.canvas}
              // style={{ "margin": "0 0 100px 0", "border": "1px solid blue" }}
              strokeColor={this.state.strokeColorValue}
              width={"222px"}
              height={"324px"}
              // canvasColor={"blue"}
              // background={"no-repeat url(https://via.placeholder.com/150) center center"}
              background={"no-repeat url("+staticPath+"/assets/img/painter/canvas_bg.png) left top/100% 100%"}
              strokeWidth={this.state.strokeWidthValue}
              eraserWidth={this.state.strokeWidthValue}
            />
          </div>
        </div>

        :

        <div className="paint_save">
          <div>
            <div dangerouslySetInnerHTML={{ __html: this.state.completeSketchSvg }}></div>
          </div>
          <div className="inputs">
            <input type="text" id="inputs_title" placeholder="제목을 넣어주세요." />
            <input type="text" id="inputs_painter" placeholder="닉네임을 넣어주세요." />
          </div>
          <div className="buttons">
            <button onClick={this.saveSketch}>저장하기</button>
            <a href="/quiz/painter/exhibition">트리티브 작품 구경가기</a>
          </div>
        </div>
        }
      </>
    );
  }
};

export default SketchCanvas;