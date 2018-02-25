import React from 'react';
import { Button } from 'antd';

import Styles from './BuildControl.module.css';

export default (props) => (
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.Label}</div>
        <Button className={Styles.Less} onClick={props.Remove} disabled={props.Disable}>Less</Button>
        <Button className={Styles.More} onClick={props.Add}>More</Button>
    </div>
)