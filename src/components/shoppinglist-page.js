import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import ShoppinglistCard from './shoppinglist-card';
import {fetchItems, deleteItem, toggleCheckedItems} from '../actions/mealplanner';
import AddItem from './additem-form';


export class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchItems());
    }
    generateList(list){
        if(list){
            return list.map(item=>
            <ShoppinglistCard key={item.id}{...item}/>)
        }
        else{return ''}
    }

    deleteList(){
       return this.props.items.map(item=>this.props.dispatch(deleteItem(item.id)));
    }
    

    render() {
        let toggleButton;
        if (!this.props.checked){
            toggleButton= <button className="check-button" onClick= {e=> this.props.dispatch(toggleCheckedItems())}><i className="fas fa-toggle-on"></i> show all</button>        
        }
        else{ toggleButton= <button className="check-button" onClick= {e=> this.props.dispatch(toggleCheckedItems())}><i className="fas fa-toggle-off"></i> checked hidden</button> } 
        return (
            <div className="shoppinglist">
                <h3>ShoppingList</h3>
                <AddItem/>
                {toggleButton}
                <button className="clear-list-button" onClick= {e=> this.deleteList()}><i className="fas fa-trash-alt"></i></button>
            <ul className="list-items shoppinglist-ul">
                {this.generateList(this.props.items)}               
            </ul>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.mealplanner.extraItems,
        checked:state.mealplanner.hideCheckedItems
    };
};

export default requiresLogin()(connect(mapStateToProps)(ShoppingList));
