export default async (req, res) => {
    // console.log(555, process.client);
    req.someValue = true
}

// import type { IncomingMessage, ServerResponse } from 'http'
//
// export default async (req: IncomingMessage, res: ServerResponse) => {
//     req.someValue = true
// }
