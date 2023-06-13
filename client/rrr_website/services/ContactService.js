
class ContactService {

    async sendMessage(messageData) {
        console.log(messageData)
        // const courier = CourierClient({ authorizationToken: "pk_prod_QWVHCTM2ZJM0PEPKXZZE7RXP656G" });

        // const { requestId } = await courier.send({
        //     message: {
        //         to: {
        //         },
        //         template: "JRQD2HQD5AM0XWJMQVHKTV2NR312",
        //         data: {
        //             name: messageData?.name,
        //             email: messageData?.email,
        //             phone: messageData?.phone,
        //             description: messageData?.description,
        //             replace: messageData?.replace,
        //             repair: messageData?.repair,
        //             job: messageData?.job,
        //             type: messageData?.type,
        //             color: messageData?.color,
        //         },
        //     },
        // });

        // console.log(requestId)
    }
}

export const constactService = new ContactService();