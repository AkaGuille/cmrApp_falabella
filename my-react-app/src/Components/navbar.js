import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return(
    <nav className="nav">
      <Link to="/" className="site-title">site name</Link>
      <ul>
        <CustomLink to={"/"}>Home</CustomLink>
        <CustomLink to={"/Logger"}>Logger</CustomLink>
        <CustomLink to={"/TestC"}>TestC</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end:true})
  return(
    <li className={isActive ? "active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}