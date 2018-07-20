

export default class DevicesManager {

    constructor() {
        this.deviceMap = [];
    }

    addDevice(ip, name, type, ip_slave) {
        let isExist = this.getItem(ip);
        if (isExist != undefined) {
            return 'GOWNO';
        }
        this.deviceMap.push({
            IP: ip,
            NAME: name,
            TYPE: type,
            IS_LINK: false,
            IP_SLAVE: ip_slave,
            IP_ROBOT: null,
            LAG: 0
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
        })[0];
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
        let item = this.getItem(ip);
        if (item.TYPE == 'PHONE') {
            this.deviceMap = this.deviceMap.filter(item => {
                if (item.IP == ip) {
                    removeLink = item.IP_ROBOT;
                }
                return item.IP != ip
            }).map(item => {
                if (item.IP == removeLink) {
                    item.IS_LINK = false;
                }
                return item;
            })
        } else {
            this.deviceMap = this.deviceMap.filter(item => {
                if (item.IP == ip) {
                    removeLink = item.IP;
                }
                return item.IP != ip
            }).map(item=>{
                if(item.IP_ROBOT==removeLink){
                    item.IP_ROBOT=null;
                    item.IS_LINK=false;
                    item.IP_SLAVE=null;
                }
                return item;
            });
        }
        return this.deviceMap;
    }

    ping(ip) {
        this.deviceMap.map(item => {
            if (item.IP == ip) {
                item.LAG = 0;
            }
        })
    }
}