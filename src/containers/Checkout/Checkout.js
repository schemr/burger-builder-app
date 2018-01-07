import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if( param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, price: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />
        if(this.props.ings) {
            summary = (
                <div>
                    <CheckoutSummary 
                        ingredients={this.props.ings} 
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinue={this.checkoutContinuedHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        render={(props) => (<ContactData ingredients={this.props.ings} 
                        price={this.props.price} {...props} />)} />
                </div>
            );
        }
        return(
            <div>
                {summary}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);