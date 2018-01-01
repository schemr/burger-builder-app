import React, { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/Ui/Spinner/Spinner';


import Button from '../../../components/Ui/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'schemr',
                address: {
                    street: 'Seoul',
                    zipCode: '00000',
                    contry: 'Korea'
                }
            },
            deliveryMethod: 'faster'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false})
            this.props.history.push('/');
            console.log(response)
        })
        .catch((error) => {
            this.setState({loading:false})
            console.log(error)
        });
    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="name" />
            <input className={classes.Input} type="email" name="email" placeholder="example@example.com" />
            <input className={classes.Input} type="text" name="street" placeholder="street" />
            <input className={classes.Input} type="text" name="zipcode" placeholder="zipcode" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData