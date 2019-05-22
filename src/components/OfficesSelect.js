import React, { Component } from 'react';
import { tokenizeURLParameters } from '../helpers';

// import PropTypes from 'prop-types';

class OfficesSelect extends Component {
  // static propTypes = {};
  componentDidMount() {}
  handleChangeMulti = e => {
    let vals = [...e.target.options]
      .filter(({ selected }) => selected)
      .filter(({ value }) => value !== '')
      .map(({ value }) => value);
    this.props.searchParams[e.target.name] = vals;
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log('searchParams', this.props.searchParams);
    // let tokens = tokenizeURLParameters(this.props.location);
    // console.log('tokens', tokens);
    //
    // console.log(
    //   'urlParams',
    //   Object.keys(tokens).map((key) => {
    //     tokens[key];
    //   })
    // );
    this.props.selectOffices(this.props.searchParams, 'push');
  };
  formUpdate = e => {};

  render() {
    const states = [
      'AL',
      'AR',
      'AZ',
      'CA',
      'CO',
      'CT',
      'FL',
      'GA',
      'IA',
      'IL',
      'IN',
      'KS',
      'KY',
      'LA',
      'MA',
      'MD',
      'ME',
      'MI',
      'MN',
      'MO',
      'MS',
      'NE',
      'NH',
      'NM',
      'NV',
      'NY',
      'OH',
      'OK',
      'PA',
      'SC',
      'TN',
      'TX',
      'VA',
      'WI'
    ];

    return (
      <div className="office-select">
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <select
              multiple
              size="0"
              name="state"
              style={{ width: '200px', height: '100px' }}
              initialvalue={this.props.searchParams.state}
              onChange={this.handleChangeMulti}
            >
              <option value="" autoFocus>
                Select State(s)
              </option>
              {states.map(key => (
                <option value={key} key={key}>
                  {key}
                </option>
              ))}
            </select>
            <button type="submit">Show</button>
          </form>
        </div>
      </div>
    );
  }
}

export default OfficesSelect;
