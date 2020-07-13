import './Menu.css';
import React from 'react';
import { Item } from "./Item";
import { SubMenu } from "./SubMenu";


export class Menu extends React.Component<any, any>{

    static Item = Item;
    static SubMenu = SubMenu;


    render() {
        return (
            <div>
                <button className={'menu_button'}>菜单</button>
                <ul>{this.props.children}</ul>
            </div>
        );
    }

}
