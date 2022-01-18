// export default (req, res) => 'Hello World'

import type { IncomingMessage, ServerResponse } from 'http'
import { useCookie, setCookie } from 'h3'
import config from '#config'

export default async (req: IncomingMessage, res: ServerResponse) => {
    // const cookie = useCookie(name, options)
    console.log(9999999);
    console.log('config', config.TEST2);
    console.log('cookie', useCookie(req, 'counter'));
    setCookie(res, 'counter', '111' ,{
        path: '/'
    })
    res.statusCode = 200
    res.end(JSON.stringify({
        test1: 1111,
        test2: '2222',
    }))
}
