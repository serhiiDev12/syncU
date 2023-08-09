import { localHost } from "./host";
import UserService from "./userService";

export default class NotificationsService {
    userService;

    constructor() {
        this.userService = new UserService();
    }
    async getNotifications(callback) {
        const userId = this.userService.getUser().id;

        const response = await fetch(localHost + `own/incoming/requests/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Origin": "X-Requested-With",
            },
        })
            .then(response => response.json())

        callback(response);
    }
}