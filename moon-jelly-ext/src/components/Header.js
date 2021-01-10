import React, { PureComponent } from 'react';
import './../styles/Header.css';
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo-white.svg';
import { useOcean } from '@oceanprotocol/react';
import Sidebar from './Sidebar';

let Header = props => {
    const network = useOcean()['config']['network'];

    return (
        <header className={"appHeader"}>
            <Sidebar/>
            <div className="flex-content-center">
                <Logo width="50" height="50" /*onClick={this.props.nextDisplay.bind(this, 'home')}*/ />
                <div className={"topLinks"}> 
                    <div className="headerTitle"> MoonJelly v0.1 </div>
                    <div className="networkTitle"> Connected to: {network} </div> 
                </div>
            </div>
            {/*<h3 className={"topLinks"}> MoonJelly v0.1</h3>*/}
            
        </header>
    )
}

export default Header
