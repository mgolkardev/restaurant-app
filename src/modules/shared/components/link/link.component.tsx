import { LinkProperties } from "./link-properties.interface";
import { NavLink } from "react-router-dom";

export const Link = ({ className, children, href, style }: LinkProperties) => {
  return (
    <NavLink to={href} className={className} style={style}>
      {children}
    </NavLink>
  );
};
