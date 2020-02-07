import React from "react";
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field placeholder="login" name={"login"} className={s.log} component={"input"}/>
            <Field placeholder="pass" name={"password"} className={s.pass} component={"input"}/>
            <div><Field type="checkbox" name={"remember"} className={s.checkbox} component={"input"}/> remember</div>
            <button className={s.button}>login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

let Login = () => {

    const onsubmit = formData => {

        console.log(formData)
    }
    return <div className={s.wrapper}>
        <LoginReduxForm onSubmit={onsubmit}/>
    </div>
}

export default Login;