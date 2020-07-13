import './Menu.css';
import React from 'react';
import { Item } from "./Item";
import { SubMenu } from "./SubMenu";
import { MenuUnfoldOutlined, CaretDownOutlined } from  '@ant-design/icons';

export class Menu extends React.Component<any, any>{

    static Item = Item;
    static SubMenu = SubMenu;

    render() {
        return (
            <div>
                <a className={'menu_button'}>
                    <MenuUnfoldOutlined />
                    <span>菜单</span>
                    <CaretDownOutlined />
                </a>
                <ul className={'menu_ul'}>{this.props.children}</ul>
            </div>
        );
    }
}
