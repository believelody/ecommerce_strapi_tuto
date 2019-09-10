import axios from "axios";
import { post } from "./";

// const defaultPath = "brands";

export default {
    getBrands: () => post({
        query: `query {
            brands {
                _id
                name
                description
                createdAt
                updatedAt
                image {
                _id
                name
                url
                }
            }
        }`
    })
}