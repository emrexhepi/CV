import React, { Component } from 'react';

// styles
import styles from "./Content.mod.css";

// import components
import AboutMe from "../../components/AboutMe/AboutMe";

class Content extends Component {
    statet = {
        content: [
            {
                id: "1",
                type: "AboutMe",
                data : {
                    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor. Porta lorem mollis aliquam ut porttitor leo a. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Amet purus gravida quis blandit. Tristique magna sit amet purus. Diam sit amet nisl suscipit adipiscing bibendum. Enim ut sem viverra aliquet eget sit. Facilisi nullam vehicula ipsum a arcu. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Cras tincidunt lobortis feugiat vivamus."
                }
            }
        ]
    }
    render() {

        let content = this.statet.content.map((widget, index)=>{
            switch(widget.type) {
                case "AboutMe": 
                    return <AboutMe key={widget.id} content={widget.data.content}/>;
                default:
                    break;
            }

            return null;
        });

        return (
            <div className={`row ${styles.Content} white`}>
                {content}
            </div>
        );
    }
}

export default Content;