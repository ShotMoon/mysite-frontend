import {
    observable,
    computed,
    action,
    autorun
} from 'mobx';
import {post} from '../utils/http';
import Qs from 'qs';

export default class AppState {

    @observable username
    @observable password
    @observable syncing = false
    @observable user

    constructor(username, password, syncing, user){
        this.count = username
        this.name = password
        this.syncing = syncing
        this.user = user
    }

    @computed get msg(){
        return `${this.name} say count is ${this.count}`
    }

    @action login(username, password) {  
        let param = new URLSearchParams()
        param.append('password', password)
        return new Promise((resolve, reject)=>{
            this.syncing = true
            post(`/user/${username}`, param)
                .then(res=>{
                    this.user = res.data
                    resolve()
                }).catch(err => {
                    reject(err)
            })
        })
    } 
    @action getUserInfo(){
        console.log(JSON.stringify(this.user)+'=-=-')
        return this.user
    }
    toJson() {
        return {
          count: this.count,
          name: this.name,
        }
    }
}
