import React, { Component, Fragment } from 'react';
import Preload from './Preload';
import Icon from './Icon';
import { ICONS } from '../constants';
import { CSVLink } from 'react-csv';
// import PropTypes from 'prop-types';

class OfficesTable extends Component {
  static propTypes = {};
  state = {
    csvHeaders: [
      { label: 'Office Name', key: 'office_name' },
      { label: 'Content URL', key: 'content_url' },
      { label: 'RSCDB ID', key: 'rscdb_id' },
      { label: 'Street Address', key: 'street_1' },
      { label: 'Street Address (cont.)', key: 'street_2' },
      { label: 'City', key: 'city' },
      { label: 'State', key: 'province' },
      { label: 'Postal Code', key: 'postal_code' },
      { label: 'Phone Number', key: 'phone_no' },
      { label: 'Lat', key: 'latitude' },
      { label: 'Lon', key: 'longitude' },
      { label: 'RMS', key: 'rms' },
      { label: 'URL', key: 'url' }
    ],
    csvData: [],
    uiHelper: {
      tableHeaders: [
        { label: 'Office Name', key: 'office_name' },
        { label: 'Content URL', key: 'url' },
        // { label: 'RSCDB ID', key: 'rscdb_id' },
        { label: 'Street Address', key: 'address' },
        { label: 'City', key: 'city' },
        { label: 'State', key: 'province' },
        { label: 'Phone Number', key: 'phone' },
        { label: 'RMS', key: 'rms' }
      ]
    }
  };
  componentDidMount() {
    this.setState({
      csvData: Object.keys(this.props.details).map(key => ({
        office_name: this.props.details[key].office_name,
        content_url: this.props.details[key].content_url,
        rscdb_id: this.props.details[key].rscdb_id,
        street_1: `${this.props.details[key].street_1}`,
        street_2: `${this.props.details[key].street_2}`,
        city: this.props.details[key].city,
        province: this.props.details[key].province,
        postal_code: this.props.details[key].postal_code,
        phone_no: this.props.details[key].phone_no,
        latitude: this.props.details[key].latitude,
        longitude: this.props.details[key].longitude,
        rms: this.props.details[key].rms,
        url: this.props.details[key].url
      }))
    });
  }
  render() {
    // this headers object will come from the API eventually and be stored in State
    if (this.props.details == null) {
      return <div>EMPTY</div>;
    }
    return (
      <div className="offices-table">
        <div className="content">
          {this.props.details ? (
            <Fragment>
              <div className="buttons">
                <CSVLink
                  data={this.state.csvData}
                  headers={this.state.csvHeaders}
                  separator={','}
                  className="button button-download"
                  filename={`offices-${Date.now()}.csv`}
                >
                  <Icon path={ICONS.DOWNLOAD} title="Download" />
                  Download CSV
                </CSVLink>
              </div>
              <figure className="table offices-table">
                <table>
                  <thead>
                    <tr>
                      {this.state.uiHelper.tableHeaders.map(key => (
                        <th key={key.key} className={key.key}>
                          {key.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(this.props.details).map(key => (
                      <tr key={key}>
                        <td>
                          {this.props.details[key].office_name}
                          <div className="edit">
                            <a
                              href={`/sitedashboard/${
                                this.props.details[key].content_url
                              }/`}
                              onClick={e => {
                                e.preventDefault();
                              }}
                            >
                              Dashboard
                            </a>{' '}
                            |{' '}
                            <a
                              href={`https://content.heartland.com/${
                                this.props.details[key].content_url
                              }`}
                              title={this.props.details[key].content_url}
                              target="_blank"
                              aria-label="Edit"
                            >
                              {/* <Icon path={ICONS.EDIT} title="Edit" /> */}
                              <span className="label">Edit</span>
                            </a>{' '}
                            |{' '}
                            <a
                              href={this.props.details[key].url}
                              target="_blank"
                            >
                              Visit Site
                            </a>
                          </div>
                        </td>
                        <td>{this.props.details[key].content_url}</td>
                        <td>{this.props.details[key].street_1}</td>
                        <td>{this.props.details[key].city}</td>
                        <td>{this.props.details[key].province}</td>
                        <td>{this.props.details[key].phone_no}</td>
                        <td>{this.props.details[key].rms}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </figure>
            </Fragment>
          ) : (
            <Preload />
          )}
        </div>
      </div>
    );
  }
}

export default OfficesTable;
