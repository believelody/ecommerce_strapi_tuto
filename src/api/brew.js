import axios from "axios";
import { post } from "./";

// const defaultPath = "brews";

export default {
    getBrews: id => post({
        query: `query {
            brand(id: "${id}") {
                _id
                name
                brews {
                    _id
                    name
                    description
                    price
                    image {
                        name
                        url
                    }
                }
            }
        }`
    })
}
