import React, { Fragment } from 'react';
import Styles from './Layout.css';

export default (props) => (
    <Fragment>
        <div>The toolbar stuff</div>
        <main className={Styles.Layout_Content}>{props.children}</main>
    </Fragment>
)