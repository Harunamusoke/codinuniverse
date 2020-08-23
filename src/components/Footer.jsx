import React from "react";
import Icon from "./../common/icon";

const Footer = () => {
  return (
    <footer className="footer text-center py-2 theme-bg-dark">
      <small className="copyright">
        Designed with
        <Icon icon="bookmark" />
        by <strong>Haruna Musoke</strong>
      </small>
    </footer>
  );
};

export default Footer;
