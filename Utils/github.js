export function github_login(){
    const accesskey = process.env.GHUB_Accesstoken
    const baseurl = process.env.GITHUB_baseurl
    const extra = {}

    return {         
        baseURL: baseurl,
        extraHTTPHeaders: {
            'Authorization': `Bearer ${accesskey}`,
            ...extra,
        },
    }
}                   