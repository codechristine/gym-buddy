import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(addressInput) {
    this.setState({ address: addressInput });
  }

  handleSelect(addressInput) {
    geocodeByAddress(addressInput)
      .then(result => getLatLng(result[0]))
      .then(latLng => {
        latLng.JSON();
      });
    this.setState({ address: addressInput });
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="main__search-container">
            <input
              {...getInputProps({
                placeholder: 'Search near you!',
                className: 'main__search-field'
              })}
            />
            <div className="main__search-dropdown">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'main__search-item-active'
                  : 'main__search-item';
                return (
                  <div key = { index }
                    {...getSuggestionItemProps(suggestion, { className })}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
