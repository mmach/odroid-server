/*
    ./client/components/App.jsx
*/

import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Container, Col } from 'reactstrap';


export default class DevicesList extends React.Component {

  constructor() {
    super();
    this.state = { result: [] };

  }
  render() {
    let that = this;
    setTimeout(function () {
      fetch(`/getAll`).then(function (response) {
        return response;
      })
        .then(function (response) {
          return response.json()
        }).then(data => {
          that.setState({
            result: data
          })
        })
    }, 3000);
    list = <div></div>
    let list = this.state.result.map(item => {
        let actions=null
        if (item.TYPE == 'MASTER') {
          actions=<td className="align-middle text-nowrap">preview</td>
        } else {
          actions = <td className="align-middle text-nowrap">{item.IP_ROBOT}</td>
        }
        return (
          <tr key={item.IP}>
            <td className="align-middle text-nowrap">{item.IP}</td>
            <td className="align-middle text-nowrap">{item.NAME}</td>
            <td className="align-middle text-nowrap">{item.TYPE}</td>
            <td className="align-middle text-nowrap">{item.IS_LINK.toString()}</td>
            <td className="align-middle text-nowrap">{item.LAG}</td>
            {actions}

          </tr>);
      })
    return (


      < table className="table table-bordered u-table--v2" >
        <thead className="text-uppercase g-letter-spacing-1">
          <tr>
            <th className="g-font-weight-300 g-color-black">IP</th>
            <th className="g-font-weight-300 g-color-black g-min-width-200">NAME</th>
            <th className="g-font-weight-300 g-color-black">TYPE</th>
            <th className="g-font-weight-300 g-color-black">IS LINKED</th>
            <th className="g-font-weight-300 g-color-black text-nowrap">LAG</th>
            <th className="g-font-weight-300 g-color-black">Actions/Robot</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table >

    );
  }
}
