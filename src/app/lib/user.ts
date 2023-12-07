import Cookies from 'js-cookie'
import { isValidToken } from './jwt';


export const isLogin = () => {
    const cookieToken= Cookies.get('items-control-token');
    const cookieUser= Cookies.get('items-control-user');

    if(!isValidToken(cookieToken)){
        return ('InvalidToken')
    }

    return(cookieUser)

}


export const logOut=() =>{
    Cookies.remove('items-control-token');
    Cookies.remove('items-control-user');
}