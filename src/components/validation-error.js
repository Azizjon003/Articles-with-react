import { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);
  const errors = useCallback(() => {
    return Object.keys(error).map((key) => {
      const msg = error[key].join(", ");
      return `${key}: ${msg}`;
    });
  }, [error]);
  console.log(error !== null && errors());
  return (
    error !== null &&
    errors().map((err, index) => {
      return (
        <div
          class="alert alert-danger m-2 p-2 text-start "
          role="alert"
          key={index}
        >
          {err}
        </div>
      );
    })
  );
}

export default ValidationError;
