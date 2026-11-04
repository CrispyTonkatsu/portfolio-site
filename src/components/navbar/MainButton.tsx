import { Link } from "react-router-dom";

export default function MainButton() {
  const MainButtonData = {
    label: "edonosomansilla.dev",
    link: "/",
  };

  return (
    <Link className="btn btn-primary btn-ghost" to={MainButtonData.link}>
      <div className="text-lg">{MainButtonData.label}</div>
    </Link>
  );
}
