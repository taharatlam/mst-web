export default {
    GET_CUSTOMER_HOME_PAGE: () => "/customers/getCustomerHomePage",
    GET_All_Vendor_Services: (query) => `/vendorServices/getAllVendorServices?${query}`
}
