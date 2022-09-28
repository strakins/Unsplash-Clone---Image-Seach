import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XtFvTuzxEvNjR5SGyJbjQiiwr49f6bywJ064flfoVJs'
    }
});