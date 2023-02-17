import s from "./style.module.css";
import logoSource from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Logo } from "components/logo/Logo";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Menorise"
          subtitle="Manage your Notes"
          image={logoSource}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/create")}>
          New Note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
