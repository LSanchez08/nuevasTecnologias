const responseMessage = (status: number, method: string, message: string, response: User[] = []) => ({ status, method, message, response });

module.exports = responseMessage;
