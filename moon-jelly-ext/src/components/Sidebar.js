import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './../styles/Sidebar.css';
import Navbar from './MainNavbar';
import * as PanelManager from '../functionality/PanelManager';
// Complete Panels
import Wallet from './complete/Wallet';
import Mint from './complete/Mint';
import ModuleMenu from './complete/ModuleMenu';
import Market from './complete/Market';
import Bookmarks from './complete/Bookmarks.js';
import Alerts from './complete/Alerts.js';
import Panel from './Panel';

// Assets
import HomePanel from './../assets/ocean-jelly-placeholder.svg';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      nextToDisplay: ''
    };
  }

  /**
 * 
 * @param {the id of the display to show} nextToDisplay 
 */
chooseDisplay(nextToDisplay) {
  if (PanelManager.HasPanel(nextToDisplay)) {
    this.toggleMenu();
      return PanelManager.GetPanel(nextToDisplay);
    }
    else {

      switch (nextToDisplay) {
        case 'mint':{
          this.toggleMenu();

          return <Mint />;}
        case 'market':
          return <Market />;
        case 'wallet':
          return <Wallet />;
        case 'more':
          return <Panel><ModuleMenu selected={this.state.nextToDisplay} setNextPanel={this.setNextPanel.bind(this)} /></Panel>;
        case 'home':
          return <HomePanel />
        case 'bookmarks':
          return <Bookmarks />
        case 'alerts':
          return <Alerts />
        default:
          return <HomePanel />
      }

    }
  }

  /**
   * Sets the id of the next panel.
   * @param {"id of the panel to change to"} nextPanel 
   */
  setNextPanel(nextPanel, response) {
    this.setState({ nextToDisplay: nextPanel }, response);
  }



  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <div>
        {/* <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" onClick={() => this.toggleMenu()} style={{zIndex: 10}}/> */}
        <Menu width={'280px'} isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Navbar selected={this.state.nextToDisplay} toggleMenu={ this.toggleMenu}/>
        </Menu>

      </div>
    );
  }
}

export default Sidebar;


