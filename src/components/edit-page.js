import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import EditForm from './edit-form';

export class Dashboard extends React.Component {
    componentDidMount(){
    };
    showEdit(id){
      this.props.history.push(`/dashboard`)
  };

    render() {
        return (
            <div className="dashboard">
                <div className="">
                   <h2> Recipes </h2>
                </div>
                <EditForm showEdit={id => this.showEdit()} {...this.props.selectedRecipe}/>
            </div>
        );
    }

}

const mapStateToProps = (state,props) => {
    
    return {
        selectedRecipe: state.recipes.all.find(item=>item.id===props.match.params.id)

    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));