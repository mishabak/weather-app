import propTypes from "prop-types";

function Rain({ type = "", className = "", ...props }) {
  switch (type + 1) {
    case 2:
      return (
        <svg
          {...props}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          width="300px"
          height="300px"
          viewBox="-6 0 32 32"
          version="1.1"
        >
          <title>raindrop</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            sketch:type="MSPage"
          >
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-314.000000, -827.000000)"
              className={`fill-currentWeather brightness-75`}
              fill="none"
            >
              <path
                d="M324,857 C319.582,857 316,853.502 316,849.188 C316,844.873 321.533,833.915 324,831 C326.409,833.859 332,844.873 332,849.188 C332,853.502 328.418,857 324,857 L324,857 Z M324,827 C320.917,830.731 314,843.478 314,849 C314,854.523 318.478,859 324,859 C329.522,859 334,854.523 334,849 C334,843.478 327.012,830.66 324,827 L324,827 Z"
                id="raindrop"
                sketch:type="MSShapeGroup"
              ></path>
            </g>
          </g>
        </svg>
      );
    case 3:
      return (
        <svg
          {...props}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g id="Environment / Water_Drop">
            <path
              id="Vector"
              d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
              className={`fill-currentWeather brightness-75`}
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

      default:
        //   use for case 1 and default
      return (
        <svg
          {...props}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="800px"
          height="800px"
          viewBox="0 0 76 76"
          version="1.1"
          baseProfile="full"
          enableBackground="new 0 0 76.00 76.00"
          xmlSpace="preserve"
        >
          <path
            className={`fill-currentWeather brightness-75`}
            fill="none"
            fillOpacity="1"
            strokeLinejoin="round"
            d="M 38,19C 40,28 50,36 50,44C 50,52 43,57 38,57C 33,57 26,52 26,44C 26,36 36,28 38,19 Z "
          />
        </svg>
      );
  }
}
Rain.propTypes = {
  type: propTypes.number,
  className: propTypes.string,
};
export default Rain;
