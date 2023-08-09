import NotificationsService from "./notificationsService";
import SlotsService from "./slotsService";
import UserService from "./userService"

const notificationService = new NotificationsService();
const slotsService = new SlotsService();
const userService = new UserService();

export {
    notificationService,
    userService,
    slotsService
};