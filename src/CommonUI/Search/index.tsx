import './index.css';
import React from 'react';

export class Search extends React.Component{


    render() {
        return (
            <>
                <div className={'search_div'} >
                    <span id={'img'} />
                    <input type={'text'} className={'search'} />
                </div>
            </>
        );
    }
}
