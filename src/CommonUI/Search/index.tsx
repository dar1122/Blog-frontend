import './index.css';
import React from 'react';

export class Search extends React.Component{


    render() {
        return (
            <>
                <div className={'search_div'} >
                    <input type={'text'} className={'search'}  placeholder={'请输入要搜索的内容'}/>
                </div>
            </>
        );
    }
}
