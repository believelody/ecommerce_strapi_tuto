import axios from "axios";
import { login, register, send } from "./";

// const defaultPath = "brews";

export default {
    register: (name, email, password) => register(name, email, password),
    login: (email, password) => login(email, password),
    confirmEmail: data => send(data)
}
