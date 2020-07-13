import './Menu.css';
import React from 'react';
import { Item } from "./Item";
import { SubMenu } from "./SubMenu";
import { MenuUnfoldOutlined, CaretDownOutlined } from '@ant-design/icons';

export class Menu extends React.Component<any, any>{

    static Item = Item;
    static SubMenu = SubMenu;

    render() {
        return (
            <>
                <div className={'menu_button'}>
                    <a className={'menu_title'}><span>菜单</span> <CaretDownOutlined /></a>
                </div>

                <ul className={'menu_ul'}>{this.props.children}</ul>
            </>
        );
    }
}
