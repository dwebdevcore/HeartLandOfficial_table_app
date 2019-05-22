import React, { Component, Fragment } from 'react';
import Header from './Header';
import Title from './PageTitle';
import {
  tokenizeURLParameters,
  serializeURLParameters,
  serializeURLParametersPlain
} from '../helpers';
// import Preload from './Preload';
import OfficesTable from './OfficesTable';
import OfficesSelect from './OfficesSelect';
import ToggleTheme from './ToggleTheme';

class Offices extends Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      const qs = tokenizeURLParameters(this.props.location.search);
      // const qs =
      if (action === 'POP') {
        this.setState({ searchParams: qs });

        this.selectOffices(qs);
      }
    });
  }
  state = {
    offices: null,
    isLoaded: false,
    searchParams: {}
  };
  componentDidMount = () => {
    if (this.props.location.search) {
      const qs = tokenizeURLParameters(this.props.location.search);

      this.selectOffices(qs);
    }
  };
  selectOffices = (searchParams, action) => {
    this.setState({
      offices: null,
      searchParams: searchParams
    });
    if (action && action === 'push') {
      // TODO: compare old to new ... searchParams vs history
      this.props.history.push(serializeURLParametersPlain(searchParams));
    }
    const apiHost = 'https://api.heartland.com';
    const apiService = 'offices';
    const apiVersion = 'v1';
    const url = `${apiHost}/${apiService}/${apiVersion}/${serializeURLParameters(
      searchParams
    )}&token=yo`;
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          const offices = { ...data.result };
          this.setState({
            isLoaded: true,
            offices: offices
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error,
            offices: null
          });
        }
      );
  };

  render() {
    return (
      <Fragment>
        <Title metaName="Office Info" />
        <Header />
        <main className="offices">
          <OfficesSelect
            selectOffices={this.selectOffices}
            searchParams={this.state.searchParams}
            location={this.props.location.search}
          />
          {/* <OfficesTable details={this.state.offices} /> */}
          {this.state.isLoaded && this.state.offices ? (
            <OfficesTable details={this.state.offices} />
          ) : null}
          <ToggleTheme />
        </main>
      </Fragment>
    );
  }
}

export default Offices;
