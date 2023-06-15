import { api } from "../../Axios";

class ContactService {

    async sendMessage(messageData) {
        const res = await api.post('/requests', messageData);
        console.log(res.data);
    }
}

export const constactService = new ContactService();