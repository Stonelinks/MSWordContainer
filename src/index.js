const React = require("react")
const PropTypes = require("prop-types")

require("./index.css")

class MSWordContainer extends React.PureComponent {
  render() {
    const { title, children } = this.props
    return (
      <div className="window-wrapper">
        <div className="window">
          <div className="window-border">
            <div className="title-bar  h-count">
              <div className="control-box">
                <a className="button-3d minimize">
                  <span>&nbsp;</span>
                </a>
                <a className="button-3d maximize">
                  <span>&nbsp;</span>
                </a>
                <a className="button-3d close">
                  <span>&nbsp;</span>
                </a>
              </div>

              <span className="title">
                {title ? `${title} - ` : null}Microsoft Word
              </span>
            </div>

            <div className="menu-bar  h-count">
              <a>
                <span>F</span>
                ile
              </a>
              <a>
                <span>E</span>
                dit
              </a>
              <a>
                <span>V</span>
                iew
              </a>
              <a>
                <span>I</span>
                nsert
              </a>
              <a>
                F<span>o</span>
                rmat
              </a>
              <a>
                <span>T</span>
                ools
              </a>
              <a>
                T<span>a</span>
                ble
              </a>
              <a>
                <span>W</span>
                indow
              </a>
              <a>
                <span>H</span>
                elp
              </a>

              <div className="clear" />
            </div>

            <div className="toolbar float-left">
              <a className="b-new" />
              <a className="b-open" />
              <a className="b-save" />
              <span className="sep" />

              <a className="b-print" />
              <a className="b-spell" />
              <span className="sep" />

              <a className="b-copy" />
              <a className="b-paste" />
              <span className="sep" />

              <a className="b-undo" data-cmd="undo" />
              <a className="b-redo" data-cmd="redo" />

              <div className="clear" />
            </div>

            <div className="toolbar  float-left">
              <a className="b-style" />

              <div className="picker">
                <span className="arrow" />
                Normal
              </div>
              <div className="picker">
                <span className="arrow" />
                Times New Roman
              </div>
              <div className="picker">
                <span className="arrow" />
                12
              </div>

              <span className="sep" />

              <a className="b-bold" data-cmd="bold" />
              <a className="b-italic" data-cmd="italic" />
              <a className="b-underline" data-cmd="underline" />
              <span className="sep" />

              <a className="b-left" data-cmd="justifyLeft" />
              <a className="b-center" data-cmd="justifyCenter" />
              <a className="b-right" data-cmd="justifyRight" />

              <div className="clear" />
            </div>
            <div className="toolbar float-right social h-count" />
            <div className="clear" />

            <div className="content">
              <div className="content-box">
                <div className="top-ruler  h-count">
                  <div className="ruler" />
                </div>
                <div className="left-ruler" style={{ height: "1492px" }} />
                <div className="document-scroller" style={{ height: "1492px" }}>
                  <div className="document-content">
                    <div className="document container">
                      <div className="document-wrap">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="status-bar  h-count">
              <div className="status-bar-content">
                <span className="box">
                  Page 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sec 1
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1/1
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="box">
                  At 1" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ln 1
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Col 1
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="box disabled">REC</span>
                <span className="box disabled">TRK</span>
                <span className="box disabled">EXT</span>
                <span className="box disabled">OVR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MSWordContainer.propTypes = {
  title: PropTypes.string
}

module.exports = MSWordContainer
