import { localHost } from "./host";
import UserService from "./userService";

export default class SlotsService {
    userService;

    constructor() {
        this.userService = new UserService();
    }

    async getPersonalSlots (callback) {
        const userId = this.userService.getUser().id;

        const response = await fetch(localHost + `slots/user/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Origin": "X-Requested-With",
            },
        }).then(response => response.json())

        callback(response);
    }
}