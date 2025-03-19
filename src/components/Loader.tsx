import classes from "./Loader.module.css"

import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <>
      <FaSpinner className={classes.loader} />
    </>
  )
}

export default Loader
