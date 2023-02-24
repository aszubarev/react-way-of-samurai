import s from './Login.module.css'
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    if (props.me) {
        return (
            <Redirect to={'/profile/' + props.me.id} />
        )
    }

    return (
        <div className={s.loginBlock}>
            <LoginForm login={props.login}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        me: state.auth.me
    }
}

export default connect(mapStateToProps, {
    login
})(Login)