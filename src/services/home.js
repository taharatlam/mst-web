import Axios from "axios";
import constant from "../utils/constant";
import api from "../api";
export default {
    GET_CUSTOMER_HOME_PAGE: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await Axios.get(constant.BASE_URL + api.Home.GET_CUSTOMER_HOME_PAGE(), data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    },

    GET_All_Vendor_Services: (query) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await Axios.get(constant.BASE_URL + api.Home.GET_All_Vendor_Services(query), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    },
}