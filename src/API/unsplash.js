import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID zBQG1o7ncxZAFc7cknnHYrwDAg2xdEFubR8FJeR_gL8",
      },
})

