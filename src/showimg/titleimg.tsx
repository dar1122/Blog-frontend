import React from 'react';
import '../App.css';




export class Titleimg extends React.Component{


    render() {
        return (
            <>
                <div className={'mine'}>——　　　D A R ' S　　　B L O G　　　——</div>
                <img src={process.env.PUBLIC_URL+'/img/1.jpg'} width={'100%'}  height={'100%'} />

            </>
        );
    }
}
