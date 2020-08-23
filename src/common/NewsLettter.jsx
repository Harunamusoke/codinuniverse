import React from "react";

const NewsLetter = () => {
  return (
    <form className="signup-form form-inline justify-content-center pt-3">
      <div className="form-group">
        <label className="sr-only" htmlFor="semail">
          Your email
        </label>
        <input
          type="email"
          id="semail"
          name="semail1"
          className="form-control mr-md-1 semail"
          placeholder="Enter email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
