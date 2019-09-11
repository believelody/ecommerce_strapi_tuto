import axios from "axios";
import { login, register } from "./";

// const defaultPath = "brews";

export default {
    register: (name, email, password) => register(name, email, password),
    login: (email, password) => login(email, password),
}