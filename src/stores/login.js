import {defineStore} from 'pinia';

export const loginForm = defineStore({
    id: 'loginform',
    state: () => ({
        userName: '',
        passWord: ''
    }),
    action: {
        loginFormData() {
            console.log(this.userName)
            console.log(this.passWord)
        }
    }
})