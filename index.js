var axios = require("axios");
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
var getIP = require('ipware')().get_ip;
class forgetpasses {
    constructor(t) {
      this.token = t;
      this.cookieParser = cookieParser;
    }
    cT(){
      return new Promise(resolve => {
        axios.post('https://forgetpasses.com:8443/api/checkToken', {
          token: this.token,
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    async getUserData(req){
      if(await this.getFirewallStatus(req)){
        var login_token = req.cookies.fp_login_token;
        const data = await this.cS(login_token);
        if(data.status===true){
          const user_data = await this.gUD(login_token);
          return user_data
        }
      }else{
        return "Please cool down"
      }
    }
    gUD(login_token){
      return new Promise(resolve=>{
        axios.post('https://forgetpasses.com:8443/api/user/getUserData', {
          token: this.token,
          user_token: login_token,
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    fW(ip_address){
      return new Promise(resolve => {
        axios.post('https://forgetpasses.com:8443/api/firewall', {
          token: this.token,
          ip: ip_address
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    //Ban user
    async banUser(req, user_id){
      if(await this.getFirewallStatus(req)){
        const data = await this.bU(user_id);
        return data;
      }else{
        return "Please cool down"
      }
    }
    //Unban User
    async unbanUser(req, user_id){
      if(await this.getFirewallStatus(req)){
        const data = await this.ubU(user_id);
        return data;
      }else{
        return "Please cool down"
      }
    }
    //Ban User
    bU(user_id){
      return new Promise(resolve=>{
        axios.post('https://forgetpasses.com:8443/api/user/banUser', {
          token: this.token,
          user_id: user_id
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    //Unban User
    ubU(user_id){
      return new Promise(resolve=>{
        axios.post('https://forgetpasses.com:8443/api/user/unbanUser', {
          token: this.token,
          user_id: user_id
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    async getFirewallStatus(req){
      var ipInfo = req.ip
      var ip = ipInfo.split(":");
      ip=ip[3];
      const data = await this.firewall(ip)
      if(data.success!==undefined){
        return true;
      }else{
        return false;
      }
    }
    async firewall(ip){
      return new Promise(resolve => {
        const data =  this.fW(ip);
        resolve(data)
      })
    }
    async checkToken(req){
      if(await this.getFirewallStatus(req)){
        const data = await this.cT();
        if(data.error!==undefined){
          return false;
        }
        if(data.success!==undefined){
          return true;
        }
        return false;
      }else{
        return "Please cool down"
      }
      
    }
    async generateLoginSession(req,res, redirected_url){
      if(await this.getFirewallStatus(req)){
        const data = await this.gLS(redirected_url);
        if(data.success!==undefined){
          res.cookie('fp_login_token', data.success.user_token);
        }
        return data;
      }else{
        return "Please cool down"
      }      
    }
    async checkStatus(req){
      if(await this.getFirewallStatus(req)){
        var login_token = req.cookies.fp_login_token;
        const data = await this.cS(login_token);
        return data;
      }else{
        return "Please cool down"
      }
    }
    cS(loginToken){
      return new Promise(resolve => {
        axios.post('https://forgetpasses.com:8443/api/checkStatus', {
          token: this.token,
          login_token : loginToken
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
    gLS(redirected_url){
      return new Promise(resolve => {
        axios.post('https://forgetpasses.com:8443/api/generateLoginSession', {
          token: this.token,
          redirected_url: redirected_url,
        })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
    }
}
module.exports = forgetpasses;