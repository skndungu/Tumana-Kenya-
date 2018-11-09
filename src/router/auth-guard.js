import {store} from '../store'
export default (to, from, next) =>{
    //check if we have a user
    if(store.getters.user) {
        next()
    } else {
        next('/signin')
    }
}