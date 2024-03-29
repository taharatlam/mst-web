import Axios from "axios";

import api from "../api";
import { resolve } from "path";
export default {
    GET_USER_LOCATION: (latitude,longitude,apiKey)=>{
        return new Promise(async(resolve, reject)=>{
            try{
                const response = await Axios.get(api.GetUserLocation.GET_USER_LOCATION(latitude,longitude,apiKey),{
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
        SEARCH_USER_LOCATION: (text) =>{
            return new Promise (async(resolve, reject)=>{
                try{
                    const response = await Axios.get(api.GetUserLocation.SEARCH_USER_LOCATION(text),{
                        headers:{
                            "Content-Type" : "application/json",
                        },
                        
                    });
                    resolve(response);
                } catch(err)
                {
                    reject(err);
                }
            });
        }
    }
