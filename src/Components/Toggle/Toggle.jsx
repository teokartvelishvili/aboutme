import React from 'react';

const ToggleSwitch = ({ checked, onChange, image, image2 }) => {
  const sliderStyle = {
    backgroundImage: checked ? `url(${image})` : `url(${image2})`, // Set the background image
    backgroundSize: 'cover',
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round" style={sliderStyle}></span>
    </label>
  );
};

export default ToggleSwitch;