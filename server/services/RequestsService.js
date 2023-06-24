import { dbContext } from "../Db/DbContext";
import { CourierClient } from "@trycourier/courier";
import { courierToken } from "../authkey";

class RequestService {

    async sendRequest(requestData) {
        const request = await dbContext.Requests.create(requestData)

        const courier = CourierClient({ authorizationToken: courierToken });
        const { requestId } = await courier.send({
            message: {
                to: {
                    email: "riverrockroofing@icloud.com"
                },
                template: "1RBHE0GHRPMBT1QZK0N79VENEXP0",
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