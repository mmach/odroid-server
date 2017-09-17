

export default class DevicesDispatcher {

    constructor() {
        this.deviceMap = [];
    }

    addDevice(ip, name, type, ip_slave) {
        let isExist = this.deviceMap.filter((item) => {
            return item.IP == ip
        }).length;
        if (isExist > 0) {
            return;
        }
        this.deviceMap.push({
            IP: ip,
            NAME: name,
            TYPE: type,
            IS_LINK: false,
            IP_SLAVE: ip_slave,
            LAG:0
        });
    }

    linkDevices(ip_phone, ip_robot) {
        let robot = this.deviceMap.filter(item => {
            if (item.IP == ip_robot && item.TYPE == 'MASTER' && item.IS_LINK == false) {
                return item;
            }
        })
        if (robot.length != 1) {
            return;
        }
        robot = robot[0];
        robot.IS_LINK = true;
        this.deviceMap = this.deviceMap.map((item) => {
            console.log(item);
            if (item.TYPE == 'PHONE') {
                if (item.IS_LINK == true) {
                    return item;
                }
                if (item.IP == ip_phone) {
                    item.IP_ROBOT = robot.IP;
                    item.IP_SLAVE = robot.IP_SLAVE;
                    item.IS_LINK = true;
                }
            }
            return item;

        });

    }
    getItem(ip) {
        return this.deviceMap.filter(item => {

            return item.IP == ip
        });
    }
    getRobots() {
        return this.deviceMap.filter(item => {
            if (item.TYPE != 'MASTER') {
                return item;
            }

        })
    }  
    getPhone() {
        return this.deviceMap.filter(item => {
            if (item.TYPE != 'PHONE') {
                return item;
            }

        })
    }
    removeDevice(ip) {
        let removeLink = {};
        this.deviceMap = this.deviceMap.filter(item => {
            if (item.IP == ip) {
                removeLink = item.IP_ROBOT;
            }
            return item.IP != ip
        }).map(item => {
            if (item.IP == removeLink.IP_ROBOT) {
                item.IS_LINK = false;
            }
            return item;
        })
        return this.deviceMap;
    }
    ping(ip){
        this.deviceMap.map(item=>{
            if(item.IP == ip ){
                item.LAG=0;
            }
        })
    }
}