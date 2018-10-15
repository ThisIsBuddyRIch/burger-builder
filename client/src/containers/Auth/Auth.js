import React, { Component } from 'react'
import Input from "../../components/UI/Input/Input"
import Button, { BTN_TYPES } from "../../components/UI/Button/Button"
import classes from "./Auth.css"
import axios from "../../infrastructure/axios-order"
import * as routs from "../../router/routs"

export default class Auth extends Component {

    state = {
        login: "",
        password: "",
        isIncorrectCredentials: false
    }

    loginHandler = (e) => {
        e.preventDefault();
        const model = {
            login: this.state.login,
            password: this.state.password
        }
        axios.post("/api/Account/GetToken", model)
        .then(x => {
            console.log(x.data);
            //this.props.history.push(routs.ROOT);
        }).catch(x => {
            if(x.response.status == 400){
                this.setState({isIncorrectCredentials: true})
            }   
        });
    }

    onChangeLogin = (e) => this.setState({login:e.target.value})
    onChangePass = (e) => this.setState({password: e.target.value})


    render() {
        const errorRender = this.state.isIncorrectCredentials ? (
            <div className={classes.ErrorAuth}>
            <p>Incorrect login or password</p>
            </div>
        ) : null
    
        return (
            <div className={classes.Auth}>
                <form>
                    {errorRender}
                    <Input placeholder="login" onChange={this.onChangeLogin} />
                    <Input type="password" placeholder="password" onChange={this.onChangePass} />
                    <div className={classes.BtnWrapper}>
                        <Button btnType={BTN_TYPES.succes} classes={classes.Btn} click={this.loginHandler} >Sigh in</Button>
                    </div>
                </form>
            </div>
        )
    }
}

