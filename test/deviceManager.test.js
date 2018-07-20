"use strict";
import chai  from 'chai';
import sinon from 'sinon';
import DeviceManager from './../src/deviceManager.js';


let expect = chai.expect;

console.log(DeviceManager);

describe('DeviceManager', () => {

    let devices = new DeviceManager();
    let phone = {
        ip :'192.168.1.100',
        type: 'PHONE',
        name :'PHONE_NAME'
    }

    let device = {
        ip :'192.168.1.101',
        type: 'MASTER',
        name :'ROBOT',
        ip_slave :'192.168.1.102'
    }

    beforeEach(() => {

    });

    let connect = ()=>{
        devices.addDevice(phone.ip,phone.name,phone.type,null);
        devices.addDevice(device.ip,device.name,device.type,device.ip_slave);
        devices.linkDevices(phone.ip,device.ip);
    }
    it('Should connect PHONE', () => {
        devices.addDevice(phone.ip,phone.name,phone.type,null);
        expect(devices.getItem(phone.ip).IP).equal(phone.ip);
        expect(devices.getItem(phone.ip).TYPE).equal(phone.type);
        expect(devices.getItem(phone.ip).NAME).equal(phone.name);
        expect(devices.getItem(phone.ip).IS_LINK).equal(false);
        expect(devices.getItem(phone.ip).IP_SLAVE).equal(null);
    });

    it('Should connect DEVICE', () => {
        devices.addDevice(device.ip,device.name,device.type,device.ip_slave);
        expect(devices.getItem(device.ip).IP).equal(device.ip);
        expect(devices.getItem(device.ip).TYPE).equal(device.type);
        expect(devices.getItem(device.ip).NAME).equal(device.name);
        expect(devices.getItem(device.ip).IS_LINK).equal(false);
        expect(devices.getItem(device.ip).IP_SLAVE).equal(device.ip_slave);
    });
    it('Shouldn`t connect the same  DEVICE', () => {

        expect(devices.addDevice(device.ip,device.name,device.type,device.ip_slave)).equal('GOWNO');
        expect(devices.deviceMap.filter(item=>{return item.IP==device.ip}).length).equal(1);
       
    });
    it('LINK Device and Robot', () => {
        devices.linkDevices(phone.ip,device.ip);
        expect(devices.getItem(phone.ip).IP_SLAVE).equal(devices.getItem(device.ip).IP_SLAVE).equal(device.ip_slave);
        expect(devices.getItem(phone.ip).IP_ROBOT).equal(devices.getItem(device.ip).IP).equal(device.ip);
        expect(devices.getItem(device.ip).IS_LINK).equal(true);
        expect(devices.getItem(phone.ip).IS_LINK).equal(true);
    });
   
    it('removeDevice -- unlink devices and remove phone', () => {
        connect();
        let robot =devices.getItem(phone.ip).IP_ROBOT;
        devices.removeDevice(phone.ip);
        expect(devices.getItem(phone.ip)).equal(undefined);
        expect(devices.getItem(robot).IS_LINK).equal(false);
    });

    
    it('removeDevice -- unlink phone and remove device', () => {
        connect()
        let robot =devices.getItem(device.ip).IP;
        let phoneToRemove = devices.deviceMap.filter(item=>{
            return item.IP_ROBOT == robot
        })[0];
        expect(devices.getItem(phoneToRemove.IP).IP_ROBOT).equal(device.ip);
        expect(devices.getItem(phoneToRemove.IP).IS_LINK).equal(true);
        expect(devices.getItem(phoneToRemove.IP).IP_SLAVE).equal(device.ip_slave);

        devices.removeDevice(device.ip);

        expect(devices.getItem(phoneToRemove.IP).IP_ROBOT).equal(null);
        expect(devices.getItem(phoneToRemove.IP).IS_LINK).equal(false);
        expect(devices.getItem(phoneToRemove.IP).IP_SLAVE).equal(null);
    });

});