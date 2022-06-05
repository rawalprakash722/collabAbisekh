export const env ={
    baseUrl:{
        dev_api: 'http://localhost:8080/api',
        prod_api: 'http://logistics.goinggenius.com.np/api'
    },
    debug: false,
    title: "GG",
    description:"GG GENUIS",
    keywords:""
};
export const status = {
    idle: 'idle',
    error: 'error',
    loading: 'loading'
}
export const baseUrl=env.debug? env.baseUrl.dev_api : env.baseUrl.prod_api;