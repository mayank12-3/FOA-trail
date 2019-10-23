import React from 'react';
import { Button } from '../../../common/components/';
const HelpMe = (props) => {
    return(
        <div className="help-me_container">
            <div className="wrapper">
                <div className="help-me_info">
                    <h2>Couldn’t find what you need?</h2>
                    <h3>Get in touch for customized packages.</h3>
                    <p> Expect a callback within <strong>10 min.</strong></p>
                    <Button
                        className="primary"
                        onClick={props.onHelpMeClickHandler}
                    >
                        Help me
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HelpMe;