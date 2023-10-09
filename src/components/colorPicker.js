import {Component} from "react"
import "../App.css"

const colors = [
    '#fe0000',
    '#00ff00',
    '#0000fe',
    '#ffff00',
    '#fe00fe',
    '#00ffff',
    '#fea500',
    '#81007f',
    '#ffc0cb',
    '#008000',
    '#fe6347',
    '#00cfd1',
    '#8b4413',
    '#ff8b00',
    '#4683b4',
    '#fed700',
];

export class ColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            togglePicker: false
        }
    }
    
    setColor = (color) => {
        const button = document.getElementById("root");
        button.style.backgroundColor = color
        this.setState({togglePicker: false})
    }
    setToggle = () => {
        return this.setState({togglePicker: true})
    }
    render() {
        return (
            <div className="">
                {(this.state.togglePicker) ? 
                    <div className="d-flex flex-wrap">
                        {colors.map((color, index) => (
                            <div className="color-box" key={index} style={{backgroundColor: color}} onClick={() => this.setColor(color)}></div>
                        ))}
                    </div> : null
                }<br />
                <center><button className="btn btn-primary" id="btn" onClick={this.setToggle}>Pick Color</button></center>
            </div>
        )
    }
}