import React, { Component } from 'react';

// styles
import styles from "./Content.mod.css";

class Content extends Component {
    render() {
        return (
            <div className={`row ${styles.Content} blue-grey lighten-5`}>
                <h2>Content</h2>
            </div>
        );
    }
}

export default Content;