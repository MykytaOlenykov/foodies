import { useNavigate } from "react-router";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import css from "./CategoryItem.module.css";
import { ArrowUpRight } from "lucide-react";

export default function CategoryItem({ data }) {
  const categoryName = data.name;
  const navigate = useNavigate();

  return (
    <div className={`${css.thumb} ${css[categoryName.toLowerCase()]}`}>
      <div className={css.wrapper}>
        <p className={css.label}>{data.name}</p>
        <ButtonIcon
          variant="transparent"
          size="medium"
          type="button"
          icon={<ArrowUpRight />}
          onClick={() => navigate(`/?category=${data.id}`)}
        />
      </div>
    </div>
  );
}
