import {
    observable,
    computed,
    action,
    autorun
} from 'mobx';
import {get, post} from '../utils/http';
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

    @action login(username, password) {  
        let param = new URLSearchParams()
        param.append('password', password)
        return new Promise((resolve, reject)=>{
            this.syncing = true
            post(`/user/${username}`, param)
                .then(res=>{
                    if(res.status === 0){
                        this.user = res.data
                        resolve()
                    }else{
                        reject(res.msg)
                    }
                }).catch(err => {
                    console.log("errrrr")
                    console.log(err)
            })
        })
    } 

    @action getUserInfo(){
        return new Promise((resolve, reject)=>{
            this.syncing = true
            get(`/user`)
                .then(res=>{
                    this.user = res.data
                    resolve()
                }).catch(err => {
                    reject(err)
            })
        })
    }
    toJson() {
        return {
          count: this.count,
          name: this.name,
        }
    }
}