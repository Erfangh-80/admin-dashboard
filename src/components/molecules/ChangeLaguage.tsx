import usFlag from "../../assets/images/us.png";
import faFlag from "../../assets/images/fa.png";
import { useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const ChangeLaguage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsShow(false));
  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setIsShow(true)}>
        <img src={usFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${isShow && "show"}`}
      >
        <a className="dropdown-item fw-border" style={{ textAlign: "right" }}>
          <img src={faFlag} alt="persian" className="ms-2" width={20} />
          <span className="align-midle">فارسی</span>
        </a>
        <a className="dropdown-item fw-border" style={{ textAlign: "right" }}>
          <img src={usFlag} alt="persian" className="ms-2" width={20} />
          <span className="align-midle">English</span>
        </a>
      </div>
    </div>
  );
};
