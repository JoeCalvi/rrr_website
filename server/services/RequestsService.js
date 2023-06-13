import { dbContext } from "../Db/DbContext";
import { CourierClient } from "@trycourier/courier";

class RequestService {

    async sendRequest(requestData) {
        const request = await dbContext.Requests.create(requestData)

        const courier = CourierClient({ authorizationToken: "pk_prod_QWVHCTM2ZJM0PEPKXZZE7RXP656G" });
        const { requestId } = await courier.send({
            message: {
                to: {
                    email: "joecalvi.work@gmail.com"
                },
                template: "JRQD2HQD5AM0XWJMQVHKTV2NR312",
                data: {
                    name: request.name,
                    email: request.email,
                    phone: request.phone,
                    description: request.description,
                    replace: request.replace,
                    repair: request.repair,
                    job: request.job,
                    type: request.type,
                    color: request.color,
                },
            },
        });

        return request
    }

}

export const requestsService = new RequestService();