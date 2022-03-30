const prodConfig = {
    urls: {
        API_BASE_URL: "https://tum-ai-backends-prod.herokuapp.com"
    }
};

const devConfig = {
    urls: {
        API_BASE_URL: "https://tum-ai-backends-dev.herokuapp.com"
    }
};

// Note: npm/yarn run build will set NODE_ENV to "production" otherwise it will be
// "development" (in case npm run dev or yarn dev is run).
export const appConfig = process.env.NODE_ENV === "production" ? prodConfig : devConfig;