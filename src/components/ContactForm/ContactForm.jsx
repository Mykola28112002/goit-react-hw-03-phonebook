
import { Formik,} from 'formik';
import { Label, Button, Input, Forms, Error } from './ContactForm.styled';
import React, { Component } from "react";
import * as yup from 'yup';
import PropTypes from 'prop-types';


const scema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(7).max(7).required(),
})


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  
  handelSabmit = (values, {resetForm}) => { 
    this.props.onSubmit(values)
    this.setState({
      name: values.name,
      number: values.number
    });
    resetForm();
  };

  render() {
    return <Formik
        validationSchema={scema}
        initialValues={this.state}
        onSubmit={this.handelSabmit}
        >
        <Forms action="">
            <Error component='div' name='name'/>
            <Label htmlFor="text">Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                />
            </Label>
            <Error component='div' name='number'/>
            <Label htmlFor="number">Number
                <Input
                  type="tel"
                  name="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  required
                />
                  
            </Label>  
            <Button type='submit' >Add contact</Button>
        </Forms>
    </Formik> ;
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
