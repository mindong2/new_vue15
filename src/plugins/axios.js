import axios from "axios";

const kakao_base = axios.create({
    baseURL : "https://dapi.kakao.com",
    timeout : 20000,
});

export const callKakaoApi = async (url, config) => {
    return await kakao_base ({
        url,
        headers : {
            Authorization : `KakaoAK ${process.env.VUE_APP_KAKAO_REST_API_KEY}`
        },
        ...config
    })
}