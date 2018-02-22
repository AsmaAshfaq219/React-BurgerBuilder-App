import React, { Fragment } from 'react';
import Styles from './Layout.module.css';

export default (props) => (
    <Fragment>
        <div>The toolbar stuff</div>
        <main className={Styles.Layout_Content}>{props.children}</main>
    </Fragment>
)