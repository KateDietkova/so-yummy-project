import { ThreeCircles } from "react-loader-spinner"

export const Loader = () => {
    return (
    <ThreeCircles
  height="80"
  width="80"
  color="#8AA936"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center', 
                marginTop: '120',
  }}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    )

}