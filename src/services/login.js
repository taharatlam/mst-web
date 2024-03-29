import Axios from "axios";
import constant from "../utils/constant";
import api from "../api";
import { resolve } from "path";
export default {
    GENERATE_MOBILE_OTP: (data)=>{
        return new Promise(async(resolve, reject)=>{
            try{
                const response = await Axios.post(constant.BASE_URL + api.Login.GENERATE_MOBILE_OTP(),data,{
                    headers:{
                        "Content-Type": "application/json",
                    },
                });
                resolve(response);
            }catch(err)
            {
                reject(err);
            }
            });
        },
        LOGIN_WITH_MOBILE_OTP:(data)=>{
            return new Promise(async(resolve, reject)=>{
                try{
                    const response = await Axios.post(constant.BASE_URL + api.Login.LOGIN_WITH_MOBILE_OTP(),data,{
                        headers : {
                            "Content-Type": "application/json",
                        },
                    });
                    resolve(response);
                    
                }
                catch(err)
                {
                    reject(err);
                }
            });
        },
    }
