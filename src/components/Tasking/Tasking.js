import React from "react";

import ItemList from "./ItemList";
import ItemForm from "./ItemForm"

import { Col, Card } from "react-bootstrap";

//import ItemForm from "./ItemForm";
//import Item from "./Item";
//import NoteTitle from "./NoteTitle";
//import OptionsMunu from "./OptionsMenu";

class Tasking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incompItems: [1], //This should not be an array?
      compItems: [3], //Or this?
      optionsShowing: false,
      visible: true
    };
  }

  /*handleSubmit = text => {
    if (text.length > 0) {
      let itemArray = [...this.state.incompItems];
      itemArray.push(text);
      this.setState({
        incompItems: itemArray
      });
    }
  };

  handleToggleCheckedStatus = (checked, index) => {// 0 is unchecked, 1 is checked
    let incompItems = [...this.state.incompItems]
    let compItems = [...this.state.compItems]
  if(!checked){//Going from unchecked to checked
    compItems.push(incompItems[index])
    incompItems.splice(index,1)
  }
  else if(checked){//going from unchecekd to checked
    incompItems.push(compItems[index])
    compItems.splice(index, 1)
  }
    this.setState({
      incompItems: incompItems,
      compItems: compItems
    })
}

  showOptionsMenu = () => {
    this.setState(prevState => ({
      optionsShowing: !prevState.optionsShowing
    }));
  };

  deleteNote = index => {
    this.props.deleteNote(index);
  };*/

  render() {
    //build incomp list

    let incompItems = [...this.state.incompItems].map((element, index) => (
      <div>incomp list</div>

      /*<Item
        content={element}
        checked={false}
        handleToggleCheckedStatus={this.handleToggleCheckedStatus}
        index={index}
      />*/
    ));

    //build comp list

    let compItems = [...this.state.compItems].map((element, index) => (
      <div>comp</div>

      /*<Item
        content={element}
        checked={true}
        handleToggleCheckedStatus={this.handleToggleCheckedStatus}
        index={index}
      />*/
    ));

    return (
      
        <div>

          <ItemList/>
          
          

          
          
          
          {/*
          <div onClick={this.showOptionsMenu}>
          ...
          <OptionsMunu
            optionsShowing={this.state.optionsShowing}
            deleteNote={this.deleteNote}
            index={this.props.index}
          />
    </div>*/}
        </div>


        
      
    );
  }
}

export default Tasking;
