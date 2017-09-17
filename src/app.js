
import Koa from 'koa';
import cors from 'koa2-cors';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-body';
import DevicesDispatcher from './devicesDispatcher.js';

const app = new Koa();
const http = new KoaRouter();
const koaBody = KoaBody();
//app.use(cors());

let Devices = new DevicesDispatcher();

//servoX.setAngle(128);
//servoY.setAngle(110);

setInterval(()=>{
    Devices.deviceMap.map(item=>{
       
        item.LAG++;
        if(item.LAG==60){
            console.log('IS_REMOVED-'+item.IP);
            Devices.removeDevice.bind(Devices)(item.IP);
            
        }
    })
},10000)
console.log('Server ON');

const serverServices = () => {

    const connectFunc = (ctx) => {
        let params = ctx.request.body;
        Devices.addDevice(params.ip, params.name, params.type)
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
http.get('/getItem',
    serverServices().getItem
);
http.get('/ping',
    serverServices().ping
);




app.use(http.routes());

app.listen(5000);
