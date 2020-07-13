import './Menu.css';
import React from 'react';

export class SubMenu extends React.Component<any, any>{

    render() {
        return (
            <li>
                <span>分类</span>
                <ul className={'submenu'}>{this.props.children}</ul>
            </li>

        );
    }

}
