
import Koa from 'koa';
import cors from 'koa2-cors';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-body';
import DevicesManager from './deviceManager.js';
import serve from 'koa-static-server';

const app = new Koa();
const http = new KoaRouter();
const koaBody = KoaBody();
//app.use(cors());

let Devices = new DevicesManager();

//servoX.setAngle(128);
//servoY.setAngle(110);

setInterval(() => {
    Devices.deviceMap.map(item => {

        item.LAG++;
        if (item.LAG == 60) {
            console.log('IS_REMOVED-' + item.IP);
            Devices.removeDevice.bind(Devices)(item.IP);

        }
    })
    console.log(`Connected-${Devices.deviceMap.length}`)
}, 10000)


console.log('Server ON');

const serverServices = () => {

    const connectFunc = (ctx) => {
      
        let params = ctx.request.body;
    
        Devices.addDevice(params.ip, params.name, params.type, params.ip_slave)
        console.log(Devices);
        ctx.status = 200;
        return ctx;
    };
    const linkFunc = (ctx) => {

        let params = ctx.request.body;
        Devices.linkDevices(params.ip_phone, params.ip_robot)
        console.log(Devices);
        ctx.body = Devices.getRobots();
        ctx.status = 200;
        return ctx;
    };

    const getRobotsFunc = (ctx) => {
        ctx.body = Devices.getRobots();
        ctx.status = 200;
        return ctx;
    };

    const removeDeviceFunc = (ctx) => {

        let params = ctx.request.body;
        ctx.body = Devices.removeDevice(params.ip);
        ctx.status = 200;
        return ctx;
    };

    const getPhoneFunc = (ctx) => {

        let params = ctx.request.body;
        ctx.body = Devices.getPhone();
        ctx.status = 200;
        return ctx;
    };
    const getItemFunc = (ctx) => {

        let params = ctx.query;
        ctx.body = Devices.getItem(params.ip);
        ctx.status = 200;
        return ctx;
    };
    const pingFunc = (ctx) => {
        let params = ctx.query;
        ctx.body = Devices.ping(params.ip);
        ctx.status = 200;
        return ctx;
    };
    const getAllFunc = (ctx) => {
        let params = ctx.query;
        ctx.body = Devices.deviceMap;
        ctx.status = 200;
        return ctx;
    };
    return {
        connectAsync: async (ctx) => {
            return await connectFunc(ctx);
        },
        linkAsync: async (ctx) => {
            return await linkFunc(ctx);
        },
        getRobots: async (ctx) => {
            return await getRobotsFunc(ctx);
        },
        removeRobots: async (ctx) => {
            return await removeDeviceFunc(ctx);
        },
        getPhone: async (ctx) => {
            return await getPhoneFunc(ctx);
        },
        getItem: async (ctx) => {
            return await getItemFunc(ctx);
        },
        ping: async (ctx) => {
            return await pingFunc(ctx);
        },
        getAll: async (ctx) => {
            return await getAllFunc(ctx);
        }

    };
};



http.post('/connect', koaBody,
    serverServices().connectAsync
);
http.post('/link', koaBody,
    serverServices().linkAsync
);
http.get('/getRobots',
    serverServices().getRobots
);
http.post('/remove',
    serverServices().getRobots
);
http.get('/getPhone',
    serverServices().getPhone
);
http.get('/getAll',
    serverServices().getAll
);
http.get('/getItem',
    serverServices().getItem
);
//possible to send state with life and team info
http.get('/ping',
    serverServices().ping
);




app.use(http.routes());

app.use(serve({ rootDir: 'web' }))
app.listen(5000);

module.exports = { serverServices }